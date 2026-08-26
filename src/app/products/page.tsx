"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Droplets, Layers, ArrowRight } from "lucide-react";
import { GUTTER_PROFILES } from "@/data/websiteData";
import QuoteModal from "@/components/ui/QuoteModal";

const COLORSTEEL_SWATCHES = [
  { name: "Ebony", hex: "#1f2022", dark: true },
  { name: "Ironsand", hex: "#3b3836", dark: true },
  { name: "Grey Friars", hex: "#43474d", dark: true },
  { name: "FlaxPod", hex: "#2b2c2a", dark: true },
  { name: "Windsor Grey", hex: "#32353b", dark: true },
  { name: "Sandstone Grey", hex: "#7a7975", dark: false },
  { name: "New Denim Blue", hex: "#3d4b56", dark: true },
  { name: "Titania", hex: "#d8d7cd", dark: false },
  { name: "Pioneer Red", hex: "#6d3833", dark: true },
  { name: "Gull Grey", hex: "#9fa4a6", dark: false }
];

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Ebony");

  return (
    <div className="bg-[#050e1a] text-white min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#09182B] to-[#050e1a] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              South Island Engineered Spouting
            </span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              GUTTER <span className="text-gradient-gold">PROFILES</span> & MATERIALS
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We roll-form and install the three premier gutter profiles for Canterbury residential and architectural properties. Built with genuine Colorsteel & marine-grade aluminium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Profiles Deep Dive */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {GUTTER_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#09182B] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image */}
                <div className={`lg:col-span-5 relative min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-700/80 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-black text-xs uppercase px-3 py-1.5 rounded-lg shadow-lg">
                    {profile.name}
                  </span>
                </div>

                {/* Specs and Details */}
                <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-black uppercase text-white tracking-wide">
                      {profile.name}
                    </h2>
                    <p className="text-amber-400 font-bold text-sm mt-1">{profile.subtitle}</p>
                    <div className="w-12 h-1 bg-amber-400 mt-2 rounded-full" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Specification Table */}
                  <div className="bg-[#071526] rounded-xl p-4 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Best Application:</span>
                      <span className="text-slate-200 font-medium">{profile.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block mb-0.5">Water Carrying Capacity:</span>
                      <span className="text-amber-400 font-bold">{profile.waterCapacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {profile.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setModalOpen(true)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
                    >
                      <span>GET QUOTE FOR {profile.name.toUpperCase()}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Colorsteel Palette Interactive Section */}
      <section className="py-16 bg-[#071526] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest text-amber-400 uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>Genuine New Zealand Colorsteel</span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              POPULAR CANTERBURY COLOR PALETTE
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
            <p className="text-slate-300 text-xs sm:text-sm mt-3">
              Matched precisely to your roof, fascia, joinery and cladding for seamless aesthetic harmony.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {COLORSTEEL_SWATCHES.map((swatch) => (
              <motion.button
                key={swatch.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedColor(swatch.name)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedColor === swatch.name
                    ? "border-amber-400 bg-slate-800 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-105"
                    : "border-slate-800 bg-[#09182B] hover:border-slate-600"
                }`}
              >
                <div
                  className="w-full h-14 rounded-xl shadow-inner mb-2.5 border border-white/10"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div className="text-xs font-bold text-white truncate">{swatch.name}</div>
                <div className="text-[10px] text-slate-400">Colorsteel Match</div>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-slate-400">
            Selected Color Sample: <span className="font-bold text-amber-400">{selectedColor}</span>. Full physical swatches brought to your free on-site consultation.
          </div>
        </div>
      </section>

      {/* Quality Comparison vs Thin Competitor Gutters */}
      <section className="py-12 bg-[#050e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#09182B] border border-amber-500/30 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-black uppercase text-white mb-3">
              Why We Avoid Thin Continuous Gutter Coils
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Standard continuous aluminium gutter machines often use ultra-thin 0.40mm gauge coil that is easily dented by ladders, sags under heavy rain and snow load, and is sold by competitors with inflated profit markups. We prioritize heavy-gauge Box, Quad, and Half Round profiles engineered for long-term structural resilience, backed by our <strong>15-Year Gutter & Downpipe Warranty</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                REQUEST PROFILE SAMPLE & QUOTE
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
