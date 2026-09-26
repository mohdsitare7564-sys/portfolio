import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PackagingSection } from './components/PackagingSection';
import { OtherCreativesSection } from './components/OtherCreativesSection';
import { AIVideoAdsSection } from './components/AIVideoAdsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PresentationDeckModal } from './components/PresentationDeckModal';

export default function App() {
  const [isDeckOpen, setIsDeckOpen] = useState(false);
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
      {/* Strict 3-zone Navbar */}
      <Navbar
        onOpenDeck={() => setIsDeckOpen(true)}
        onOpenContact={handleHireMe}
      />

      {/* Main Content Sections flowing continuously through all 5 Railway Stations */}
      <main>
        {/* Station 01: Hero Section with Portfoliopur Railway Station Signboard & Sketch Background */}
        <HeroSection
          onOpenDeck={() => setIsDeckOpen(true)}
          onExploreWork={handleExploreWork}
          onHireMe={handleHireMe}
        />

        {/* Station 01 Dossier: About Section featuring DDLJ Train Scene, Bio, Structured Info Grid & Interactive Railway Track */}
        <AboutSection onSelectCategory={handleSelectCategory} />

        {/* Station 02: Social Media Posters & Portfolio Gallery (Digital Dham / Instagram Mockups) */}
        <ProjectsSection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Station 03: Packaging Designs Showcase (Packaging Garh / Kaanchi Co. Case Study) */}
        <PackagingSection />

        {/* Station 04: Other Creative Pieces Showcase (Creativesar / 7 Authentic Artworks) */}
        <OtherCreativesSection />

        {/* Station 05: AI Video Ads Showcase (Chalchitra Garh / Slurrp Farm Production Pipeline) */}
        <AIVideoAdsSection />

        {/* Terminus: Thank You Appreciation & Direct Contact / Booking Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeck={() => setIsDeckOpen(true)} />

      {/* Full 6-Slide Presentation Deck Viewer */}
      <PresentationDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />
    </div>
  );
}
