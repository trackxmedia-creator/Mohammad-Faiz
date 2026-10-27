/**
 * =========================================================================
 * FAIZ KHAN - PORTFOLIO CONFIGURATION
 * =========================================================================
 * You can easily edit your contact information, phone numbers, email,
 * and video URLs directly in this file.
 * 
 * 1. WHATSAPP: Put your number in international format without +, spaces, or dashes.
 *    Example: "919876543210" or "13105551234"
 * 2. EMAIL: Your business inbox for prospective client inquiries.
 * 3. VIDEOS: Absolute or relative MP4 URLs for your three featured campaigns.
 * =========================================================================
 */

export const SITE_CONFIG = {
  // Brand & Identity
  brandName: "Faiz Khan",
  roleTitle: "AI UGC Ads & Brand Creative Specialist",
  tagline: "AI UGC Ads That Turn Attention Into Customers.",
  supportingText:
    "High-impact AI-powered UGC creatives and product commercials designed for modern e-commerce brands.",

  // Contact Information (Easily editable)
  // International format: country code + number with NO plus, spaces, or dashes
  whatsappNumber: "91YOURNUMBER", // Replace with your WhatsApp number e.g. "919876543210"
  contactEmail: "trackxmedia@gmail.com", // Your primary contact email

  // Pre-filled WhatsApp message
  whatsappDefaultMessage:
    "Hi Faiz, I'm interested in your AI UGC ad services. I'd like to discuss a campaign for my brand.",

  // Featured Portfolio Video URLs (HTML5 MP4s)
  // Local video assets uploaded for the 3 core campaigns:
  hairOilVideoUrl: "/assets/aistudio/Dropper_bottle_product_commercia__20261027192618_69ac62e4.mp4",
  energyDrinkVideoUrl: "/assets/aistudio/Java_Monster_energy_drink_commer__20261027192721_4c6871b3.mp4",
  coffeeBrandVideoUrl: "/assets/aistudio/Mushroom_coffee_product_commercial_20261027192436_93a6da86.mp4",

  // Custom poster/thumbnail URLs (leave empty "" to let video player display the first frame)
  hairOilPosterUrl: "",
  energyDrinkPosterUrl: "",
  coffeeBrandPosterUrl: "",

  // Social / Links
  socialLinks: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    tiktok: "https://tiktok.com",
  },
};

/**
 * Helper to generate valid WhatsApp click-to-chat links
 */
export function getWhatsAppUrl(
  customMessage?: string,
  overrideNumber?: string
): string {
  const number = (overrideNumber || SITE_CONFIG.whatsappNumber).replace(
    /[^0-9]/g,
    ""
  );
  const message = encodeURIComponent(
    customMessage || SITE_CONFIG.whatsappDefaultMessage
  );
  return `https://wa.me/${number || "91YOURNUMBER"}?text=${message}`;
}

/**
 * Helper to generate mailto links
 */
export function getMailtoUrl(
  subject = "Inquiry: AI UGC Ad Creative Campaign",
  body = "Hi Faiz,\n\nI came across your portfolio and would love to discuss an AI UGC video ad campaign for our brand.\n\nBrand Name:\nWebsite:\nTarget Launch Date:\n\nLooking forward to speaking with you!"
): string {
  return `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export interface FeaturedCampaign {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  posterUrl?: string;
  aspectRatio: string;
  ctaText: string;
  keyFeatures: string[];
  variationsCount: string;
  targetPlacements: string;
  // Alternate cuts provided
  alternateCuts?: {
    label: string;
    videoUrl: string;
  }[];
}

export const FEATURED_CAMPAIGNS: FeaturedCampaign[] = [
  {
    id: "hair-oil",
    title: "Hair Oil & Skincare Product Ad",
    category: "Beauty & Hair Care",
    description:
      "A cinematic botanical commercial combining micro-fluid droplet physics, amber bottle floating aesthetics, and ingredient callouts built for beauty DTC brands.",
    videoUrl: SITE_CONFIG.hairOilVideoUrl,
    posterUrl: SITE_CONFIG.hairOilPosterUrl,
    aspectRatio: "9:16",
    ctaText: "Discuss a Beauty Campaign",
    keyFeatures: [
      "Macro droplet impact simulation",
      "Organic botanical lighting",
      "Direct-response benefit text overlays",
    ],
    variationsCount: "3 Creative Angles",
    targetPlacements: "Meta Ads · TikTok · Instagram Reels",
    alternateCuts: [
      {
        label: "Baboon Rosemary & Biotin Serum (Primary)",
        videoUrl: "/assets/aistudio/Dropper_bottle_product_commercia__20261027192618_69ac62e4.mp4",
      },
      {
        label: "Chi Pumpkin Seed Oil CGI",
        videoUrl: "/assets/aistudio/Pumpkin_seed_oil_commercial_CGI_20261027192501_38e9d871.mp4",
      },
      {
        label: "Baboon Serum Alternate Cut",
        videoUrl: "/assets/aistudio/video_53fa6fc3.mp4",
      },
    ],
  },
  {
    id: "energy-drink",
    title: "Energy Drink Can Promo",
    category: "Beverage & Lifestyle",
    description:
      "A high-impact kinetic product commercial featuring salted caramel Java Monster. Combines explosive liquid coffee pours, athletic lifestyle cuts, and mountain sunrise payoff.",
    videoUrl: SITE_CONFIG.energyDrinkVideoUrl,
    posterUrl: SITE_CONFIG.energyDrinkPosterUrl,
    aspectRatio: "9:16",
    ctaText: "Discuss a Beverage Campaign",
    keyFeatures: [
      "Dynamic 3D liquid splash physics",
      "Fast-paced lifestyle cutaways",
      "High-tempo sensory sound & visual synchronization",
    ],
    variationsCount: "Full Cinematic Ad",
    targetPlacements: "TikTok Ads · Meta Feeds · YouTube Shorts",
    alternateCuts: [
      {
        label: "Java Monster Salted Caramel Commercial",
        videoUrl: "/assets/aistudio/Java_Monster_energy_drink_commer__20261027192721_4c6871b3.mp4",
      },
    ],
  },
  {
    id: "premium-coffee",
    title: "Premium Coffee Brand Campaign",
    category: "DTC Food & Coffee",
    description:
      "A dual-concept campaign for Ryze Mushroom Coffee: pairing high-end product splash commercials with authentic talking-head kitchen UGC creator demonstrations.",
    videoUrl: SITE_CONFIG.coffeeBrandVideoUrl,
    posterUrl: SITE_CONFIG.coffeeBrandPosterUrl,
    aspectRatio: "9:16",
    ctaText: "Discuss a Coffee Campaign",
    keyFeatures: [
      "USDA Organic badge highlight",
      "Morning ritual sensory cues",
      "Authentic UGC testimonial hook",
    ],
    variationsCount: "Commercial + UGC Cuts",
    targetPlacements: "Meta In-Feed · TikTok Spark Ads · Reels",
    alternateCuts: [
      {
        label: "Ryze Commercial (Product & Splash)",
        videoUrl: "/assets/aistudio/Mushroom_coffee_product_commercial_20261027192436_93a6da86.mp4",
      },
      {
        label: "Ryze UGC Creator Testimonial Cut A",
        videoUrl: "/assets/aistudio/Creating_mushroom_coffee_commerc__20261027192417_6f396f5f.mp4",
      },
      {
        label: "Ryze UGC Creator Testimonial Cut B",
        videoUrl: "/assets/aistudio/Creating_mushroom_coffee_commerc__20261027172940_6f396f5f.mp4",
      },
      {
        label: "Ryze UGC Creator Testimonial Cut C",
        videoUrl: "/assets/aistudio/Creating_mushroom_coffee_commerc__20261027172940__1__6f396f5f.mp4",
      },
    ],
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  ratio: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ai-ugc",
    title: "AI UGC Video Ads",
    tagline: "Authentic, relatable creator-style video ads that bypass ad fatigue.",
    description:
      "Native-feeling video ads engineered for TikTok and Instagram feeds. Features realistic creator avatars, conversational hooks, product demonstrations, and relatable problem-solution storytelling.",
    deliverables: [
      "3-second scroll-stopping hooks",
      "Conversational direct-to-camera delivery",
      "Native subtitle captions & text overlays",
      "TikTok & Reels sound design",
    ],
    bestFor: "DTC brands wanting organic viral creative testing",
    ratio: "9:16 Vertical",
  },
  {
    id: "hypermotion-commercials",
    title: "Hypermotion Product Commercials",
    tagline: "Hyper-realistic CGI & visual effects that look like six-figure studio shoots.",
    description:
      "High-end visual product commercials featuring photorealistic 3D liquid splashes, macro droplet dynamics, floating ingredient explosions, and cinema-grade lighting.",
    deliverables: [
      "Ultra-fluid liquid & ingredient simulations",
      "Macro texture & packaging close-ups",
      "Cinematic lighting & volumetric depth",
      "Custom sound effects & audio mastering",
    ],
    bestFor: "Beverage, skincare, luxury cosmetics, and supplements",
    ratio: "9:16 & 4:5 Formats",
  },
  {
    id: "direct-response-creatives",
    title: "Direct-Response Ad Creatives",
    tagline: "Creatives built with one sole purpose: customer acquisition and high ROAS.",
    description:
      "Every frame is structured using conversion rate optimization principles: hook, pain point agitation, unique mechanism demonstration, offer presentation, and unambiguous call-to-action.",
    deliverables: [
      "Hook-rate optimized first 3 seconds",
      "Offer callouts & discount badge animations",
      "Clear visual proof & product demo",
      "Direct conversion action cues",
    ],
    bestFor: "Brands scaling Meta Ads and TikTok Ad Manager spends",
    ratio: "9:16 Vertical",
  },
  {
    id: "ad-variations-testing",
    title: "Multiple Ad Variations & Creative Testing",
    tagline: "Scale your winners and avoid creative fatigue with modular iterations.",
    description:
      "Instead of gambling on a single video ad, receive batches of modular creative variations. We test distinct hooks, audio tracks, caption styles, and ending CTAs to find your winning formula.",
    deliverables: [
      "5 to 15 modular hook variations",
      "Alternative text hook overlays",
      "Varied pacing & background music",
      "A/B test ready file naming structure",
    ],
    bestFor: "Performance marketers seeking consistent ad winners",
    ratio: "Batch 9:16",
  },
  {
    id: "product-social-videos",
    title: "Product-Focused Social Video Ads",
    tagline: "Showcase textures, packaging, and sensory details that trigger impulse buys.",
    description:
      "Short-form aesthetic product showcases highlighting bottle drops, pouring rituals, unboxing reveals, and tactile packaging appeal designed to turn casual scrollers into buyers.",
    deliverables: [
      "Tactile sensory visual cues",
      "Unboxing & application rituals",
      "Crisp 4K color-graded exports",
      "Custom brand typography styling",
    ],
    bestFor: "Coffee brands, wellness drops, and premium consumer goods",
    ratio: "9:16 Vertical",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  keyAction: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Product & Brand Research",
    description:
      "We dive deep into your product's unique value proposition, target customer demographics, competitor ad libraries, and current top-performing creative angles.",
    keyAction: "Customer pain points, top competitor hooks, and brand guidelines analysis",
  },
  {
    number: "02",
    title: "Hook & Script Development",
    description:
      "Writing high-retention direct-response scripts focused on the critical first 3-second hook rate, benefit-driven messaging, and conversion-focused CTAs.",
    keyAction: "Multiple hook concepts and direct-response script outlines",
  },
  {
    number: "03",
    title: "AI Video Production",
    description:
      "Generating hyper-realistic video scenes, authentic creator delivery, fluid simulations, and cinematic product shots using cutting-edge generative video pipelines.",
    keyAction: "Custom photorealistic 9:16 video generation & motion control",
  },
  {
    number: "04",
    title: "Editing & Sound Design",
    description:
      "Polishing every cut with native social captions, dynamic pacing, SFX (splashes, drops, clicks), and licensed background music tuned for social algorithms.",
    keyAction: "Color grading, sound design, hook captions, and pacing adjustments",
  },
  {
    number: "05",
    title: "Final Delivery & Creative Variations",
    description:
      "Delivering ready-to-launch 9:16 MP4 ad files along with modular hook variations organized for seamless upload into Meta, TikTok, and YouTube ad managers.",
    keyAction: "Full HD/4K deliverables + multiple hook cuts ready for media buying",
  },
];

export interface WhyWorkPoint {
  title: string;
  description: string;
  tag: string;
}

export const WHY_WORK_POINTS: WhyWorkPoint[] = [
  {
    title: "Creative Speed",
    description:
      "Traditional video shoots take 3 to 6 weeks between finding creators, shipping physical products, and waiting for footage. We deliver production-grade ad creatives in 48 to 72 hours.",
    tag: "48-72h Turnaround",
  },
  {
    title: "Scalable Variations",
    description:
      "Test 10+ different hooks, scripts, and visual concepts in parallel without blowing your production budget. Find what scales without paying creator re-shoot fees.",
    tag: "Effortless A/B Testing",
  },
  {
    title: "Product Storytelling",
    description:
      "Showcase impossible angles: macro droplet splashes, floating organic botanicals, and dynamic lighting that would normally require a $50,000 robotic camera arm setup.",
    tag: "Cinematic Visuals",
  },
  {
    title: "Performance-Focused Concepts",
    description:
      "Every video is designed by creative strategists who understand scroll-stop rate, 3-second retention, hold rate, and click-through metrics — not just pretty visuals.",
    tag: "Engineered for ROAS",
  },
];
