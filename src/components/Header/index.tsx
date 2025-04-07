'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './index.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { id: 'products', label: 'Products', url: '#products' },
    { id: 'sectors', label: 'Sectors', url: '#sectors' },
    { id: 'pricing', label: 'Pricing', url: '#pricing' },
    { id: 'marketplace', label: 'Marketplace', url: '#marketplace' },
    { id: 'blogs', label: 'Blogs', url: '#blogs' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            <span>TITAN</span>
          </Link>

          <div className={styles.nav}>
            <ul className={styles.navItems}>
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  className={styles.navItem}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.1 }}
                >
                  <Link href={item.url}>{item.label}</Link>
                </motion.li>
              ))}
            </ul>

            <div className={styles.cta}>
              <motion.a
                href="/register"
                className={styles.registerButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register now
              </motion.a>
            </div>

            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeButton} onClick={toggleMenu}>
              <X size={24} />
            </button>

            <ul className={styles.mobileNavItems}>
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  className={styles.mobileNavItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.1 }}
                >
                  <Link href={item.url} onClick={toggleMenu}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className={styles.mobileNavItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <Link href="/register" onClick={toggleMenu}>
                  Register now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
