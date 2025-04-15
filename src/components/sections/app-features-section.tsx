"use client";

import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../ui/custom-button";
import { containerVariants, itemVariants } from "@/lib/animations";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="flex flex-col items-center text-center"
    >
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 mb-4 invert brightness-0"
      />
      <h3 className="text-xl font-bold mb-2 font-inter">{title}</h3>
      <p className="text-gray-300 font-roboto">{description}</p>
    </motion.div>
  );
};

export const AppFeaturesSection = () => {
  const features = [
    {
      icon: "/images/icons/white-label.svg",
      title: "White-label design",
      description:
        "Customized with your logo and colors for seamless brand integration.",
    },
    {
      icon: "/images/icons/medication-reminders.svg",
      title: "Medication reminders",
      description: "Refill alerts ensure patients never miss a dose.",
    },
    {
      icon: "/images/icons/loyalty-program.svg",
      title: "Loyalty program",
      description:
        "Reward patients for their continued business with exclusive perks.",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(6, 7, 22, 0.9), rgba(9, 14, 57, 0.9)), url('/images/app-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6"
          >
            Your Pharmacy. Your Brand.{" "}
            <span className="gradient-text">Your App.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg font-poppins text-gray-200 max-w-2xl mx-auto mb-8">
            See how our clients increased refill compliance by 50% with their
            app. Request a Demo today!
          </p>
          {/* <CustomButton size="lg">Learn More</CustomButton> */}
        </motion.div>
      </div>
    </section>
  );
};
