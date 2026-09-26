import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Check, Copy, ArrowUpRight, MapPin } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0B0E] relative overflow-hidden">
      {/* Topographic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5A623]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Appreciation Header directly matching PDF Page 6! */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-6">
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5A623] font-display uppercase leading-none">
              Thankyou
            </h2>
            {/* Iconic yellow underline accent from PDF page 6 */}
            <div className="h-1.5 w-full bg-[#F5A623] mt-2 rounded-full" />
          </div>

          <p className="text-xl sm:text-2xl text-white font-bold font-display leading-snug">
            Thank you for visiting my portfolio!
          </p>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-balance max-w-2xl mx-auto">
            Your interest in my work means a lot to me. Whether you’re here to explore my designs, discuss a new brand identity, or collaborate on social media campaign posters, I truly appreciate your time and attention.
          </p>
        </div>

        {/* Contact Strip matching Page 6 bottom bar */}
        <div className="bg-[#141622] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Phone & WhatsApp Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F5A623]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
                      Direct Phone & WhatsApp
                    </div>
                    <a
                      href={`tel:${designerProfile.phone}`}
                      className="text-lg font-bold text-white hover:text-[#F5A623] transition-colors"
                    >
                      {designerProfile.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(designerProfile.phoneDisplay, 'phone')}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-3">
                <a
                  href={designerProfile.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${designerProfile.phone}`}
                  className="py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F5A623]/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
                      Official Email
                    </div>
                    <a
                      href={`mailto:${designerProfile.email}`}
                      className="text-base font-bold text-white hover:text-[#F5A623] transition-colors truncate block"
                    >
                      {designerProfile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(designerProfile.email, 'email')}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-3">
                <a
                  href={`mailto:${designerProfile.email}?subject=Design%20Inquiry%20-%20${encodeURIComponent(designerProfile.name)}`}
                  className="flex-1 py-2.5 px-4 bg-[#F5A623] hover:bg-[#FFB834] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#F5A623]/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
                <button
                  onClick={() => handleCopy(designerProfile.email, 'email')}
                  className="py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Location & Availability Footer Notice */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Location: New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently accepting freelance projects & contract work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
