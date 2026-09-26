import React from 'react';
import { Layout, Palette, Printer, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { clientServices } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const serviceIcons = [Layout, Palette, Printer, PenTool];

  return (
    <section id="services" className="py-24 bg-[#0E1017] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] tracking-widest uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#F5A623]" />
              <span>Design Offerings</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
              Design <span className="text-[#F5A623]">Services</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md">
            Comprehensive creative solutions engineered to give your brand distinction, market authority, and maximum conversion.
          </p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientServices.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-[#141622] border border-white/10 hover:border-[#F5A623]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] mb-6 group-hover:scale-110 group-hover:bg-[#F5A623] group-hover:text-black transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-display leading-snug mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Clean unboxed tags with typographic separators */}
                  <div className="pt-4 border-t border-white/5 mb-4">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400 font-mono">
                      {service.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {tIdx < service.tags.length - 1 && (
                            <span className="text-zinc-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/917989082551?text=${encodeURIComponent(`Hi Aquib, I am interested in discussing your ${service.title} services!`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 bg-white/5 hover:bg-[#F5A623] text-zinc-300 hover:text-black text-xs font-bold rounded-lg border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inquire for {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
