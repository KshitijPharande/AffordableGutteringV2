import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Award, Users, HeartHandshake, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";

export const metadata: Metadata = {
  title: "About Us | Affordable Guttering & Roof Maintenance Christchurch",
  description: "Learn more about Affordable Guttering. 20+ years of trusted spouting, guttering and roofing experience in Christchurch, Rangiora and Rolleston.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#050e1a] text-white min-h-screen">
      {/* Page Header with High-Impact Hero Background Image */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-800 bg-[#050e1a]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/roof.jpg"
            alt="Affordable Guttering Canterbury roofing craftsmanship"
            fill
            priority
            className="object-cover object-center brightness-[0.45] contrast-110 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1a]/95 via-[#09182B]/80 to-[#050e1a]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-transparent to-black/50" />
          {/* Ambient Gold & Sky Glow */}
          <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs font-black uppercase tracking-wider shadow-lg">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Locally Owned Canterbury Specialists • 20+ Years Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md">
              ABOUT <span className="text-gradient-gold">AFFORDABLE GUTTERING</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow max-w-2xl">
              Serving Christchurch, Rangiora, Rolleston and wider Canterbury with premium spouting, gutter replacements, vacuum cleaning and roof maintenance for over 20 years.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Values Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story text */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide">
                Quality Workmanship That Protects Your Kiwi Home
              </h2>
              <div className="w-16 h-1 bg-amber-400 rounded-full" />
              <p className="text-slate-300 text-sm leading-relaxed">
                Founded on the straightforward philosophy that homeowners shouldn&apos;t have to compromise on quality to get an affordable price, Affordable Guttering & Roof Maintenance has grown into one of Canterbury&apos;s most trusted trade providers.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Canterbury&apos;s weather is notorious for high winds, sudden southerly fronts, frost, and intense cloudbursts. Our gutter and spouting systems are engineered specifically with heavy-gauge Colorsteel and seamless continuous aluminium to ensure water is channeled safely away from your home&apos;s foundation and structural framing.
              </p>

              {/* Guarantees Box */}
              <div className="bg-[#09182B] border border-amber-500/30 rounded-2xl p-6 space-y-4">
                <h3 className="text-amber-400 font-extrabold text-base uppercase tracking-wider flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Our 4-Pillar Commitment</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">30-Year Roof Replacement Warranty:</strong> Long-life durability for all our heavy-gauge Colorsteel re-roofs and restorations.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">15-Year Marine-Grade Colorsteel Warranty:</strong> Maximum protection on our heavy-gauge Box, Quad, and Half Round profiles.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">10-Year Leak-Free Guarantee:</strong> Total guarantee against water ingress or seam leaks across all gutters and downpipes.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">15% Price Beat Pledge:</strong> We guarantee to beat any written competitor quote in Canterbury by 15%.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Real Project Photos Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl border border-amber-400/30 group">
                <Image
                  src="/images/real-job-branded-installer.jpg"
                  alt="Affordable Guttering Ltd tradesman on-site in Canterbury"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09182B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                    On-Site Workmanship
                  </span>
                  <p className="text-[11px] font-bold text-white mt-1">Official Branded Canterbury Team</p>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl border border-amber-400/30 mt-6 group">
                <Image
                  src="/images/real-job-gutter-finish.jpg"
                  alt="Finished Colorsteel veranda gutter installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09182B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                    Finished Project
                  </span>
                  <p className="text-[11px] font-bold text-white mt-1">Seamless Colorsteel Gutters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Stats Bar */}
      <section className="bg-[#071526] border-y border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-amber-400">30-Yr</div>
              <div className="text-xs uppercase font-bold text-slate-300 mt-2">Roof Replacement</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-amber-400">15-Yr</div>
              <div className="text-xs uppercase font-bold text-slate-300 mt-2">Marine Colorsteel Gutters</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-amber-400">10-Yr</div>
              <div className="text-xs uppercase font-bold text-slate-300 mt-2">Leak-Free Guarantee</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-amber-400">15%</div>
              <div className="text-xs uppercase font-bold text-slate-300 mt-2">Price Beat Promise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              WHY CANTERBURY HOMEOWNERS CHOOSE US
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#09182B] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">Experienced Local Team</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our technicians understand Canterbury architecture—from character bungalows in Merivale to modern architectural subdivisions in Rolleston and Rangiora.
              </p>
            </div>

            <div className="bg-[#09182B] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">Premium NZ Materials</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We only install high-grade Colorsteel and continuous extruded aluminium designed to resist coastal salt air, UV radiation, and heavy thermal expansion.
              </p>
            </div>

            <div className="bg-[#09182B] p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-3">Honest & Transparent</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No hidden costs or surprise extras. We provide full written upfront quotes and will happily review competitor estimates to give you the 15% discount.
              </p>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <span>GET YOUR FREE ON-SITE ASSESSMENT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
