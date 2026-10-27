import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, Globe, FileCode, Video, MessageSquare } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'config' | 'deploy' | 'test' | 'standalone'>('config');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0e0e11] border border-[#27272a] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#222227] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722]" />
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Client Setup, Editing & Free Deployment Guide
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Complete step-by-step instructions to configure, test, and host your portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-[#a1a1aa] hover:text-white hover:bg-[#18181b] rounded-xl transition-colors cursor-pointer"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-[#222227] flex gap-2 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'config'
                ? 'text-[#ff5722] border-[#ff5722]'
                : 'text-[#a1a1aa] border-transparent hover:text-white'
            }`}
          >
            1. WhatsApp, Email & Videos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('deploy')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'deploy'
                ? 'text-[#ff5722] border-[#ff5722]'
                : 'text-[#a1a1aa] border-transparent hover:text-white'
            }`}
          >
            2. Free 1-Click Hosting
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('test')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'test'
                ? 'text-[#ff5722] border-[#ff5722]'
                : 'text-[#a1a1aa] border-transparent hover:text-white'
            }`}
          >
            3. Testing All Buttons
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('standalone')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'standalone'
                ? 'text-[#ff5722] border-[#ff5722]'
                : 'text-[#a1a1aa] border-transparent hover:text-white'
            }`}
          >
            4. Standalone HTML/CSS/JS Export
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 text-sm text-[#d4d4d8]">
          {/* TAB 1: Config */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#121215] border border-[#27272a] space-y-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#ff5722]" />
                  <span>Where to edit everything in 30 seconds</span>
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Open the single configuration file:{' '}
                  <code className="text-[#ff5722] bg-[#18181b] px-2 py-0.5 rounded font-mono text-xs">
                    src/config/portfolioConfig.ts
                  </code>
                  . All your business settings, video URLs, and contact handles are defined right at the top.
                </p>
              </div>

              {/* Step 1: WhatsApp */}
              <div className="space-y-2">
                <h5 className="font-semibold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>1. Change your WhatsApp Number</span>
                </h5>
                <p className="text-xs text-[#a1a1aa]">
                  Enter your number in international format with NO plus sign (+), spaces, or hyphens:
                </p>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] font-mono text-xs text-emerald-400 overflow-x-auto">
{`// In src/config/portfolioConfig.ts
whatsappNumber: "91YOURNUMBER", // Replace with your country code + digits, e.g. "919876543210"`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'whatsappNumber: "91YOURNUMBER",',
                        'wa'
                      )
                    }
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-white text-xs cursor-pointer"
                  >
                    {copiedKey === 'wa' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Step 2: Email */}
              <div className="space-y-2">
                <h5 className="font-semibold text-white">2. Change your Contact Email</h5>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] font-mono text-xs text-white overflow-x-auto">
{`// In src/config/portfolioConfig.ts
contactEmail: "trackxmedia@gmail.com", // Set your preferred client inbox`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'contactEmail: "trackxmedia@gmail.com",',
                        'email'
                      )
                    }
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-white text-xs cursor-pointer"
                  >
                    {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Step 3: Video URLs */}
              <div className="space-y-2">
                <h5 className="font-semibold text-white flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#ff5722]" />
                  <span>3. Replace or Update Video URLs</span>
                </h5>
                <p className="text-xs text-[#a1a1aa]">
                  You can drop new MP4 files into <code className="text-[#ff5722]">/public/videos/</code> or host them on Cloudflare R2, AWS S3, or Supabase Storage and paste the URLs:
                </p>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] font-mono text-xs text-white overflow-x-auto">
{`// In src/config/portfolioConfig.ts
hairOilVideoUrl: "/assets/aistudio/Dropper_bottle_product_commercia__20261027192618_69ac62e4.mp4",
energyDrinkVideoUrl: "/assets/aistudio/Java_Monster_energy_drink_commer__20261027192721_4c6871b3.mp4",
coffeeBrandVideoUrl: "/assets/aistudio/Mushroom_coffee_product_commercial_20261027192436_93a6da86.mp4",`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'hairOilVideoUrl: "...",\nenergyDrinkVideoUrl: "...",\ncoffeeBrandVideoUrl: "...",',
                        'videos'
                      )
                    }
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-white text-xs cursor-pointer"
                  >
                    {copiedKey === 'videos' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Deploy */}
          {activeTab === 'deploy' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#121215] border border-[#27272a]">
                <h4 className="text-base font-bold text-white mb-1">
                  100% Free Hosting Options (Zero Cost Forever)
                </h4>
                <p className="text-xs text-[#a1a1aa]">
                  You do not need to pay for any server or database. Here are the 3 easiest free hosting platforms:
                </p>
              </div>

              {/* Option 1: Vercel */}
              <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#ff5722]" />
                    <span>Option A: Vercel (Recommended - Free Tier)</span>
                  </h5>
                  <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    1-Click Deploy
                  </span>
                </div>
                <ol className="list-decimal list-inside text-xs text-[#a1a1aa] space-y-1.5">
                  <li>Push your repository to GitHub or GitLab.</li>
                  <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#ff5722] underline">vercel.com</a> and click "Add New Project".</li>
                  <li>Import your repo. Vercel automatically detects Vite + React.</li>
                  <li>Click "Deploy". Your site is live on a custom `.vercel.app` domain with free SSL, and you can attach your custom domain for free!</li>
                </ol>
              </div>

              {/* Option 2: Netlify */}
              <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
                <h5 className="font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Option B: Netlify (Free Drag & Drop or Git)</span>
                </h5>
                <ol className="list-decimal list-inside text-xs text-[#a1a1aa] space-y-1.5">
                  <li>Run <code className="text-[#ff5722]">npm run build</code> in your terminal.</li>
                  <li>Drag and drop the generated <code className="text-[#ff5722]">dist/</code> folder right onto <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-[#ff5722] underline">app.netlify.com/drop</a>.</li>
                  <li>Your site is instantly live globally with zero configuration.</li>
                </ol>
              </div>

              {/* Option 3: GitHub Pages */}
              <div className="p-5 rounded-xl bg-[#18181b] border border-[#27272a] space-y-3">
                <h5 className="font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Option C: GitHub Pages</span>
                </h5>
                <p className="text-xs text-[#a1a1aa]">
                  Add <code className="text-[#ff5722]">"base": "./"</code> to your <code className="text-[#ff5722]">vite.config.ts</code>, run build, and publish the <code className="text-[#ff5722]">dist</code> branch under your GitHub repository settings.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Testing */}
          {activeTab === 'test' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">
                How to Test All Navigation & Buttons
              </h4>
              <div className="space-y-3 text-xs text-[#a1a1aa]">
                <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-1">
                  <p className="font-semibold text-white">1. Portfolio Navigation</p>
                  <p>Click "Portfolio" in the navbar or "View My Work" in the Hero. The page smoothly scrolls right to the 3 featured campaign video cards.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-1">
                  <p className="font-semibold text-white">2. Video Playback & Controls</p>
                  <p>Click any video player or the center play icon. Test mute/unmute, fullscreen, and scrubbing. Notice the 9:16 vertical framing is strictly preserved across mobile and desktop.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-1">
                  <p className="font-semibold text-white">3. WhatsApp Direct Click-to-Chat</p>
                  <p>Click "Chat on WhatsApp". It opens a clean <code className="text-[#25D366]">wa.me</code> link with the prefilled message: <em>"Hi Faiz, I'm interested in your AI UGC ad services..."</em>.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] space-y-1">
                  <p className="font-semibold text-white">4. Inquiry Form</p>
                  <p>Fill out the inquiry form in the Contact section and submit. You will see direct dispatch buttons to send the formatted brief immediately via WhatsApp or Email.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Standalone Export */}
          {activeTab === 'standalone' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">
                Standalone HTML, CSS & Vanilla JS Trio
              </h4>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                For convenience, we have also generated complete standalone files inside{' '}
                <code className="text-[#ff5722] bg-[#18181b] px-2 py-0.5 rounded font-mono">
                  /public/standalone-export/
                </code>
                :
              </p>
              <ul className="list-disc list-inside text-xs text-[#a1a1aa] space-y-1">
                <li><code className="text-white">index.html</code> – Clean semantic markup with all 5 sections & 3 video players</li>
                <li><code className="text-white">styles.css</code> – Dark charcoal agency styling with orange accents</li>
                <li><code className="text-white">script.js</code> – Plain vanilla JS with the editable CONFIG object at the top</li>
              </ul>
              <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-xs text-[#a1a1aa]">
                <p className="font-semibold text-white mb-1">Beginner Friendly:</p>
                <p>
                  You can copy the contents of that folder into any static server, Webflow embed, WordPress custom page, or Apache/Nginx host without needing Node.js or Vite!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#222227] bg-[#09090b] flex items-center justify-between">
          <span className="text-xs text-[#71717a]">
            Faiz Khan · AI UGC Ads & Creative Agency
          </span>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-xs font-semibold transition-all cursor-pointer"
          >
            Got it, Let's Build!
          </button>
        </div>
      </div>
    </div>
  );
};
