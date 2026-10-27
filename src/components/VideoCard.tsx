import React, { useRef, useState, useEffect } from 'react';
import { FeaturedCampaign, getWhatsAppUrl } from '../config/portfolioConfig';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  MessageSquare,
  AlertCircle,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface VideoCardProps {
  campaign: FeaturedCampaign;
  onSelectCampaignForForm?: (campaignTitle: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  campaign,
  onSelectCampaignForForm,
}) => {
  const [activeVideoUrl, setActiveVideoUrl] = useState(campaign.videoUrl);
  const [activeCutLabel, setActiveCutLabel] = useState<string>(
    campaign.alternateCuts && campaign.alternateCuts.length > 0
      ? campaign.alternateCuts[0].label
      : 'Primary Ad Cut'
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlayControls, setShowOverlayControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // When switching cuts
  const handleCutChange = (url: string, label: string) => {
    setActiveVideoUrl(url);
    setActiveCutLabel(label);
    setHasError(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Autoplay/play prevented:', e);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleReset = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Specific WhatsApp prefill for this campaign
  const campaignWhatsAppUrl = getWhatsAppUrl(
    `Hi Faiz, I saw your ${campaign.title} on your portfolio. I'd like to discuss a similar AI UGC ad campaign for my brand!`
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col bg-[#121215] border border-[#222227] hover:border-[#3f3f46] transition-all duration-300 rounded-2xl overflow-hidden shadow-xl"
    >
      {/* 9:16 Video Player Container */}
      <div className="relative aspect-[9/16] bg-black overflow-hidden group">
        {!activeVideoUrl || hasError ? (
          /* Placeholder state if video URL is missing or broken */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#18181b] border-b border-[#27272a]">
            <AlertCircle className="w-10 h-10 text-[#ff5722] mb-3" />
            <h4 className="text-base font-semibold text-white mb-1">
              Video URL Placeholder
            </h4>
            <p className="text-xs text-[#a1a1aa] mb-4 max-w-xs">
              No MP4 source found at this path. Open{' '}
              <code className="text-[#ff5722] bg-[#27272a] px-1 py-0.5 rounded text-[11px]">
                src/config/portfolioConfig.ts
              </code>{' '}
              to set your video URL.
            </p>
            <div className="text-[11px] text-[#71717a] font-mono border border-dashed border-[#3f3f46] p-2 rounded">
              Current URL: {activeVideoUrl || 'None'}
            </div>
          </div>
        ) : (
          /* Real HTML5 Video element per prompt requirement */
          <>
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster={campaign.posterUrl || undefined}
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            >
              <source src={activeVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Gradient Scrim at top and bottom for readability */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Bar inside Player: Aspect Ratio & Cut Title */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
              <span className="text-[11px] font-mono tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                9:16 VERTICAL AD
              </span>
              <span className="text-[11px] font-medium text-emerald-400 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                Direct Response
              </span>
            </div>

            {/* Big Centered Play Button when paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                type="button"
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#ff5722]/90 hover:bg-[#ff5722] text-white flex items-center justify-center shadow-2xl shadow-[#ff5722]/40 transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
                aria-label={`Play ${campaign.title}`}
              >
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </button>
            )}

            {/* Floating Quick Action Overlay (Mute & Fullscreen quick toggles) */}
            <div className="absolute bottom-16 right-3 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={toggleMute}
                type="button"
                className="p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-[#a1a1aa]" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#ff5722]" />
                )}
              </button>
              <button
                onClick={handleFullscreen}
                type="button"
                className="p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
                title="Fullscreen"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                type="button"
                className="p-2 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
                title="Replay from start"
                aria-label="Replay"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Alternate Video Cuts Selector (If campaign has multiple cuts provided) */}
      {campaign.alternateCuts && campaign.alternateCuts.length > 1 && (
        <div className="px-4 py-2 bg-[#09090b] border-t border-b border-[#222227] flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1.5 text-[#a1a1aa] whitespace-nowrap shrink-0">
            <Layers className="w-3.5 h-3.5 text-[#ff5722]" />
            <span className="font-medium text-[11px]">Alternate Cuts:</span>
          </div>
          <div className="flex items-center gap-1">
            {campaign.alternateCuts.map((cut, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleCutChange(cut.videoUrl, cut.label)}
                className={`px-2 py-1 text-[11px] font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeVideoUrl === cut.videoUrl
                    ? 'bg-[#ff5722] text-white'
                    : 'bg-[#18181b] text-[#a1a1aa] hover:text-white hover:bg-[#27272a]'
                }`}
              >
                Cut {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Card Content & Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-3">
          {/* Category Label (Zero-Pill discipline: unboxed clean text) */}
          <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
            <span className="text-[#ff5722] font-semibold tracking-wide uppercase">
              {campaign.category}
            </span>
            <span className="text-[#71717a] font-mono text-[11px]">
              {campaign.variationsCount}
            </span>
          </div>

          {/* Campaign Title */}
          <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
            {campaign.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            {campaign.description}
          </p>

          {/* Key Feature Bullets (Clean unboxed line items) */}
          <ul className="pt-1 space-y-1 text-xs text-[#d4d4d8]">
            {campaign.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Actions: WhatsApp CTA + Inquire Option */}
        <div className="pt-3 border-t border-[#222227] space-y-2">
          {/* Main WhatsApp CTA to discuss a similar campaign */}
          <a
            href={campaignWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#ff5722] hover:bg-[#f4511e] rounded-xl shadow-md shadow-[#ff5722]/20 transition-all cursor-pointer active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>{campaign.ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Inquire link that auto-populates form */}
          {onSelectCampaignForForm && (
            <button
              type="button"
              onClick={() => onSelectCampaignForForm(campaign.title)}
              className="w-full text-center text-xs text-[#a1a1aa] hover:text-white py-1 transition-colors cursor-pointer"
            >
              Or fill out brief inquiry form ↓
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
