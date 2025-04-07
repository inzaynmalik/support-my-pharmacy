"use client";

import { FileText } from "lucide-react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import PharmacyScene from "../PharmacyScene";

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
              Pharmacy <span className={styles.blue}>Reimagined</span>
            </motion.h1>
          </div>
          <motion.div
            className={styles.subHeading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Titan is the UK's leading PMR system that has transformed the way
              pharmacies and businesses work, creating new efficiencies and
              delivering a platform that opens up new opportunities for the
              future of the industry.
            </p>
          </motion.div>
          <motion.div
            className={styles.illustration}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PharmacyScene />
          </motion.div>
        </div>

        <Link href="/blog" className={styles.blogsWidget}>
          <FileText size={16} />
          <span className={styles.blogsText}>Read our latest blogs</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
