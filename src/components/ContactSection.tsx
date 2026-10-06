import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, FileText, Check, Copy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ContactSectionProps {
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCvModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    tcVersion: 'Teamcenter 13.x / 14.x / 2412',
    challengeType: 'Teamcenter Architecture & Strategy',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { isDark } = useTheme();

  const challengeScopes = [
    { label: 'Teamcenter Architecture & Strategy', color: 'text-blue-500' },
    { label: 'BMIDE Schema & Data Model Design', color: 'text-purple-500' },
    { label: 'CAD & ERP Integration (Digital Thread)', color: 'text-emerald-500' },
    { label: 'Release Workflow & Change Governance', color: 'text-amber-500' },
    { label: 'Performance Optimization & Health Audit', color: 'text-rose-500' },
    { label: 'Career & Executive PLM Opportunities', color: 'text-cyan-500' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`PLM Inquiry: ${formData.challengeType} - ${formData.company}`);
    const body = encodeURIComponent(
      `Hello Syed,\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nTeamcenter Version: ${formData.tcVersion}\nScope: ${formData.challengeType}\n\nProject Scope / Inquiry Details:\n${formData.message}\n`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className={`py-20 lg:py-28 border-t relative transition-colors ${
      isDark ? 'bg-[#060D1A] border-slate-800/80' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-2 font-mono">
            Professional Opportunities & Networking
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Connect with Syed Abdul Khair
          </h2>
          <p className={`mt-3 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Open to career opportunities, senior Teamcenter / PLM Architect and Platform Owner roles, recruiter inquiries, 
            and professional technical networking across UAE, GCC, and global organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 rounded-2xl border space-y-5 shadow-xl ${
              isDark ? 'bg-[#0C182B]/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800/60">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-xl object-cover object-top border border-cyan-500/40 shrink-0 shadow-md"
                />
                <div>
                  <h3 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.name}
                  </h3>
                  <div className="text-xs text-cyan-500 font-mono">
                    Teamcenter / PLM Architect
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                {/* Email - Cyan Accent */}
                <div className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border ${
                  isDark ? 'bg-[#060D1A] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Direct Email</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className={`font-semibold hover:text-cyan-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className={`p-1.5 rounded transition-colors ${
                      isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-500'
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone - Emerald Accent */}
                <div className={`flex items-center gap-3 p-3.5 rounded-xl border ${
                  isDark ? 'bg-[#060D1A] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Direct Mobile / WhatsApp</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className={`font-semibold font-mono hover:text-emerald-500 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* LinkedIn - Blue Accent */}
                <div className={`flex items-center gap-3 p-3.5 rounded-xl border ${
                  isDark ? 'bg-[#060D1A] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-2 rounded-lg bg-blue-500/15 text-blue-500">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Professional Profile</div>
                    <a
                      href={PERSONAL_INFO.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-semibold hover:text-blue-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {PERSONAL_INFO.linkedInDisplay}
                    </a>
                  </div>
                </div>

                {/* Location - Amber Accent */}
                <div className={`flex items-center gap-3 p-3.5 rounded-xl border ${
                  isDark ? 'bg-[#060D1A] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current Location & Mobility</div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {PERSONAL_INFO.location}
                    </div>
                    <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {PERSONAL_INFO.mobility}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className={`pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <button
                  onClick={onOpenCvModal}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl border transition-colors ${
                    isDark
                      ? 'text-slate-200 bg-[#060D1A] hover:bg-[#102138] border-slate-700'
                      : 'text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-300'
                  }`}
                >
                  <FileText className="w-4 h-4 text-cyan-500" />
                  <span>View Full Curriculum Vitae</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Consultation / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
              isDark ? 'bg-[#0C182B]/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-base font-bold font-display mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send Inquiry or Recruitment Message
              </h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Direct communication to Syed Khair. Messages generate an email pre-formatted with your selected architecture scope.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Challenge Scope Selector */}
                <div className="space-y-1.5">
                  <label className={`block font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Primary Architecture / Discussion Scope:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {challengeScopes.map((scope, sIdx) => {
                      const isSelected = formData.challengeType === scope.label;
                      return (
                        <button
                          type="button"
                          key={sIdx}
                          onClick={() => setFormData({ ...formData, challengeType: scope.label })}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? isDark
                                ? 'bg-cyan-950/60 border-cyan-500 text-white font-semibold shadow-sm'
                                : 'bg-cyan-50 border-cyan-500 text-slate-900 font-semibold'
                              : isDark
                                ? 'bg-[#060D1A] border-slate-800 text-slate-400 hover:border-slate-700'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <span className={`block truncate ${isSelected ? scope.color : ''}`}>
                            {scope.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className={`block font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060D1A] border-slate-800 text-white focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className={`block font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Company / Organization:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Industrial Manufacturing LLC"
                      className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060D1A] border-slate-800 text-white focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Email & Teamcenter Version */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className={`block font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Email Address:
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060D1A] border-slate-800 text-white focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className={`block font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      PLM / CAD Environment:
                    </label>
                    <select
                      value={formData.tcVersion}
                      onChange={(e) => setFormData({ ...formData, tcVersion: e.target.value })}
                      className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-colors ${
                        isDark
                          ? 'bg-[#060D1A] border-slate-800 text-white focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    >
                      <option value="Teamcenter 13.x / 14.x / 2412">Teamcenter 13.x / 14.x / 2412</option>
                      <option value="Teamcenter Active Workspace (AWC)">Teamcenter Active Workspace (AWC)</option>
                      <option value="Siemens NX / Solid Edge / Creo">Siemens NX / Solid Edge / Creo CAD</option>
                      <option value="Dual PLM / Windchill Migration">Dual PLM / Windchill Migration</option>
                      <option value="Recruitment / Career Discussion">Recruitment / Career Discussion</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className={`block font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Project Scope / Details:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your PLM environment, BMIDE requirements, CAD-ERP integration needs, or role opportunity..."
                    className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-colors ${
                      isDark
                        ? 'bg-[#060D1A] border-slate-800 text-white focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-cyan-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Syed Khair</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Inquiry email generated. Please confirm sending in your email client.</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
