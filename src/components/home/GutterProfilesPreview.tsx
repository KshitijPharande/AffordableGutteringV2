"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets } from "lucide-react";
import { GUTTER_PROFILES } from "@/data/websiteData";
import QuoteModal from "../ui/QuoteModal";

export default function GutterProfilesPreview() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-[#071526] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest text-amber-400 uppercase mb-2">
                <Droplets className="w-4 h-4 text-sky-400" />
                <span>Engineered For Canterbury Weather</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                POPULAR GUTTER <span className="text-gradient-gold">PROFILES</span>
              </h2>
              <div className="w-16 h-1 bg-amber-400 mt-3 rounded-full" />
            </div>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider group"
            >
              <span>Explore All Profile Specs & Colors</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Profiles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GUTTER_PROFILES.map((profile) => (
              <div
                key={profile.id}
                className="bg-[#09182B] rounded-2xl border border-slate-800 hover:border-amber-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09182B] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md">
                      {profile.id === "box-profile" ? "High Capacity" : profile.id === "quad-profile" ? "South Island Standard" : "Architectural"}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-semibold mb-3">
                      {profile.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {profile.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 border-t border-slate-800/80 pt-4">
                      {profile.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-2.5 bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Request Profile Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
