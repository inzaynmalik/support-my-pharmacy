'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, variant = "primary", size = "default", className, onClick, href, ...props }, ref) => {
    const baseClass =
      variant === "primary"
        ? "bg-gradient-to-r from-pharmacy-blue to-pharmacy-lightblue text-white hover:brightness-110 transition-all duration-300"
        : variant === "outline"
        ? "border-2 border-pharmacy-blue text-white hover:bg-pharmacy-blue/10 transition-all duration-300"
        : variant === "ghost"
        ? "text-white hover:bg-white/10 transition-all duration-300"
        : "text-pharmacy-blue hover:text-pharmacy-lightblue transition-all duration-300";

    const MotionButton = motion(Button);

    return href ? (
      <a href={href}>
        <MotionButton
          ref={ref}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            buttonVariants({ size }),
            baseClass,
            className
          )}
          onClick={onClick}
          {...props}
        >
          {children}
        </MotionButton>
      </a>
    ) : (
      <MotionButton
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          buttonVariants({ size }),
          baseClass,
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
