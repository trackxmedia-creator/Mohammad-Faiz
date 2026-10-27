import React from 'react';
import { WHY_WORK_POINTS, getWhatsAppUrl } from '../config/portfolioConfig';
import { Zap, Copy, Sparkles, TrendingUp, MessageSquare, ArrowUpRight } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-6 h-6 text-[#ff5722]" />;
      case 1:
        return <Copy className="w-6 h-6 text-[#ff5722]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#ff5722]" />;
      case 3:
        return <TrendingUp className="w-6 h-6 text-[#ff5722]" />;
      default:
        return <Zap className="w-6 h-6 text-[#ff5722]" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 bg-[#0c0c0e] relative border-t border-[#222227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#ff5722] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>Competitive Advantage</span>
            <span className="text-[#52525b]">·</span>
            <span className="text-[#a1a1aa] font-normal normal-case">
              Why Forward-Thinking DTC Brands Choose AI UGC
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Work With Me
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Eliminate traditional production bottlenecks. I combine cutting-edge
            generative visual models with direct-response media buying fundamentals
            to deliver commercial-grade video assets at a fraction of the time and cost.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_WORK_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="bg-[#121215] border border-[#222227] hover:border-[#3f3f46] rounded-2xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#18181b] border border-[#27272a] flex items-center justify-center">
                    {getIcon(index)}
                  </div>
                  <span className="text-xs font-mono text-[#ff5722] bg-[#ff5722]/10 border border-[#ff5722]/20 px-2.5 py-1 rounded-md">
                    {point.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {point.title}
                </h3>

                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Editorial bullet callout */}
              <div className="pt-4 border-t border-[#1f1f23] text-xs text-[#d4d4d8] flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" />
                <span>
                  {index === 0 && 'No physical shipping delays or creator ghosting.'}
                  {index === 1 && 'Modular hook variations ready for rapid Meta testing.'}
                  {index === 2 && 'Macro 4K fluids and impossible camera choreography.'}
                  {index === 3 && 'Built specifically to optimize thumb-stop and hold rates.'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Agency Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#121215] border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              Ready to upgrade your ad creative pipeline?
            </h4>
            <p className="text-sm text-[#a1a1aa]">
              Send over your product link or brief, and get a tailored creative concept within 24 hours.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hi Faiz, I'd like to share our brand link and get creative concepts for an ad campaign.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#ff5722] hover:bg-[#f4511e] rounded-xl shadow-lg shadow-[#ff5722]/20 transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Discuss Your Product</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
