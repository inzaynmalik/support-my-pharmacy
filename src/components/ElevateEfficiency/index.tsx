"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

const ElevateEfficiency = () => {
  const features = [
    {
      id: "paperless",
      title: "Embrace the Paperless Era",
      description:
        "Digitise your workflow for seamless operations. Visualise your prescriptions with our beautiful workflow boards",
      link: "#",
    },
    {
      id: "connect",
      title: "Connect all your stores",
      description:
        "Efficiently share workloads across pharmacies, clinical checks to dispensing",
      link: "/Support My Pharmacyverse",
    },
    {
      id: "scan",
      title: "One-Scan Confidence",
      description: "One scan for precise checks and efficient management.",
      link: "#",
    },
  ];

  return (
    <section className={styles.elevateSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Elevate Your Pharmacy's Efficiency</h2>
          </motion.div>
          <motion.div
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Achieve unparalleled efficiency with digital solutions.
          </motion.div>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
              {feature.id === "connect" && (
                <Link href={feature.link} className={styles.featureLink}>
                  Find out more <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElevateEfficiency;
