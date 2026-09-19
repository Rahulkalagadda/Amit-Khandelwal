import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';
import CertificateVerificationModal from '../components/CertificateVerificationModal';
import EnterpriseRiskCalculator from '../components/EnterpriseRiskCalculator';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Shield, 
  ShieldCheck,
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  BookOpen, 
  Award, 
  Sparkles, 
  Globe,
  Maximize2,
  X
} from 'lucide-react';

export default function HomePage({ onOpenMandate }) {
  const [activeTab, setActiveTab] = useState(portfolioData.impactCaseStudies[0].id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [verifiedCredential, setVerifiedCredential] = useState(null);
  const [expandedHonors, setExpandedHonors] = useState(false);

  const selectedCase = portfolioData.impactCaseStudies.find(c => c.id === activeTab) || portfolioData.impactCaseStudies[0];

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO & EXECUTIVE METRICS (DARK INK CANVAS)                     */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#10141a] pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden border-b border-[#262a31]">
        {/* Subtle architectural background gradients */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(52,86,246,0.22),transparent)]" />
        <div className="absolute -right-32 top-1/4 w-[500px] h-[500px] bg-[#3456f6]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -left-32 bottom-10 w-[400px] h-[400px] bg-[#254aeb]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1c2026] border border-[#3456f6]/30 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#3456f6] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#bac3ff]">
                  Certified CAIO · ISO 42001 · Ex-Capgemini
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#dfe2eb] tracking-tight leading-[1.1]">
                Enterprise leadership. <br />
                <span className="serif-italic font-normal text-[#bac3ff]">
                  Global delivery accountability.
                </span>
              </h1>

              {/* Bio Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-[#c4c5d8] max-w-2xl font-normal leading-relaxed">
                {portfolioData.profile.bio}
              </p>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/leadership"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#3456f6]/25 group text-center"
                >
                  <span>Explore Leadership Track Record</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>

                <button
                  onClick={onOpenMandate}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1c2026] hover:bg-[#262a31] text-[#dfe2eb] hover:text-white border border-[#444656]/60 font-semibold text-xs sm:text-sm transition-all text-center"
                >
                  <span>Discuss an Executive Mandate</span>
                  <ArrowUpRight className="w-4 h-4 text-[#bac3ff] shrink-0" />
                </button>
              </div>

              {/* Verified Badges Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8e8fa2] border-t border-[#262a31]">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#3456f6]" />
                  <span>CXO Lanes Power List 2026 Winner</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#bac3ff]" />
                  <span>Certified CAIO (BCAA UK)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#818cf8]" />
                  <span>CISO 100 &amp; Cyber Sentinel Winner</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card: Authentic Portrait & Award */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Accent glow frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#3456f6]/40 via-[#818cf8]/20 to-transparent rounded-2xl blur-md" />
                
                <TiltCard className="rounded-2xl shadow-2xl border border-[#444656]/60 bg-[#181c22]" maxTilt={8} glareOpacity={0.28}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={portfolioData.profile.fullPoster}
                      alt="Dr. Amit Khandelwal - CXO Lanes Power List Winner"
                      className="w-full h-[340px] sm:h-[400px] md:h-[460px] object-cover object-center cursor-pointer group-hover:scale-[1.02] transition-transform duration-300"
                      onClick={() => setSelectedImage(portfolioData.profile.fullPoster)}
                    />
                    
                    {/* Overlay gradient & caption tag */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#0a0e14] via-[#10141a]/95 to-transparent z-20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-bold text-base sm:text-lg tracking-tight">
                            Dr. Amit Khandelwal
                          </div>
                          <div className="text-xs text-[#bac3ff] font-medium">
                            Vice President, 3i Infotech · CEO, LeadSphere
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedImage(portfolioData.profile.fullPoster)}
                          className="p-1.5 sm:p-2 rounded-lg bg-[#1c2026] text-[#bac3ff] hover:text-white border border-[#31353c]"
                          title="Zoom Image"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>

          {/* Key Executive Metrics Cards Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 sm:pt-16">
            {portfolioData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#181c22] p-5 sm:p-6 rounded-xl border border-[#31353c]/80 hover:border-[#3456f6]/60 transition-all duration-200 hover:-translate-y-1 shadow-md group"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#8e8fa2] font-semibold">
                    {metric.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1c2026] flex items-center justify-center text-[#bac3ff] group-hover:bg-[#3456f6] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">{metric.icon}</span>
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#dfe2eb] tracking-tight group-hover:text-white transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#c4c5d8] mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#8e8fa2] mt-0.5">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: VERIFIED HONORS & AWARDS ARCHIVE (WARM PAPER CONTRAST)         */}
      {/* ========================================================================= */}
      <section id="honors-archive" className="w-full bg-[#f8f7f4] text-[#191f2d] py-12 sm:py-16 md:py-20 transition-colors border-b border-[#dfdcce]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#525b6e] mb-1">
                Authentic Industry Distinctions &amp; Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10141a] tracking-tight">
                Honors, Certifications &amp; Awards Archive
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525b6e] max-w-md">
              Verifiable executive honors, United Kingdom accredited AI certifications, and leadership trophies.
            </p>
          </div>

          {/* Honors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(expandedHonors ? portfolioData.verifiedHonors : portfolioData.verifiedHonors.slice(0, 3)).map((honor, index) => (
              <TiltCard
                key={honor.id}
                maxTilt={6}
                glareOpacity={0.2}
                className={`bg-white rounded-2xl border border-[#dfdcce] shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group h-full ${
                  index >= 3 ? 'animate-in fade-in slide-in-from-bottom-4 duration-300' : ''
                }`}
              >
                <div>
                  {/* Image Container with zoom trigger */}
                  <div 
                    className="relative h-64 bg-[#10141a] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(honor.image)}
                  >
                    <img
                      src={honor.image}
                      alt={honor.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2.5 rounded-full bg-white/90 text-[#10141a] shadow-md flex items-center gap-1.5 text-xs font-bold">
                        <Maximize2 className="w-4 h-4" /> View High-Res
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#10141a]/90 text-[#bac3ff] backdrop-blur-sm border border-[#31353c]">
                        {honor.badge}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-[#191f2d] shadow">
                        {honor.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-[#10141a] group-hover:text-[#3456f6] transition-colors leading-snug">
                      {honor.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#525b6e]">
                      {honor.subheading}
                    </div>
                    <div className="text-xs font-bold text-[#3456f6]">
                      {honor.organization}
                    </div>
                    <p className="text-xs sm:text-sm text-[#525b6e] pt-1 leading-relaxed">
                      {honor.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#f0eee6] mt-4 flex items-center justify-between text-xs text-[#525b6e]">
                  <span className="font-semibold text-[#191f2d] truncate max-w-[120px]">
                    {honor.role}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setVerifiedCredential(honor)}
                      className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#10141a] hover:bg-[#254aeb] text-white flex items-center gap-1 transition-colors shadow-sm"
                      title="Verify Official Institutional Registry"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verify</span>
                    </button>
                    <button
                      onClick={() => setSelectedImage(honor.image)}
                      className="font-bold text-[#3456f6] hover:text-[#254aeb] flex items-center gap-0.5"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* View More / Expand UX Controls */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#dfdcce]/70">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#525b6e]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span>
                Showing <strong className="text-[#10141a] font-bold">{expandedHonors ? portfolioData.verifiedHonors.length : 3}</strong> of <strong className="text-[#10141a] font-bold">{portfolioData.verifiedHonors.length}</strong> official executive distinctions &amp; credentials
              </span>
            </div>

            <button
              onClick={() => {
                if (expandedHonors) {
                  setExpandedHonors(false);
                  const el = document.getElementById('honors-archive');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setExpandedHonors(true);
                }
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#10141a] hover:bg-[#1f2533] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 border border-[#2b313d] hover:border-[#3456f6] group cursor-pointer"
            >
              <span>{expandedHonors ? 'Show Featured Distinctions (Top 3)' : 'View All 7 Distinctions & Awards'}</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#262c3a] text-[#bac3ff] group-hover:bg-[#3456f6] group-hover:text-white transition-colors">
                {expandedHonors ? 'Collapse' : '+4 More'}
              </span>
              {expandedHonors ? (
                <ChevronUp className="w-4 h-4 text-[#bac3ff] group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#bac3ff] group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SELECTED IMPACT SHOWCASE                                       */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#10141a] text-[#dfe2eb] py-12 sm:py-16 md:py-20 border-b border-[#262a31]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#bac3ff] mb-1">
                Validated Operational Outcomes
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Selected impact.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8e8fa2] max-w-md">
              High-assurance outcomes delivered across global manufacturing, supply chain resilience, and sovereign AI deployments.
            </p>
          </div>

          {/* Interactive Case Tabs */}
          <div className="flex gap-2 mb-6 sm:mb-8 p-1.5 bg-[#181c22] rounded-xl border border-[#31353c] w-full sm:max-w-fit overflow-x-auto">
            {portfolioData.impactCaseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all shrink-0 ${
                  activeTab === cs.id
                    ? 'bg-[#3456f6] text-white shadow-md'
                    : 'text-[#8e8fa2] hover:text-white'
                }`}
              >
                {cs.title.split(' ')[0]} {cs.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Active Case Card */}
          <div className="bg-[#181c22] rounded-2xl p-5 sm:p-8 lg:p-10 border border-[#31353c] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#3456f6]/20 text-[#bac3ff] font-semibold text-[11px] sm:text-xs uppercase tracking-wider border border-[#3456f6]/30">
                    {selectedCase.client}
                  </span>
                  <span className="text-xs text-[#8e8fa2] font-medium">
                    {selectedCase.scope}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                  {selectedCase.title}
                </h3>
                <p className="text-[#c4c5d8] text-sm sm:text-base leading-relaxed">
                  {selectedCase.summary}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#bac3ff]">
                    Key Execution Highlights:
                  </div>
                  {selectedCase.impact.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dfe2eb]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#10141a] rounded-xl p-6 sm:p-8 border border-[#262a31] flex flex-col justify-center text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8e8fa2] mb-2">
                  Validated Impact Metric
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#bac3ff] tracking-tight">
                  {selectedCase.metric}
                </div>
                <div className="text-xs sm:text-sm text-[#c4c5d8] font-semibold mt-2">
                  Audited Operational Benchmark
                </div>
                <div className="pt-4 sm:pt-6">
                  <Link
                    to="/leadership"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3456f6] hover:text-[#bac3ff] transition-colors"
                  >
                    <span>Read full institutional chapter in Leadership</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: DOMAINS OF LEADERSHIP (DARK INK CANVAS)                        */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#10141a] text-[#dfe2eb] py-12 sm:py-16 md:py-20 border-b border-[#262a31]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#bac3ff]">
              Strategic Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Domains of leadership.
            </h2>
            <p className="text-sm sm:text-base text-[#c4c5d8]">
              Proven executive capabilities spanning sovereign AI architecture, industrial cyber defense, and global scale engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portfolioData.domains.map((domain, index) => (
              <div
                key={index}
                className="bg-[#181c22] p-5 sm:p-8 rounded-2xl border border-[#31353c] hover:border-[#3456f6]/60 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1c2026] flex items-center justify-center text-[#bac3ff] group-hover:bg-[#3456f6] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{domain.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#bac3ff] transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-[#8e8fa2] font-semibold uppercase tracking-wider mt-0.5">
                      {domain.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-[#c4c5d8] leading-relaxed">
                    {domain.desc}
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-[#262a31]">
                    {domain.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#8e8fa2]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3456f6]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/insights"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#bac3ff] hover:text-white transition-colors"
                  >
                    <span>View related framework &amp; insights</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: INTERACTIVE RISK CALCULATOR & EXECUTIVE SCOPING                */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0a0e14] py-12 sm:py-16 md:py-20 border-b border-[#262a31]">
        <div className="max-w-[1312px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
          <EnterpriseRiskCalculator onOpenMandate={onOpenMandate} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: EXECUTIVE ENGAGEMENT CTA                                       */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#181c22] text-white py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#3456f6]/20 border border-[#3456f6]/30 text-[11px] sm:text-xs font-semibold text-[#bac3ff]">
            <Sparkles className="w-3.5 h-3.5 text-[#3456f6]" />
            <span>High-Stakes Advisory &amp; Leadership</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            What needs to move forward?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#c4c5d8] max-w-2xl mx-auto leading-relaxed font-normal">
            Whether evaluating an enterprise AI orchestration roadmap, restructuring complex third-party cyber risk, or appointing a seasoned interim officer for a €100M+ mandate.
          </p>

          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-lg sm:max-w-none mx-auto">
            <Link
              to="/connect"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#3456f6]/30 text-center"
            >
              <span>Connect Directly with Dr. Amit Khandelwal</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </Link>

            <Link
              to="/leadership"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1c2026] hover:bg-[#262a31] text-[#dfe2eb] border border-[#444656] text-xs sm:text-sm font-semibold transition-all text-center"
            >
              <span>Review Institutional Career Chapters</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-[#10141a] p-2 rounded-2xl border border-[#31353c] shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors z-10"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-h-[85vh] max-w-full rounded-xl object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Official Certificate Verification Registry Modal */}
      <CertificateVerificationModal
        isOpen={!!verifiedCredential}
        onClose={() => setVerifiedCredential(null)}
        credential={verifiedCredential}
      />

    </div>
  );
}
