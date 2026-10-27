import React, { useRef, useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/portfolioConfig';
import { MessageSquare, ArrowDown, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  const togglePreview = () => {
    if (!previewVideoRef.current) return;
    if (isPlaying) {
      previewVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      previewVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!previewVideoRef.current) return;
    previewVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-radial from-[#18181b]/40 via-[#09090b] to-[#09090b]">
      {/* Background ambient lighting */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff5722]/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Hero: Typography & Lead Copy (Left) + Video Reel Spotlight (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Unboxed Metadata Kicker (Anti-slop zero-pill) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#ff5722] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
              <span>Direct-Response AI Video Creatives</span>
              <span className="text-[#52525b]">·</span>
              <span className="text-[#a1a1aa] normal-case font-normal">
                For Modern DTC & E-Commerce Brands
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] [text-wrap:balance]">
              AI UGC Ads That Turn Attention Into Customers.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl font-normal">
              High-impact AI-powered UGC creatives and product commercials
              designed for modern e-commerce brands. Scale testing, eliminate
              creator friction, and crush CPA on Meta & TikTok.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary: View My Work */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#18181b] hover:bg-[#27272a] border border-[#3f3f46] rounded-xl transition-all shadow-md hover:border-[#ff5722]/50 cursor-pointer active:scale-[0.98] whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#ff5722]" />
              </a>

              {/* Secondary: Chat on WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#ff5722] hover:bg-[#f4511e] rounded-xl shadow-lg shadow-[#ff5722]/25 transition-all cursor-pointer active:scale-[0.98] whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Target Audience / Ad Formats (Clean unboxed line) */}
            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#71717a]">
              <span className="text-[#a1a1aa] font-medium">Platforms:</span>
              <span>Meta Ads</span>
              <span>·</span>
              <span>TikTok Ads</span>
              <span>·</span>
              <span>Instagram Reels</span>
              <span>·</span>
              <span>YouTube Shorts</span>
              <span>·</span>
              <span>9:16 Direct Response</span>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Player */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] bg-[#121215] rounded-3xl p-2 border border-[#27272a] shadow-2xl shadow-black/80 group">
              {/* Video container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={previewVideoRef}
                  playsInline
                  loop
                  muted={isMuted}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePreview}
                >
                  <source src={SITE_CONFIG.energyDrinkVideoUrl} type="video/mp4" />
                </video>

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top status bar inside phone frame */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="text-[11px] font-medium tracking-wide text-white/90 drop-shadow">
                    Featured Ad Reel
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    4K AI Motion
                  </div>
                </div>

                {/* Floating Big Play Button */}
                {!isPlaying && (
                  <button
                    onClick={togglePreview}
                    type="button"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#ff5722]/90 hover:bg-[#ff5722] text-white flex items-center justify-center shadow-xl shadow-[#ff5722]/30 transition-transform hover:scale-110 active:scale-95 cursor-pointer z-10"
                    aria-label="Play spotlight video preview"
                  >
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </button>
                )}

                {/* Bottom Video Controls Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                  <button
                    onClick={togglePreview}
                    type="button"
                    className="p-2 rounded-lg bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 fill-white" />
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-xs font-semibold text-white drop-shadow">
                      Java Monster Energy Drink
                    </p>
                    <p className="text-[10px] text-[#d4d4d8]/80 drop-shadow">
                      Direct-Response Can Commercial
                    </p>
                  </div>

                  <button
                    onClick={toggleMute}
                    type="button"
                    className="p-2 rounded-lg bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-[#a1a1aa]" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#ff5722]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Accent highlight badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#18181b] border border-[#27272a] rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff5722]" />
                <span className="text-xs font-medium text-white">
                  3 Full Campaigns Below
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Value Strip below the split per portfolio guidelines */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#222227] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              48–72<span className="text-[#ff5722]">h</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Rapid Creative Turnaround
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              9:16 <span className="text-[#ff5722]">Direct</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Mobile-First Ad Formats
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              10+ <span className="text-[#ff5722]">Angles</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Modular Hook Variations
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              100<span className="text-[#ff5722]">%</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Meta & TikTok Compliant Specs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
