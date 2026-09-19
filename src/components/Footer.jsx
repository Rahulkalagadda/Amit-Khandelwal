import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0e14] text-[#dfe2eb] border-t border-[#262a31] pt-12 sm:pt-16 pb-8 sm:pb-12 transition-colors">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-[#262a31]">
          
          {/* Executive Overview */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={portfolioData.profile.avatar}
                alt={portfolioData.profile.name}
                className="w-12 h-12 rounded-full object-cover border border-[#444656]"
              />
              <div>
                <h3 className="font-bold text-lg text-white">
                  {portfolioData.profile.name}
                </h3>
                <p className="text-xs text-[#8e8fa2]">
                  {portfolioData.profile.title}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#c4c5d8] leading-relaxed max-w-md">
              {portfolioData.profile.bio}
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#8e8fa2]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Available for Board Advisory, Interim Leadership &amp; Strategic Mandates</span>
            </div>
          </div>

          {/* Core Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8e8fa2]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#c4c5d8]">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  Home Executive Overview
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  Leadership &amp; Operational Impact
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  AI &amp; Enterprise Insights
                </Link>
              </li>
              <li>
                <Link to="/connect" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  Direct Mandate Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#8e8fa2]">
              Executive Channels
            </div>
            <p className="text-sm text-[#c4c5d8]">
              Direct communication for board chairs, private equity partners, and corporate chief executives.
            </p>
            <div className="space-y-2.5">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="flex items-center gap-2 text-sm text-[#bac3ff] hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#3456f6] group-hover:scale-110 transition-transform shrink-0" />
                <span className="break-all">{portfolioData.profile.email}</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#8e8fa2]">
                <span className="font-semibold text-[#dfe2eb]">Locations:</span>
                <span>{portfolioData.profile.location}</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1c2026] text-xs font-semibold text-[#dfe2eb] hover:bg-[#262a31] border border-[#444656]/50 hover:border-[#bac3ff]/50 transition-all"
              >
                <span>Submit Confidential Mandate Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#bac3ff]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e8fa2] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved. Strategic Executive Portfolio.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3456f6]" />
              Enterprise Assurance Standard
            </span>
            <Link to="/connect" className="hover:text-white transition-colors">
              Advisory Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
