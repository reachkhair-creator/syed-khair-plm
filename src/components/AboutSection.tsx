import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Award, CheckCircle2, Globe, Shield, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 lg:py-28 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Professional Profile & Engineering Origin</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Experience Behind the PLM
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {PERSONAL_INFO.tagline}
          </p>
        </div>

        {/* Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`prose max-w-none space-y-4 leading-relaxed text-sm sm:text-base ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {PERSONAL_INFO.summary.map((para, index) => (
                <p key={index}>
                  {para}
                </p>
              ))}
            </div>

            {/* Credibility Pillars with 4 Distinct Theme Colors */}
            <div className={`pt-4 border-t space-y-3 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <h3 className={`text-sm font-semibold tracking-wide font-display ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Key Credibility & Technical Capabilities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* 1. Dual PLM - Sapphire Blue */}
                <div className={`flex items-start gap-2.5 p-3.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-blue-950/20 border-blue-500/30 hover:border-blue-500/50 text-slate-300'
                    : 'bg-blue-50/70 border-blue-200 text-slate-700'
                }`}>
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Dual PLM Mastery:</span> Siemens Teamcenter AND PTC Windchill across 20+ combined years of engineering practice.
                  </div>
                </div>

                {/* 2. Platform Ownership - Royal Purple */}
                <div className={`flex items-start gap-2.5 p-3.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-purple-950/20 border-purple-500/30 hover:border-purple-500/50 text-slate-300'
                    : 'bg-purple-50/70 border-purple-200 text-slate-700'
                }`}>
                  <div className="p-1 rounded bg-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Full Platform Ownership:</span> Hands-on experience managing Teamcenter administration, BMIDE data modeling, and Active Workspace.
                  </div>
                </div>

                {/* 3. CAD <-> ERP - Mint Emerald */}
                <div className={`flex items-start gap-2.5 p-3.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-500/50 text-slate-300'
                    : 'bg-emerald-50/70 border-emerald-200 text-slate-700'
                }`}>
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>CAD ↔ ERP Integration:</span> Experience supporting PLM-to-ERP engineering data exchange and BOM synchronization.
                  </div>
                </div>

                {/* 4. Shop Floor - Warm Amber */}
                <div className={`flex items-start gap-2.5 p-3.5 rounded-xl border transition-colors ${
                  isDark
                    ? 'bg-amber-950/20 border-amber-500/30 hover:border-amber-500/50 text-slate-300'
                    : 'bg-amber-50/70 border-amber-200 text-slate-700'
                }`}>
                  <div className="p-1 rounded bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Shop-Floor Grounding:</span> Decades of mechanical engineering experience designing cooling equipment before managing the systems that govern them.
                  </div>
                </div>
              </div>
            </div>

            {/* Languages with Multi-Color Badges */}
            <div className={`pt-3 flex flex-wrap items-center gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className={`font-medium flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                Languages:
              </span>
              {PERSONAL_INFO.languages.map((lang, idx) => (
                <span key={idx} className={`px-2.5 py-1 rounded-md border ${
                  isDark ? 'bg-[#0C182B] text-slate-300 border-slate-700/80' : 'bg-white text-slate-700 border-slate-200'
                }`}>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{lang.language}</span>{' '}
                  <span className="text-cyan-400 font-mono text-[10px]">({lang.proficiency})</span>
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Authentic Profile Portrait, Multi-Color Honors, Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Portrait Card - 100% Authentic Unmodified Photo */}
            <div className={`rounded-2xl border overflow-hidden shadow-xl ${
              isDark
                ? 'bg-[#0C182B]/90 border-cyan-500/30 shadow-black/50'
                : 'bg-white border-slate-200 shadow-slate-300/40'
            }`}>
              <div className="relative h-80 sm:h-96 w-full bg-[#040B16] overflow-hidden">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} — Teamcenter / PLM Architect`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-lg font-extrabold text-white font-display tracking-tight">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs font-medium text-cyan-400 font-mono">
                    Teamcenter / PLM Architect · Lead Design Engineer
                  </div>
                </div>
              </div>
              <div className={`px-4 py-3 text-xs flex items-center justify-between border-t ${
                isDark ? 'border-slate-800 text-slate-300 bg-[#081223]' : 'border-slate-100 text-slate-600 bg-slate-50'
              }`}>
                <span>SKM Air Conditioning LLC · Sharjah, UAE</span>
                <span className="font-mono text-cyan-500 font-semibold">20+ Yrs Experience</span>
              </div>
            </div>

            {/* Honors Card - Radiant Warm Amber & Gold Gradient */}
            <div className={`p-6 rounded-2xl border shadow-xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-amber-950/40 via-[#0C182B] to-slate-900 border-amber-500/40 shadow-amber-500/05'
                : 'bg-gradient-to-br from-amber-50 via-white to-amber-50/30 border-amber-300 shadow-amber-500/10'
            }`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-500 border border-amber-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold font-mono">Company Recognition</div>
                  <div className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>Best Product Designer Award</div>
                </div>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Awarded in recognition of engineering design excellence and contributions to PLM-driven product development and stage-gate process governance.
              </p>
            </div>

            {/* Education Box - Cobalt Blue & Indigo */}
            <div className={`p-5 rounded-2xl border space-y-3 shadow-lg ${
              isDark ? 'bg-[#0C182B]/80 border-blue-500/25' : 'bg-white border-blue-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-500 font-mono">
                <Wrench className="w-4 h-4 text-blue-500" />
                <span>Academic Education</span>
              </div>
              <div className="space-y-3">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className={`border-b last:border-0 pb-2.5 last:pb-0 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{edu.institution}</div>
                    <div className="text-[10px] text-blue-500 font-mono mt-0.5">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications Box - Teal & Cyan */}
            <div className={`p-5 rounded-2xl border space-y-3 shadow-lg ${
              isDark ? 'bg-[#0C182B]/80 border-teal-500/25' : 'bg-white border-teal-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-500 font-mono">
                <Shield className="w-4 h-4 text-teal-500" />
                <span>Verified Certifications & Training</span>
              </div>
              <div className="space-y-2.5">
                {PERSONAL_INFO.certifications.map((cert, idx) => (
                  <div key={idx} className={`flex items-start justify-between gap-3 text-xs pb-2 border-b last:border-0 last:pb-0 ${
                    isDark ? 'border-slate-800/60' : 'border-slate-100'
                  }`}>
                    <div>
                      <div className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{cert.title}</div>
                      <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.issuer}</div>
                    </div>
                    <span className={`text-[10px] font-mono shrink-0 px-2 py-0.5 rounded border ${
                      isDark ? 'text-teal-400 bg-teal-950/60 border-teal-800/60' : 'text-teal-700 bg-teal-50 border-teal-200'
                    }`}>
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

