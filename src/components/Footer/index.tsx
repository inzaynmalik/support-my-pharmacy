'use client';

import Link from 'next/link';
import { Sun } from 'lucide-react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  const supportLinks = [
    { id: 'support', label: 'Support', url: '#support' },
    { id: 'hardware', label: 'Hardware', url: '#hardware' },
    { id: 'connectivity', label: 'Connectivity', url: '#connectivity' },
    { id: 'contact', label: 'Contact Us', url: '#contact' },
    { id: 'status', label: 'Status', url: '#status' },
  ];

  const developmentLinks = [
    { id: 'integrations', label: 'Integrations', url: '#integrations' },
  ];

  const resourceLinks = [
    { id: 'branding', label: 'Branding', url: '#branding' },
    { id: 'terms', label: 'Terms & Conditions', url: '#terms' },
    { id: 'privacy', label: 'Privacy Policy', url: '#privacy' },
  ];

  const aboutLinks = [
    { id: 'team', label: 'Our Team', url: '#team' },
    { id: 'join', label: 'Join Us', url: '#join' },
  ];

  const certifications = [
    { id: 'iso', label: 'ISO27001 Certified', url: '#security-approach' },
    { id: 'privacy', label: 'Advanced Data Privacy', url: '#privacy-policy' },
    { id: 'uptime', label: '99.9% Uptime', url: '#status' },
    { id: 'reliable', label: 'Reliable and scalable', url: '#security-approach' },
  ];

  const footerColumns = [
    { title: 'Support', links: supportLinks },
    { title: 'Development', links: developmentLinks },
    { title: 'Resources', links: resourceLinks },
    { title: 'About', links: aboutLinks },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.footerColumn}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={link.url}>{link.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.certifications}>
          {certifications.map((cert) => (
            <Link key={cert.id} href={cert.url} className={styles.certification}>
              {cert.label}
            </Link>
          ))}
        </div>

        <div className={styles.copyright}>
          <div className={styles.copyrightText}>
            © 2025 TitanPMR Ltd. All rights reserved.
          </div>
          <div className={styles.themeToggle}>
            <Sun size={16} />
            Light Mode
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
