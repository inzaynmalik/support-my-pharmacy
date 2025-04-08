"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./index.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logoSrc}
              alt="Support My Pharmacy Logo"
              width={3000}
              height={300}
              priority
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "100px",
                maxWidth: "200px",
              }}
            />
          </Link>

          <div className={styles.nav}>
            <div className={styles.cta}>
              <motion.a
                // href="/register"
                className={styles.registerButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button>Contact us</button>
              </motion.a>
            </div>

            {/* <button className={styles.mobileMenuButton} onClick={toggleMenu}>
              <Menu size={24} />
            </button> */}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeButton} onClick={toggleMenu}>
              <X size={24} />
            </button>

            <ul className={styles.mobileNavItems}>
              <motion.li
                className={styles.mobileNavItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <button>Contact us</button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
