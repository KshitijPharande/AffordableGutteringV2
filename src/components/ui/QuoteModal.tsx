"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, PhoneCall, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/websiteData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService }: QuoteModalProps) {
  const [service, setService] = useState(initialService || "guttering-spouting");
  const [houseSize, setHouseSize] = useState<"single" | "double" | "large">("single");
  const [location, setLocation] = useState("Christchurch");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // silent
      }
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#09182B] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden text-white my-8 z-10"
          >
            {/* Header Ribbon */}
            <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-3 flex items-center justify-between text-slate-950 font-bold">
              <div className="flex items-center space-x-2 text-sm md:text-base">
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>FREE ON-SITE ASSESSMENT & 15% PRICE BEAT GUARANTEE</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-black/10 transition-colors text-slate-950"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      Get Your Free Guttering & Roof Assessment
                    </h3>
                    <p className="text-slate-300 text-sm mt-1">
                      Fast response across Christchurch, Rangiora, Rolleston & Canterbury. No obligation.
                    </p>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                      1. Select Service Required *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES_DATA.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setService(s.id)}
                          className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                            service === s.id
                              ? "border-amber-400 bg-amber-500/20 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                              : "border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500"
                          }`}
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* House Storeys */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                      2. House Storeys
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "single", label: "1 Storey Home" },
                        { id: "double", label: "2 Storey Home" },
                        { id: "large", label: "3+ Storey / Complex" }
                      ].map((st) => (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => setHouseSize(st.id as any)}
                          className={`p-3 text-center rounded-xl border text-xs font-medium transition-all ${
                            houseSize === st.id
                              ? "border-amber-400 bg-amber-500/20 text-white font-bold"
                              : "border-slate-700 bg-slate-800/60 text-slate-400 hover:border-slate-500"
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number (Canterbury) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 021 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.co.nz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Location / Suburb</label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        {COMPANY_INFO.serviceAreas.map((area) => (
                          <option key={area} value={area} className="bg-slate-900 text-white">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Notes / Existing Quote details (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Mention if you have an existing quote for 15% beat or any specific leak areas..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>15-Yr Gutter & 30-Yr Roof Warranty • Zero Obligation</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all flex items-center space-x-2 cursor-pointer"
                    >
                      <span>{loading ? "Submitting..." : "SUBMIT FOR 15% BEAT QUOTE"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm">
                    Thank you <strong className="text-amber-400">{name}</strong>. One of our Canterbury guttering & roofing specialists will contact you at <strong className="text-amber-400">{phone}</strong> shortly to arrange your free on-site assessment and apply our 15% price beat offer.
                  </p>
                  <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1 text-slate-300">
                    <div>• <span className="font-semibold text-white">Service:</span> {SERVICES_DATA.find(s => s.id === service)?.title}</div>
                    <div>• <span className="font-semibold text-white">Location:</span> {location}</div>
                    <div>• <span className="font-semibold text-white">Guarantees:</span> 15-Yr Gutters / 30-Yr Roofs + 15% Price Beat</div>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-slate-950 font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md hover:bg-amber-300 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call {COMPANY_INFO.phone} Anytime</span>
                    </a>
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
