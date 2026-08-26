"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, DollarSign, Clock, Award, Shield } from "lucide-react";
import QuoteModal from "../ui/QuoteModal";
import { COMPANY_INFO } from "@/data/websiteData";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#050e1a]">
        {/* Background Hero Image with Stormy Lightning Sky */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-storm.jpg"
            alt="Affordable Guttering and Roof Maintenance storm protection Christchurch"
            fill
            priority
            className="object-cover object-center brightness-90 contrast-105"
            sizes="100vw"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071526]/85 via-[#071526]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09182B] via-transparent to-black/30" />

          {/* Lightning pulse effect */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.3, 0.9, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-24 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"
          />
        </div>

        {/* Hero Content matching IMG_1239.PNG */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl space-y-6"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] drop-shadow-md"
            >
              QUALITY GUTTERING <br />
              FOR AN <span className="text-gradient-gold">AFFORDABLE</span> PRICE
            </motion.h1>

            {/* Subheadline matching reference */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed drop-shadow max-w-lg"
            >
              Professional guttering and roofing services you can rely on. Quality workmanship, honest pricing and guaranteed results.
            </motion.p>

            {/* CTA Button matching reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all flex items-center space-x-3 cursor-pointer group"
              >
                <span>GET A FREE QUOTE NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* 4-Column Trust Bar (matching IMG_1239.PNG exactly) */}
        <div className="relative z-10 w-full bg-[#09182B]/95 border-t border-b border-amber-500/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {/* Box 1 */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#071526] border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                    QUALITY WORKMANSHIP
                  </div>
                  <div className="text-[11px] text-slate-300">
                    We take pride in every job we do.
                  </div>
                </div>
              </motion.div>

              {/* Box 2 */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#071526] border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                    AFFORDABLE PRICES
                  </div>
                  <div className="text-[11px] text-slate-300">
                    High quality service at a fair price.
                  </div>
                </div>
              </motion.div>

              {/* Box 3 */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#071526] border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                    RELIABLE & ON TIME
                  </div>
                  <div className="text-[11px] text-slate-300">
                    We turn up when we say we will.
                  </div>
                </div>
              </motion.div>

              {/* Box 4 */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#071526] border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                    FULLY INSURED & GUARANTEED
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Your peace of mind is our priority.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
