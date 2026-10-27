import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/portfolioConfig';

interface VaultItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  videoUrl: string;
}

const ALL_VAULT_VIDEOS: VaultItem[] = [
  {
    id: 'java-monster',
    title: 'Java Monster Salted Caramel Can Promo',
    brand: 'Java Monster',
    category: 'Beverage & Energy Drink',
    description:
      'High-octane commercial with kinetic 3D coffee splash physics, athlete lifestyle footage, and mountain sunrise visual payoff.',
    videoUrl:
      '/assets/aistudio/Java_Monster_energy_drink_commer__20261027192721_4c6871b3.mp4',
  },
  {
    id: 'baboon-serum',
    title: 'Baboon Rosemary & Biotin Hair Serum',
    brand: 'Baboon',
    category: 'Beauty & Hair Care',
    description:
      'Macro fluid dropper impact, botanical foliage lighting, and direct-response benefit callouts built for beauty DTC brands.',
    videoUrl:
      '/assets/aistudio/Dropper_bottle_product_commercia__20261027192618_69ac62e4.mp4',
  },
  {
    id: 'pumpkin-seed-oil',
    title: 'Chi Pumpkin Seed Oil CGI Commercial',
    brand: 'Chi Pompoenpit',
    category: 'Organic Skincare & Oil',
    description:
      'Splitting pumpkin CGI animation, golden fluid vortex, and droplet splash crown showing organic botanical purity.',
    videoUrl:
      '/assets/aistudio/Pumpkin_seed_oil_commercial_CGI_20261027192501_38e9d871.mp4',
  },
  {
    id: 'ryze-commercial',
    title: 'Ryze Mushroom Coffee Product Commercial',
    brand: 'Ryze',
    category: 'Functional Coffee & DTC Food',
    description:
      'Atmospheric forest morning lighting, USDA Organic badge overlay, and dynamic iced & hot coffee fluid animation.',
    videoUrl:
      '/assets/aistudio/Mushroom_coffee_product_commercial_20261027192436_93a6da86.mp4',
  },
  {
    id: 'ryze-ugc-talking-head',
    title: 'Ryze UGC Creator Routine Hook',
    brand: 'Ryze',
    category: 'AI UGC Talking Head',
    description:
      'Relatable creator speaking directly to camera in an aesthetic kitchen, frothing coffee, and testing iced recipe with natural charm.',
    videoUrl:
      '/assets/aistudio/Creating_mushroom_coffee_commerc__20261027192417_6f396f5f.mp4',
  },
  {
    id: 'ryze-creator-cut-b',
    title: 'Ryze Creator Morning Routine Cut B',
    brand: 'Ryze',
    category: 'Alternative Hook Variation',
    description:
      'Alternate opening hook and pacing cut for Meta Ads A/B testing and algorithmic creative rotation.',
    videoUrl:
      '/assets/aistudio/Creating_mushroom_coffee_commerc__20261027172940_6f396f5f.mp4',
  },
  {
    id: 'ryze-creator-cut-c',
    title: 'Ryze Creator Quick Pitch Cut C',
    brand: 'Ryze',
    category: 'Alternative Hook Variation',
    description:
      'Snappy direct-to-benefit cut with accelerated pacing for TikTok Spark Ads testing.',
    videoUrl:
      '/assets/aistudio/Creating_mushroom_coffee_commerc__20261027172940__1__6f396f5f.mp4',
  },
  {
    id: 'baboon-cut-2',
    title: 'Baboon Hair Serum Clean Showcase',
    brand: 'Baboon',
    category: 'E-Commerce Showcase',
    description:
      'Alternate pacing showcasing bottle rotating on black slate with macro oil droplet suspension.',
    videoUrl: '/assets/aistudio/video_53fa6fc3.mp4',
  },
];

interface ExtendedVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExtendedVaultModal: React.FC<ExtendedVaultModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VaultItem>(
    ALL_VAULT_VIDEOS[0]
  );
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Beverage & Energy Drink', 'Beauty & Hair Care', 'Functional Coffee & DTC Food', 'AI UGC Talking Head'];

  const filteredVideos =
    activeCategory === 'All'
      ? ALL_VAULT_VIDEOS
      : ALL_VAULT_VIDEOS.filter(
          (v) => v.category === activeCategory || (activeCategory === 'AI UGC Talking Head' && v.category.includes('Variation'))
        );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#0e0e11] border border-[#27272a] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Modal Bar */}
        <div className="px-6 py-4 border-b border-[#222227] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722]" />
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Extended Creative Vault (All 8 Ad Cuts)
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Every campaign angle, commercial cut, and UGC variations available in the archive
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-[#a1a1aa] hover:text-white hover:bg-[#18181b] rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split viewer */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Active Player */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start">
            <div className="w-full max-w-[280px] sm:max-w-[300px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-[#27272a] shadow-xl relative">
              <video
                key={selectedVideo.videoUrl}
                controls
                playsInline
                autoPlay
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>
            </div>

            <div className="mt-4 text-center max-w-[320px] space-y-2">
              <span className="text-xs font-semibold text-[#ff5722] uppercase tracking-wider">
                {selectedVideo.brand} · {selectedVideo.category}
              </span>
              <h4 className="text-base font-bold text-white leading-snug">
                {selectedVideo.title}
              </h4>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {selectedVideo.description}
              </p>

              <a
                href={getWhatsAppUrl(
                  `Hi Faiz, I'm watching your "${selectedVideo.title}" in your creative vault. Let's discuss a similar campaign!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#ff5722] hover:bg-[#f4511e] rounded-xl shadow transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss This Specific Ad</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Grid of All 8 Videos */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap gap-1.5 pb-2 border-b border-[#1f1f23]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-white text-black'
                      : 'bg-[#18181b] text-[#a1a1aa] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1">
              {filteredVideos.map((item) => {
                const isSelected = selectedVideo.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedVideo(item)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#18181b] border-[#ff5722]'
                        : 'bg-[#121215] border-[#222227] hover:border-[#3f3f46]'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#ff5722] font-semibold">
                          {item.brand}
                        </span>
                        <span className="text-[#71717a] font-mono">9:16 MP4</span>
                      </div>
                      <h5 className="text-sm font-bold text-white leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-[11px] text-[#a1a1aa] line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#1f1f23] flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[#71717a]">
                        {isSelected ? 'Currently Playing' : 'Click to preview'}
                      </span>
                      <Play className="w-3.5 h-3.5 text-[#ff5722]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#222227] bg-[#09090b] flex items-center justify-between text-xs text-[#71717a]">
          <span>All 8 video assets are hosted locally inside your website bundle.</span>
          <button
            onClick={onClose}
            type="button"
            className="text-white hover:text-[#ff5722] font-medium transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
