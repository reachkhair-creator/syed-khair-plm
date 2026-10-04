import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', label: 'All Disciplines', color: 'from-cyan-500 to-blue-600' },
    { id: 'PLM Platforms & Architecture', label: 'PLM Platforms', color: 'from-blue-500 to-indigo-600' },
    { id: 'Customization, APIs & Integration', label: 'Customization & APIs', color: 'from-purple-500 to-pink-600' },
    { id: 'Infrastructure & System Administration', label: 'Infrastructure & Admin', color: 'from-rose-500 to-amber-600' },
    { id: 'Engineering & Manufacturing Governance', label: 'Manufacturing & Governance', color: 'from-amber-500 to-emerald-600' },
    { id: 'Next-Gen Solutions & Sustainability Analytics', label: 'TC 2606 & Sustainability', color: 'from-emerald-500 to-cyan-600' }
  ];

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className={`py-20 lg:py-28 relative transition-colors ${
      isDark ? 'bg-[#060D1A]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Technical Capabilities Matrix</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Technical Skills: Grounded in Production Operations
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Categorized capabilities across enterprise Teamcenter architecture, low-level server administration, 
            CAD/ERP data pipelines, and next-generation Teamcenter 2606 solutions.
          </p>
        </div>

        {/* Multi-Colored Segmented Filter Control */}
        <div className={`flex items-center gap-1.5 p-1.5 rounded-2xl border w-fit mb-10 overflow-x-auto max-w-full ${
          isDark ? 'bg-[#0C182B] border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-md`
                  : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-[#102138]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grouped Display with Multi-Color Cards */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-8 shadow-xl ${
                isDark ? 'bg-[#0C182B]/75 border-slate-800' : 'bg-slate-50/80 border-slate-200 shadow-slate-200/50'
              }`}
            >
              
              <div className={`mb-6 pb-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <div>
                  <h3 className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {catGroup.category}
                  </h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {catGroup.description}
                  </p>
                </div>
                <span className={`text-[11px] font-mono px-3 py-1 rounded-full border self-start sm:self-center ${
                  isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                }`}>
                  {catGroup.skills.length} Capabilities
                </span>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between group shadow-sm ${
                      isDark
                        ? 'bg-[#060D1A] border-slate-800 hover:border-cyan-500/50 hover:bg-[#0A1526]'
                        : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-semibold mb-1 transition-colors ${
                        isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                      }`}>
                        {skill.name}
                      </div>
                      {skill.context && (
                        <div className={`text-[11px] leading-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {skill.context}
                        </div>
                      )}
                    </div>

                    <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${
                      isDark ? 'border-slate-800/80' : 'border-slate-100'
                    }`}>
                      <span className="text-cyan-500">Verified</span>
                      <span className={`font-sans font-semibold px-2 py-0.5 rounded border ${
                        isDark ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800/50' : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
