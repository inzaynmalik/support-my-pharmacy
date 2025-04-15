"use client";

import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../ui/custom-button";
import { fadeInVariants, slideUpVariants } from "@/lib/animations";

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="w-full md:w-1/2 pt-16 md:pt-0"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-4xl md:text-5xl lg:text-5xl font-bold font-poppins mb-4"
          >
            Support My Pharmacy,
            <span className="gradient-text"> Digital Solutions</span> for
            Independent Pharmacies,
          </motion.h1>

          <motion.p
            variants={slideUpVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 font-poppins"
          >
            Empowering Your Pharmacy with Innovative Digital Strategies and
            Operational Excellence.
          </motion.p>

          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <CustomButton size="lg" onClick={scrollToForm}>
              Get Free Consultation
            </CustomButton>
            <CustomButton variant="outline" size="lg" onClick={scrollToForm}>
              Learn More
            </CustomButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 mt-16 md:mt-0 hidden md:block"
        >
          {/* This div is left intentionally empty as the pharmacist image is in the hero background */}
        </motion.div>
      </div>
    </section>
  );
};
