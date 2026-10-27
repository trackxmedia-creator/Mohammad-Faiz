import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/portfolioConfig';
import {
  MessageSquare,
  Mail,
  Send,
  ArrowUpRight,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  initialCampaign?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCampaign,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    service: initialCampaign || 'AI UGC Video Ads',
    budget: '$1,000 - $3,000',
    details: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showBackendInfo, setShowBackendInfo] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Compile formatted inquiry text
  const formattedInquiryMessage = `Hi Faiz, I'd like to discuss an AI UGC ad campaign!
• Name: ${formData.name || 'Not specified'}
• Brand / Company: ${formData.brand || 'Not specified'}
• Contact Email: ${formData.email || 'Not specified'}
• Service Needed: ${formData.service}
• Budget Range: ${formData.budget}
• Campaign Details: ${formData.details || 'Looking forward to reviewing options.'}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#09090b] relative border-t border-[#222227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#ff5722] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>Get in Touch</span>
            <span className="text-[#52525b]">·</span>
            <span className="text-[#a1a1aa] font-normal normal-case">
              Direct Contact & Campaign Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Turn Attention Into Customers?
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            Whether you need a single winning TikTok ad or an entire batch of
            modular creative testing angles, reach out directly. I respond
            within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct WhatsApp & Email Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-7 rounded-2xl bg-[#121215] border border-[#222227] hover:border-[#ff5722]/50 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Chat on WhatsApp</h3>
                  <p className="text-xs text-[#a1a1aa]">Fastest response · Direct communication</p>
                </div>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Connect directly on WhatsApp to share your store link, discuss campaign angles, or ask questions about delivery times.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-[#71717a] font-mono text-center">
                Click-to-chat: wa.me/{SITE_CONFIG.whatsappNumber}
              </div>
            </div>

            {/* Email Card */}
            <div className="p-7 rounded-2xl bg-[#121215] border border-[#222227] hover:border-[#3f3f46] transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center text-[#ff5722]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email Inquiries</h3>
                  <p className="text-xs text-[#a1a1aa]">Formal briefs & NDA requests</p>
                </div>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Prefer to send a project brief, storyboard, or deck over email? Drop a note to my direct inbox.
              </p>
              <a
                href={getMailtoUrl()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#18181b] hover:bg-[#27272a] border border-[#3f3f46] hover:border-[#ff5722]/40 rounded-xl transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#ff5722]" />
                <span>Email {SITE_CONFIG.contactEmail}</span>
                <ArrowUpRight className="w-4 h-4 text-[#71717a]" />
              </a>
            </div>

            {/* Free Backend Explanation Toggle */}
            <button
              type="button"
              onClick={() => setShowBackendInfo(!showBackendInfo)}
              className="inline-flex items-center gap-2 text-xs text-[#71717a] hover:text-[#a1a1aa] transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>How does this contact form deliver messages?</span>
            </button>

            {showBackendInfo && (
              <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-xs text-[#a1a1aa] space-y-2 animate-in fade-in">
                <p className="font-semibold text-white">Zero Paid Backend Required:</p>
                <p>
                  This form directly formats your prospect's inputs so they can send it instantly via WhatsApp or their default Email client with 1 click.
                </p>
                <p>
                  If you want form submissions to arrive directly in your inbox without user email clients, simply connect a free endpoint like{' '}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ff5722] underline"
                  >
                    Formspree
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://web3forms.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ff5722] underline"
                  >
                    Web3Forms
                  </a>{' '}
                  (instructions included in the Setup Guide).
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Short Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-2xl bg-[#121215] border border-[#222227] shadow-xl">
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Project Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa]">
                  Tell me about your product and what you want to achieve with your ads.
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Rivera"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors"
                      />
                    </div>

                    {/* Brand Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                        Brand / Store Website *
                      </label>
                      <input
                        type="text"
                        name="brand"
                        required
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="e.g. yourbrand.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email / Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                        Your Email / Phone *
                      </label>
                      <input
                        type="text"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@yourbrand.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                        Ad Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors"
                      >
                        <option value="AI UGC Video Ads">AI UGC Video Ads</option>
                        <option value="Hypermotion Product Commercials">Hypermotion Product Commercials</option>
                        <option value="Direct-Response Ad Creatives">Direct-Response Ad Creatives</option>
                        <option value="Multiple Ad Variations & Creative Testing">Multiple Ad Variations & Testing</option>
                        <option value="Product-Focused Social Video Ads">Product-Focused Social Video Ads</option>
                        <option value="Full Campaign Package">Full Campaign Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                      Estimated Creative Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors"
                    >
                      <option value="Under $1,000">Under $1,000 (Test campaign / 1-3 ads)</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000 (Multi-variation testing package)</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000 (Full commercial + UGC variations)</option>
                      <option value="$5,000+">$5,000+ (Monthly creative retainer)</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#d4d4d8]">
                      Product & Campaign Details
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Share your product details, key benefits, target audience, or current ad bottlenecks..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors resize-none"
                    />
                  </div>

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#ff5722] hover:bg-[#f4511e] text-white text-base font-semibold shadow-xl shadow-[#ff5722]/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>Submit & Choose Dispatch Method</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-[#71717a]">
                    No obligation. Direct communication with Faiz Khan.
                  </p>
                </form>
              ) : (
                /* Post-submit dispatch options */
                <div className="space-y-6 text-center py-4 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Inquiry Form Prepared!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1 max-w-md mx-auto">
                      Choose how you want to send your project details to Faiz right now:
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-left text-xs text-[#d4d4d8] font-mono whitespace-pre-line max-h-40 overflow-y-auto">
                    {formattedInquiryMessage}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={getWhatsAppUrl(formattedInquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </a>

                    <a
                      href={getMailtoUrl(
                        `Ad Inquiry: ${formData.brand} - ${formData.service}`,
                        formattedInquiryMessage
                      )}
                      className="py-3 px-4 rounded-xl bg-[#18181b] hover:bg-[#27272a] border border-[#3f3f46] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#ff5722]" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
                  >
                    ← Edit inquiry details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
