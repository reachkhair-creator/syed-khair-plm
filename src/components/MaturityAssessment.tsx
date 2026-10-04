import React, { useState } from 'react';
import { MATURITY_QUESTIONS } from '../data/portfolioData';
import { Gauge, ArrowRight, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const MaturityAssessment: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({
    q1: 1, // 65
    q2: 1, // 65
    q3: 1, // 60
    q4: 0, // 30
    q5: 1, // 60
    q6: 1  // 65
  });

  const { isDark } = useTheme();

  const handleSelect = (qId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionIndex
    }));
  };

  const totalQuestions = MATURITY_QUESTIONS.length;
  const currentTotalPoints = MATURITY_QUESTIONS.reduce((acc, q) => {
    const selectedIdx = selectedAnswers[q.id] ?? 1;
    return acc + q.options[selectedIdx].points;
  }, 0);
  const overallScore = Math.round(currentTotalPoints / totalQuestions);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-500';
    if (score >= 60) return 'text-cyan-500';
    return 'text-amber-500';
  };

  const getMaturityStage = (score: number) => {
    if (score >= 80) return 'Enterprise Tier 1: Mature Digital Thread';
    if (score >= 60) return 'Operational PDM: Transitioning to Enterprise PLM';
    return 'Foundational CAD Silo: High Downstream Risk';
  };

  const resetToBaseline = () => {
    setSelectedAnswers({
      q1: 1,
      q2: 1,
      q3: 1,
      q4: 0,
      q5: 1,
      q6: 1
    });
  };

  const pillarColorClasses = [
    'text-purple-500',
    'text-amber-500',
    'text-cyan-500',
    'text-emerald-500',
    'text-blue-500',
    'text-rose-500'
  ];

  return (
    <section id="assessment" className={`py-20 lg:py-28 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Interactive Diagnostic Benchmark</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Teamcenter Environment Maturity Assessment
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Evaluate where your Teamcenter deployment stands across 6 core architectural pillars. 
            Adjust the options below to calculate your organizational score and identify priority remediation areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Maturity Gauge & Score Box */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-2xl border text-center shadow-xl ${
              isDark ? 'bg-[#0C182B] border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
            }`}>
              <div className={`flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider mb-4 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <Gauge className="w-4 h-4 text-cyan-500" />
                <span>Overall PLM Maturity Score</span>
              </div>

              {/* Gauge Display */}
              <div className="relative inline-flex items-center justify-center my-2">
                <div className={`w-36 h-36 rounded-full border-8 flex flex-col items-center justify-center relative ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-cyan-500 transition-all duration-500"
                    style={{
                      clipPath: `polygon(50% 50%, -50% -50%, ${overallScore * 2}% 0%, 100% 100%)`
                    }}
                  />
                  <span className={`text-4xl font-extrabold font-mono tabular-nums ${getScoreColor(overallScore)}`}>
                    {overallScore}
                  </span>
                  <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/ 100</span>
                </div>
              </div>

              {/* Tier Classification */}
              <div className="mt-4">
                <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {getMaturityStage(overallScore)}
                </div>
                <p className={`text-[11px] mt-1 leading-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {overallScore < 65 
                    ? 'Key gaps identified in automated ERP synchronization, Save/Create write latency, or Part Classification.' 
                    : 'Strong operational foundation. Ready for advanced BOP routing and automated Infor/SAP bi-directional sync.'}
                </p>
              </div>

              {/* Reset to Default Benchmark Button */}
              <button
                onClick={resetToBaseline}
                className={`mt-5 inline-flex items-center gap-1.5 text-xs transition-colors ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Sample 61/100 Benchmark</span>
              </button>

              {/* CTA Button */}
              <div className={`mt-6 pt-5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span>Request Environment Health Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Benchmark Note */}
            <div className={`p-4 rounded-xl border text-[11px] space-y-1 ${
              isDark ? 'bg-[#0C182B]/60 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Methodology Grounding:</span>
              <p>
                Synthesized from Teamcenter PDM telemetry, post-upgrade validation criteria, 
                and enterprise digital thread benchmarks across UAE and GCC manufacturing organizations.
              </p>
            </div>

          </div>

          {/* Right Column: 6 Interactive Questions */}
          <div className="lg:col-span-8 space-y-6">
            {MATURITY_QUESTIONS.map((question, qIdx) => {
              const currentChoice = selectedAnswers[question.id] ?? 0;
              const pillarColor = pillarColorClasses[qIdx % pillarColorClasses.length];

              return (
                <div
                  key={question.id}
                  className={`p-5 sm:p-6 rounded-2xl border space-y-4 shadow-md ${
                    isDark ? 'bg-[#0C182B]/80 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className={`flex items-center justify-between gap-3 pb-2 border-b ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <span className={`text-xs font-semibold uppercase tracking-wider font-mono ${pillarColor}`}>
                      Pillar 0{qIdx + 1}: {question.pillar}
                    </span>
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Points: {question.options[currentChoice].points}/100
                    </span>
                  </div>

                  <h4 className={`text-sm sm:text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {question.question}
                  </h4>

                  {/* Options List */}
                  <div className="space-y-2.5">
                    {question.options.map((option, oIdx) => {
                      const isSelected = currentChoice === oIdx;

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelect(question.id, oIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs flex items-start gap-3 ${
                            isSelected
                              ? isDark
                                ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-md shadow-cyan-500/10'
                                : 'bg-cyan-50 border-cyan-500 text-slate-900 shadow-sm'
                              : isDark
                                ? 'bg-[#060D1A]/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#102138]'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                            isSelected
                              ? 'border-cyan-500 bg-cyan-500'
                              : isDark ? 'border-slate-600' : 'border-slate-400'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold">{option.label}</span>
                              <span className={`font-mono text-[10px] shrink-0 ${isSelected ? 'text-cyan-500 font-bold' : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                {option.points} pts
                              </span>
                            </div>
                            <p className={`mt-0.5 text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {option.hint}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
