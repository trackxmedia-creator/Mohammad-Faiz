import React, { useState } from 'react';
import { FEATURED_CAMPAIGNS } from '../config/portfolioConfig';
import { VideoCard } from './VideoCard';
import { Film, Sparkles, ChevronRight, Eye } from 'lucide-react';

interface FeaturedPortfolioProps {
  onSelectCampaignForForm?: (campaignTitle: string) => void;
  onOpenVault: () => void;
}

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({
  onSelectCampaignForForm,
  onOpenVault,
}) => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#222227]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#ff5722] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              <span>Selected Ad Creatives</span>
              <span className="text-[#52525b]">·</span>
              <span className="text-[#a1a1aa] font-normal normal-case">
                Real Playable 9:16 Direct Response
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Campaign Portfolio
            </h2>
            <p className="text-base text-[#a1a1aa] leading-relaxed">
              Explore three distinct creative styles: organic botanical product
              physics, high-energy beverage commercials, and authentic DTC
              talking-head creator hooks.
            </p>
          </div>

          {/* Extended Vault Trigger */}
          <button
            onClick={onOpenVault}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] text-[#f4f4f5] border border-[#27272a] hover:border-[#ff5722]/50 text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <Film className="w-4 h-4 text-[#ff5722]" />
            <span>View All 8 Campaign Cuts</span>
            <ChevronRight className="w-4 h-4 text-[#71717a]" />
          </button>
        </div>

        {/* 3 Featured Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_CAMPAIGNS.map((campaign) => (
            <VideoCard
              key={campaign.id}
              campaign={campaign}
              onSelectCampaignForForm={onSelectCampaignForForm}
            />
          ))}
        </div>

        {/* Bottom Banner for Extended Creative Assets */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#121215] to-[#18181b] border border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#ff5722]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Looking for different angles, hooks, or sound design?
              </h4>
              <p className="text-xs text-[#a1a1aa]">
                Every campaign is delivered with 5 to 15 modular variations to
                rapidly test on Meta and TikTok.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenVault}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer shadow-lg shadow-[#ff5722]/20"
          >
            <Eye className="w-4 h-4" />
            <span>Open All Video Cuts</span>
          </button>
        </div>
      </div>
    </section>
  );
};
