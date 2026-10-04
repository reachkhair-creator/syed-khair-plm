import React, { useState } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Location: ${PERSONAL_INFO.location} | Mobility: ${PERSONAL_INFO.mobility}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phoneFormatted}
LinkedIn: ${PERSONAL_INFO.linkedIn}

SUMMARY:
${PERSONAL_INFO.summary.join('\n\n')}

CORE HIGHLIGHTS:
- 20+ Years Engineering & Enterprise PLM Experience
- Dual PLM Expertise: Siemens Teamcenter & PTC Windchill
- Deep BMIDE Data Modeling, Schema Design & Active Workspace Configuration
- Controlled Engineering Release, ECR/ECN Governance & CAD-ERP Synchronization

WORK EXPERIENCE:
${WORK_EXPERIENCES.map(w => `
${w.role} | ${w.company}
${w.period} | ${w.location}
${w.achievements.map(a => `- ${a}`).join('\n')}
`).join('\n')}

EDUCATION & CERTIFICATIONS:
${PERSONAL_INFO.education.map(e => `${e.degree} - ${e.institution} (${e.period})`).join('\n')}

Certifications:
${PERSONAL_INFO.certifications.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#071A2B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 bg-[#0B2942] border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-display">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-xs text-slate-400 font-mono">
              (Single Source of Truth)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-[#071A2B] hover:bg-[#123657] border border-slate-700 rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy All Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0099FF] hover:bg-[#0080D6] rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable CV Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-100 font-sans text-xs sm:text-sm leading-relaxed space-y-8 print:bg-white print:text-black print:p-0">
          
          {/* Document Header */}
          <div className="border-b border-slate-700 pb-6 space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-semibold text-[#0099FF] print:text-blue-700">
              {PERSONAL_INFO.headline}
            </div>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 print:text-gray-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0099FF]" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#0099FF]" />
                {PERSONAL_INFO.phoneFormatted}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#0099FF]" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="text-[#0099FF] hover:underline">
                {PERSONAL_INFO.linkedInDisplay}
              </a>
            </div>

            <div className="text-xs italic text-slate-400 pt-1 print:text-gray-600">
              {PERSONAL_INFO.tagline}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0099FF] border-b border-slate-700 pb-1 print:text-blue-800">
              Professional Summary
            </h2>
            <div className="space-y-2 text-slate-300 text-xs sm:text-sm print:text-gray-800">
              {PERSONAL_INFO.summary.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Key Impact Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#071A2B] border border-slate-800 print:border-gray-300 print:bg-gray-50">
            {PERSONAL_INFO.stats.map((s, idx) => (
              <div key={idx}>
                <div className="text-lg font-bold text-white font-mono text-[#38BDF8] print:text-blue-700">
                  {s.value}
                </div>
                <div className="text-xs font-medium text-slate-200 print:text-gray-900">
                  {s.label}
                </div>
                <div className="text-[10px] text-slate-400 print:text-gray-600">
                  {s.context}
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0099FF] border-b border-slate-700 pb-1 print:text-blue-800">
              Professional Experience
            </h2>

            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="font-bold text-white text-sm print:text-black">
                    {exp.role} — <span className="text-[#0099FF] print:text-blue-700">{exp.company}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono print:text-gray-600">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <p className="text-xs text-slate-300 italic print:text-gray-700">
                  {exp.summary}
                </p>

                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="leading-relaxed">
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0099FF] border-b border-slate-700 pb-1 print:text-blue-800">
              Education, Certifications & Training
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-bold text-white print:text-black mb-2">Education</div>
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className="mb-2">
                    <div className="font-semibold text-slate-200 print:text-gray-900">{edu.degree}</div>
                    <div className="text-slate-400 print:text-gray-600">{edu.institution} ({edu.period})</div>
                  </div>
                ))}
              </div>

              <div>
                <div className="font-bold text-white print:text-black mb-2">Certifications</div>
                <div className="space-y-1 text-slate-300 print:text-gray-800">
                  {PERSONAL_INFO.certifications.map((c, idx) => (
                    <div key={idx}>
                      <span className="font-semibold">{c.title}</span> — {c.issuer} ({c.date})
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-3 text-xs text-slate-400 print:text-gray-700">
            <span className="font-semibold text-slate-300 print:text-black">Languages:</span>
            {PERSONAL_INFO.languages.map((l, idx) => (
              <span key={idx}>
                {l.language} ({l.proficiency}){idx < PERSONAL_INFO.languages.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0B2942] border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
          <span>Source: Verified Professional Career Profile & Engineering Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-medium text-white bg-[#0099FF] hover:bg-[#0080D6] rounded-md transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
