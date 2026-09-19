import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ShieldCheck, 
  Clock, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  Building, 
  Calendar, 
  FileText,
  Briefcase,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ConnectPage() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Mandate Type, 2: Scope & Timeline, 3: Executive Contact
  
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    mandateType: 'Board Advisory & Governance Oversight',
    enterpriseScale: '€500M – €1B Annual Turnover',
    timeline: 'Immediate / Next 30 Days',
    ndaRequired: true,
    brief: ''
  });

  // Prepopulate if arriving from the homepage calculator
  useEffect(() => {
    if (location.state?.prefilled) {
      setFormData(prev => ({
        ...prev,
        ...location.state.prefilled
      }));
      setCurrentStep(2);
    }
  }, [location.state]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const engagementTypes = [
    {
      id: 'Board Advisory & Governance Oversight',
      title: 'Board Advisory & Governance Oversight',
      desc: 'Independent technology director, audit & risk committee counsel, AI fiduciary oversight.',
      tag: 'Governance'
    },
    {
      id: 'Interim Executive Appointment (CDO / CTO / CAIO)',
      title: 'Interim Executive Appointment (CDO / CTO / CAIO)',
      desc: 'Multi-million P&L transformation, institutional restructuring, engineering leadership.',
      tag: 'C-Suite Mandate'
    },
    {
      id: 'Sovereign AI & ISO 42001 Architecture',
      title: 'Sovereign AI & ISO 42001 Architecture',
      desc: 'Certified CAIO / AIMS architecture, deterministic guardrails, zero-trust AI pipelines.',
      tag: 'AI Architecture'
    },
    {
      id: 'Cyber Supply Chain & Third-Party Risk (TPRM)',
      title: 'Cyber Supply Chain & Third-Party Risk (TPRM)',
      desc: 'Zero-trust supplier defenses, Tier-N attack surface containment, vendor attestation.',
      tag: 'Cyber Defense'
    },
    {
      id: 'M&A Technology & Risk Diligence',
      title: 'M&A Technology & Risk Diligence',
      desc: 'Pre-deal architecture scrutiny, technical debt quantification, integration roadmaps.',
      tag: 'Private Equity'
    },
    {
      id: 'Global Keynote Address / Executive Symposium',
      title: 'Global Keynote Address / Executive Symposium',
      desc: 'Authoritative keynote presentations for Fortune 500 summits and global forums.',
      tag: 'Speaking'
    }
  ];

  return (
    <div className="w-full pt-20">
      
      {/* ========================================================================= */}
      {/* SECTION 1: STRATEGIC HEADER (DARK INK CANVAS)                             */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0a0e14] text-[#dfe2eb] py-12 sm:py-16 md:py-24 relative overflow-hidden border-b border-[#262a31]">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(52,86,246,0.22),transparent)]" />
        
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3456f6] animate-pulse" />
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#bac3ff] font-semibold">
                  Confidential Executive Inquiries &amp; Advisory Retainers
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Start a conversation. <br />
                <span className="serif-italic font-normal text-[#bac3ff]">
                  Direct executive access.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#c4c5d8] max-w-2xl font-normal leading-relaxed">
                Engagements are accepted on a selective basis for enterprise board advisory, interim CDO/CTO/CAIO leadership, and sovereign cyber-physical architecture transformation.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 sm:gap-6 text-xs text-[#8e8fa2]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#3456f6] shrink-0" />
                  <span>Direct Response within 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#3456f6] shrink-0" />
                  <span>Strict NDA &amp; Protocol Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#3456f6] shrink-0" />
                  <span>{portfolioData.profile.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Avatar Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-[#181c22] p-5 rounded-2xl border border-[#31353c] shadow-xl flex items-center gap-4 max-w-sm w-full">
                <img
                  src={portfolioData.profile.avatar}
                  alt={portfolioData.profile.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#3456f6] shadow-md"
                />
                <div>
                  <div className="text-sm font-bold text-white">
                    {portfolioData.profile.name}
                  </div>
                  <div className="text-xs text-[#bac3ff] font-medium">
                    {portfolioData.profile.currentRoles}
                  </div>
                  <div className="text-[11px] text-[#8e8fa2] mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>Direct executive triage active</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: MULTI-STEP GUIDED MANDATE SCOPE BUILDER (WARM PAPER)           */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f8f7f4] text-[#191f2d] py-12 sm:py-16 md:py-20 border-b border-[#dfdcce]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Multi-Step Interactive Form */}
            <div className="lg:col-span-8 bg-white p-4 sm:p-7 md:p-10 rounded-2xl border border-[#dfdcce] shadow-sm flex flex-col justify-between">
              
              {formSubmitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#10141a]">
                    Mandate Inquiry Successfully Transmitted
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525b6e] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#10141a]">{formData.name || 'Leader'}</span>. Your strategic brief for <span className="font-semibold text-[#3456f6]">{formData.organization || 'your organization'}</span> has been submitted under strict fiduciary confidentiality. Dr. Amit Khandelwal's executive office will review parameters and respond directly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-2.5 bg-[#10141a] hover:bg-[#262a31] text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Submit Another Mandate Brief
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-5 sm:space-y-6">
                  
                  {/* Step Progress Header */}
                  <div className="border-b border-[#dfdcce] pb-4 sm:pb-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#3456f6]">
                          Step {currentStep} of 3
                        </div>
                        <h2 className="text-lg sm:text-2xl font-bold text-[#10141a] tracking-tight leading-snug">
                          {currentStep === 1 && 'Select Strategic Mandate Engagement'}
                          {currentStep === 2 && 'Enterprise Context & Objectives'}
                          {currentStep === 3 && 'Fiduciary Contact & Direct Transmission'}
                        </h2>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#525b6e] shrink-0">
                        {currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'}
                      </span>
                    </div>

                    {/* Step Progress Bar */}
                    <div className="w-full h-1.5 bg-[#ebe8df] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#3456f6] rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* STEP 1: Engagement Category */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <p className="text-xs text-[#525b6e]">
                        Select the primary mandate scope for board evaluation, interim officer appointment, or architecture transformation:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {engagementTypes.map((type) => (
                          <div
                            key={type.id}
                            onClick={() => setFormData({ ...formData, mandateType: type.id })}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              formData.mandateType === type.id
                                ? 'bg-[#10141a] text-white border-[#10141a] shadow-md'
                                : 'bg-[#f8f7f4] border-[#dfdcce] text-[#191f2d] hover:bg-white hover:border-[#3456f6]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                                formData.mandateType === type.id ? 'bg-[#3456f6] text-white' : 'bg-[#ebe8df] text-[#525b6e]'
                              }`}>
                                {type.tag}
                              </span>
                              {formData.mandateType === type.id && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              )}
                            </div>
                            <h4 className="font-bold text-xs sm:text-sm mb-1 leading-snug">
                              {type.title}
                            </h4>
                            <p className={`text-xs leading-relaxed ${
                              formData.mandateType === type.id ? 'text-[#c4c5d8]' : 'text-[#525b6e]'
                            }`}>
                              {type.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                        >
                          <span>Continue to Scope &amp; Scale</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Scope, Scale & Objectives */}
                  {currentStep === 2 && (
                    <div className="space-y-5 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Enterprise Scale */}
                        {/* Enterprise Scale Interactive Selector */}
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-[#191f2d]">
                            Enterprise Operational Scale:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                              '€100M – €500M Turnover',
                              '€500M – €1B Turnover',
                              '€1B – €5B+ Enterprise',
                              'Private Equity Portfolio'
                            ].map((scale) => {
                              const isSelected = formData.enterpriseScale.includes(scale.split(' ')[0]);
                              return (
                                <button
                                  key={scale}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, enterpriseScale: scale })}
                                  className={`p-2.5 rounded-lg text-xs font-bold text-left transition-all border flex items-center justify-between ${
                                    isSelected
                                      ? 'bg-[#10141a] text-white border-[#10141a] shadow-sm'
                                      : 'bg-[#f8f7f4] border-[#dfdcce] text-[#525b6e] hover:bg-white hover:border-[#3456f6]'
                                  }`}
                                >
                                  <span>{scale}</span>
                                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Target Timeline Interactive Selector */}
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-[#191f2d]">
                            Target Mobilization Horizon:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                              'Immediate (30 Days)',
                              'Next 60–90 Days',
                              'Upcoming Quarter',
                              'Board Meeting Date'
                            ].map((time) => {
                              const isSelected = formData.timeline.includes(time.split(' ')[0]);
                              return (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, timeline: time })}
                                  className={`p-2.5 rounded-lg text-xs font-bold text-left transition-all border flex items-center justify-between ${
                                    isSelected
                                      ? 'bg-[#10141a] text-white border-[#10141a] shadow-sm'
                                      : 'bg-[#f8f7f4] border-[#dfdcce] text-[#525b6e] hover:bg-white hover:border-[#3456f6]'
                                  }`}
                                >
                                  <span>{time}</span>
                                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                      </div>

                      {/* Brief text */}
                      <div>
                        <label className="block text-xs font-bold text-[#191f2d] mb-1.5">
                          Mandate Context &amp; High-Level Objectives *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Outline specific transformation goals, regulatory/AI hurdles, board governance expectations, or keynote themes..."
                          value={formData.brief}
                          onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                          className="w-full p-3 bg-[#f8f7f4] border border-[#dfdcce] rounded-lg text-[#191f2d] focus:bg-white focus:outline-none focus:border-[#3456f6] transition-all text-xs sm:text-sm resize-none"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-[#dfdcce]">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ebe8df] hover:bg-[#dfdcce] text-xs font-semibold text-[#191f2d] transition-colors"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                        >
                          <span>Continue to Fiduciary Contact</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Contact & Direct Submission */}
                  {currentStep === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#191f2d] mb-1.5">
                            Executive Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Lord Alexander / Elena Rostova"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#f8f7f4] border border-[#dfdcce] rounded-lg text-[#191f2d] focus:bg-white focus:outline-none focus:border-[#3456f6] transition-all text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#191f2d] mb-1.5">
                            Corporate / Boardroom Title *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Board Chair / Managing Partner"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#f8f7f4] border border-[#dfdcce] rounded-lg text-[#191f2d] focus:bg-white focus:outline-none focus:border-[#3456f6] transition-all text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#191f2d] mb-1.5">
                            Direct Business Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="name@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#f8f7f4] border border-[#dfdcce] rounded-lg text-[#191f2d] focus:bg-white focus:outline-none focus:border-[#3456f6] transition-all text-xs sm:text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#191f2d] mb-1.5">
                            Organization / Sovereign Entity *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Enterprise, Fund or Institution"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-[#f8f7f4] border border-[#dfdcce] rounded-lg text-[#191f2d] focus:bg-white focus:outline-none focus:border-[#3456f6] transition-all text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-[#525b6e]">
                          <input
                            type="checkbox"
                            checked={formData.ndaRequired}
                            onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                            className="rounded text-[#3456f6] focus:ring-[#3456f6]"
                          />
                          <span className="font-semibold text-[#191f2d]">
                            Require bilateral Mutual NDA executed prior to deep architectural disclosure
                          </span>
                        </label>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-[#dfdcce]">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ebe8df] hover:bg-[#dfdcce] text-xs font-semibold text-[#191f2d] transition-colors"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm shadow-md transition-all shrink-0"
                        >
                          <span>Transmit Confidential Mandate</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              )}

            </div>

            {/* Right Column: Live Dynamic Mandate Dossier Card & Direct Channels */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Dynamic Mandate Summary Dossier */}
              <div className="bg-[#10141a] text-white p-6 sm:p-8 rounded-2xl border border-[#262a31] space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#262a31] pb-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#bac3ff]">
                    Live Mandate Dossier
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#8e8fa2] block text-[11px]">Selected Mandate Scope:</span>
                    <span className="font-bold text-white leading-snug block mt-0.5">
                      {formData.mandateType}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8e8fa2] block text-[11px]">Enterprise Scale:</span>
                    <span className="font-semibold text-[#dfe2eb] block mt-0.5">
                      {formData.enterpriseScale}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8e8fa2] block text-[11px]">Target Timeline:</span>
                    <span className="font-semibold text-emerald-400 block mt-0.5">
                      {formData.timeline}
                    </span>
                  </div>

                  {formData.organization && (
                    <div>
                      <span className="text-[#8e8fa2] block text-[11px]">Organization:</span>
                      <span className="font-semibold text-white block mt-0.5">
                        {formData.organization}
                      </span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-[#1f242d] text-[11px] text-[#8e8fa2] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Fiduciary non-disclosure protocol active.</span>
                  </div>
                </div>
              </div>

              {/* Direct Access Box */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#dfdcce] shadow-sm space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#525b6e]">
                  Direct Executive Access
                </div>

                {/* Email Box with copy button */}
                <div className="p-4 rounded-xl bg-[#f8f7f4] border border-[#ebe8df] space-y-2">
                  <div className="text-xs text-[#525b6e] font-semibold">
                    Direct Correspondence:
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#10141a] truncate">
                      {portfolioData.profile.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-md hover:bg-[#dfdcce] text-[#525b6e] transition-colors shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copied && (
                    <div className="text-[11px] text-emerald-600 font-semibold">
                      Email address copied to clipboard!
                    </div>
                  )}
                </div>

                {/* Global Mobility & Hubs */}
                <div className="space-y-3 pt-2 text-sm text-[#191f2d]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#3456f6] shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider text-[#525b6e]">
                        Principal Base Hubs
                      </div>
                      <div className="text-sm font-semibold">London (UK) · Dubai (DIFC)</div>
                      <div className="text-xs text-[#525b6e]">Global deployment ready</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <LinkedInIcon className="w-4 h-4 text-[#3456f6] shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider text-[#525b6e]">
                        Executive Network
                      </div>
                      <a
                        href={portfolioData.profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-[#3456f6] hover:underline"
                      >
                        LinkedIn Verified Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ENGAGEMENT PRINCIPLES (DARK SLATE CANVAS)                      */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#10141a] text-[#dfe2eb] py-12 sm:py-16 md:py-20">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="max-w-2xl mb-8 sm:mb-12 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#bac3ff]">
              Operational Doctrine
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              How I Work With Organizations
            </h2>
            <p className="text-xs sm:text-sm text-[#8e8fa2]">
              Core operating principles applied across all executive advisory and transformation mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                num: '01',
                title: 'Boardroom Clarity',
                desc: 'Translating deep algorithmic & cyber complexity into unambiguous risk choices aligned with fiduciary responsibility.'
              },
              {
                num: '02',
                title: 'Operational Grounding',
                desc: 'Every strategy is architected to withstand shop-floor, factory-gate, and mission-critical production constraints.'
              },
              {
                num: '03',
                title: 'Sovereign Assurance',
                desc: 'Prioritizing deterministic data boundaries, intellectual property protection, and regulatory compliance.'
              },
              {
                num: '04',
                title: 'Milestone Discipline',
                desc: 'Strict governance cadences that tie technical capital expenditure directly to audited financial and operational metrics.'
              }
            ].map((principle, idx) => (
              <div
                key={idx}
                className="bg-[#181c22] p-6 rounded-xl border border-[#31353c] hover:border-[#3456f6]/60 transition-colors"
              >
                <div className="text-xs font-extrabold text-[#bac3ff] mb-2">
                  {principle.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs text-[#c4c5d8] leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
