import React from "react";
import Link from "next/link";

export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* Icon */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform">
        <div className="w-full h-full bg-[#071526] rounded-[10px] flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 h-7 text-amber-400"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* House roof */}
            <path d="M3 10.5L12 3l9 7.5" className="text-white" strokeWidth="2.5" />
            {/* Guttering pipe */}
            <path d="M4 11.5h16" className="text-amber-400" strokeWidth="3" />
            <path d="M19 11.5v7a2 2 0 0 1-2 2h-1" className="text-amber-400" strokeWidth="2.5" />
            {/* Drops */}
            <path d="M7 15v2M12 15v3" className="text-sky-400" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span className="text-xs sm:text-sm font-black tracking-wider text-white uppercase group-hover:text-slate-100">
          AFFORDABLE
        </span>
        <span className="text-sm sm:text-base font-black tracking-wider text-amber-400 uppercase">
          GUTTERING
        </span>
        <span className="text-[9px] font-bold tracking-widest text-slate-300 uppercase mt-0.5">
          & ROOF MAINTENANCE
        </span>
      </div>
    </Link>
  );
}
