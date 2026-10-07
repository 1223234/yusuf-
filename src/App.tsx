import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WatchShowroom } from './components/WatchShowroom';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { BrandIdentityVisuals } from './components/BrandIdentityVisuals';
import { PackagingExperience } from './components/PackagingExperience';
import { WatchConfigurator } from './components/WatchConfigurator';
import { MarketingAndLaunch } from './components/MarketingAndLaunch';
import { BrandStoryModal } from './components/BrandStoryModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'RUB'>('USD');
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e2e4e9] flex flex-col font-body selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        currency={currency}
        setCurrency={setCurrency}
        onOpenStory={() => setIsStoryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreCollection={() => scrollToSection('collection')}
          onOpenConfigurator={() => scrollToSection('configurator')}
          onOpenStory={() => setIsStoryOpen(true)}
        />

        {/* First Collection Showroom */}
        <WatchShowroom
          currency={currency}
          onConfigureModel={(modelId) => scrollToSection('configurator')}
        />

        {/* Brand Philosophy & USP */}
        <BrandPhilosophy />

        {/* Brand Identity & Visual System */}
        <BrandIdentityVisuals />

        {/* Monolithic Packaging Experience */}
        <PackagingExperience />

        {/* Interactive Customizer / Configurator */}
        <WatchConfigurator currency={currency} />

        {/* Marketing Launch Strategy & Instagram */}
        <MarketingAndLaunch />
      </main>

      {/* Brand Story Modal */}
      <BrandStoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      {/* Refined Footer */}
      <Footer
        setActiveTab={scrollToSection}
        onOpenStory={() => setIsStoryOpen(true)}
      />
    </div>
  );
}
