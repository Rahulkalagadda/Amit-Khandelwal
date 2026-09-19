import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Sliders, 
  RefreshCw, 
  Cpu, 
  Lock, 
  Unlock, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Server,
  Activity
} from 'lucide-react';

export default function GovernanceSandbox({ onOpenMandate }) {
  const [mode, setMode] = useState('governed'); // 'unregulated' | 'governed'
  
  // Granular interactive toggles
  const [toggles, setToggles] = useState({
    guardrails: true,
    airgap: true,
    auditTelemetry: true,
    humanInTheLoop: true
  });

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    if (newMode === 'unregulated') {
      setToggles({
        guardrails: false,
        airgap: false,
        auditTelemetry: false,
        humanInTheLoop: false
      });
    } else {
      setToggles({
        guardrails: true,
        airgap: true,
        auditTelemetry: true,
        humanInTheLoop: true
      });
    }
  };

  const toggleSingle = (key) => {
    const updated = { ...toggles, [key]: !toggles[key] };
    setToggles(updated);
    // If all true, set mode to governed; if all false, unregulated; otherwise mixed
    const activeCount = Object.values(updated).filter(Boolean).length;
    if (activeCount >= 3) setMode('governed');
    else setMode('unregulated');
  };

  // Calculate live governance metrics
  const activeCount = Object.values(toggles).filter(Boolean).length;
  const complianceScore = Math.round((activeCount / 4) * 100);
  const isHighRisk = complianceScore < 60;

  return (
    <div className="w-full bg-[#10141a] rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-10 border border-[#31353c] shadow-2xl relative overflow-hidden">
      
      {/* Background radial accent */}
      <div 
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
          isHighRisk ? 'bg-red-600/10' : 'bg-[#3456f6]/15'
        }`} 
      />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-[#262a31] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2 h-2 rounded-full ${isHighRisk ? 'bg-red-400 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#bac3ff]">
              Interactive Architecture Topology Playground
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            ISO/IEC 42001 AI Governance Sandbox
          </h2>
          <p className="text-xs sm:text-sm text-[#c4c5d8] mt-1 max-w-xl leading-relaxed">
            Simulate the operational difference between ad-hoc generative AI deployments and Dr. Amit Khandelwal's ISO 42001 certified sovereign enterprise architecture.
          </p>
        </div>

        {/* Global Topology Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 rounded-xl bg-[#0a0e14] border border-[#262a31] shrink-0 gap-1.5 sm:gap-0">
          <button
            onClick={() => handleModeSwitch('unregulated')}
            className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === 'unregulated' && isHighRisk
                ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-sm'
                : 'text-[#8e8fa2] hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>Unregulated Topology</span>
          </button>

          <button
            onClick={() => handleModeSwitch('governed')}
            className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === 'governed' || !isHighRisk
                ? 'bg-[#3456f6] text-white shadow-md shadow-[#3456f6]/30'
                : 'text-[#8e8fa2] hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>ISO 42001 AIMS Governed</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-6 sm:pt-8 relative z-10">
        
        {/* Left Interactive Control Console */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#dfe2eb] flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-[#3456f6]" />
            <span>Active Architecture Controls</span>
          </div>

          <div className="space-y-2.5">
            {[
              {
                id: 'guardrails',
                label: 'Deterministic Prompt & Model Guardrails',
                desc: 'Prevents adversarial prompt injection, data poisoning, and hallucination bleed.',
                active: toggles.guardrails
              },
              {
                id: 'airgap',
                label: 'Tier-N Third-Party Air-Gap Boundary',
                desc: 'Isolates external LLM APIs from core ERP and sensitive enterprise relational databases.',
                active: toggles.airgap
              },
              {
                id: 'auditTelemetry',
                label: 'Continuous Cryptographic Audit Telemetry',
                desc: 'Immutable vector-level audit logs for board compliance and regulatory reporting.',
                active: toggles.auditTelemetry
              },
              {
                id: 'humanInTheLoop',
                label: 'Fiduciary Human-in-the-Loop Thresholds',
                desc: 'Automated executive hold on high-consequence operational decisions.',
                active: toggles.humanInTheLoop
              }
            ].map((ctrl) => (
              <div
                key={ctrl.id}
                onClick={() => toggleSingle(ctrl.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  ctrl.active
                    ? 'bg-[#181c22] border-emerald-500/40 hover:border-emerald-400'
                    : 'bg-[#10141a] border-red-500/30 hover:border-red-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xs text-white">
                    {ctrl.active ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    )}
                    <span>{ctrl.label}</span>
                  </div>
                  <span className={`text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded ${
                    ctrl.active ? 'bg-emerald-950 text-emerald-300' : 'bg-red-950 text-red-300'
                  }`}>
                    {ctrl.active ? 'ENGAGED' : 'DISABLED'}
                  </span>
                </div>
                <p className="text-[11px] text-[#8e8fa2] mt-1.5 leading-relaxed">
                  {ctrl.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#0a0e14] border border-[#262a31] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8e8fa2]">Regulatory Posture:</span>
              <span className={`font-bold ${isHighRisk ? 'text-red-400' : 'text-emerald-400'}`}>
                {isHighRisk ? 'Severe Breach Vulnerability' : 'ISO 42001 & EU AI Act Ready'}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8e8fa2]">Governance Assurance Index:</span>
              <span className={`font-bold font-mono ${isHighRisk ? 'text-red-400' : 'text-emerald-400'}`}>
                {complianceScore}% / 100%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#181c22] overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  isHighRisk ? 'bg-red-500' : 'bg-emerald-400'
                }`}
                style={{ width: `${complianceScore}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Visual Architecture Topology Diagram */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          
          <div className="bg-[#0a0e14] rounded-2xl p-6 border border-[#262a31] relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* Top Pipeline Status Banner */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Activity className={`w-4 h-4 ${isHighRisk ? 'text-red-400 animate-spin' : 'text-[#3456f6]'}`} />
                <span className="font-mono text-[#bac3ff]">
                  TOPOLOGY: {isHighRisk ? 'HIGH RISK // EXPOSED ATTACK VECTORS' : 'SOVEREIGN CLUSTER // DETERMINISTIC AIMS'}
                </span>
              </div>
              <div className="text-[11px] text-[#8e8fa2] font-mono">
                AIR-GAP: {toggles.airgap ? 'ISOLATED' : 'LEAKY'}
              </div>
            </div>

            {/* Architecture Node Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 items-center">
              
              {/* Node 1: Enterprise Data Backbone */}
              <div className={`p-5 rounded-xl border text-center transition-all ${
                toggles.airgap 
                  ? 'bg-[#181c22] border-[#3456f6]/60 shadow-lg shadow-[#3456f6]/10' 
                  : 'bg-red-950/20 border-red-500/50'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#10141a] flex items-center justify-center mb-2 border border-[#262a31]">
                  <Database className={`w-5 h-5 ${toggles.airgap ? 'text-[#3456f6]' : 'text-red-400'}`} />
                </div>
                <div className="font-bold text-sm text-white">
                  Enterprise ERP &amp; IP
                </div>
                <div className="text-[11px] text-[#8e8fa2] mt-1">
                  {toggles.airgap ? 'Zero-Trust Protected' : 'Exposed to External Query'}
                </div>
              </div>

              {/* Node 2: Governance & Filter Layer */}
              <div className={`p-5 rounded-xl border text-center transition-all ${
                toggles.guardrails && toggles.auditTelemetry
                  ? 'bg-[#181c22] border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                  : 'bg-red-950/30 border-red-500/60'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#10141a] flex items-center justify-center mb-2 border border-[#262a31]">
                  {toggles.guardrails ? (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <ShieldAlert className="w-5 h-5 text-red-400 animate-bounce" />
                  )}
                </div>
                <div className="font-bold text-sm text-white">
                  ISO 42001 AIMS Gateway
                </div>
                <div className="text-[11px] text-[#8e8fa2] mt-1">
                  {toggles.guardrails ? 'Deterministic Guardrails Active' : 'Ad-hoc Unfiltered Inference'}
                </div>
              </div>

              {/* Node 3: Autonomous Agents / External Foundation LLMs */}
              <div className={`p-5 rounded-xl border text-center transition-all ${
                toggles.humanInTheLoop
                  ? 'bg-[#181c22] border-[#bac3ff]/50'
                  : 'bg-red-950/20 border-red-500/40'
              }`}>
                <div className="w-10 h-10 mx-auto rounded-lg bg-[#10141a] flex items-center justify-center mb-2 border border-[#262a31]">
                  <Cpu className={`w-5 h-5 ${toggles.humanInTheLoop ? 'text-[#bac3ff]' : 'text-red-400'}`} />
                </div>
                <div className="font-bold text-sm text-white">
                  Agentic AI Runtime
                </div>
                <div className="text-[11px] text-[#8e8fa2] mt-1">
                  {toggles.humanInTheLoop ? 'Executive Fiduciary Gate' : 'Unmonitored Autonomous Action'}
                </div>
              </div>

            </div>

            {/* Dynamic Telemetry Assessment Box */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed transition-all ${
              isHighRisk 
                ? 'bg-red-950/30 border-red-500/40 text-red-200' 
                : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
            }`}>
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {isHighRisk ? <AlertTriangle className="w-4 h-4 text-red-400" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                <span>
                  {isHighRisk 
                    ? 'CRITICAL EXPOSURE: Model subject to prompt extraction, unauthorized data harvesting, and regulatory non-compliance under EU AI Act.'
                    : 'AUDIT VERIFIED: Compliant with ISO/IEC 42001 AIMS controls. Prompt boundary air-gapped with immutable cryptographic logging.'}
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Mandate CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#181c22] border border-[#31353c]">
            <div className="text-xs text-[#c4c5d8]">
              Need a bespoke boardroom audit of your enterprise AI architecture?
            </div>
            <button
              onClick={onOpenMandate}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3456f6] hover:bg-[#254aeb] text-white font-semibold text-xs transition-all shadow-md shrink-0"
            >
              <span>Commission Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
