"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../ui/custom-button";
import { fadeInVariants, slideUpVariants } from "@/lib/animations";
import Image from "next/image";
import { ContactFormDialog } from "../contact-form-dialog";

export const HeroSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openContactForm = () => {
    setIsDialogOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 left-4 md:left-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/black-logo.png"
            alt="Company Logo"
            width={150}
            height={100}
          />
        </motion.div>
      </div>

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
            <CustomButton size="lg" onClick={openContactForm}>
              Get Free Consultation
            </CustomButton>
            <CustomButton variant="outline" size="lg" onClick={openContactForm}>
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

      <ContactFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};
