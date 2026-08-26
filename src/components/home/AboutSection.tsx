import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#09182B] text-white overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Dark Navy Text Card */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block text-xs font-black tracking-widest text-amber-400 uppercase mb-2">
                Locally Owned & Operated
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                ABOUT US
              </h2>
              <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">Affordable Guttering & Roof Maintenance</strong> is a locally owned and operated business based in Christchurch. We have 20+ years of dedicated experience in residential spouting, gutter replacements, vacuum gutter cleaning, and roofing repairs.
              </p>
              <p>
                We take immense pride in our workmanship, ensuring every Christchurch and Canterbury property is fully weather-proofed with the highest grade Colorsteel and continuous aluminium materials.
              </p>
              <p className="text-amber-300 font-extrabold text-base">
                No job too big or small – we do it all!
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>15% Price Beat Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10-Year Leak-Free Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free On-Site Quotes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full Canterbury Coverage</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 px-6 py-3.5 bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-black text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Gutter Water Flow Imagery */}
          <div className="relative min-h-[350px] lg:min-h-full w-full">
            <Image
              src="/images/about-gutter-water.jpg"
              alt="Gleaming continuous gutter with clean water flow Canterbury New Zealand"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09182B] via-transparent to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09182B] via-transparent to-transparent lg:hidden block" />

            {/* Floating badge */}
            <div className="absolute bottom-6 right-6 bg-[#071526]/90 border border-amber-400/50 backdrop-blur-md p-4 rounded-xl shadow-xl max-w-xs text-xs">
              <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">
                South Island Proven
              </div>
              <div className="text-slate-200">
                Engineered specifically for Canterbury wind loads, frost, and high-intensity rainfall.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
