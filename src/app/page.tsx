import React from "react";
import { ClientWrapper } from "@/components/client-wrapper";
import { HeroSection } from "@/components/sections/hero-section";
import { DigitalLandscapeSection } from "@/components/sections/digital-landscape-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SecuritySection } from "@/components/sections/security-section";
import { AppFeaturesSection } from "@/components/sections/app-features-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { PodcastSection } from "@/components/sections/podcast-section";
import { BlogSection } from "@/components/sections/blog-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-pharmacy-dark text-white overflow-hidden">
      <ClientWrapper>
        <HeroSection />
        <DigitalLandscapeSection />
        <ServicesSection />
        <PodcastSection />
        {/* <BlogSection /> */}
        <SecuritySection />
        <AppFeaturesSection />
        <ContactSection />
        <Footer />
      </ClientWrapper>
    </main>
  );
}
