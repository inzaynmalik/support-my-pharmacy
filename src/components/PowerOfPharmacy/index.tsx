'use client';

import { useState } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PowerOfPharmacy = () => {
  const [activeRole, setActiveRole] = useState('technician');

  const handleRoleClick = (role: string) => {
    setActiveRole(role);
  };

  return (
    <section className={styles.powerSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.dateTime}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            7th June 2024 (11:02am)
          </motion.div>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Unleash the power of pharmacy</h2>
          </motion.div>
        </div>

        <div className={styles.content}>
          <motion.div
            className={styles.circleGraphic}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className={styles.roles}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className={styles.role}
              onClick={() => handleRoleClick('technician')}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: activeRole === 'technician'
                  ? 'rgba(77, 159, 180, 0.1)'
                  : 'rgba(255, 255, 255, 0.03)',
                borderColor: activeRole === 'technician'
                  ? 'rgba(77, 159, 180, 0.3)'
                  : 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div className={styles.roleTitle}>Technician</div>
            </motion.div>

            <motion.div
              className={styles.role}
              onClick={() => handleRoleClick('pharmacist')}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: activeRole === 'pharmacist'
                  ? 'rgba(77, 159, 180, 0.1)'
                  : 'rgba(255, 255, 255, 0.03)',
                borderColor: activeRole === 'pharmacist'
                  ? 'rgba(77, 159, 180, 0.3)'
                  : 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div className={styles.roleTitle}>Pharmacist</div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ marginTop: '2rem', textAlign: 'center' }}
        >
          <Image
            src="https://ext.same-assets.com/4209151583/1244680971.png"
            alt="Powered by TITAN"
            width={160}
            height={40}
            crossOrigin="anonymous"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PowerOfPharmacy;
