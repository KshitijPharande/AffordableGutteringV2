import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/websiteData";

export default function Footer() {
  return (
    <footer className="bg-[#050e1a] text-slate-400 border-t border-slate-800/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1: Brand & Guarantee */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              Canterbury's trusted specialists in seamless guttering, spouting repairs, vacuum gutter cleaning, and roof maintenance.
            </p>
            <div className="bg-[#09182B] border border-amber-500/30 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Canterbury Guarantee Package</span>
              </div>
              <ul className="text-[11px] text-slate-300 space-y-1">
                <li>• <strong className="text-white">30-Year</strong> Roof Replacement</li>
                <li>• <strong className="text-white">15-Year</strong> Marine Colorsteel Gutters</li>
                <li>• <strong className="text-white">10-Year</strong> Leak-Free Guarantee</li>
                <li>• <strong className="text-amber-400">15% Price Beat</strong> on any quote</li>
              </ul>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4 border-l-2 border-amber-400 pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-amber-500/70">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="hover:text-amber-400 transition-colors flex items-center space-x-1.5"
                >
                  <span className="text-amber-500/70">›</span>
                  <span>Gutter Profiles (Box, Quad, Half Round)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-amber-400 transition-colors flex items-center space-x-1.5 font-semibold text-white"
                >
                  <span className="text-amber-400">›</span>
                  <span>Project Gallery (100% Real Jobs)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Canterbury Service Areas */}
          <div>
            <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4 border-l-2 border-amber-400 pl-2.5">
              Canterbury Coverage
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
              {COMPANY_INFO.serviceAreas.slice(0, 7).map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
              <div className="text-[11px] text-amber-400/80 pt-1 font-medium">
                + Wider Selwyn & North Canterbury
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-black tracking-widest uppercase text-white mb-4 border-l-2 border-amber-400 pl-2.5">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400">Freephone (Anytime):</div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:text-amber-400 transition-colors text-sm">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400">Email Inquiries:</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-amber-400 transition-colors break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400">Operating Hours:</div>
                  <span className="text-slate-200">{COMPANY_INFO.hours}</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400">Base Location:</div>
                  <span className="text-slate-200">Christchurch, New Zealand</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & agency credit row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 border-t border-slate-800/40 mt-2 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <Link href="/products" className="hover:text-amber-400 transition-colors">Gutter Profiles</Link>
            <Link href="/gallery" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">Gallery</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center justify-center space-x-1.5 text-slate-400">
            <span>Designed & Developed by</span>
            <a
              href="https://www.lynkdigital.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-400 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] transition-all underline decoration-amber-400/40 hover:decoration-amber-300 ml-1"
            >
              Lynkdigital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
