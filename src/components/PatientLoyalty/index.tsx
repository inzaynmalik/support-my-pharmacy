"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

const PatientLoyalty = () => {
  const features = [
    {
      id: "power",
      title: "Power to your Patients",
      description:
        "Best in class Patient App experience for your patients to order directly with GP and track the progress. No more calls to chase.",
      link: "/repeat",
    },
    {
      id: "repeats",
      title: "Let your Repeats Flow",
      description:
        "Manage repeat prescriptions with ease where prescriptions are automatically ordered and reconciled on receipt.",
      link: "/repeat",
    },
    {
      id: "mobile",
      title: "Mobile PMR",
      description:
        "Have the PMR in your pocket at all times. Know where everything is so the patient isnt waiting.",
      link: "/mobile",
    },
  ];

  return (
    <section className={styles.loyaltySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Win Patient Loyalty</h2>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientLoyalty;
