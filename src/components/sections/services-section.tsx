"use client";

import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../ui/custom-button";
import { Card } from "../ui/card";
import { containerVariants, itemVariants } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  index,
}) => {
  return (
    <motion.div variants={itemVariants} custom={index} className="reveal">
      <Card className="service-card h-full flex flex-col">
        <div className="relative h-52 w-full mb-4 overflow-hidden rounded-md">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-dark to-transparent opacity-40"></div>
        </div>
        <h3 className="text-xl font-bold mb-2 font-inter">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow font-roboto">
          {description}
        </p>
      </Card>
    </motion.div>
  );
};

const scrollToForm = () => {
  const formSection = document.getElementById("contact-form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const ServicesSection = () => {
  const services = [
    {
      title: "Business Consulting",
      description:
        "Strategic planning and operational optimization for sustainable growth.",
      imageSrc: "/images/services/digital-marketing.png",
    },
    {
      title: "Digital Marketing & Social Media Management",
      description:
        "Tailored campaigns to boost online visibility and patient engagement.",
      imageSrc: "/images/services/motion-graphics.png",
    },
    {
      title: "Operations Management",
      description:
        "Streamline workflows, automate tasks, and enhance efficiency.",
      imageSrc: "/images/services/ai-automation.png",
    },
    {
      title: "Pharmacy Inventory Management",
      description:
        "Smart vendor comparisons, real-time tracking, and cost reduction.",
      imageSrc: "/images/services/patient-app.png",
    },
    {
      title: "Virtual Receptionist & Customer Support",
      description:
        "24/7 call handling, prescription renewals, and personalized patient communication.",
      imageSrc: "/images/security-image.png",
    },
    {
      title: "Website & Mobile App Development",
      description:
        "Modern, responsive platforms optimized for local SEO and user experience.",
      imageSrc: "/images/services/virtual-receptionist.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pharmacy-dark to-pharmacy-background relative overflow-hidden">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <CustomButton size="lg" onClick={scrollToForm}>
            See How It Works
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};
