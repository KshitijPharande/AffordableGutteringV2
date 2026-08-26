"use client";

import React, { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import QuoteModal from "../ui/QuoteModal";

export default function BottomCtaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#071526] border-y border-amber-500/20 py-6 sm:py-8 px-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-sky-500/5 to-amber-500/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left CTA text & phone icon */}
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white">
                NEED A <span className="text-amber-400">FREE QUOTE?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Call us today on <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">{COMPANY_INFO.phone}</a> or get in touch online.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="w-full md:w-auto flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center space-x-3 cursor-pointer group"
            >
              <span>GET YOUR FREE QUOTE NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
