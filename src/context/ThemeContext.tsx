import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'prism' | 'cobalt' | 'emerald' | 'light';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  colors: string[]; // 4 color codes for palette preview
  badgeColor: string;
  isDark: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'prism',
    name: 'Multi-Color Prism',
    tagline: 'Vibrant multi-color engineering spectrum (Cyan, Emerald, Violet, Amber, Rose)',
    colors: ['#06B6D4', '#10B981', '#8B5CF6', '#F59E0B'],
    badgeColor: 'from-cyan-400 via-emerald-400 to-amber-400',
    isDark: true
  },
  {
    id: 'cobalt',
    name: 'Siemens PLM Cobalt',
    tagline: 'High-tech Siemens blue, electric cyan, and warm gold accents',
    colors: ['#0066FF', '#00D2FF', '#F59E0B', '#64748B'],
    badgeColor: 'from-blue-500 via-cyan-400 to-amber-400',
    isDark: true
  },
  {
    id: 'emerald',
    name: 'Digital Thread Emerald',
    tagline: 'Precision eco-tech mint emerald, cyber cyan, and solar amber',
    colors: ['#10B981', '#06B6D4', '#F59E0B', '#34D399'],
    badgeColor: 'from-emerald-400 via-teal-400 to-amber-300',
    isDark: true
  },
  {
    id: 'light',
    name: 'Executive Clean Light',
    tagline: 'Crisp corporate light canvas with rich jewel-toned accents',
    colors: ['#0284C7', '#059669', '#7C3AED', '#D97706'],
    badgeColor: 'from-sky-600 via-emerald-600 to-amber-600',
    isDark: false
  }
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentThemeConfig: ThemeOption;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('syed_plm_theme') as ThemeId;
    return (saved && THEME_OPTIONS.some(t => t.id === saved)) ? saved : 'prism';
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem('syed_plm_theme', newTheme);
  };

  useEffect(() => {
    // Sync class on document root
    const root = document.documentElement;
    root.classList.remove('theme-prism', 'theme-cobalt', 'theme-emerald', 'theme-light', 'dark', 'light');
    root.classList.add(`theme-${theme}`);
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  const currentThemeConfig = THEME_OPTIONS.find(t => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      currentThemeConfig,
      isDark: currentThemeConfig.isDark
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
