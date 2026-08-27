"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Shield, Clock, MapPin, ChevronRight } from "lucide-react";
import BrandLogo from "./BrandLogo";
import QuoteModal from "../ui/QuoteModal";
import { COMPANY_INFO } from "@/data/websiteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PRODUCTS", href: "/products" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <>
      {/* Frosted Glass Top Notification Bar */}
      <div className="bg-[#050e1a]/80 backdrop-blur-md border-b border-white/5 text-slate-300 text-xs py-1.5 px-4 hidden md:block relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-amber-400 font-bold tracking-wide">
              <Shield className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.quoteOffer}</span>
            </span>
            <span className="flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Christchurch, Rangiora, Rolleston & Canterbury</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Emergency Callouts Anytime</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-amber-400 font-bold">30-Yr Roof • 15-Yr Colorsteel Gutters • 10-Yr Leak Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09182B]/75 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border-b border-amber-400/25 py-2.5"
            : "bg-[#09182B]/60 backdrop-blur-lg shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] border-b border-white/10 py-3.5"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)"
            : "0 4px 24px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Nav Links - Glass Capsule container */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-950/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-[13px] font-bold tracking-wider transition-all relative px-3 py-1.5 rounded-full ${
                    isActive
                      ? "text-amber-400 bg-white/10 shadow-sm"
                      : "text-slate-200 hover:text-amber-400 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-amber-400/50 bg-amber-400/10 pointer-events-none"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Phone & Glass Gold Quote Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-2.5 text-white hover:text-amber-400 transition-all group bg-slate-950/40 backdrop-blur-md border border-white/10 hover:border-amber-400/40 px-3.5 py-1.5 rounded-full"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-slate-400 leading-none">Call 24/7</div>
                <div className="text-xs font-black tracking-wide text-white group-hover:text-amber-400">
                  {COMPANY_INFO.phone}
                </div>
              </div>
            </a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setQuoteModalOpen(true)}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs tracking-wider rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.55)] transition-all cursor-pointer uppercase border border-amber-300/40"
            >
              GET A FREE QUOTE
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 rounded-xl bg-amber-400 text-slate-950 shadow-md"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white hover:text-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Glassmorphism */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#071526]/90 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 overflow-hidden shadow-2xl"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-amber-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg cursor-pointer"
                >
                  GET A FREE QUOTE NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Free Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
