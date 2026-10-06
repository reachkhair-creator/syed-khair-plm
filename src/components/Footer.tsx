import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ProfilePhotoSlot } from './ProfilePhotoSlot';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t text-xs transition-colors ${
      isDark ? 'bg-[#040914] border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          
          {/* Brand & Narrative with 48px Real Profile Photo */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <ProfilePhotoSlot variant="footer-48" />
              <div>
                <div className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-[11px] text-[#0099FF] font-mono">
                  Teamcenter / PLM Architect
                </div>
              </div>
            </div>
            <p className={`text-xs leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Teamcenter PLM Architect & Administrator with 20+ years in HVAC & industrial machinery manufacturing across UAE & GCC. 
              Engineering single-source-of-truth architectures from CAD to ERP.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 transition-colors ${
                  isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-700'
                }`}
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`flex items-center gap-1.5 transition-colors ${
                  isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-700'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#about" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>About & Engineering Origin</a>
              </li>
              <li>
                <a href="#expertise" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Six Pillars of Teamcenter Expertise</a>
              </li>
              <li>
                <a href="#studies" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Teamcenter 2606 Solution Studies</a>
              </li>
              <li>
                <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Work Experience & Timeline</a>
              </li>
              <li>
                <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Featured Projects & Case Studies</a>
              </li>
              <li>
                <a href="#digital-thread" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Manufacturing Digital Thread</a>
              </li>
              <li>
                <a href="#assessment" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>Teamcenter Maturity Assessment</a>
              </li>
            </ul>
          </div>

          {/* Engagement & CV */}
          <div className="lg:col-span-4 space-y-3">
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Location & Professional Positioning
            </div>
            <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
              Based in {PERSONAL_INFO.location}. Open to career opportunities, recruitment discussions, and technical collaboration across UAE (Dubai / Abu Dhabi), Saudi Arabia (KSA), and global organizations.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenCvModal}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  isDark
                    ? 'text-slate-200 bg-[#0C182B] hover:bg-[#132845] border-slate-700'
                    : 'text-slate-800 bg-white hover:bg-slate-50 border-slate-300'
                }`}
              >
                View & Download CV
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Trademark Notice */}
        <div className={`pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <div className="space-y-1.5 max-w-3xl">
            <p className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="leading-relaxed">
              This website represents my personal professional experience and technical capabilities. It does not represent my current or former employers, their customers, partners, or affiliated organizations. No confidential, proprietary, or non-public company information is disclosed.
            </p>
            <p className="leading-relaxed">
              Siemens, Teamcenter, Active Workspace, and NX are registered trademarks of Siemens Industry Software Inc. 
              PTC, Windchill, and Creo are trademarks of PTC Inc. This portfolio represents independent professional engineering experience.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1 transition-colors p-2 rounded border shrink-0 ${
              isDark
                ? 'text-slate-400 hover:text-white bg-[#0C182B] border-slate-800'
                : 'text-slate-600 hover:text-slate-900 bg-white border-slate-300'
            }`}
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
