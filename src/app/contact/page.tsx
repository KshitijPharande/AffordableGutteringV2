"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, ChevronDown, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO, SERVICES_DATA, FAQS } from "@/data/websiteData";

export default function ContactPage() {
  const [service, setService] = useState("guttering-spouting");
  const [houseSize, setHouseSize] = useState<"single" | "double" | "large">("single");
  const [location, setLocation] = useState("Christchurch Central");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    <div className="bg-[#050e1a] text-white min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#09182B] to-[#050e1a] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
              Get In Touch & Beat Any Quote By 15%
            </span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
              CONTACT US & <span className="text-gradient-gold">FREE QUOTE</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              Serving Christchurch, Rangiora, Rolleston & Canterbury. Request your free on-site assessment with our 15% price beat promise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-[#09182B] border border-slate-800 rounded-3xl p-8 space-y-6">
                <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                  Direct Contact
                </h2>
                <div className="w-12 h-1 bg-amber-400 rounded-full" />

                <div className="space-y-5 text-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Freephone (Anytime)</div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-lg font-black text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <div className="text-[11px] text-slate-400">Available 7 days for urgent callouts</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Email Inquiries</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-bold text-slate-200 hover:text-amber-400 transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Hours of Operation</div>
                      <div className="text-sm font-semibold text-slate-200">{COMPANY_INFO.hours}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Base Location</div>
                      <div className="text-sm font-semibold text-slate-200">Christchurch, New Zealand</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Box */}
              <div className="bg-[#09182B] border border-slate-800 rounded-3xl p-8 space-y-4">
                <h3 className="text-lg font-black uppercase text-white tracking-wide flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Canterbury Coverage Areas</span>
                </h3>
                <p className="text-xs text-slate-300">
                  Our mobile guttering & roofing units operate daily throughout:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  {COMPANY_INFO.serviceAreas.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Clean Inquiry Form with Framer Motion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#09182B] border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                        <Sparkles className="w-4 h-4" />
                        <span>Online Assessment Request</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                        REQUEST YOUR FREE QUOTE
                      </h2>
                      <p className="text-slate-300 text-xs sm:text-sm mt-1">
                        Fill in your project details below. We will contact you promptly to schedule your assessment with our 15% price beat offer.
                      </p>
                    </div>

                    {/* Service buttons */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                        1. Service Required *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {SERVICES_DATA.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setService(s.id)}
                            className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                              service === s.id
                                ? "border-amber-400 bg-amber-500/20 text-white font-bold"
                                : "border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-500"
                            }`}
                          >
                            {s.title}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* House Details */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
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

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Smith"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#071526] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
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
                          className="w-full bg-[#071526] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    {/* Email & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="name@example.co.nz"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#071526] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Suburb / Location *</label>
                        <select
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full bg-[#071526] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
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
                      <label className="block text-xs font-medium text-slate-300 mb-1">Project Details / Existing Quote Info</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about leaks, profile preference (Box, Quad, Half Round) or mention if you have an existing quote for 15% discount..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#071526] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>30-Yr Roof • 15-Yr Colorsteel Gutters • 10-Yr Leak-Free Guarantee • 15% Price Beat</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? "Submitting Quote Request..." : "SUBMIT FOR 15% BEAT QUOTE"}</span>
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Thank You, {name}!</h3>
                    <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                      Your quote request for <strong className="text-amber-400">{location}</strong> has been received. Our team will contact you shortly on <strong className="text-amber-400">{phone}</strong>.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs uppercase tracking-wider rounded-xl transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section with Framer Motion AnimatePresence */}
      <section className="py-16 sm:py-20 bg-[#071526] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Everything you need to know about our Canterbury guttering, roof maintenance, and 15% price beat offer.
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#09182B] border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
