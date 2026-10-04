import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { FeaturedProject } from '../types/portfolio';
import { ArrowUpRight, BarChart3, Database, GitBranch, Cpu, CheckCircle2, X, Filter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { isDark } = useTheme();

  const filterOptions = [
    'All',
    'Architecture & Performance',
    'BOM & CAD-ERP Synchronization',
    'Manufacturing Release Governance'
  ];

  const projectThemes = [
    {
      badgeBg: isDark ? 'bg-blue-950/60 text-blue-300 border-blue-500/40' : 'bg-blue-50 text-blue-700 border-blue-200',
      accentColor: 'text-blue-500',
      borderColor: 'border-blue-500/30 hover:border-blue-400/80',
      metricColor: 'text-blue-500'
    },
    {
      badgeBg: isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40' : 'bg-cyan-50 text-cyan-700 border-cyan-200',
      accentColor: 'text-cyan-500',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/80',
      metricColor: 'text-cyan-500'
    },
    {
      badgeBg: isDark ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40' : 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accentColor: 'text-emerald-500',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/80',
      metricColor: 'text-emerald-500'
    },
    {
      badgeBg: isDark ? 'bg-purple-950/60 text-purple-300 border-purple-500/40' : 'bg-purple-50 text-purple-700 border-purple-200',
      accentColor: 'text-purple-500',
      borderColor: 'border-purple-500/30 hover:border-purple-400/80',
      metricColor: 'text-purple-500'
    }
  ];

  const getCategoryIcon = (category: string) => {
    if (category.includes('Architecture') || category.includes('Performance')) return BarChart3;
    if (category.includes('BOM') || category.includes('Synchronization')) return GitBranch;
    if (category.includes('Manufacturing')) return Cpu;
    return Database;
  };

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 10)));

  return (
    <section id="projects" className={`py-20 lg:py-28 relative transition-colors ${
      isDark ? 'bg-[#060D1A]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Production Engineering Case Studies</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects: Architecting the Digital Enterprise
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Real enterprise case studies grounded in production PLM deployment, infrastructure stabilization, 
            and CAD-to-ERP digital thread integration. Structured using Problem → Solution → Tech Stack → Verifiable Outcome.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className={`flex items-center gap-1.5 text-xs font-mono mr-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <Filter className="w-3.5 h-3.5 text-cyan-500" />
            <span>Filter:</span>
          </div>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveCategory(opt)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                activeCategory === opt
                  ? isDark
                    ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-sm'
                    : 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : isDark
                    ? 'bg-[#0C182B] text-slate-300 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid: 2x2 Bento Style with Multi-Color Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => {
            const Icon = getCategoryIcon(proj.category);
            const theme = projectThemes[idx % projectThemes.length];

            return (
              <div
                key={proj.id}
                className={`rounded-2xl border ${theme.borderColor} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden ${
                  isDark ? 'bg-[#0C182B]/85' : 'bg-slate-50/80 shadow-slate-200/50'
                }`}
              >
                <div>
                  {/* Category & Metric Highlight */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-slate-900' : 'bg-white'} ${theme.accentColor} border border-white/5`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                        {proj.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold font-mono ${theme.metricColor}`}>
                        {proj.metricHighlight.value}
                      </div>
                      <div className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {proj.metricHighlight.label}
                      </div>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-xl font-bold font-display mb-3 transition-colors ${
                    isDark ? 'text-white group-hover:text-cyan-200' : 'text-slate-900 group-hover:text-cyan-700'
                  }`}>
                    {proj.title}
                  </h3>

                  {/* Problem Statement */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] font-semibold text-rose-500 uppercase tracking-wider font-mono">
                      Engineering Challenge:
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {proj.problem}
                    </p>
                  </div>

                  {/* Solution Architecture */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] font-semibold text-emerald-500 uppercase tracking-wider font-mono">
                      Architectural Solution:
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {proj.solution}
                    </p>
                  </div>

                  {/* Outcomes Checklist */}
                  <div className={`space-y-2 mb-6 pt-4 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                    <div className={`text-[11px] font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Key Production Outcomes:
                    </div>
                    <ul className="space-y-1.5">
                      {proj.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className={`flex items-start gap-2 text-xs leading-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${theme.accentColor}`} />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Tech Stack + Details Button */}
                <div className={`pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDark ? 'border-slate-800/80' : 'border-slate-200'
                }`}>
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isDark
                            ? 'text-slate-300 bg-[#060D1A] border-slate-800'
                            : 'text-slate-700 bg-white border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold shrink-0 transition-colors ${
                      isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-700 hover:text-cyan-900'
                    }`}
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border ${
            isDark ? 'bg-[#0C182B] border-slate-700 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              isDark ? 'border-slate-700 bg-[#060D1A]' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {selectedProject.category}
                </span>
                <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {selectedProject.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              <div>
                <h5 className="font-semibold text-rose-500 uppercase tracking-wider text-xs mb-1 font-mono">
                  Challenge Context
                </h5>
                <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-emerald-500 uppercase tracking-wider text-xs mb-1 font-mono">
                  Engineered Solution
                </h5>
                <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {selectedProject.solution}
                </p>
              </div>

              {selectedProject.detailedNotes && (
                <div className={`p-4 rounded-xl border space-y-2 ${
                  isDark ? 'bg-[#060D1A] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h5 className="font-semibold text-cyan-500 uppercase tracking-wider text-xs font-mono">
                    Technical Specifications & Handler Rules
                  </h5>
                  <ul className="space-y-1.5">
                    {selectedProject.detailedNotes.map((note, nIdx) => (
                      <li key={nIdx} className={`flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        <span className="text-cyan-500 font-mono">·</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h5 className={`font-semibold uppercase tracking-wider text-xs mb-2 font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Implemented Tech Stack
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-md font-mono text-xs border ${
                        isDark ? 'bg-[#060D1A] text-slate-300 border-slate-800' : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`px-6 py-3 border-t flex justify-end ${
              isDark ? 'border-slate-700 bg-[#060D1A]' : 'border-slate-200 bg-slate-50'
            }`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
