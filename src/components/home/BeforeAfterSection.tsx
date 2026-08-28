"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BEFORE_AFTER_ITEMS } from "@/data/websiteData";
import QuoteModal from "../ui/QuoteModal";

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const currentItem = BEFORE_AFTER_ITEMS[activeTab] || BEFORE_AFTER_ITEMS[0];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#050e1a] via-[#071526] to-[#050e1a] border-t border-slate-800 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Workmanship & Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            BEFORE & <span className="text-gradient-gold">AFTER</span> TRANSFORMATIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            See the quality of our workmanship firsthand. Drag or tap the interactive slider to compare weathered roofs and gutters with our brand new Colorsteel installations.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === index
                  ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-105"
                  : "bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-[#09182B] border border-amber-400/30 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header Info */}
          <div className="p-6 sm:p-8 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
                {currentItem.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {currentItem.description}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0 cursor-pointer flex items-center space-x-2"
            >
              <span>Get Similar Results</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Interactive Split Slider Container */}
          <div
            className="relative h-[320px] sm:h-[460px] w-full select-none cursor-ew-resize overflow-hidden bg-slate-950"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              handleSliderMove(e.clientX, rect);
            }}
          >
            {/* After Image (Full background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentItem.afterImage}
                alt={currentItem.afterLabel}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-400 font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-lg shadow-lg">
                AFTER: {currentItem.afterLabel}
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[896px]">
                <Image
                  src={currentItem.beforeImage}
                  alt={currentItem.beforeLabel}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-600 text-slate-300 font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-lg shadow-lg">
                BEFORE: {currentItem.beforeLabel}
              </div>
            </div>

            {/* Vertical Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.8)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shadow-2xl border-2 border-slate-950">
                ⮂ ⮃
              </div>
            </div>
          </div>

          {/* Bottom helper prompt */}
          <div className="p-4 bg-[#071526] border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Drag the slider left or right to reveal the full transformation</span>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
