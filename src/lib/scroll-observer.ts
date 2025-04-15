'use client';

import { useEffect } from 'react';

export const useScrollObserver = () => {
  useEffect(() => {
    // Initialize intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Optional: remove the class when not in view
            // entry.target.classList.remove('active');
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.15, // trigger when 15% visible
        rootMargin: '0px 0px -50px 0px', // offset from bottom
      }
    );

    // Select all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      // Clean up
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
