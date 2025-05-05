"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { containerVariants, itemVariants } from "@/lib/animations";

const videos = [
  {
    id: "kEW1rm4etBY",
    title: "Support My Pharmacy - Digital Solutions for Independent Pharmacies",
    description:
      "Learn how we empower independent pharmacies with innovative digital strategies.",
    thumbnail: `https://img.youtube.com/vi/kEW1rm4etBY/maxresdefault.jpg`,
  },
  {
    id: "6ZqadoDCzNQ",
    title: "Support My Pharmacy - Pharmacy Technology Solutions",
    description:
      "Discover our comprehensive technology solutions for modern pharmacies.",
    thumbnail: `https://img.youtube.com/vi/6ZqadoDCzNQ/maxresdefault.jpg`,
  },
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-pharmacy-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins mb-6"
          >
            Our <span className="gradient-text">Podcasts</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto font-poppins"
          >
            Watch our latest videos and learn more about how we're transforming
            independent pharmacies with digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer h-full"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${video.id}`,
                  "_blank"
                )
              }
            >
              <Card className="bg-pharmacy-darkblue/30 border-pharmacy-blue/20 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-pharmacy-blue/80 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-poppins mb-2 text-white line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 font-poppins line-clamp-2">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
