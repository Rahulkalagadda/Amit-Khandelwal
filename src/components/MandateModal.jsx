import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldAlert, Building, Mail, Phone, User, Calendar } from 'lucide-react';

export default function MandateModal({ isOpen, onClose, initialData = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    mandateType: 'Board Advisory',
    timeline: 'Immediate / Next 30 Days',
    brief: ''
  });

  // Sync initialData if provided
  React.useEffect(() => {
    if (initialData && isOpen) {
      setFormData(prev => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      role: '',
      email: '',
      mandateType: 'Board Advisory',
      timeline: 'Immediate / Next 30 Days',
      brief: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="bg-[#181c22] border border-[#444656] w-full max-w-2xl rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 text-[#8e8fa2] hover:text-white hover:bg-[#262a31] rounded-lg transition-colors z-10 touch-manipulation"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Mandate Request Received</h3>
            <p className="text-[#c4c5d8] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your inquiry regarding a <span className="text-[#bac3ff] font-medium">{formData.mandateType}</span> engagement has been confidentially logged. Dr. Amit Khandelwal's executive office will review and respond within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-sm rounded-lg transition-all"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6 space-y-1 pr-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#bac3ff]">
                <ShieldAlert className="w-4 h-4 text-[#3456f6]" />
                Direct Executive Inquiry
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                Discuss an Executive Mandate
              </h2>
              <p className="text-xs sm:text-sm text-[#8e8fa2] leading-relaxed">
                Direct protocol for board evaluations, C-suite advisory, and strategic AI modernization.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8e8fa2] absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Lord Davies / Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] placeholder-[#8e8fa2]/60 focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                    Corporate Organization *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#8e8fa2] absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="Enterprise, Fund or Ministry"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] placeholder-[#8e8fa2]/60 focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                    Your Executive Role *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Board Chair / Managing Director"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] placeholder-[#8e8fa2]/60 focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                    Corporate Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8e8fa2] absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="director@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] placeholder-[#8e8fa2]/60 focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                    Mandate Engagement Category
                  </label>
                  <select
                    value={formData.mandateType}
                    onChange={(e) => setFormData({ ...formData, mandateType: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm"
                  >
                    <option value="Board Advisory">Board Advisory &amp; Risk Oversight</option>
                    <option value="Interim CDO / CTO / CAIO">Interim CDO / CTO / CAIO Appointment</option>
                    <option value="Sovereign AI & ISO 42001 Architecture">Sovereign AI &amp; ISO 42001 Architecture</option>
                    <option value="Third-Party Cyber Supply Chain Risk">Cyber Supply Chain &amp; TPRM</option>
                    <option value="M&A Technology Diligence">M&amp;A Technology &amp; Debt Diligence</option>
                    <option value="Keynote / Summit Address">Keynote &amp; Executive Symposium</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                    Target Engagement Timeline
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8e8fa2] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Next 30–60 Days"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 sm:py-2.5 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] placeholder-[#8e8fa2]/60 focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#c4c5d8] mb-1">
                  Brief Description of Scope or Objectives *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline context, critical timeline, and governance level..."
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  className="w-full p-3 bg-[#10141a] border border-[#31353c] rounded-lg text-[#dfe2eb] placeholder-[#8e8fa2]/60 focus:outline-none focus:border-[#3456f6] transition-colors text-xs sm:text-sm resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#262a31]">
                <span className="text-[11px] text-[#8e8fa2] text-center sm:text-left">
                  Strict non-disclosure &amp; confidential protocol assured.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#3456f6] text-white font-semibold text-xs sm:text-sm hover:bg-[#254aeb] transition-all shadow-md shadow-[#3456f6]/25 shrink-0"
                >
                  <span>Submit Mandate Brief</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
