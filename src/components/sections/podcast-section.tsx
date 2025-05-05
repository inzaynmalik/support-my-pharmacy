"use client";

import React from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../ui/custom-button";
import { Card } from "../ui/card";
import { Carousel } from "../ui/carousel";
import { containerVariants, itemVariants } from "@/lib/animations";

interface PodcastCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  description,
  imageSrc,
  index,
}) => {
  return (
    <motion.div variants={itemVariants} custom={index} className="reveal">
      <Card
        className="service-card h-full flex flex-col"
        style={{ height: "400px" }}
      >
        <div className="relative h-52 w-full mb-4 overflow-hidden rounded-md">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-dark to-transparent opacity-40"></div>
        </div>
        <h3 className="text-xl font-bold mb-2 font-inter truncate">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow font-roboto line-clamp-2">
          {description}
        </p>
      </Card>
    </motion.div>
  );
};

export const PodcastSection = () => {
  const podcasts = [
    {
      title: "Pharmacy Innovation",
      description:
        "Exploring the latest trends in pharmacy technology and digital solutions.",
      imageSrc: "/images/podcast1.jpg",
    },
    {
      title: "Healthcare Digitalization",
      description:
        "How digital transformation is reshaping the healthcare industry.",
      imageSrc: "/images/podcast2.jpg",
    },
    {
      title: "Patient Care 2.0",
      description: "Modern approaches to patient care and engagement.",
      imageSrc: "/images/podcast3.jpg",
    },
    {
      title: "Pharmacy Business Growth",
      description:
        "Strategies for growing your pharmacy business in the digital age.",
      imageSrc: "/images/podcast4.jpg",
    },
    {
      title: "Tech Talk",
      description: "Deep dive into the technology powering modern pharmacies.",
      imageSrc: "/images/podcast5.jpg",
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
            Our <span className="gradient-text">Podcasts</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-12"
        >
          <Carousel cardsToShow={3}>
            {podcasts.map((podcast, index) => (
              <PodcastCard
                key={index}
                index={index}
                title={podcast.title}
                description={podcast.description}
                imageSrc={podcast.imageSrc}
              />
            ))}
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <CustomButton size="lg" href="/podcast">
            Show All Podcasts
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};
