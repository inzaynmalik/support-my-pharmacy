"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-pharmacy-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4 font-poppins">
              Pharmacy Digital Solutions
            </h3>
            <p className="text-gray-300 font-poppins">
              Transform your independent pharmacy with AI, apps, and smarter
              workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4 font-poppins">Contact</h3>
            <address className="not-italic text-gray-300 font-poppins">
              <p>Email: info@supportmypharmacy.com</p>
              <p>Phone: (727) 999-8362</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/support-my-parmacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pharmacy-blue transition-colors duration-300"
              >
                <img
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 invert brightness-0"
                />
              </a>
              <a
                href="https://www.instagram.com/supportmypharmacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-pharmacy-blue/20"
        >
          <p className="text-gray-400 font-poppins">
            &copy; {currentYear} Pharmacy Digital Solutions. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
