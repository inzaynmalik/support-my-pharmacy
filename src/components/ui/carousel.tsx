import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  children: React.ReactNode;
  autoScrollInterval?: number;
  cardsToShow?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoScrollInterval = 3000,
  cardsToShow = 3,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const totalItems = childrenArray.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (totalItems - cardsToShow + 1)
      );
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoScrollInterval, totalItems, cardsToShow]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex transition-transform duration-500 ease-in-out"
        animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
      >
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: `${100 / cardsToShow}%`, padding: "0 10px" }}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
