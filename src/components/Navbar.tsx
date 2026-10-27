import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/portfolioConfig';
import { MessageSquare, Menu, X, ArrowUpRight, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#09090b]/85 border-b border-[#222227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#ff5722] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722] inline-block"></span>
            <span>{SITE_CONFIG.brandName}</span>
          </a>
          <span className="hidden sm:inline-block text-xs text-[#a1a1aa] tracking-wider uppercase font-medium">
            AI Ad Studio
          </span>
        </div>

        {/* Zone 2: Navigation Links (Single-line, unboxed, hover underline/color) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#a1a1aa]">
          <a
            href="#portfolio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#process"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Process
          </a>
          <a
            href="#why-me"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Why AI UGC
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Guide / Instructions button */}
          <button
            onClick={onOpenGuide}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#a1a1aa] hover:text-white hover:bg-[#18181b] rounded-lg border border-[#27272a] transition-all whitespace-nowrap cursor-pointer"
            title="Setup & Free Hosting Guide"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#ff5722]" />
            <span className="hidden sm:inline">Setup Guide</span>
          </button>

          {/* Primary CTA - WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#ff5722] hover:bg-[#f4511e] rounded-lg shadow-lg shadow-[#ff5722]/20 transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-[#a1a1aa] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#222227] bg-[#09090b]/98 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#d4d4d8]">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181b] hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181b] hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181b] hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#why-me"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181b] hover:text-white transition-colors"
            >
              Why AI UGC
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181b] hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-2 border-t border-[#222227] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-[#d4d4d8] bg-[#18181b] rounded-lg border border-[#27272a]"
            >
              How to Edit & Publish (Guide)
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#ff5722] hover:bg-[#f4511e] rounded-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
