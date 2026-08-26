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
      {/* Top Notification Bar */}
      <div className="bg-[#050e1a] border-b border-slate-800 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1 text-amber-400 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.quoteOffer}</span>
            </span>
            <span className="flex items-center space-x-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Christchurch, Rangiora, Rolleston & Canterbury</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Emergency Callouts Anytime</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-bold">15-Yr Gutter & 30-Yr Roof Warranty</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09182B]/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-2.5"
            : "bg-[#09182B]/90 backdrop-blur-sm border-b border-slate-800/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-[13px] font-bold tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? "text-amber-400"
                      : "text-slate-200 hover:text-amber-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Phone & Quote Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-slate-400">Call Anytime</div>
                <div className="text-sm font-extrabold tracking-wide text-white group-hover:text-amber-400">
                  {COMPANY_INFO.phone}
                </div>
              </div>
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setQuoteModalOpen(true)}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs tracking-wider rounded-lg shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer uppercase"
            >
              GET A FREE QUOTE
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-amber-400 text-slate-950"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-white hover:text-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#071526] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-slate-800 text-white font-bold text-sm"
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
