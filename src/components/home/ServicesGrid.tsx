"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Home, Sparkles, Paintbrush, Building } from "lucide-react";
import QuoteModal from "../ui/QuoteModal";

const SERVICES_LIST = [
  {
    id: "gutter-cleaning",
    title: "GUTTER VACUUMING",
    desc: "High-power commercial vacuum cleaning & downpipe flushing.",
    image: "/images/service-gutter-cleaning.jpg",
    icon: Sparkles
  },
  {
    id: "guttering",
    title: "GUTTERING & DOWNPIPES",
    desc: "15-yr Marine-Grade Colorsteel with a 10-year leak-free guarantee.",
    image: "/images/real-job-gutter-finish.jpg",
    icon: Shield
  },
  {
    id: "fascia",
    title: "FASCIA & COLORSTEEL PANELS",
    desc: "Fascia repainting & affordable Colorsteel panels over rotten timber.",
    image: "/images/real-job-fascia-roofline.jpg",
    icon: Home
  },
  {
    id: "roof-painting",
    title: "ROOF SPRAY PAINTING",
    desc: "Airless spray gun application & weatherproof protective coatings.",
    image: "/images/service-roof-painting.jpg",
    icon: Paintbrush
  },
  {
    id: "roof-replacement",
    title: "ROOF REPLACEMENT",
    desc: "30-Year warranty full roof replacements with genuine Colorsteel.",
    image: "/images/service-roof-replacement.jpg",
    icon: Building
  }
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <section className="py-14 sm:py-16 bg-[#F4F6F9] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#09182B]">
              OUR SERVICES
            </h2>
          </motion.div>

          {/* 5 Cards Row with Staggered Entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
          >
            {SERVICES_LIST.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedService(service.id)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col border border-slate-200 cursor-pointer group"
                >
                  {/* Image Container with Top Rounded Corners */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden rounded-t-xl bg-slate-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Fully Visible Circular Icon Badge */}
                  <div className="relative z-20 flex justify-center -mt-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-[#09182B] border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-3 pb-6 px-4 flex flex-col flex-1 text-center justify-between">
                    <div>
                      <h3 className="text-xs sm:text-[13px] font-black uppercase text-[#09182B] tracking-wide mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <QuoteModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        initialService={selectedService || undefined}
      />
    </>
  );
}
