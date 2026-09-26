import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TrailPathNav } from './components/TrailPathNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PackagingSection } from './components/PackagingSection';
import { OtherCreativesSection } from './components/OtherCreativesSection';
import { AIVideoAdsSection } from './components/AIVideoAdsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleExploreWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHireMe = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
  };

  return (
    <div className="min-h-screen bg-[#F4EFEB] text-[#1A1A1E] selection:bg-[#FFD200] selection:text-black">
      {/* Fixed Top Header: Name on left, Hire Me on right */}
      <Navbar
        onOpenContact={handleHireMe}
      />

      {/* Interactive Left Vertical Railway Trail Path Navigation with 3D Vande Bharat Express */}
      <TrailPathNav />

      {/* Main Content Sections flowing continuously through all Railway Stations */}
      <main>
        {/* Station 00: Hero Section */}
        <HeroSection
          onExploreWork={handleExploreWork}
          onHireMe={handleHireMe}
        />

        {/* Station 01 Dossier: About Section */}
        <AboutSection onSelectCategory={handleSelectCategory} />

        {/* Station 02: Social Media Posters & Portfolio Gallery */}
        <ProjectsSection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Station 03: Packaging Designs Showcase */}
        <PackagingSection />

        {/* Station 04: Other Creative Pieces Showcase */}
        <OtherCreativesSection />

        {/* Station 05: AI Video Ads Showcase */}
        <AIVideoAdsSection />

        {/* Terminus / Station 06: Thank You & Direct Contact Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
