import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/portfolioConfig';
import { MessageSquare, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  return (
    <footer className="bg-[#09090b] border-t border-[#222227] text-[#a1a1aa] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1f1f23]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white hover:text-[#ff5722] transition-colors inline-block"
            >
              {SITE_CONFIG.brandName}
            </a>
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">
              AI-powered UGC ad creatives, hypermotion product commercials, and
              direct-response video variations engineered for modern DTC brands
              scaling on Meta, TikTok, and Instagram.
            </p>
            <div className="text-xs text-[#71717a]">
              Based in India · Serving US & Global E-Commerce Brands
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Featured Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Creative Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Production Process
                </a>
              </li>
              <li>
                <a href="#why-me" className="hover:text-white transition-colors">
                  Why AI UGC Ads
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Connect Directly
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#ff5722] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +{SITE_CONFIG.whatsappNumber}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
              </a>

              <a
                href={getMailtoUrl()}
                className="flex items-center gap-2 text-white hover:text-[#ff5722] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ff5722]" />
                <span>Email: {SITE_CONFIG.contactEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenGuide}
                type="button"
                className="text-xs text-[#ff5722] hover:text-[#f4511e] underline underline-offset-4 cursor-pointer"
              >
                Open Site Setup & Free Hosting Instructions →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717a] gap-4">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Built for high-converting direct-response advertising</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
