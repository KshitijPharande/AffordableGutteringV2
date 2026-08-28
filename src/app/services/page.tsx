"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowRight, Zap, Sparkles, Award } from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/websiteData";
import QuoteModal from "@/components/ui/QuoteModal";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="bg-[#050e1a] text-white min-h-screen">
      {/* Header with Framer Motion */}
      <section className="relative py-20 bg-gradient-to-b from-[#09182B] to-[#050e1a] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Canterbury Guttering & Roofing Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              OUR <span className="text-gradient-gold">SERVICES & WARRANTIES</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              From marine-grade Colorsteel gutters and commercial vacuum cleaning to airless spray roof painting and full 30-year roof replacements.
            </p>

            {/* Upfront Warranty Pill Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#071526] border border-amber-400/30 p-3 rounded-xl flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-black text-white">30-Year Roof Warranty</div>
                  <div className="text-[10px] text-slate-400">Full roof replacements</div>
                </div>
              </div>
              <div className="bg-[#071526] border border-amber-400/30 p-3 rounded-xl flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-black text-white">15-Year Marine Colorsteel</div>
                  <div className="text-[10px] text-slate-400">Gutters & downpipes</div>
                </div>
              </div>
              <div className="bg-[#071526] border border-amber-400/30 p-3 rounded-xl flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-black text-white">10-Year Leak Guarantee</div>
                  <div className="text-[10px] text-slate-400">Zero water ingress</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List Section with Scroll-Triggered Staggered Animations */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#09182B] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-lg border border-slate-700/80 group ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-amber-400/30 p-3 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-bold">Free Assessment</span>
                    <span className="text-slate-300">Written Fixed Quote</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="text-xs font-black tracking-widest text-amber-400 uppercase mb-1 flex items-center space-x-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Canterbury Craftsmanship</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                      {service.title}
                    </h2>
                    <div className="w-12 h-1 bg-amber-400 mt-2 rounded-full" />
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and CTA bar */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-800">
                    <div className="text-xs text-slate-400">
                      <span className="text-amber-400 font-bold block">Pricing Info:</span>
                      <span>{service.pricingHint}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedService(service.id)}
                        className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>BOOK / GET QUOTE</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Emergency Help Banner */}
      <section className="bg-gradient-to-r from-amber-500/10 via-[#071526] to-amber-500/10 border-t border-slate-800 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          <ShieldCheck className="w-12 h-12 text-amber-400 mx-auto" />
          <h3 className="text-2xl font-black uppercase text-white tracking-wide">
            Need Urgent Storm Repairs or Leak Detection?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Water damage escalates quickly. Call our Canterbury emergency response line anytime for rapid assessment and urgent sealing.
          </p>
          <div className="pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition-colors"
            >
              <PhoneCall className="w-5 h-5" />
              <span>CALL {COMPANY_INFO.phone} NOW</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      <QuoteModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        initialService={selectedService || undefined}
      />
    </div>
  );
}
