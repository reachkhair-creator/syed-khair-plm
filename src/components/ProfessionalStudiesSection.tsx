import React, { useState } from 'react';
import { PROFESSIONAL_STUDIES } from '../data/portfolioData';
import { ProfessionalStudy } from '../types/portfolio';
import { Layers, CheckCircle2, ArrowRight, Code2, Copy, Check, X, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ProfessionalStudiesSection: React.FC = () => {
  const [activeStudyIndex, setActiveStudyIndex] = useState<number>(0);
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [inspectModalStudy, setInspectModalStudy] = useState<ProfessionalStudy | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const { isDark } = useTheme();

  const activeStudy = PROFESSIONAL_STUDIES[activeStudyIndex];
  const activePillar = activeStudy.corePillars[activePillarIndex] || activeStudy.corePillars[0];

  // Specific color themes for each study
  const studyThemes = [
    {
      id: 'teamcenter-2606-analysis',
      accentColor: 'text-cyan-500',
      badgeBg: isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40' : 'bg-cyan-50 text-cyan-700 border-cyan-200',
      borderSelected: isDark ? 'border-cyan-500 bg-cyan-950/30' : 'border-cyan-500 bg-cyan-50/60',
      buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white',
      kpiText: 'text-cyan-500',
      kpiBg: isDark ? 'bg-cyan-950/20 border-cyan-500/20' : 'bg-cyan-50/70 border-cyan-200',
      glowBg: 'bg-cyan-500/10'
    },
    {
      id: 'engineering-order-process-roadmap',
      accentColor: 'text-amber-500',
      badgeBg: isDark ? 'bg-amber-950/60 text-amber-300 border-amber-500/40' : 'bg-amber-50 text-amber-700 border-amber-200',
      borderSelected: isDark ? 'border-amber-500 bg-amber-950/30' : 'border-amber-500 bg-amber-50/60',
      buttonBg: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-900 font-bold',
      kpiText: 'text-amber-500',
      kpiBg: isDark ? 'bg-amber-950/20 border-amber-500/20' : 'bg-amber-50/70 border-amber-200',
      glowBg: 'bg-amber-500/10'
    },
    {
      id: 'sustainability-lca-powerbi',
      accentColor: 'text-emerald-500',
      badgeBg: isDark ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40' : 'bg-emerald-50 text-emerald-700 border-emerald-200',
      borderSelected: isDark ? 'border-emerald-500 bg-emerald-950/30' : 'border-emerald-500 bg-emerald-50/60',
      buttonBg: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white',
      kpiText: 'text-emerald-500',
      kpiBg: isDark ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50/70 border-emerald-200',
      glowBg: 'bg-emerald-500/10'
    }
  ];

  const currentTheme = studyThemes[activeStudyIndex] || studyThemes[0];

  const handleCopy = (code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="studies" className={`py-20 lg:py-28 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span>Advanced Research & Solution Architecture</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Teamcenter 2606 Solutions & Digital Thread Studies
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            In-depth architectural research and strategic implementation roadmaps evaluating next-generation PLM solutions, 
            closed-loop engineering order lifecycles, and environmental Life Cycle Assessment (LCA) with Power BI DAX analytics.
          </p>
        </div>

        {/* Top 3 Multi-Colored Study Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {PROFESSIONAL_STUDIES.map((study, idx) => {
            const isSelected = activeStudyIndex === idx;
            const theme = studyThemes[idx];

            return (
              <button
                key={study.id}
                onClick={() => {
                  setActiveStudyIndex(idx);
                  setActivePillarIndex(0);
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-lg ${
                  isSelected
                    ? `${theme.borderSelected} shadow-xl -translate-y-1`
                    : isDark
                      ? 'bg-[#0C182B]/70 border-slate-800 hover:border-slate-700 hover:bg-[#102138]'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {/* Subtle Ambient Card Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${theme.glowBg} blur-2xl rounded-full opacity-60 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`font-mono font-bold ${theme.accentColor}`}>Study 0{idx + 1}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${theme.badgeBg}`}>
                      {study.badge.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold leading-snug font-display transition-colors ${
                    isDark ? 'text-white group-hover:text-cyan-200' : 'text-slate-900 group-hover:text-cyan-700'
                  }`}>
                    {study.title}
                  </h3>
                </div>

                <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}>
                  <span className="truncate max-w-[200px]">{study.category}</span>
                  <div className={`p-1 rounded-full ${isSelected ? theme.accentColor : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Study Deep-Dive Container with Jewel-Tone Border */}
        <div className={`rounded-3xl border p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden ${
          isDark ? 'bg-[#0C182B]/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/60'
        }`}>
          
          {/* Executive Header Banner */}
          <div className={`flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b ${
            isDark ? 'border-slate-800/90' : 'border-slate-200'
          }`}>
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className={`px-2.5 py-0.5 rounded-full border ${currentTheme.badgeBg}`}>
                  {activeStudy.category}
                </span>
                <span className="text-slate-500">·</span>
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{activeStudy.badge}</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {activeStudy.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {activeStudy.executiveSummary}
              </p>
            </div>

            {/* Inspect Technical Blueprint Action */}
            <div className="shrink-0">
              <button
                onClick={() => setInspectModalStudy(activeStudy)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all shadow-lg ${currentTheme.buttonBg}`}
              >
                <Code2 className="w-4 h-4" />
                <span>Inspect Technical Blueprint</span>
              </button>
            </div>
          </div>

          {/* Business Impact KPIs Banner with Multi-Color Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {activeStudy.businessImpactMetrics.map((kpi, kIdx) => (
              <div
                key={kIdx}
                className={`p-4 rounded-xl border ${currentTheme.kpiBg} space-y-1 transition-transform hover:-translate-y-0.5`}
              >
                <div className={`text-xl sm:text-2xl font-extrabold font-mono tabular-nums ${currentTheme.kpiText}`}>
                  {kpi.metric}
                </div>
                <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {kpi.label}
                </div>
                <div className={`text-[11px] line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {kpi.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Core Pillars Explorer */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 font-mono ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <Layers className={`w-4 h-4 ${currentTheme.accentColor}`} />
                <span>Architecture Pillars & Solution Modules (Select to inspect)</span>
              </h4>
              <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {activePillarIndex + 1} of {activeStudy.corePillars.length} Modules
              </span>
            </div>

            {/* Horizontal Pillar Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {activeStudy.corePillars.map((pillar, pIdx) => {
                const isActive = activePillarIndex === pIdx;

                return (
                  <button
                    key={pIdx}
                    onClick={() => setActivePillarIndex(pIdx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? `${currentTheme.badgeBg} font-semibold shadow-md`
                        : isDark
                          ? 'bg-[#060D1A] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                          : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>0{pIdx + 1}. {pillar.name.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Card with Vibrant Feature List */}
            {activePillar && (
              <div className={`p-6 rounded-2xl border space-y-4 shadow-xl ${
                isDark ? 'bg-[#060D1A]/90 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <h5 className={`text-base sm:text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {activePillar.name}
                  </h5>
                  <span className={`text-xs font-semibold ${currentTheme.accentColor}`}>
                    {activePillar.benefit}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {activePillar.description}
                </p>

                {/* Key Features & Capabilities */}
                <div className="space-y-2 pt-2">
                  <div className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Key Features & Technical Implementations:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {activePillar.keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border transition-colors ${
                          isDark
                            ? 'bg-[#0C182B] border-slate-800 hover:border-slate-700 text-slate-300'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${currentTheme.accentColor} shrink-0 mt-0.5`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

      {/* Technical Blueprint Modal */}
      {inspectModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border ${
            isDark ? 'bg-[#0C182B] border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              isDark ? 'border-slate-700 bg-[#060D1A]' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2.5">
                <Code2 className={`w-5 h-5 ${currentTheme.accentColor}`} />
                <div>
                  <h4 className={`text-sm font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {inspectModalStudy.badge} — Technical Implementation Pattern
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Enterprise Data Model & Architecture Specifications
                  </p>
                </div>
              </div>
              <button
                onClick={() => setInspectModalStudy(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className={`p-6 overflow-y-auto space-y-6 text-xs leading-relaxed font-sans ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <div>
                <h5 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {inspectModalStudy.title}
                </h5>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {inspectModalStudy.subtitle}
                </p>
              </div>

              {/* Architecture Highlights */}
              {inspectModalStudy.architectureHighlights.map((arch, aIdx) => (
                <div key={aIdx} className="space-y-3">
                  <div className={`flex items-center justify-between text-xs pb-1 border-b ${
                    isDark ? 'border-slate-800' : 'border-slate-200'
                  }`}>
                    <span className={`font-bold ${currentTheme.accentColor}`}>{arch.label}</span>
                    <span className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{arch.systemOrTool}</span>
                  </div>
                  <p className="text-xs">
                    {arch.details}
                  </p>

                  {arch.codeSnippet && (
                    <div className={`relative rounded-xl border p-4 font-mono text-xs overflow-x-auto ${
                      isDark ? 'bg-[#060D1A] border-slate-800 text-cyan-300' : 'bg-slate-900 text-cyan-300 border-slate-800'
                    }`}>
                      <button
                        onClick={() => handleCopy(arch.codeSnippet)}
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
                            <span>Copy Pattern</span>
                          </>
                        )}
                      </button>
                      <pre className="text-xs leading-relaxed">
                        <code>{arch.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className={`px-6 py-3 border-t flex items-center justify-between text-xs ${
              isDark ? 'border-slate-700 bg-[#060D1A] text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600'
            }`}>
              <span>Next-Gen Enterprise PLM Solution Architecture</span>
              <button
                onClick={() => setInspectModalStudy(null)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg text-white transition-colors ${currentTheme.buttonBg}`}
              >
                Close Blueprint
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
