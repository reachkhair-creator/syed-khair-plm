import React, { useState } from 'react';
import { EXPERTISE_PILLARS } from '../data/portfolioData';
import { ExpertisePillar } from '../types/portfolio';
import { Server, Database, Shield, Zap, GitMerge, Layout, Code2, Check, Copy, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TeamcenterExpertise: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<ExpertisePillar | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const { isDark } = useTheme();

  // Individual vibrant color configuration for each of the 6 pillars
  const pillarThemes: { [id: string]: {
    border: string;
    hoverBorder: string;
    iconBg: string;
    iconColor: string;
    barColor: string;
    tagBg: string;
    textColor: string;
    badge: string;
  } } = {
    'infra-deployment': {
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400/80',
      iconBg: 'bg-blue-500/15',
      iconColor: 'text-blue-500',
      barColor: 'bg-blue-500',
      tagBg: isDark ? 'bg-blue-950/40 text-blue-300 border-blue-800/60' : 'bg-blue-50 text-blue-700 border-blue-200',
      textColor: 'text-blue-500',
      badge: 'Core Infrastructure'
    },
    'bmide-quality': {
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400/80',
      iconBg: 'bg-purple-500/15',
      iconColor: 'text-purple-500',
      barColor: 'bg-purple-500',
      tagBg: isDark ? 'bg-purple-950/40 text-purple-300 border-purple-800/60' : 'bg-purple-50 text-purple-700 border-purple-200',
      textColor: 'text-purple-500',
      badge: 'Data Model & Schema'
    },
    'workflow-governance': {
      border: 'border-amber-500/30',
      hoverBorder: 'hover:border-amber-400/80',
      iconBg: 'bg-amber-500/15',
      iconColor: 'text-amber-500',
      barColor: 'bg-amber-500',
      tagBg: isDark ? 'bg-amber-950/40 text-amber-300 border-amber-800/60' : 'bg-amber-50 text-amber-700 border-amber-200',
      textColor: 'text-amber-500',
      badge: 'Release Governance'
    },
    'performance-hygiene': {
      border: 'border-rose-500/30',
      hoverBorder: 'hover:border-rose-400/80',
      iconBg: 'bg-rose-500/15',
      iconColor: 'text-rose-500',
      barColor: 'bg-rose-500',
      tagBg: isDark ? 'bg-rose-950/40 text-rose-300 border-rose-800/60' : 'bg-rose-50 text-rose-700 border-rose-200',
      textColor: 'text-rose-500',
      badge: 'Database & Tuning'
    },
    'cad-bom-alignment': {
      border: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400/80',
      iconBg: 'bg-emerald-500/15',
      iconColor: 'text-emerald-500',
      barColor: 'bg-emerald-500',
      tagBg: isDark ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60' : 'bg-emerald-50 text-emerald-700 border-emerald-200',
      textColor: 'text-emerald-500',
      badge: 'EBOM ➔ MBOM'
    },
    'awc-integration': {
      border: 'border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400/80',
      iconBg: 'bg-cyan-500/15',
      iconColor: 'text-cyan-500',
      barColor: 'bg-cyan-500',
      tagBg: isDark ? 'bg-cyan-950/40 text-cyan-300 border-cyan-800/60' : 'bg-cyan-50 text-cyan-700 border-cyan-200',
      textColor: 'text-cyan-500',
      badge: 'Active Workspace & ERP'
    }
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'infra-deployment':
        return Server;
      case 'bmide-quality':
        return Database;
      case 'workflow-governance':
        return Shield;
      case 'performance-hygiene':
        return Zap;
      case 'cad-bom-alignment':
        return GitMerge;
      case 'awc-integration':
        return Layout;
      default:
        return Server;
    }
  };

  const handleCopy = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="expertise" className={`py-20 lg:py-28 relative transition-colors ${
      isDark ? 'bg-[#060D1A]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Enterprise Competency Matrix</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Six Pillars of Teamcenter Expertise
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Engineered through 20+ years of direct platform administration. Every pillar combines low-level administrative control, 
            rule handlers, and verifiable manufacturing outcomes.
          </p>
        </div>

        {/* 6 Pillars Grid with Individual Theme Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const theme = pillarThemes[pillar.id] || pillarThemes['infra-deployment'];

            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border ${theme.border} ${theme.hoverBorder} transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden ${
                  isDark ? 'bg-[#0C182B]/85' : 'bg-slate-50/80 shadow-slate-200/50'
                }`}
              >
                {/* Top Subtle Ambient Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${theme.iconBg} blur-3xl rounded-full opacity-40 pointer-events-none`} />

                <div>
                  {/* Top Bar: Icon + Badge + Progress Gauge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl ${theme.iconBg} ${theme.iconColor} border border-white/5 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${theme.tagBg}`}>
                        {theme.badge}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className={`text-xs font-bold font-mono tabular-nums ${theme.textColor}`}>
                        {pillar.level}%
                      </div>
                      <div className="w-16 h-1.5 bg-slate-700/30 rounded-full overflow-hidden mt-1">
                        <div
                          className={`h-full ${theme.barColor} rounded-full transition-all duration-700`}
                          style={{ width: `${pillar.level}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-lg font-bold transition-colors font-display ${
                    isDark ? 'text-white group-hover:' + theme.textColor : 'text-slate-900'
                  }`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-xs font-medium mt-1 mb-4 leading-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pillar.description}
                  </p>

                  {/* Tools & Handlers list */}
                  <div className={`space-y-1.5 pt-3 border-t mb-4 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                    <div className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Key Tools & Rules:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.toolsAndHandlers.map((tool, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
                            isDark
                              ? 'text-slate-300 bg-[#060D1A] border-slate-800 hover:border-slate-700'
                              : 'text-slate-700 bg-white border-slate-200'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Practical Outcome Box & Technical Inspector Trigger */}
                <div className={`pt-3 border-t space-y-3 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                  <div className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className={`font-semibold ${theme.textColor}`}>Demonstrated Capability: </span>
                    {pillar.outcome}
                  </div>

                  {pillar.sampleCodeSnippet && (
                    <button
                      onClick={() => setSelectedPillar(pillar)}
                      className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-all border ${
                        isDark
                          ? 'text-slate-200 bg-[#060D1A] hover:bg-[#10223D] border-slate-700/80'
                          : 'text-slate-700 bg-white hover:bg-slate-100 border-slate-300'
                      }`}
                    >
                      <Code2 className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                      <span>Inspect Architecture Pattern</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Code Snippet Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border ${
            isDark ? 'bg-[#0C182B] border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              isDark ? 'border-slate-700 bg-[#060D1A]' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <div>
                  <h4 className={`text-sm font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {selectedPillar.title} — Conceptual Pattern
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Standard Teamcenter administrative configuration pattern
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPillar(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Code Content */}
            <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs">
              <div className={`text-xs font-sans ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <span className="text-cyan-500 font-semibold">Architectural Role: </span>
                {selectedPillar.operationalImpact}
              </div>

              <div className={`relative rounded-xl border p-4 overflow-x-auto ${
                isDark ? 'bg-[#060D1A] border-slate-800 text-slate-200' : 'bg-slate-900 text-slate-100 border-slate-800'
              }`}>
                <button
                  onClick={() => handleCopy(selectedPillar.sampleCodeSnippet)}
                  className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 text-[11px] font-sans font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <pre className="text-xs leading-relaxed text-cyan-300">
                  <code>{selectedPillar.sampleCodeSnippet}</code>
                </pre>
              </div>

              <div className={`text-[11px] font-sans ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Associated Tools: </span>
                {selectedPillar.toolsAndHandlers.join(' · ')}
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`px-6 py-3 border-t flex justify-end ${
              isDark ? 'border-slate-700 bg-[#060D1A]' : 'border-slate-200 bg-slate-50'
            }`}>
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition-colors"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

