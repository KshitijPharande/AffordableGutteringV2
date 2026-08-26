"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: "1",
    name: "Sarah M.",
    location: "Christchurch",
    stars: 5,
    quote: "Great service, on time and very professional. Our new gutters look amazing. Highly recommended!"
  },
  {
    id: "2",
    name: "Mark T.",
    location: "Rolleston",
    stars: 5,
    quote: "Replaced our old spouting and fascia. Excellent workmanship and the price was very fair."
  },
  {
    id: "3",
    name: "James K.",
    location: "Christchurch",
    stars: 5,
    quote: "Quick response and did a fantastic job on our roof repairs. Wouldn't hesitate to use again."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-16 bg-[#F4F6F9] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching IMG_1239.PNG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#09182B]">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </motion.div>

        {/* 3 Cards Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {REVIEWS.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col justify-between"
            >
              <div>
                {/* Gold Quote Mark Icon */}
                <div className="text-amber-400 mb-2 font-serif text-3xl font-bold leading-none select-none">
                  ““
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                {/* 5 Gold Stars */}
                <div className="flex space-x-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Reviewer Name & Town */}
                <div className="text-right">
                  <div className="text-xs font-bold text-[#09182B]">— {item.name}</div>
                  <div className="text-[11px] text-slate-500">{item.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
