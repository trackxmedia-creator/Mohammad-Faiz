import React from 'react';
import { SERVICES_LIST, getWhatsAppUrl } from '../config/portfolioConfig';
import { Video, Sparkles, Target, Layers, Smartphone, ArrowUpRight, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-ugc':
        return <Video className="w-5 h-5 text-[#ff5722]" />;
      case 'hypermotion-commercials':
        return <Sparkles className="w-5 h-5 text-[#ff5722]" />;
      case 'direct-response-creatives':
        return <Target className="w-5 h-5 text-[#ff5722]" />;
      case 'ad-variations-testing':
        return <Layers className="w-5 h-5 text-[#ff5722]" />;
      case 'product-social-videos':
        return <Smartphone className="w-5 h-5 text-[#ff5722]" />;
      default:
        return <Video className="w-5 h-5 text-[#ff5722]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0c0c0e] relative border-t border-[#222227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#ff5722] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>Core Capabilities</span>
            <span className="text-[#52525b]">·</span>
            <span className="text-[#a1a1aa] font-normal normal-case">
              End-to-End Creative Strategy & Production
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Services Built for E-Commerce Ad Performance
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Stop relying on slow creator outreach and hit-or-miss iPhone footage.
            We produce studio-grade AI commercials and direct-response UGC
            engineered to lower customer acquisition costs.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, index) => {
            const isLarge = index === 0 || index === 1;
            const waUrl = getWhatsAppUrl(
              `Hi Faiz, I want to discuss your "${service.title}" service for my brand.`
            );

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-[#121215] border border-[#222227] hover:border-[#3f3f46] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Top Row: Icon + Format */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#18181b] border border-[#27272a] flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono text-[#a1a1aa]">
                      {service.ratio}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-[#ff5722]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-2 border-t border-[#1f1f23] space-y-2">
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-[#71717a]">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#d4d4d8]">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#ff5722] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Best for & CTA */}
                <div className="pt-5 mt-5 border-t border-[#1f1f23] flex items-center justify-between gap-3">
                  <div className="text-[11px] text-[#71717a] truncate max-w-[200px]">
                    <span className="text-[#a1a1aa]">Best for:</span> {service.bestFor}
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5722] hover:text-[#f4511e] transition-colors whitespace-nowrap"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
