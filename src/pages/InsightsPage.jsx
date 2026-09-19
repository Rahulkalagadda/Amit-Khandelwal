import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import GovernanceSandbox from '../components/GovernanceSandbox';
import TiltCard from '../components/TiltCard';
import { 
  BookOpen, 
  FileText, 
  Mic2, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  ArrowUpRight, 
  Download, 
  Check, 
  Share2, 
  ExternalLink,
  Maximize2,
  X
} from 'lucide-react';

export default function InsightsPage({ onOpenMandate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Supply Chain', 'AI Governance', 'Enterprise Architecture'];

  const filteredPubs = activeFilter === 'All' 
    ? portfolioData.publications 
    : portfolioData.publications.filter(p => p.tags.includes(activeFilter) || p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  const handleDownloadSynopsis = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="w-full pt-20">
      
      {/* ========================================================================= */}
      {/* SECTION 1: EXECUTIVE PAGE HEADER (DARK INK CANVAS)                        */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0a0e14] text-[#dfe2eb] py-12 sm:py-16 md:py-24 relative overflow-hidden border-b border-[#262a31]">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(52,86,246,0.22),transparent)]" />
        
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-[#3456f6] animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#bac3ff] font-semibold">
              Research, Treatises &amp; Systemic Architecture
            </span>
          </div>

          <div className="max-w-4xl mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Algorithmic clarity. <br />
              <span className="serif-italic font-normal text-[#bac3ff]">
                Enterprise governance.
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#c4c5d8] max-w-3xl font-normal leading-relaxed">
              Translating computational complexity into board-level risk controls, deterministic sovereign architectures, and actionable technology roadmaps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#lead-publication"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm shadow-md transition-all text-center"
            >
              <span>Explore Lead Publication</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a
              href="#keynote-archive"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#181c22] hover:bg-[#262a31] text-[#dfe2eb] border border-[#31353c] font-semibold text-xs sm:text-sm transition-all text-center"
            >
              <span>Keynote &amp; Speaking Archive</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: LEAD PUBLICATION FEATURE (DARK INK CONTAINER)                  */}
      {/* ========================================================================= */}
      <section id="lead-publication" className="w-full bg-[#10141a] text-white py-12 sm:py-16 md:py-20 border-b border-[#262a31] scroll-mt-20">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="bg-[#181c22] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-[#31353c] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3456f6]/20 border border-[#3456f6]/40 text-xs font-semibold text-[#bac3ff]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Executive Research Monograph</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  {portfolioData.featuredPublication.title}
                </h2>

                <div className="text-xs text-[#8e8fa2] font-semibold uppercase tracking-wider">
                  Authored by Dr. Amit Khandelwal · 2024 Release
                </div>

                <p className="text-sm sm:text-base text-[#c4c5d8] leading-relaxed">
                  {portfolioData.featuredPublication.summary}
                </p>

                {/* 3 Core Architecture Pillars */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#dfe2eb]">
                    Architectural Tenets &amp; Governance Controls:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {portfolioData.featuredPublication.pillars.map((pillar, i) => (
                      <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-[#10141a] border border-[#262a31]">
                        <div className="text-xs font-bold text-[#3456f6] mb-1">
                          {pillar.num}
                        </div>
                        <div className="font-bold text-sm text-white mb-1">
                          {pillar.title}
                        </div>
                        <div className="text-xs text-[#8e8fa2] leading-normal">
                          {pillar.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleDownloadSynopsis}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#3456f6]/25 text-center"
                  >
                    {downloadSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Executive Brief Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Executive Synopsis (PDF)</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onOpenMandate}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#10141a] hover:bg-[#1c2026] text-[#dfe2eb] border border-[#31353c] text-xs sm:text-sm font-semibold transition-all text-center"
                  >
                    <span>Request Boardroom Briefing</span>
                  </button>
                </div>
              </div>

              {/* Visual Cover: BCAA UK ISO 42001 AIMS Credential */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <TiltCard 
                  maxTilt={8} 
                  glareOpacity={0.25}
                  className="rounded-2xl border border-[#444656] shadow-2xl w-full max-w-sm bg-[#10141a] p-2 cursor-pointer group"
                >
                  <div onClick={() => setSelectedImage('/assets/ISO42001-Lead-Implementer.jpg')}>
                    <img
                      src="/assets/ISO42001-Lead-Implementer.jpg"
                      alt="ISO 42001 Lead Implementer - Artificial Intelligence Management Systems"
                      className="w-full h-64 sm:h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-3 bg-[#10141a] border-t border-[#262a31] text-center flex items-center justify-between">
                      <span className="text-xs text-[#bac3ff] font-semibold">
                        ISO/IEC 42001 AIMS Certified
                      </span>
                      <span className="text-xs text-[#8e8fa2] flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5" /> Enlarge
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2.5: INTERACTIVE ISO 42001 ARCHITECTURE TOPOLOGY SANDBOX          */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#0a0e14] text-white py-12 sm:py-16 md:py-20 border-b border-[#262a31]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <GovernanceSandbox onOpenMandate={onOpenMandate} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SELECTED THOUGHT LEADERSHIP & FRAMEWORKS (WARM PAPER)          */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f8f7f4] text-[#191f2d] py-12 sm:py-16 md:py-20 border-b border-[#dfdcce]">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#525b6e] mb-1">
                Authoritative Executive Treatises
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10141a] tracking-tight">
                Strategic Frameworks &amp; Perspectives
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
              {filters.map((flt) => (
                <button
                  key={flt}
                  onClick={() => setActiveFilter(flt)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                    activeFilter === flt
                      ? 'bg-[#10141a] text-white shadow-sm'
                      : 'bg-[#ebe8df] text-[#525b6e] hover:bg-[#dfdcce]'
                  }`}
                >
                  {flt}
                </button>
              ))}
            </div>
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredPubs.map((pub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-8 border border-[#dfdcce] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3456f6]">
                      {pub.type}
                    </span>
                    <span className="text-xs text-[#525b6e]">
                      {pub.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#10141a] leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-[#525b6e] leading-relaxed">
                    {pub.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#f8f7f4] text-[#191f2d] border border-[#dfdcce]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#dfdcce] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#525b6e]">
                    Year: {pub.date}
                  </span>
                  <button
                    onClick={onOpenMandate}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3456f6] hover:text-[#254aeb]"
                  >
                    <span>Request full paper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: SPEAKING & KEYNOTE ARCHIVE (DARK SLATE CANVAS)                 */}
      {/* ========================================================================= */}
      <section id="keynote-archive" className="w-full bg-[#10141a] text-[#dfe2eb] py-12 sm:py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#bac3ff] mb-1">
                Global Keynotes &amp; Symposia
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Keynotes &amp; Executive Roundtables
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8e8fa2] max-w-md">
              Keynote addresses delivered at premier global summits for Fortune 500 boards, enterprise leaders, and policy architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.keynotes.map((kn, idx) => (
              <div
                key={idx}
                className="bg-[#181c22] rounded-2xl overflow-hidden border border-[#31353c] hover:border-[#3456f6]/60 transition-all flex flex-col justify-between shadow-lg group"
              >
                <div>
                  <div 
                    className="relative h-56 overflow-hidden cursor-pointer group/img bg-[#10141a]"
                    onClick={() => setSelectedImage(kn.image)}
                  >
                    <img
                      src={kn.image}
                      alt={kn.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181c22] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#10141a]/80 text-[#bac3ff] backdrop-blur-md border border-[#31353c]">
                        {kn.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#10141a]/80 p-1.5 rounded-lg text-white/80 opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#8e8fa2]">
                      <MapPin className="w-3.5 h-3.5 text-[#3456f6]" />
                      <span>{kn.event} · {kn.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#bac3ff] transition-colors leading-snug">
                      {kn.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#c4c5d8] leading-relaxed">
                      {kn.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenMandate}
                    className="w-full py-2.5 rounded-lg bg-[#10141a] hover:bg-[#262a31] text-xs font-semibold text-[#dfe2eb] border border-[#31353c] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire for Keynote Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#bac3ff]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Authentic Credentials & Awards */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-[#181c22] rounded-2xl overflow-hidden border border-[#31353c] p-2 flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage} 
              alt="Executive Award Credential"
              className="max-h-[82vh] w-auto object-contain rounded-lg"
            />
            <div className="py-2 text-center text-xs text-[#bac3ff] font-semibold">
              Authentic Certificate &amp; Executive Recognition — Dr. Amit Khandelwal
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
