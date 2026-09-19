import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  DollarSign, 
  Building, 
  Sparkles, 
  CheckCircle2, 
  FileText,
  ChevronDown,
  Cpu,
  Server,
  Building2,
  Lock
} from 'lucide-react';

export default function EnterpriseRiskCalculator({ onOpenMandate }) {
  const navigate = useNavigate();

  // Governance options definition
  const governanceOptions = [
    {
      id: 'iso42001',
      title: 'ISO 42001 AI Governance & CAIO Advisory (AIMS)',
      subtitle: 'Sovereign AIMS & EU AI Act',
      badge: 'Certified CAIO',
      icon: Cpu,
      desc: 'Deterministic model guardrails, sovereign AIMS compliance & EU AI Act readiness.'
    },
    {
      id: 'tprm',
      title: 'Cyber Supply Chain & Third-Party Risk Management (TPRM)',
      subtitle: 'Tier-N Zero-Trust Defenses',
      badge: 'CISO 100 Framework',
      icon: ShieldCheck,
      desc: 'Zero-trust supplier containment, continuous cryptographic attestation & vendor breach defense.'
    },
    {
      id: 'cloud',
      title: 'Multi-Cloud Resilience & Legacy Modernization',
      subtitle: 'Distributed Systems & Scalability',
      badge: 'Cloud Champion',
      icon: Server,
      desc: 'Fault-tolerant distributed backbones, mainframe renewal & hybrid multi-cloud elasticity.'
    },
    {
      id: 'board',
      title: 'Board Oversight & Technology Risk Committee Advisory',
      subtitle: 'Fiduciary Risk Governance',
      badge: 'Boardroom Counsel',
      icon: Building2,
      desc: 'Independent director guidance, audit committee risk models & technology capex accountability.'
    }
  ];

  // Form State
  const [revenue, setRevenue] = useState(500); // in Millions (€)
  const [industry, setIndustry] = useState('Manufacturing & Supply Chain');
  const [focus, setFocus] = useState(governanceOptions[1].title);

  // Selected option object
  const selectedOption = governanceOptions.find(o => o.title === focus) || governanceOptions[0];

  // Calculations
  const revenueMultiplier = revenue >= 1000 ? 0.018 : revenue >= 500 ? 0.015 : 0.012;
  const industryMultiplier = industry.includes('Manufacturing') ? 1.25 : industry.includes('BFSI') ? 1.35 : 1.1;
  const estimatedMitigation = (revenue * revenueMultiplier * industryMultiplier).toFixed(1);
  const timeToAssurance = revenue > 750 ? '90 Days' : '60 Days';
  const complianceIndex = '98.8%';

  const handleDiscussCalculatedMandate = () => {
    const mandateData = {
      name: '',
      title: 'Executive Leader / Board Chair',
      organization: '',
      email: '',
      mandateType: focus,
      timeline: 'Immediate / Next 30 Days',
      brief: `[Pre-calculated Mandate Scope]\n• Enterprise Scale: €${revenue}M Revenue\n• Industry Domain: ${industry}\n• Governance Priority: ${focus}\n• Target Risk Mitigation: €${estimatedMitigation}M\n• Target Compliance Velocity: ${timeToAssurance}`
    };

    if (onOpenMandate) {
      onOpenMandate(mandateData);
    } else {
      navigate('/connect', { state: { prefilled: mandateData } });
    }
  };

  return (
    <div className="w-full bg-[#181c22] rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-10 border border-[#31353c] shadow-2xl relative overflow-hidden text-white">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#262a31]">
        <div>
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-2 h-2 rounded-full bg-[#3456f6] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#bac3ff]">
              Executive Scoping Engine
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            Enterprise AI &amp; Fiduciary Risk Calculator
          </h2>
          <p className="text-xs sm:text-sm text-[#c4c5d8] mt-1 max-w-xl leading-relaxed">
            Model the tangible risk mitigation, audit velocity, and balance sheet protection achievable under Dr. Amit Khandelwal's governance architecture.
          </p>
        </div>

        <div className="px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#10141a] border border-[#31353c] text-[11px] sm:text-xs font-semibold text-[#bac3ff] flex items-center gap-2 self-start md:self-auto shrink-0">
          <Calculator className="w-3.5 h-3.5 text-[#3456f6] shrink-0" />
          <span>Deterministic Boardroom Modeling</span>
        </div>
      </div>

      {/* Interactive Controls & Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-6 sm:pt-8">
        
        {/* Left: Interactive Input Sliders & Selectors */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          
          {/* Revenue Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#dfe2eb]">
              <span>Annual Enterprise Turnover / Scale:</span>
              <span className="text-[#bac3ff] text-base font-extrabold font-mono">
                €{revenue >= 1000 ? `${(revenue / 1000).toFixed(1)}B` : `${revenue}M`}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-2.5 bg-[#10141a] rounded-lg appearance-none cursor-pointer accent-[#3456f6] touch-manipulation"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#8e8fa2]">
              <span>€100M</span>
              <span>€500M</span>
              <span>€1.0B</span>
              <span>€2.0B+</span>
            </div>
          </div>

          {/* Industry Domain */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#dfe2eb]">
              Operating Industry Sector:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {[
                'Manufacturing & Supply Chain',
                'BFSI, Banking & FinTech',
                'Healthcare & Life Sciences',
                'Retail, Telecommunications & Energy'
              ].map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setIndustry(ind)}
                  className={`p-2.5 sm:p-3 rounded-xl text-left text-xs font-semibold transition-all border active:scale-[0.99] touch-manipulation ${
                    industry === ind
                      ? 'bg-[#3456f6]/20 border-[#3456f6] text-white shadow-sm'
                      : 'bg-[#10141a] border-[#262a31] text-[#c4c5d8] hover:border-[#444656]'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Transformation Mandate Scope - 4-Pillar Executive Segmented Cards */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-xs font-bold text-[#dfe2eb]">
              <span>Primary Transformation &amp; Governance Focus:</span>
              <span className="text-[10px] sm:text-[11px] text-[#bac3ff] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{selectedOption?.badge}</span>
              </span>
            </div>

            {/* 4 Interactive Governance Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {governanceOptions.map((opt) => {
                const isSelected = focus === opt.title;
                const Icon = opt.icon;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setFocus(opt.title)}
                    className={`p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-200 border flex flex-col justify-between group active:scale-[0.99] touch-manipulation ${
                      isSelected
                        ? 'bg-[#10141a] border-[#3456f6] ring-2 ring-[#3456f6]/30 shadow-lg shadow-[#3456f6]/20'
                        : 'bg-[#10141a] border-[#262a31] hover:border-[#444656] text-[#c4c5d8]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                          isSelected 
                            ? 'bg-[#3456f6] text-white shadow-md shadow-[#3456f6]/30' 
                            : 'bg-[#181c22] text-[#8e8fa2] border border-[#31353c] group-hover:text-white'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected 
                            ? 'bg-[#bac3ff] text-[#10141a]' 
                            : 'bg-[#181c22] text-[#8e8fa2] border border-[#262a31]'
                        }`}>
                          {opt.badge}
                        </span>
                      </div>

                      <div>
                        <h4 className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                          isSelected ? 'text-white' : 'text-[#dfe2eb] group-hover:text-white'
                        }`}>
                          {opt.title}
                        </h4>
                        <p className="text-[11px] text-[#8e8fa2] mt-1 leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 mt-2.5 border-t border-[#1f242d] flex items-center justify-between gap-2 text-[11px]">
                      <span className={`truncate ${isSelected ? 'text-[#bac3ff] font-semibold' : 'text-[#8e8fa2]'}`}>
                        {opt.subtitle}
                      </span>
                      {isSelected ? (
                        <span className="flex items-center gap-1 text-emerald-400 font-bold text-[10px] shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Selected
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#525b6e] group-hover:text-[#8e8fa2] shrink-0">
                          Select Focus →
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right: Real-time Calculated Metrics & Strategic Deliverables Output */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
          
          <div className="bg-[#10141a] p-4 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl border border-[#262a31] space-y-4 sm:space-y-5 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#8e8fa2]">
                  Projected Executive Value &amp; Protection
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0">
                Audited Benchmark
              </span>
            </div>

            {/* Top 2 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#181c22] border border-[#262a31]">
                <div className="text-[11px] text-[#8e8fa2] font-semibold mb-1 leading-snug">
                  Estimated Capital Exposure Mitigated
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  €{estimatedMitigation}M
                </div>
                <div className="text-[10px] text-[#8e8fa2] mt-1 leading-tight">
                  Breach &amp; regulatory penalty prevention
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#181c22] border border-[#262a31]">
                <div className="text-[11px] text-[#8e8fa2] font-semibold mb-1 leading-snug">
                  Target Time-to-Assurance
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#bac3ff] font-mono">
                  {timeToAssurance}
                </div>
                <div className="text-[10px] text-[#8e8fa2] mt-1 leading-tight">
                  From charter signature to audit-readiness
                </div>
              </div>

            </div>

            {/* Dynamic Core Mandate Deliverables for the Selected Focus */}
            <div className="space-y-2.5 pt-2 border-t border-[#1f242d]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#dfe2eb] uppercase tracking-wider text-[11px]">
                  Bespoke Mandate Deliverables:
                </span>
                <span className="text-[10px] text-[#bac3ff] font-semibold">
                  3 Verified Pillars
                </span>
              </div>

              <div className="space-y-2">
                {(focus.includes('ISO 42001') ? [
                  { title: 'Board AI Fiduciary Charter', desc: 'AIMS oversight policy & executive liability guardrails' },
                  { title: 'Deterministic Guardrail Gateway', desc: 'Adversarial prompt injection & IP leakage prevention' },
                  { title: 'Continuous Audit Telemetry', desc: 'Immutable vector-level compliance for EU AI Act' }
                ] : focus.includes('Cyber Supply Chain') ? [
                  { title: 'Tier-N Supplier Asset Mapping', desc: 'Continuous asset discovery across sub-tier vendors' },
                  { title: 'Cryptographic API Attestation', desc: 'Replacing annual questionnaires with runtime proof' },
                  { title: 'Deterministic Breach Isolation', desc: 'Micro-segmented boundaries shielding core ERP systems' }
                ] : focus.includes('Multi-Cloud') ? [
                  { title: 'Fault-Tolerant Distributed Architecture', desc: 'Active-active multi-region failover & 99.999% SLA' },
                  { title: 'Legacy System Amortization Model', desc: 'Phased modernization without production disruption' },
                  { title: 'Enterprise FinOps Governance', desc: 'P&L-aligned cloud spend & infrastructure unit economics' }
                ] : [
                  { title: 'Technology Risk Committee Matrix', desc: 'Boardroom-level risk appetite & KPI reporting cadences' },
                  { title: 'Quarterly Executive Telemetry Dashboard', desc: 'Audited metrics bridging engineering & fiduciary duty' },
                  { title: 'M&A Technology Debt Diligence', desc: 'Pre-acquisition risk scoring & architectural valuation' }
                ]).map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#141820] border border-[#222732] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#8e8fa2] leading-tight">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta Badges */}
            <div className="space-y-2.5 pt-2.5 border-t border-[#1f242d] text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <span className="text-[#8e8fa2]">ISO 42001 &amp; EU AI Act Alignment:</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {complianceIndex} Verifiable
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <span className="text-[#8e8fa2]">Advisory Engagement Model:</span>
                <span className="font-bold text-[#bac3ff] text-left sm:text-right">
                  Capped Retainer / Direct Board Oversight
                </span>
              </div>
            </div>

          </div>

          {/* Action CTA: Prepopulate Mandate */}
          <button
            onClick={handleDiscussCalculatedMandate}
            className="w-full py-3.5 px-4 sm:px-6 rounded-xl bg-[#3456f6] hover:bg-[#254aeb] active:scale-[0.99] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#3456f6]/30 transition-all cursor-pointer touch-manipulation"
          >
            <span className="text-center">Pre-populate Mandate &amp; Discuss with Dr. Amit</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

        </div>

      </div>

    </div>
  );
}
