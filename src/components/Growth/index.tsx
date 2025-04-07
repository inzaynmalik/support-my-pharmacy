'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const Growth = () => {
  const cards = [
    {
      id: 'future',
      title: 'Built for the Future',
      description: 'Future-proof with scalable, secure and cloud based technology',
    },
    {
      id: 'performance',
      title: 'Unmatched Performance',
      description: 'Rely on TITAN for fast, reliable operations, supported by the seamless integration of inbuilt apps for a performance that never sleeps.',
    },
  ];

  const apps = [
    {
      id: 'mobile',
      title: 'PMR Meets Mobile',
      description: 'Break away from the dispensing benches and put the PMR in your pocket',
      link: '/mobile',
    },
    {
      id: 'order',
      title: 'Automated Order Management',
      description: 'Ditch the paper records, know exactly what the patients ordered at any time',
      link: '/repeat',
    },
    {
      id: 'batch',
      title: 'Batch Dispense',
      description: 'Shockingly quick dispensing in large batches. Voice guided with quick checking',
      link: '/batch',
    },
    {
      id: 'document',
      title: 'Document Management',
      description: 'Slick paperless document management with customised email inbox',
      link: '/mail',
    },
    {
      id: 'services',
      title: 'Services Platform',
      description: 'The newly discovered nebula of pharmacy innovation with services for both NHS and Private',
      link: '/titanverse',
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'AI meets pharmacy with TITAN AI. Switch on and Walk Away',
      link: '/ai',
    },
  ];

  return (
    <section className={styles.growthSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Platform for
          </motion.div>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Growth</h2>
          </motion.div>
          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Scale and customise with a robust marketplace.
          </motion.div>
        </div>

        <div className={styles.cards}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.appsSection}>
          <div className={styles.appsHeader}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Official Apps
            </motion.h2>
            <motion.div
              className={styles.appsSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Built, designed and approved by us
            </motion.div>
          </div>

          <div className={styles.appCards}>
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                className={styles.appCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) + 0.4 }}
                whileHover={{ y: -5 }}
              >
                <h3 className={styles.appTitle}>{app.title}</h3>
                <p className={styles.appDesc}>{app.description}</p>
                <Link href={app.link} className={styles.appLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.marketplace}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className={styles.marketplaceTitle}>Expand with Titan Marketplace</h3>
          <Link href="/marketplace" className={styles.marketplaceLink}>
            Learn more about Marketplace <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Growth;
