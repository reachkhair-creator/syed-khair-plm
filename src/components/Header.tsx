import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Send, Sparkles, Palette, Check } from 'lucide-react';
import { useTheme, THEME_OPTIONS, ThemeId } from '../context/ThemeContext';

interface HeaderProps {
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme, currentThemeConfig, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Studies', href: '#studies', highlight: true },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Digital Thread', href: '#digital-thread' },
    { label: 'Skills', href: '#skills' },
    { label: 'Assessment', href: '#assessment' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#060D1A]/90 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-xl shadow-black/40'
            : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md shadow-slate-200/50'
          : 'bg-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark with Authentic Profile Photo */}
          <a
            href="#"
            className={`group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap font-display transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full object-cover object-top border border-cyan-400/50 shadow-sm shrink-0"
            />
            <span className="hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links with Multi-Color Accents */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap ${
                  link.highlight
                    ? 'text-cyan-400 font-semibold flex items-center gap-1'
                    : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />}
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions with Multi-Color Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Switcher Dropdown */}
            <div className="relative" ref={themeDropdownRef}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-white/10 hover:border-cyan-500/40'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
                title="Switch color theme"
                aria-label="Color themes"
              >
                <Palette className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden xl:inline">{currentThemeConfig.name}</span>
                <span className="flex items-center gap-0.5 ml-1">
                  {currentThemeConfig.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full border border-black/20"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </span>
              </button>

              {/* Theme menu */}
              {themeDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-72 p-2 rounded-xl shadow-2xl border z-50 backdrop-blur-xl ${
                  isDark
                    ? 'bg-[#0C182B]/98 border-cyan-500/30 text-slate-200 shadow-black/70'
                    : 'bg-white/98 border-slate-200 text-slate-900 shadow-slate-300/50'
                }`}>
                  <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-700/40 mb-1">
                    Select Color Theme
                  </div>
                  <div className="space-y-1">
                    {THEME_OPTIONS.map((opt) => {
                      const isSelected = opt.id === theme;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setTheme(opt.id as ThemeId);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition-colors ${
                            isSelected
                              ? isDark ? 'bg-cyan-950/60 text-white border border-cyan-500/40' : 'bg-slate-100 text-slate-900 border border-slate-300'
                              : isDark ? 'hover:bg-slate-800/60 text-slate-300' : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="flex gap-0.5 mt-1 shrink-0">
                            {opt.colors.map((c, i) => (
                              <span
                                key={i}
                                className="w-2.5 h-2.5 rounded-full border border-black/20"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold flex items-center justify-between">
                              <span>{opt.name}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                            </div>
                            <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                              {opt.tagline}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onOpenCvModal}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all whitespace-nowrap ${
                isDark
                  ? 'text-slate-200 bg-[#0C182B] hover:bg-[#132845] border-cyan-500/30 hover:border-cyan-400'
                  : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-lg transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                const nextTheme = theme === 'prism' ? 'cobalt' : theme === 'cobalt' ? 'emerald' : theme === 'emerald' ? 'light' : 'prism';
                setTheme(nextTheme);
              }}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
                isDark ? 'bg-slate-900 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
              title="Toggle theme"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
            </button>
            <button
              onClick={onOpenCvModal}
              className={`px-2.5 py-1.5 text-xs font-medium rounded border ${
                isDark ? 'text-cyan-300 bg-[#0C182B] border-cyan-700/60' : 'text-slate-800 bg-slate-100 border-slate-300'
              }`}
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl ${
          isDark ? 'bg-[#060D1A]/95 border-cyan-500/20' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-between ${
                  isDark ? 'text-slate-300 hover:text-white hover:bg-cyan-950/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && (
                  <span className="text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/40">
                    TC 2606
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Theme selector in mobile drawer */}
          <div className="pt-3 border-t border-slate-700/40">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Color Theme
            </div>
            <div className="grid grid-cols-2 gap-2">
              {THEME_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setTheme(opt.id as ThemeId)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium border text-left ${
                    opt.id === theme
                      ? isDark ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300' : 'border-slate-800 bg-slate-100 text-slate-900'
                      : isDark ? 'border-slate-800 bg-slate-900/60 text-slate-400' : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <span className="flex gap-0.5 shrink-0">
                    {opt.colors.slice(0, 2).map((c, i) => (
                      <span key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                  </span>
                  <span className="truncate">{opt.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-700/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-[#0C182B] border border-cyan-500/30 rounded-md"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View & Download CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-md"
            >
              <Send className="w-4 h-4" />
              <span>Contact Syed Khair</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

