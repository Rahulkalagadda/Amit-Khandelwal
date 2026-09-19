import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import TiltCard from '../components/TiltCard';
import CertificateVerificationModal from '../components/CertificateVerificationModal';
import { 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle, 
  ChevronRight, 
  Factory, 
  Layers, 
  Sparkles,
  Maximize2,
  X 
} from 'lucide-react';

export default function LeadershipPage({ onOpenMandate }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [verifiedCredential, setVerifiedCredential] = useState(null);

  return (
    <div className="w-full pt-20">
      
      {/* ========================================================================= */}
      {/* SECTION 1: EXECUTIVE PAGE HEADER (DARK INK CANVAS)                        */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0a0e14] text-[#dfe2eb] py-12 sm:py-16 md:py-24 relative overflow-hidden border-b border-[#262a31]">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(52,86,246,0.2),transparent)]" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#3456f6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-[#3456f6] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#bac3ff] font-semibold">
              Executive Track Record &amp; Operational Scale
            </span>
          </div>

          <div className="max-w-4xl mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Enterprise leadership. <br />
              <span className="serif-italic font-normal text-[#bac3ff]">
                Global delivery accountability.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#c4c5d8] max-w-3xl font-normal leading-relaxed">
              Over two decades directing multi-million P&amp;L mandates, steering cross-functional engineering practices across Europe and Asia, and translating boardroom strategy into high-assurance digital delivery.
            </p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portfolioData.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#181c22] p-6 rounded-xl border border-[#31353c] hover:border-[#3456f6]/60 transition-colors shadow-md flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#8e8fa2] font-semibold">
                    {m.category}
                  </span>
                  <span className="material-symbols-outlined text-[#bac3ff] text-xl">{m.icon}</span>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-[#c4c5d8] mt-1">
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INSTITUTIONAL CAREER CHAPTERS (WARM PAPER MODE)                */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f8f7f4] text-[#191f2d] py-12 sm:py-16 md:py-20 transition-colors border-b border-[#dfdcce]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#525b6e] mb-1">
                Proven Operational Track Record
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10141a] tracking-tight">
                Institutional Leadership Chapters
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525b6e] max-w-md">
              Verifiable executive roles held across global conglomerates including Capgemini, 3i Infotech, LeadSphere, and sovereign programs.
            </p>
          </div>

          {/* Chapters Timeline List */}
          <div className="space-y-6 sm:space-y-8">
            {portfolioData.careerChapters.map((ch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 border border-[#dfdcce] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Role & Company */}
                  <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-[#dfdcce] pb-6 lg:pb-0 lg:pr-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#ebe8df] text-[#191f2d]">
                      {ch.period}
                    </span>
                    <h3 className="text-2xl font-bold text-[#10141a] leading-snug">
                      {ch.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#3456f6]">
                      {ch.company}
                    </div>
                    <div className="text-xs text-[#525b6e] font-medium pt-1">
                      {ch.focus}
                    </div>
                  </div>

                  {/* Right Column: Narrative & Highlights */}
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-base text-[#191f2d] leading-relaxed">
                      {ch.desc}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#525b6e]">
                        Key Operational Accomplishments:
                      </div>
                      {ch.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-[#191f2d]">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: CREDENTIALS, BOARD GOVERNANCE & RECOGNITION ARCHIVE (DARK SLATE) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#10141a] text-[#dfe2eb] py-12 sm:py-16 md:py-20 border-b border-[#262a31]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#bac3ff] mb-1">
                Fiduciary, Cyber &amp; Technical Accreditations
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Authentic Credentials &amp; Recognition Gallery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8e8fa2] max-w-md">
              BCAA UK certifications, CISO 100 honors, Capgemini longevity awards, and international recognitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.verifiedHonors.map((honor) => (
              <TiltCard
                key={honor.id}
                maxTilt={8}
                glareOpacity={0.25}
                className="bg-[#181c22] rounded-2xl border border-[#31353c] hover:border-[#3456f6]/60 transition-all flex flex-col justify-between shadow-lg group h-full"
              >
                <div>
                  <div 
                    className="relative h-64 bg-[#0a0e14] overflow-hidden cursor-pointer flex items-center justify-center p-3"
                    onClick={() => setSelectedImage(honor.image)}
                  >
                    <img
                      src={honor.image}
                      alt={honor.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[#3456f6] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" /> Enlarge Certificate
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#10141a]/90 text-[#bac3ff] border border-[#31353c]">
                        {honor.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#8e8fa2]">
                      <span className="font-semibold text-[#bac3ff]">{honor.organization}</span>
                      <span>{honor.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#bac3ff] transition-colors leading-snug">
                      {honor.title}
                    </h3>
                    <div className="text-xs text-[#8e8fa2]">
                      {honor.subheading}
                    </div>
                    <p className="text-xs sm:text-sm text-[#c4c5d8] pt-1 leading-relaxed">
                      {honor.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#262a31] mt-4 flex items-center justify-between text-xs">
                  <span className="text-[#8e8fa2] truncate max-w-[140px]">
                    {honor.role}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setVerifiedCredential(honor)}
                      className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#10141a] hover:bg-[#3456f6] text-white border border-[#31353c] flex items-center gap-1 transition-colors"
                      title="Verify Official Institutional Registry"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verify</span>
                    </button>
                    <button
                      onClick={() => setSelectedImage(honor.image)}
                      className="text-[#bac3ff] hover:text-white font-semibold flex items-center gap-1 shrink-0"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: EXECUTIVE ENGAGEMENT CALL-OUT (WARM PAPER)                     */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f8f7f4] text-[#191f2d] py-12 sm:py-16 md:py-20">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-4 sm:space-y-5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#525b6e]">
            Strategic Dialogue
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10141a] tracking-tight max-w-2xl mx-auto leading-tight">
            Evaluating an executive mandate or advisory role?
          </h2>
          <p className="text-sm sm:text-base text-[#525b6e] max-w-xl mx-auto leading-relaxed">
            Directly connect to discuss board risk oversight, CAIO / CDO interim appointments, or large-scale digital architecture steering.
          </p>
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-lg sm:max-w-none mx-auto">
            <Link
              to="/connect"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm shadow-md transition-all text-center"
            >
              <span>Initiate Direct Executive Dialogue</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </Link>
            <button
              onClick={onOpenMandate}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#ebe8df] text-[#191f2d] border border-[#dfdcce] text-xs sm:text-sm font-semibold transition-all text-center"
            >
              <span>Submit Confidential Mandate Brief</span>
            </button>
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
              alt="Expanded credential"
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
