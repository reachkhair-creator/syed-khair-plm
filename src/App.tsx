/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TeamcenterExpertise } from './components/TeamcenterExpertise';
import { ProfessionalStudiesSection } from './components/ProfessionalStudiesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { ManufacturingThread } from './components/ManufacturingThread';
import { SkillsMatrix } from './components/SkillsMatrix';
import { MaturityAssessment } from './components/MaturityAssessment';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';

function PortfolioAppContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#0080FF] selection:text-white ${
      isDark ? 'bg-[#060D1A] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      {/* 3-Zone Header Contract with Multi-Color Theme Switcher */}
      <Header onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Single-Page Portfolio Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Section 2: About - Engineering Experience Behind the PLM */}
        <AboutSection />

        {/* Section 3: Teamcenter Expertise - 6 Pillars */}
        <TeamcenterExpertise />

        {/* Section 3.5: Professional Studies & Teamcenter 2606 Solutions */}
        <ProfessionalStudiesSection />

        {/* Section 4: Work Experience Timeline */}
        <ExperienceTimeline />

        {/* Section 5: Featured Projects & Solutions */}
        <ProjectsSection />

        {/* Section 6: Manufacturing Digital Thread */}
        <ManufacturingThread />

        {/* Section 7: Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Section 8: Interactive Teamcenter Maturity Assessment */}
        <MaturityAssessment />

        {/* Section 9: Engineering Endorsements & Leadership Impact */}
        <TestimonialsSection />

        {/* Section 10: Contact & Consultation */}
        <ContactSection onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* Footer with Trademark Notices */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Full Authenticated Curriculum Vitae Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioAppContent />
    </ThemeProvider>
  );
}
