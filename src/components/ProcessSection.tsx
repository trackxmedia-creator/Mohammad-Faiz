import React from 'react';
import { PROCESS_STEPS } from '../config/portfolioConfig';
import { ArrowRight, Search, FileText, Cpu, Sliders, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#ff5722]" />;
      case 1:
        return <FileText className="w-5 h-5 text-[#ff5722]" />;
      case 2:
        return <Cpu className="w-5 h-5 text-[#ff5722]" />;
      case 3:
        return <Sliders className="w-5 h-5 text-[#ff5722]" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-[#ff5722]" />;
      default:
        return <ArrowRight className="w-5 h-5 text-[#ff5722]" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#09090b] relative border-t border-[#222227]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#ff5722] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>Workflow & Methodology</span>
            <span className="text-[#52525b]">·</span>
            <span className="text-[#a1a1aa] font-normal normal-case">
              From Brief to Ad Account Ready
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The 5-Stage Creative Production Pipeline
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
            A battle-tested process designed to turn complex DTC value propositions
            into high-converting, scroll-stopping ad creatives in 48 to 72 hours.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between bg-[#121215] border border-[#222227] hover:border-[#3f3f46] rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header: Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-[#ff5722]">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#18181b] border border-[#27272a] flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Key Output */}
              <div className="pt-4 mt-4 border-t border-[#1f1f23]">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#71717a] mb-1">
                  Deliverable Focus
                </div>
                <p className="text-xs text-[#d4d4d8] font-medium leading-normal">
                  {step.keyAction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
