import React from 'react';
import { ShieldCheck, Armchair, Tag, Headphones } from 'lucide-react';
import { BenefitItem } from '@/data/servicesData';

interface WhyChooseUsProps {
  benefits: BenefitItem[];
}

const BENEFIT_ICON_MAP = {
  ShieldCheck: ShieldCheck,
  Armchair: Armchair,
  Tag: Tag,
  Headphones: Headphones,
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ benefits }) => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Heading with subtle gold accent wings */}
        <div className="inline-flex items-center justify-center gap-3.5 mb-8">
          <span className="w-8 h-[2px] bg-[#FFB900] rounded-full inline-block" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10233D] tracking-tight">
            Why Choose Our Services?
          </h2>
          <span className="w-8 h-[2px] bg-[#FFB900] rounded-full inline-block" />
        </div>

        {/* 4 horizontal benefit cards in 1 row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {benefits.map((benefit) => {
            const IconComponent = BENEFIT_ICON_MAP[benefit.iconName] || ShieldCheck;
            return (
              <div
                key={benefit.id}
                className="bg-white border border-slate-200 rounded-xl p-4 min-h-[82px] flex items-center gap-3.5 shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFFBEB] text-[#D97706] flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#10233D] leading-snug mb-0.5">
                    {benefit.title}
                  </h3>
                  <p className="text-[12px] text-[#64748B] leading-tight m-0">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
