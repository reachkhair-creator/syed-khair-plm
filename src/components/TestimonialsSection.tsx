import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { isDark } = useTheme();

  const cardThemes = [
    {
      quoteColor: 'text-cyan-500/40',
      badge: isDark ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' : 'text-cyan-700 bg-cyan-50 border-cyan-200',
      titleColor: 'text-cyan-500',
      borderColor: 'border-cyan-500/25'
    },
    {
      quoteColor: 'text-amber-500/40',
      badge: isDark ? 'text-amber-400 bg-amber-950/60 border-amber-800/60' : 'text-amber-700 bg-amber-50 border-amber-200',
      titleColor: 'text-amber-500',
      borderColor: 'border-amber-500/25'
    },
    {
      quoteColor: 'text-emerald-500/40',
      badge: isDark ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' : 'text-emerald-700 bg-emerald-50 border-emerald-200',
      titleColor: 'text-emerald-500',
      borderColor: 'border-emerald-500/25'
    }
  ];

  return (
    <section className={`py-20 lg:py-24 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 font-mono">
            Documented Performance Feedback
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Leadership & Stakeholder Impact
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Professional endorsements and stakeholder feedback reflecting hands-on PLM transformation, 
            engineering leadership, and enterprise digital thread execution.
          </p>
        </div>

        {/* Testimonials Grid with Multi-Color Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length];

            return (
              <div
                key={index}
                className={`p-6 sm:p-7 rounded-2xl border ${theme.borderColor} flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? 'bg-[#0C182B]/80' : 'bg-slate-50/80 shadow-slate-200/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className={`w-8 h-8 ${theme.quoteColor}`} />
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme.badge}`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed italic mb-6 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    “{item.quote}”
                  </p>
                </div>

                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className={`text-xs font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.author}
                  </div>
                  <div className={`text-[11px] font-medium ${theme.titleColor}`}>
                    {item.title}
                  </div>
                  <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.context}
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
