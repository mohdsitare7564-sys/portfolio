import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Check, Copy, ArrowUpRight, MapPin, Train, Sparkles, Send, Clock, Ticket } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Social Media Campaign', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Audio Train Whistle feedback
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.16);
      }
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', projectType: 'Social Media Campaign', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#F4EFEB] text-[#1A1A1E] relative overflow-hidden border-t-4 border-black">
      {/* Background Vintage Parchment & Platform Lines */}
      <div className="absolute inset-0 bg-railway-parchment opacity-90 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-4 bg-repeat-x bg-[linear-gradient(90deg,#821919_0px,#821919_24px,#FFD200_24px,#FFD200_48px)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Authentic Indian Railways Station Platform Signboard Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block relative">
            {/* Hanging Platform Station Signboard */}
            <div className="bg-[#FAF7F0] border-4 border-black rounded-2xl p-6 sm:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.18)] relative text-center min-w-[300px] sm:min-w-[500px]">
              {/* Top Iron Hanging Chains */}
              <div className="absolute -top-7 left-12 w-2 h-7 bg-black rounded-t" />
              <div className="absolute -top-7 right-12 w-2 h-7 bg-black rounded-t" />

              {/* Station Hindi Title */}
              <div className="text-2xl sm:text-3xl font-extrabold font-hindi text-[#821919] leading-tight">
                पोर्टफोलियोपुर टर्मिनस (प्लेटफॉर्म नं. 1)
              </div>

              {/* Station English Title */}
              <h2 className="text-3xl sm:text-5xl font-black font-railway text-black uppercase tracking-wider leading-none mt-1">
                PORTFOLIOPUR TERMINUS
              </h2>

              {/* Station Codes & Details */}
              <div className="mt-3 pt-2.5 border-t-2 border-black/30 flex items-center justify-between text-xs sm:text-sm font-mono font-bold text-zinc-800">
                <span className="flex items-center gap-1.5 text-[#821919]">
                  <Train className="w-4 h-4 text-[#821919]" />
                  <span>PLATFORM 1</span>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#821919] text-[#FFD200] font-black border border-black">
                  TICKET & INQUIRY COUNTER
                </span>
                <span>उ.रे. / NR</span>
              </div>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-zinc-800 font-bold font-railway uppercase tracking-wide mt-4">
            Thank you for arriving at Portfoliopur Terminus!
          </p>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-mono">
            Whether you are looking to launch an extraordinary social media campaign, craft standout product packaging, or build high-converting AI video ads, book your project ticket today!
          </p>
        </div>

        {/* Main 2-Column Section: Ticket Passes + Reservation Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 5-COL: Railway Journey Passes (Direct Contact Tickets) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Platform Signal Status Card */}
            <div className="bg-[#FAF7F0] border-2 border-black rounded-2xl p-5 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-black animate-pulse shadow-sm" />
                <div>
                  <div className="text-xs font-mono font-black text-black uppercase leading-tight">
                    SIGNAL: GREEN · OPEN FOR PROJECTS
                  </div>
                  <div className="text-[10px] font-mono text-zinc-600 mt-0.5">
                    Currently accepting Q2/Q3 Brand Contracts
                  </div>
                </div>
              </div>
              <Ticket className="w-5 h-5 text-[#821919]" />
            </div>

            {/* PASS 1: Phone & WhatsApp Direct Ticket */}
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#821919] transition-all">
              {/* Ticket Top Notch Cuts */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#F4EFEB] rounded-full border-2 border-black" />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#821919] text-[#FFD200] flex items-center justify-center font-mono font-bold text-sm shadow-md border border-black">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-black text-[#821919] uppercase tracking-wider block">
                      TKT-821919 · EXPRESS CALL / WHATSAPP
                    </span>
                    <a
                      href={`tel:${designerProfile.phone}`}
                      className="text-xl font-black font-railway text-black hover:text-[#821919] transition-colors leading-none"
                    >
                      {designerProfile.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(designerProfile.phoneDisplay, 'phone')}
                  className="p-2 text-zinc-700 hover:text-black rounded-lg hover:bg-zinc-100 border border-black/20 transition-colors"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-dashed border-black/20 flex gap-2">
                <a
                  href={designerProfile.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md border border-black/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${designerProfile.phone}`}
                  className="py-2.5 px-4 bg-white hover:bg-zinc-50 text-black border-2 border-black font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all"
                >
                  <span>Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* PASS 2: Official Email Ticket */}
            <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-[#821919] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#821919] text-[#FFD200] flex items-center justify-center font-mono font-bold text-sm shadow-md border border-black">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono font-black text-[#821919] uppercase tracking-wider block">
                      TKT-AMAN-EMAIL · OFFICIAL DISPATCH
                    </span>
                    <a
                      href={`mailto:${designerProfile.email}`}
                      className="text-base sm:text-lg font-black font-railway text-black hover:text-[#821919] transition-colors truncate block leading-none"
                    >
                      {designerProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(designerProfile.email, 'email')}
                  className="p-2 text-zinc-700 hover:text-black rounded-lg hover:bg-zinc-100 border border-black/20 transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-dashed border-black/20 flex gap-2">
                <a
                  href={`mailto:${designerProfile.email}?subject=Design%20Inquiry%20-%20Portfoliopur`}
                  className="flex-1 py-2.5 px-3 bg-[#821919] hover:bg-[#9E1F1F] text-white font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md border border-black/40"
                >
                  <Mail className="w-4 h-4 text-[#FFD200]" />
                  <span>Send Direct Email</span>
                </a>
                <button
                  onClick={() => handleCopy(designerProfile.email, 'email')}
                  className="py-2.5 px-4 bg-white hover:bg-zinc-50 text-black border-2 border-black font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all"
                >
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Station Location Info Tag */}
            <div className="bg-[#FAF7F0] border-2 border-black/60 rounded-xl p-4 flex items-center justify-between text-xs font-mono font-bold text-zinc-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#821919]" />
                <span>Station Base: New Delhi, India</span>
              </div>
              <span className="text-[10px] text-zinc-500">IST / UTC+5:30</span>
            </div>
          </div>

          {/* RIGHT 7-COL: Railway Project Reservation Request Form (P-Form) */}
          <div className="lg:col-span-7 bg-[#FAF7F0] border-4 border-black rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {/* Form Top Title */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black">
              <div>
                <span className="text-xs font-mono font-black text-[#821919] uppercase tracking-widest block">
                  FORM P-101 · RESERVATION SLIP
                </span>
                <h3 className="text-2xl font-black font-railway uppercase text-black">
                  BOOK A CREATIVE PROJECT
                </h3>
              </div>
              <div className="px-3 py-1 bg-[#821919] text-[#FFD200] rounded font-mono font-black text-xs border border-black">
                EXPRESS DISPATCH
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black font-railway uppercase text-black">
                  PROJECT TICKET DISPATCHED!
                </h4>
                <p className="text-sm font-mono text-zinc-700 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-black">{formData.name}</span>! Your project inquiry ticket has been logged at Platform 1. Aman will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-black uppercase block">
                      Passenger / Client Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma / Acme Corp"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-xl text-black font-bold placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#821919]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-black uppercase block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., rajesh@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-xl text-black font-bold placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#821919]"
                    />
                  </div>
                </div>

                {/* Project Category Selection */}
                <div className="space-y-1.5">
                  <label className="font-bold text-black uppercase block">
                    Select Project Destination *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-xl text-black font-bold focus:outline-none focus:ring-2 focus:ring-[#821919]"
                  >
                    <option value="Social Media Campaign">02 · Social Media Posters & Campaign (डिजिटल धाम)</option>
                    <option value="Packaging Design">03 · Product Packaging & Label Craft (पैकेजिंगगढ़)</option>
                    <option value="Creative Artworks">04 · Creative Pieces & Brand Identity (क्रिएटिवसर)</option>
                    <option value="AI Video Ads">05 · AI Video Ads & Video Production (चलचित्र गढ़)</option>
                    <option value="Full Retainer / Other">Terminus · Full Brand Design Retainer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-bold text-black uppercase block">
                    Project Requirements / Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project scope, timeline, or brand goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-xl text-black font-bold placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#821919] resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#821919] via-[#A01E1E] to-[#821919] hover:from-[#9B1C1C] hover:to-[#B82525] text-white border-2 border-black rounded-xl font-black font-railway text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>DISPATCHING TICKET...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#FFD200]" />
                      <span>DISPATCH PROJECT TICKET</span>
                      <Send className="w-4 h-4 text-[#FFD200]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Railway Buffer Stop Indicator Graphic */}
        <div className="mt-16 pt-8 border-t-2 border-dashed border-black/30 text-center flex flex-col items-center">
          <div className="px-4 py-1.5 rounded-full bg-[#821919] text-[#FFD200] border-2 border-black text-xs font-mono font-black tracking-widest uppercase shadow-md flex items-center gap-2">
            <Train className="w-4 h-4" />
            <span>TERMINUS BUFFER STOP · PLATFORM 1 END OF LINE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
