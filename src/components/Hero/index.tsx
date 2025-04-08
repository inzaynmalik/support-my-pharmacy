"use client";

import { FileText } from "lucide-react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heading}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>
                Support <span className={styles.blue}>My Pharmacy</span>
              </h1>
            </motion.h1>
          </div>
          <motion.div
            className={styles.subHeading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Support My Pharmacy has helped numerous pharmacy organizations
              build and grow their businesses by providing innovative solutions
              that drive efficiency and open up new opportunities.
            </p>
          </motion.div>
          {/* <motion.div
            className={styles.illustration}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PharmacyScene />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
