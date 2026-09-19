import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenMandate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leadership & Impact', path: '/leadership' },
    { name: 'AI & Insights', path: '/insights' },
    { name: 'Connect', path: '/connect' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#10141a]/90 backdrop-blur-xl border-b border-[#444656]/40 transition-colors">
      <div className="h-20 max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Brand / Executive Identity */}
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/" className="flex flex-col min-w-0 group" onClick={() => setMobileOpen(false)}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg md:text-xl text-[#dfe2eb] tracking-tight group-hover:text-[#bac3ff] transition-colors truncate">
                {portfolioData.profile.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#3456f6]/20 text-[#bac3ff] border border-[#3456f6]/30 shrink-0">
                <ShieldCheck className="w-3 h-3 text-[#bac3ff]" />
                Verified
              </span>
            </div>
            <span className="text-xs text-[#c4c5d8] tracking-wider truncate hidden sm:block font-medium">
              {portfolioData.profile.currentRoles}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm py-1 font-medium transition-all relative ${
                  active
                    ? 'text-[#bac3ff] font-semibold'
                    : 'text-[#c4c5d8] hover:text-[#dfe2eb]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-[-28px] left-0 right-0 h-[2px] bg-[#3456f6] rounded-full shadow-[0_0_8px_#3456f6]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Profile Avatar */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <Link
            to="/connect"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs lg:text-sm px-4 py-2.5 rounded-lg bg-[#3456f6] text-white hover:bg-[#254aeb] transition-all font-semibold shadow-md shadow-[#3456f6]/20 hover:shadow-[#3456f6]/40 shrink-0"
          >
            <span>Discuss a mandate</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center pl-2 border-l border-[#444656]/50">
            <Link to="/leadership" title="View Profile" className="shrink-0">
              <img
                alt={portfolioData.profile.name}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#8e8fa2]/40 hover:border-[#bac3ff] transition-all"
                src={portfolioData.profile.avatar}
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#c4c5d8] hover:text-white hover:bg-[#1c2026] active:bg-[#262a31] transition-colors touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#10141a]/98 border-b border-[#444656]/60 px-4 sm:px-6 py-5 space-y-2 backdrop-blur-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#8e8fa2] pb-1.5 border-b border-[#262a31]">
            Executive Navigation
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center min-h-[44px] py-2.5 text-sm font-medium rounded-lg px-3 transition-colors ${
                isActive(link.path)
                  ? 'bg-[#1c2026] text-[#bac3ff] font-semibold border-l-2 border-[#3456f6]'
                  : 'text-[#c4c5d8] hover:text-white hover:bg-[#181c22]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/connect"
              onClick={() => setMobileOpen(false)}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-lg bg-[#3456f6] text-white font-semibold text-xs sm:text-sm shadow-md"
            >
              <span>Discuss an Executive Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
