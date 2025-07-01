"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Briefcase, Menu, X } from "lucide-react";
import FancyButton from "./ui/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="flex items-center p-4 bg-[var(--color-eerie_black-500)] text-white">
        <Link href="/" className="flex items-center space-x-2 text-xl sm:text-2xl font-bold">
          <img src="/rd-ikon-nom-w.png" alt="Logo" className="h-8 sm:h-12" />
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <FancyButton href="/contact" className="text-sm">
            KONTAKT MEG
          </FancyButton>
        </div>

        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen 
            ? <X className="w-8 h-8 stroke-[3]" /> 
            : <Menu className="w-8 h-8 stroke-[3]" />
          }
        </button>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8">
          <Link href="/about" className="flex items-center space-x-1 text-base md:text-xl font-bold hover:text-[#ed3526] text-[var(--color-floral_white-500)]">
            <Home className="w-5 h-5" /><span>OM MEG</span>
          </Link>
          <Link href="/services" className="flex items-center space-x-1 text-base md:text-xl font-bold hover:text-[#ed3526] text-[var(--color-floral_white-500)]">
            <Briefcase className="w-5 h-5" /><span>PROSJEKTER</span>
          </Link>
        </nav>

        <div className="hidden md:block ml-auto">
          <FancyButton href="/contact" className="text-base">
            KONTAKT MEG
          </FancyButton>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--color-eerie_black-500)]">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/about"
              className="flex items-center space-x-2 text-lg font-bold text-[var(--color-floral_white-500)] hover:text-[#ed3526]"
              onClick={() => setMenuOpen(false)}
            >
              <Home className="w-5 h-5" /><span>OM MEG</span>
            </Link>
            <Link
              href="/services"
              className="flex items-center space-x-2 text-lg font-bold text-[var(--color-floral_white-500)] hover:text-[#ed3526]"
              onClick={() => setMenuOpen(false)}
            >
              <Briefcase className="w-5 h-5" /><span>PROSJEKTER</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
