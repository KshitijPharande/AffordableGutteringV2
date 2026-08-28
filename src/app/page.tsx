import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Realistic Rain Roofline Hero Section + Clean 10-Yr | 15-Yr | 30-Yr Warranty Bar */}
      <HeroSection />

      {/* 2. 5-Column Services Grid */}
      <ServicesGrid />

      {/* 3. Interactive Before & After Transformation Showcase */}
      <BeforeAfterSection />

      {/* 4. What Our Customers Say - Testimonials */}
      <TestimonialsSection />
    </>
  );
}
