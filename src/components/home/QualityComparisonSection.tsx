import React from "react";
import { Check, X, ShieldCheck, AlertTriangle } from "lucide-react";
import { QUALITY_COMPARISON } from "@/data/websiteData";

export default function QualityComparisonSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#050e1a] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Superior Quality vs. Overpriced Thin Spouting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            WHY OUR PROFILES OUTPERFORM <span className="text-gradient-gold">COMPETITOR GUTTERS</span>
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="text-slate-300 text-xs sm:text-sm mt-3">
            Many competitors install low-grade, thin continuous coil gutters with hefty markups. We engineer heavy-duty Box, Quad, and Half Round systems built to withstand the toughest South Island storms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto bg-[#09182B] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#071526] p-4 sm:p-6 border-b border-slate-800 text-xs sm:text-sm font-black uppercase tracking-wider">
            <div className="col-span-4 text-slate-400">Comparison Feature</div>
            <div className="col-span-4 text-amber-400 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Affordable Guttering</span>
            </div>
            <div className="col-span-4 text-slate-400 flex items-center space-x-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Competitor Thin Spouting</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
            {QUALITY_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-800/30 transition-colors"
              >
                <div className="col-span-4 font-bold text-white pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 text-amber-300 font-semibold flex items-start space-x-2 pr-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{row.ourQuality}</span>
                </div>
                <div className="col-span-4 text-slate-400 flex items-start space-x-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{row.competitors}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 max-w-5xl mx-auto bg-gradient-to-r from-amber-500/10 via-[#09182B] to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-extrabold text-white uppercase">
              15-Year Gutter & Downpipe Warranty + 30-Year Roof Warranty
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Backed by our 15% Price Beat pledge: Top quality materials without the competitor price inflation.
            </p>
          </div>
          <a
            href="tel:0508113399"
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md shrink-0 transition-colors"
          >
            Call 0508 11 33 99
          </a>
        </div>
      </div>
    </section>
  );
}
