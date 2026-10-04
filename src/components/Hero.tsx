import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, FileText, Layers, Cpu, Database, Workflow, Share2, ShieldCheck, CheckCircle2, Sparkles, Palette } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeStackLayer, setActiveStackLayer] = useState<number>(0);
  const { theme, setTheme, isDark } = useTheme();

  const stackLayers = [
    {
      id: 'awc',
      name: 'Active Workspace & Modern UI',
      icon: Layers,
      highlight: 'AWC 6.x / Current',
      color: 'cyan',
      borderColor: 'border-cyan-500/50',
      bgColor: 'bg-cyan-500/10',
      textColor: 'text-cyan-400',
      details: 'HTML5/Declarative XML views, responsive property stylesheets, instant 3D JT visualization, and zero-install client deployment.'
    },
    {
      id: 'workflow',
      name: 'Workflow Engine & Release Rules',
      icon: Workflow,
      highlight: 'EPM Handlers & ACLs',
      color: 'amber',
      borderColor: 'border-amber-500/50',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
      details: 'Automated validation handlers, status progression rules, ECR/ECN stage-gate control, and dynamic ACL read-only protection.'
    },
    {
      id: 'bmide',
      name: 'BMIDE Schema & Data Model',
      icon: Cpu,
      highlight: 'Custom Business Objects',
      color: 'violet',
      borderColor: 'border-violet-500/50',
      bgColor: 'bg-violet-500/10',
      textColor: 'text-violet-400',
      details: 'Tailored manufacturing item hierarchies, LOVs, Generic Relationship Management (GRM), and live schema packaging.'
    },
    {
      id: 'integration',
      name: 'CAD & ERP Integration Layer',
      icon: Share2,
      highlight: 'PLMXML & Enterprise ERP',
      color: 'emerald',
      borderColor: 'border-emerald-500/50',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
      details: 'Experience supporting PLM-to-ERP engineering data exchange, BOM synchronization, and single source of truth governance.'
    },
    {
      id: 'infra',
      name: '4-Tier Infrastructure & FMS Caching',
      icon: Database,
      highlight: 'Multi-Tier & Caching',
      color: 'blue',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
      details: 'High-availability server caching, Dispatcher translation pools (PDF/DXF/JT/STEP), and automated maintenance routines.'
    }
  ];

  const techStream = [
    { name: 'Siemens Teamcenter', color: 'border-blue-500/40 text-blue-300 bg-blue-950/40' },
    { name: 'BMIDE Data Modeling', color: 'border-purple-500/40 text-purple-300 bg-purple-950/40' },
    { name: 'Active Workspace (AWC)', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40' },
    { name: 'Teamcenter 2606 Solutions', color: 'border-teal-500/40 text-teal-300 bg-teal-950/40 font-semibold' },
    { name: 'Sustainability & LCA (T4SUST)', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40' },
    { name: 'Power BI & DAX Architecture', color: 'border-amber-500/40 text-amber-300 bg-amber-950/40' },
    { name: 'Workflow Designer & ACLs', color: 'border-amber-500/40 text-amber-300 bg-amber-950/40' },
    { name: 'EBOM ➔ MBOM Alignment', color: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/40' },
    { name: 'PTC Creo & Autodesk Inventor', color: 'border-rose-500/40 text-rose-300 bg-rose-950/40' },
    { name: 'Siemens NX CAD Integration', color: 'border-sky-500/40 text-sky-300 bg-sky-950/40' },
    { name: 'PLM-to-ERP Data Exchange', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40' },
    { name: 'Dispatcher Translation Pools', color: 'border-slate-500/40 text-slate-300 bg-slate-900/60' }
  ];

  const statColors = [
    { text: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-950/20' },
    { text: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-950/20' },
    { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-950/20' },
    { text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-950/20' }
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-tech-mesh bg-tech-grid">
      {/* Radiant multi-color ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[400px] bg-purple-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-500/08 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Summary & Multi-color CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium font-mono">
              <span className="text-cyan-400">Teamcenter / PLM Architect</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">Teamcenter Administrator</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-purple-400">BMIDE Specialist</span>
            </div>

            {/* Main Headline with Multi-Color Gradient */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance font-display ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Enterprise Teamcenter PLM Architecture —{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Connecting Engineering to Manufacturing
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Hands-on expertise in Teamcenter administration, BMIDE data modeling, Active Workspace configuration, 
              controlled release workflows, and engineering-to-manufacturing digital thread integration.
            </p>

            {/* Location & Availability */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 py-1">
              <span className={`flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md border ${
                isDark ? 'text-slate-200 bg-slate-900/60 border-slate-800' : 'text-slate-800 bg-slate-100 border-slate-200'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Based in Sharjah, UAE
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Open to UAE, KSA & Global Opportunities</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-cyan-400 font-mono font-medium">20+ Years Dual PLM</span>
            </div>

            {/* Action Buttons with Multi-Color Accents */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <span>View Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#studies"
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg transition-all shadow-sm ${
                  isDark
                    ? 'text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-500/40 hover:border-cyan-400'
                    : 'text-cyan-800 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300'
                }`}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>TC 2606 Solutions</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg transition-colors border ${
                  isDark
                    ? 'text-slate-200 bg-[#0C182B] hover:bg-[#132845] border-slate-700'
                    : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-300'
                }`}
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Quick Multi-Color Theme Switcher Bar */}
            <div className="flex items-center flex-wrap gap-2 pt-2">
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <Palette className="w-3 h-3 text-cyan-400" />
                <span>Theme:</span>
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = opt.id === theme;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setTheme(opt.id as ThemeId)}
                      className={`text-xs px-2.5 py-1 rounded-md border flex items-center gap-1.5 transition-all ${
                        isSelected
                          ? isDark
                            ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 font-semibold shadow-sm'
                            : 'border-slate-800 bg-slate-900 text-white font-semibold'
                          : isDark
                            ? 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                            : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span className="flex gap-0.5">
                        {opt.colors.slice(0, 3).map((c, i) => (
                          <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                      </span>
                      <span>{opt.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantitative Impact Snapshot with Multi-Color Cards */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_INFO.stats.map((stat, idx) => {
                const colorTheme = statColors[idx % statColors.length];

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border ${colorTheme.border} ${colorTheme.bg} space-y-0.5 transition-transform hover:-translate-y-0.5`}
                  >
                    <div className={`text-xl sm:text-2xl font-bold tracking-tight font-display tabular-nums ${colorTheme.text}`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-1">
                      {stat.context}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Multi-Color Technical Architecture Stack & Hero Visual */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-2xl border overflow-hidden shadow-2xl backdrop-blur-xl ${
              isDark
                ? 'border-cyan-500/25 bg-[#0C182B]/90 shadow-black/60'
                : 'border-slate-200 bg-white shadow-slate-300/50'
            }`}>
              
              {/* Header bar of stack inspector */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                isDark ? 'border-cyan-500/20 bg-[#060D1A]/90' : 'border-slate-200 bg-slate-50'
              }`}>
                <div className={`flex items-center gap-2 text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Teamcenter Enterprise Stack Architecture</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/50">
                  TC 13.x / Current
                </div>
              </div>

              {/* Visual preview strip using technical hero graphic */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                <img
                  src="/src/assets/images/plm_digital_thread_hero_1791104695948.jpg"
                  alt="Enterprise PLM Digital Thread Architecture"
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C182B] via-transparent to-black/40 pointer-events-none" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="bg-black/75 text-slate-200 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                    CAD ➔ EBOM ➔ MBOM ➔ ERP Handoff
                  </span>
                  <span className="text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40 backdrop-blur-sm">
                    Single Source
                  </span>
                </div>
              </div>

              {/* Stack Layers Selector with Individual Vibrant Colors */}
              <div className="p-3 sm:p-4 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Interactive Architectural Layers (Click to inspect)
                </div>

                {stackLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isActive = activeStackLayer === index;

                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveStackLayer(index)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs flex items-start gap-3 ${
                        isActive
                          ? `${layer.bgColor} ${layer.borderColor} shadow-md`
                          : isDark
                            ? 'bg-[#060D1A]/60 border-slate-800 hover:border-slate-700 hover:bg-[#102138]'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg ${isActive ? `${layer.bgColor} ${layer.textColor}` : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`font-semibold truncate ${
                            isActive
                              ? isDark ? 'text-white' : 'text-slate-900'
                              : isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}>
                            {layer.name}
                          </span>
                          <span className={`text-[10px] font-mono ml-2 shrink-0 ${isActive ? layer.textColor : 'text-slate-500'}`}>
                            {layer.highlight}
                          </span>
                        </div>
                        {isActive && (
                          <p className={`mt-1.5 text-[11px] leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            {layer.details}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer status line */}
              <div className={`px-4 py-2.5 border-t flex items-center justify-between text-[11px] ${
                isDark ? 'bg-[#060D1A]/90 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Enterprise PLM Best Practices</span>
                </div>
                <span className="text-cyan-400 font-mono">End-to-End Ownership</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Horizontal Tech Stack Ribbon with Multi-Color Tags */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Core Enterprise Technologies & Competencies</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {techStream.map((tech, idx) => (
              <span
                key={idx}
                className={`text-xs px-2.5 py-1 rounded-md border transition-all whitespace-nowrap ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

