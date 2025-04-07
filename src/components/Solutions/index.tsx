'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutionItems = [
    { id: 'paper', title: 'No more paper' },
    { id: 'lasa', title: 'No more LASA' },
    { id: 'chaos', title: 'No more chaos' },
    { id: 'shelf', title: 'No more packages on the shelf' },
    { id: 'scrambling', title: 'No more scrambling' },
    { id: 'claims', title: 'No more last minute claims' },
  ];

  const reviews = [
    {
      id: 'review1',
      title: 'Titan PMR is the way forward in',
      titleLink: 'https://www.trustpilot.com/reviews/66e03e1c64a7e802a285ca9d',
      date: '10 September 2024',
      content: 'Titan PMR is the way forward in pharmacy. As a clinically sound pharmacist are required their skills to be utilised in patients focus services such as IP, pharmacy First in order to take time off from checking and ticking boxes you need a Titan PMR system.',
      author: {
        initials: 'MM',
        name: 'Muhammad Muther',
        reviewCount: 4,
      },
    },
    {
      id: 'review2',
      title: 'Exceptional',
      date: '2 September 2024',
      content: 'The team has loved what TITAN has to offer so far and we look forward to using the PMR to its full potential. Would definitely recommend the product without a doubt.',
      author: {
        initials: 'EB',
        name: 'Earls Barton Pharmacy',
        reviewCount: 4,
      },
    },
  ];

  return (
    <section className={styles.solutionsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transforming Challenges into
          </motion.div>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2><span>Solutions</span></h2>
          </motion.div>
        </div>

        <motion.div
          className={styles.solutionGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {solutionItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.solutionItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.trustpilot}>
          <div className={styles.trustpilotHeader}>
            <motion.div
              className={styles.trustpilotRating}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4>Rated 4.9/5.0</h4>
            </motion.div>
            <motion.h2
              className={styles.customersTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Customers love us...
            </motion.h2>
            <motion.h2
              className={styles.loveTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              and we love them
            </motion.h2>
          </div>

          <div className={styles.reviews}>
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className={styles.review}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.reviewTitle}>
                  {review.titleLink ? (
                    <Link href={review.titleLink}>{review.title}</Link>
                  ) : (
                    review.title
                  )}
                </div>
                <div className={styles.reviewDate}>{review.date}</div>
                <div className={styles.reviewContent}>{review.content}</div>
                <div className={styles.reviewAuthor}>
                  <div className={styles.authorAvatar}>{review.author.initials}</div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{review.author.name}</div>
                    <div className={styles.authorReviews}>{review.author.reviewCount} reviews</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.viewAllReviews}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="https://uk.trustpilot.com/review/titanpmr.com">
              See all reviews <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
