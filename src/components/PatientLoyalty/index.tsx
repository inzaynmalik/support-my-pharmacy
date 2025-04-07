'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const PatientLoyalty = () => {
  const features = [
    {
      id: 'power',
      title: 'Power to your Patients',
      description: 'Best in class Patient App experience for your patients to order directly with GP and track the progress. No more calls to chase.',
      link: '/repeat',
    },
    {
      id: 'repeats',
      title: 'Let your Repeats Flow',
      description: 'Manage repeat prescriptions with ease where prescriptions are automatically ordered and reconciled on receipt.',
      link: '/repeat',
    },
    {
      id: 'mobile',
      title: 'Mobile PMR',
      description: 'Have the PMR in your pocket at all times. Know where everything is so the patient isnt waiting.',
      link: '/mobile',
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

          <motion.div
            className={styles.partnerLogo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.partnerText}>In partnership with</span>
            <Image
              src="https://ext.same-assets.com/4209151583/251046492.png"
              alt="Partner Logo"
              width={120}
              height={30}
              crossOrigin="anonymous"
            />
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
              <Link href={feature.link} className={styles.featureLink}>
                Find out more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.appImage}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.9, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="https://ext.same-assets.com/4209151583/3790499848.png"
            alt="Mobile App"
            width={350}
            height={700}
            crossOrigin="anonymous"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PatientLoyalty;
