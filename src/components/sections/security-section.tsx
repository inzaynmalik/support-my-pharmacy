'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  slideInRightVariants
} from '@/lib/animations';

export const SecuritySection = () => {
  return (
    <section className="py-20 bg-pharmacy-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
            className="order-2 md:order-1"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-6"
            >
              Unwavering Commitment to <span className="gradient-text">Security</span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pharmacy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-inter">HIPAA Compliance</h3>
                  <p className="text-gray-300 font-roboto">End-to-end encryption for all apps and tools, ensuring patient data privacy.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pharmacy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-inter">Data Control</h3>
                  <p className="text-gray-300 font-roboto">You retain complete control over your data with zero third-party sharing.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pharmacy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-inter">Secure Infrastructure</h3>
                  <p className="text-gray-300 font-roboto">SSL certificate icon and robust security protocols for peace of mind.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-center mt-8 text-lg font-roboto font-bold"
            >
              Your data. Your control. 100% secure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
            className="order-1 md:order-2 flex justify-center"
          >
            <img
              src="/images/security-image.png"
              alt="Pharmacy Security"
              className="max-w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
