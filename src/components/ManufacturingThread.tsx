import React, { useState } from 'react';
import { MANUFACTURING_THREAD_STAGES } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Cpu, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ManufacturingThread: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { isDark } = useTheme();

  // Progressive multi-color spectrum for the 7 stages of the digital thread
  const stageColors = [
    {
      stepBg: 'bg-sky-500',
      activeTab: 'bg-sky-500 text-white border-sky-400',
      badge: isDark ? 'text-sky-400 border-sky-500/30 bg-sky-950/40' : 'text-sky-700 border-sky-200 bg-sky-50',
      borderCard: 'border-sky-500/40',
      glow: 'bg-sky-500/10'
    },
    {
      stepBg: 'bg-indigo-500',
      activeTab: 'bg-indigo-500 text-white border-indigo-400',
      badge: isDark ? 'text-indigo-400 border-indigo-500/30 bg-indigo-950/40' : 'text-indigo-700 border-indigo-200 bg-indigo-50',
      borderCard: 'border-indigo-500/40',
      glow: 'bg-indigo-500/10'
    },
    {
      stepBg: 'bg-purple-500',
      activeTab: 'bg-purple-500 text-white border-purple-400',
      badge: isDark ? 'text-purple-400 border-purple-500/30 bg-purple-950/40' : 'text-purple-700 border-purple-200 bg-purple-50',
      borderCard: 'border-purple-500/40',
      glow: 'bg-purple-500/10'
    },
    {
      stepBg: 'bg-rose-500',
      activeTab: 'bg-rose-500 text-white border-rose-400',
      badge: isDark ? 'text-rose-400 border-rose-500/30 bg-rose-950/40' : 'text-rose-700 border-rose-200 bg-rose-50',
      borderCard: 'border-rose-500/40',
      glow: 'bg-rose-500/10'
    },
    {
      stepBg: 'bg-amber-500',
      activeTab: 'bg-amber-500 text-slate-900 font-bold border-amber-400',
      badge: isDark ? 'text-amber-400 border-amber-500/30 bg-amber-950/40' : 'text-amber-700 border-amber-200 bg-amber-50',
      borderCard: 'border-amber-500/40',
      glow: 'bg-amber-500/10'
    },
    {
      stepBg: 'bg-teal-500',
      activeTab: 'bg-teal-500 text-white border-teal-400',
      badge: isDark ? 'text-teal-400 border-teal-500/30 bg-teal-950/40' : 'text-teal-700 border-teal-200 bg-teal-50',
      borderCard: 'border-teal-500/40',
      glow: 'bg-teal-500/10'
    },
    {
      stepBg: 'bg-emerald-500',
      activeTab: 'bg-emerald-500 text-white border-emerald-400',
      badge: isDark ? 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40' : 'text-emerald-700 border-emerald-200 bg-emerald-50',
      borderCard: 'border-emerald-500/40',
      glow: 'bg-emerald-500/10'
    }
  ];

  const currentStage = MANUFACTURING_THREAD_STAGES[activeStep];
  const currentColor = stageColors[activeStep] || stageColors[0];

  return (
    <section id="digital-thread" className={`py-20 lg:py-28 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>Manufacturing Lifecycle Integration</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Connect Engineering to Manufacturing: Closed-Loop Digital Thread
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Most PLM friction occurs at the boundary between CAD authoring and factory execution. 
            Here is the continuous 7-stage digital thread I implement to bridge design engineering with plant floor execution.
          </p>
        </div>

        {/* Multi-Colored Stepper Navigation Tabs */}
        <div className="mb-8 overflow-x-auto pb-3">
          <div className={`flex items-center min-w-max gap-2 p-2 rounded-2xl border ${
            isDark ? 'bg-[#0C182B] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            {MANUFACTURING_THREAD_STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;
              const colorConfig = stageColors[idx];

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap border ${
                    isActive
                      ? `${colorConfig.activeTab} shadow-lg`
                      : isDark
                        ? 'text-slate-300 border-transparent hover:text-white hover:bg-[#102138]'
                        : 'text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? 'bg-black/30 text-white' : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {stage.step}
                  </span>
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        {currentStage && (
          <div className={`rounded-3xl border ${currentColor.borderCard} p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 ${
            isDark ? 'bg-[#0C182B]/90' : 'bg-white shadow-slate-200/70'
          }`}>
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-80 h-80 ${currentColor.glow} blur-3xl rounded-full opacity-60 pointer-events-none`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column: Stage Overview */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${currentColor.badge}`}>
                    Stage 0{currentStage.step} of 07
                  </span>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Target Environment: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{currentStage.system}</strong>
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {currentStage.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {currentStage.description}
                </p>

                {/* Key Outputs */}
                <div className="space-y-2 pt-2">
                  <div className={`text-xs font-semibold uppercase tracking-wider font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Verified Stage Outputs:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentStage.keyOutputs.map((output, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 p-2.5 rounded-xl border text-xs ${
                          isDark ? 'bg-[#060D1A] border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Governance Rule & Operational Enforcement */}
              <div className="lg:col-span-5 space-y-4">
                <div className={`p-5 sm:p-6 rounded-2xl border space-y-3 ${
                  isDark ? 'bg-[#060D1A] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 uppercase tracking-wider font-mono">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>PLM Stage-Gate Governance Rule</span>
                  </div>

                  <p className={`text-xs leading-relaxed italic ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    “{currentStage.governanceRule}”
                  </p>
                </div>

                {/* Flow Next Step Trigger */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : MANUFACTURING_THREAD_STAGES.length - 1))}
                    className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors ${
                      isDark ? 'text-slate-300 bg-[#0C182B] border-slate-800 hover:border-slate-700' : 'text-slate-700 bg-white border-slate-200'
                    }`}
                  >
                    Previous Stage
                  </button>

                  <button
                    onClick={() => setActiveStep((prev) => (prev < MANUFACTURING_THREAD_STAGES.length - 1 ? prev + 1 : 0))}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all ${currentColor.activeTab}`}
                  >
                    <span>Next: Stage {currentStage.step < 7 ? currentStage.step + 1 : 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
