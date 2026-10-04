import React from 'react';
import { WORK_EXPERIENCES } from '../data/portfolioData';
import { Building2, Calendar, MapPin, ChevronRight, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ExperienceTimeline: React.FC = () => {
  const { isDark } = useTheme();

  const roleThemes = [
    {
      // Role 1: Current SKM - Vibrant Emerald Green
      nodeBorder: 'border-emerald-400 bg-emerald-950',
      badge: isDark ? 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40' : 'border-emerald-300 text-emerald-700 bg-emerald-50',
      metricText: 'text-emerald-500',
      metricBg: isDark ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50/70 border-emerald-200',
      cardHover: 'hover:border-emerald-500/50'
    },
    {
      // Role 2: Al Shirawi - Warm Solar Amber
      nodeBorder: 'border-amber-400 bg-amber-950',
      badge: isDark ? 'border-amber-500/30 text-amber-400 bg-amber-950/40' : 'border-amber-300 text-amber-700 bg-amber-50',
      metricText: 'text-amber-500',
      metricBg: isDark ? 'bg-amber-950/20 border-amber-500/20' : 'bg-amber-50/70 border-amber-200',
      cardHover: 'hover:border-amber-500/50'
    },
    {
      // Role 3: Multitech / GMD - Royal Violet
      nodeBorder: 'border-purple-400 bg-purple-950',
      badge: isDark ? 'border-purple-500/30 text-purple-400 bg-purple-950/40' : 'border-purple-300 text-purple-700 bg-purple-50',
      metricText: 'text-purple-500',
      metricBg: isDark ? 'bg-purple-950/20 border-purple-500/20' : 'bg-purple-50/70 border-purple-200',
      cardHover: 'hover:border-purple-500/50'
    },
    {
      // Role 4: Mechanical Design Eng - Electric Cobalt Blue
      nodeBorder: 'border-blue-400 bg-blue-950',
      badge: isDark ? 'border-blue-500/30 text-blue-400 bg-blue-950/40' : 'border-blue-300 text-blue-700 bg-blue-50',
      metricText: 'text-blue-500',
      metricBg: isDark ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50/70 border-blue-200',
      cardHover: 'hover:border-blue-500/50'
    }
  ];

  return (
    <section id="experience" className={`py-20 lg:py-28 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-2 font-mono">
            <Briefcase className="w-4 h-4 text-cyan-500" />
            <span>Career Trajectory</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience: Two Decades of Engineering & PLM Ownership
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A continuous record of taking complex manufacturing operations from manual spreadsheets and disconnected CAD silos 
            into auditable, enterprise-grade PLM single sources of truth.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className={`relative border-l-2 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 ${
          isDark ? 'border-slate-800' : 'border-slate-300'
        }`}>
          {WORK_EXPERIENCES.map((exp, index) => {
            const theme = roleThemes[index % roleThemes.length];

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline marker node with radiant color */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 ${theme.nodeBorder} group-hover:scale-125 transition-transform`} />

                {/* Card Container */}
                <div className={`rounded-2xl border p-6 sm:p-8 shadow-xl transition-all duration-300 ${
                  isDark
                    ? `bg-[#0C182B]/90 border-slate-800 ${theme.cardHover}`
                    : `bg-white border-slate-200 ${theme.cardHover} shadow-slate-200/60`
                }`}>
                  
                  {/* Header: Company, Role, Location, Period */}
                  <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mb-1">
                        <span className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border font-mono ${theme.badge}`}>
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span aria-hidden="true" className="text-slate-500">·</span>
                        <span className={`flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold font-display ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>
                    </div>

                    <div className={`flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-lg border shrink-0 self-start lg:self-center ${
                      isDark
                        ? 'text-slate-300 bg-[#060D1A] border-slate-800'
                        : 'text-slate-700 bg-slate-100 border-slate-200'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Narrative Summary */}
                  <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {exp.summary}
                  </p>

                  {/* Highlights Metrics Row with Multi-Color Cards */}
                  <div className="my-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className={`p-3 rounded-xl border ${theme.metricBg}`}>
                        <div className={`text-base sm:text-lg font-bold tabular-nums font-mono ${theme.metricText}`}>
                          {m.value}
                        </div>
                        <div className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities Bullets */}
                  <div className="space-y-2.5">
                    <div className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Core Responsibilities & Technical Deliverables:
                    </div>
                    <ul className={`space-y-2 text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <ChevronRight className={`w-4 h-4 ${theme.metricText} shrink-0 mt-0.5`} />
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Clients / Sectors */}
                  {exp.keyClients && (
                    <div className={`mt-5 pt-4 border-t flex flex-wrap items-center gap-2 text-xs ${
                      isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
                    }`}>
                      <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Sector Context:</span>
                      {exp.keyClients.map((client, cIdx) => (
                        <span key={cIdx} className={`px-2.5 py-1 rounded border font-mono text-[11px] ${
                          isDark ? 'bg-[#060D1A] text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {client}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Used */}
                  <div className={`mt-4 pt-4 border-t flex flex-wrap items-center gap-1.5 ${
                    isDark ? 'border-slate-800/80' : 'border-slate-100'
                  }`}>
                    <span className={`text-[11px] font-semibold mr-1 font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Stack:</span>
                    {exp.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] px-2.5 py-0.5 rounded-md border ${
                          isDark
                            ? 'text-slate-300 bg-[#060D1A] border-slate-800'
                            : 'text-slate-700 bg-slate-100 border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
