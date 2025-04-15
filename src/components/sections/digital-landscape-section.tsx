"use client";

import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../ui/custom-button";
import {
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";

const scrollToForm = () => {
  const formSection = document.getElementById("contact-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const DigitalLandscapeSection = () => {
  return (
    <section className="py-20 bg-pharmacy-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-6"
          >
            Dominate the{" "}
            <span className="gradient-text">Digital Landscape</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
            className="reveal bg-pharmacy-darkblue/30 rounded-lg p-8 backdrop-blur-sm border border-pharmacy-blue/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-white font-inter">
              The Problem
            </h3>
            <p className="text-gray-300 mb-6 font-roboto">
              Struggling to compete with CVS/Walgreens online? It's time to
              level the playing field with a digital strategy tailored for
              independent pharmacies.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
            className="reveal bg-pharmacy-darkblue/30 rounded-lg p-8 backdrop-blur-sm border border-pharmacy-blue/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-white font-inter">
              Our Solution
            </h3>
            <ul className="space-y-3 text-gray-300 mb-6 font-roboto">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-pharmacy-blue mr-2"></div>
                Hyper-local social media campaigns
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-pharmacy-blue mr-2"></div>
                SEO to rank #1 for pharmacy near me searches
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-pharmacy-blue mr-2"></div>
                Patient loyalty SMS/email programs
              </li>
            </ul>
            <CustomButton onClick={scrollToForm}>Learn More</CustomButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-roboto text-lg text-gray-300 italic"
        >
          Get ready to go viral and watch your patient base grow!
        </motion.div>
      </div>
    </section>
  );
};
