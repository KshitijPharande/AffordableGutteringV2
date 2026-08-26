import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Dramatic Storm Hero Section + 4-Column Trust Bar (IMG_1239.PNG) */}
      <HeroSection />

      {/* 2. 5-Column Services Grid (IMG_1239.PNG) */}
      <ServicesGrid />

      {/* 3. What Our Customers Say - Testimonials (IMG_1239.PNG) */}
      <TestimonialsSection />
    </>
  );
}
