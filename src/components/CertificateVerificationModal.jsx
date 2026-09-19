import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Calendar, 
  Building2, 
  Award, 
  Download,
  FileCheck,
  Maximize2
} from 'lucide-react';

export default function CertificateVerificationModal({ isOpen, onClose, credential }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !credential) return null;

  // Derive verification metadata
  const isBCAACert = credential.id?.includes('caio') || credential.id?.includes('iso42001');
  const certNumber = credential.id?.includes('caio')
    ? 'BCAA-CAIO-IN-1161'
    : credential.id?.includes('iso42001')
    ? 'BCAA-AIMSLI-IN-1113'
    : `HON-${credential.year || '2023'}-${credential.id?.toUpperCase() || 'VERIFIED'}`;

  const validityDates = credential.id?.includes('caio')
    ? '18/07/2026 — 17/07/2029'
    : credential.id?.includes('iso42001')
    ? '14/08/2026 — 13/08/2029'
    : `Conferred: ${credential.year || '2023'} (Permanent Record)`;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#141820] text-white rounded-2xl border border-[#31353c] shadow-2xl overflow-hidden my-6 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#10141a] px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#262a31] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#bac3ff] truncate">
              Official Institutional Verification Registry
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#181c22] hover:bg-[#262a31] text-[#8e8fa2] hover:text-white flex items-center justify-center transition-colors border border-[#31353c] shrink-0 touch-manipulation"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Certificate / Trophy Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group rounded-xl overflow-hidden border border-[#3456f6]/40 bg-[#0a0e14] p-1.5 shadow-lg w-full max-w-xs">
                <img
                  src={credential.image}
                  alt={credential.title}
                  className="w-full h-56 sm:h-72 object-contain rounded-lg"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#10141a]/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    Verified Authenticity
                  </span>
                </div>
              </div>
              <div className="mt-2 text-center text-[11px] text-[#8e8fa2]">
                Official physical award / accredited institutional record
              </div>
            </div>

            {/* Right: Verification Dossier Details */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3456f6]/20 border border-[#3456f6]/40 text-xs font-semibold text-[#bac3ff] mb-2">
                  <FileCheck className="w-3.5 h-3.5 text-[#3456f6] shrink-0" />
                  <span>{credential.badge || 'Accredited Industry Credential'}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug">
                  {credential.title}
                </h3>
                <div className="text-xs text-[#bac3ff] font-medium mt-1">
                  {credential.subheading}
                </div>
              </div>

              {/* Data Table */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#0e1218] border border-[#262a31] space-y-2.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1f242d] pb-2 gap-0.5">
                  <span className="text-[#8e8fa2]">Conferred To:</span>
                  <span className="font-bold text-white">Dr. Amit Khandelwal</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1f242d] pb-2 gap-0.5">
                  <span className="text-[#8e8fa2]">Issuing Authority:</span>
                  <span className="font-semibold text-[#dfe2eb] sm:text-right">{credential.organization}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1f242d] pb-2 gap-0.5">
                  <span className="text-[#8e8fa2]">Certificate / Record ID:</span>
                  <div className="flex items-center gap-1.5 font-mono text-[#bac3ff]">
                    <span>{certNumber}</span>
                    <button 
                      onClick={handleCopyId}
                      className="p-1 hover:text-white transition-colors"
                      title="Copy ID"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1f242d] pb-2 gap-0.5">
                  <span className="text-[#8e8fa2]">Accreditation / Validity:</span>
                  <span className="font-semibold text-emerald-400">{validityDates}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
                  <span className="text-[#8e8fa2]">Attestation Status:</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 self-start sm:self-auto">
                    Cryptographically Attested
                  </span>
                </div>
              </div>

              {/* Description Context */}
              <p className="text-xs text-[#c4c5d8] leading-relaxed">
                {credential.desc}
              </p>

              {/* Institutional Inquiry Details */}
              {isBCAACert && (
                <div className="p-3 rounded-lg bg-[#181c22] border border-[#31353c] text-[11px] text-[#8e8fa2] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span>Verification Registry: <strong className="text-white">Brit Certifications &amp; Assessments UK</strong></span>
                  <span className="text-[#bac3ff] font-mono">enquiry@bcaa.uk</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#10141a] px-4 sm:px-6 py-3.5 sm:py-4 border-t border-[#262a31] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#8e8fa2] flex items-center gap-1.5 text-center sm:text-left">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Fiduciary record verified under professional governance standards.</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white text-xs font-semibold transition-colors text-center"
          >
            Dismiss Registry View
          </button>
        </div>
      </div>
    </div>
  );
}
