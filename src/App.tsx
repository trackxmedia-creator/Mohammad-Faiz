/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedPortfolio } from './components/FeaturedPortfolio';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExtendedVaultModal } from './components/ExtendedVaultModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';

export default function App() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedCampaignForForm, setSelectedCampaignForForm] = useState<string>('');

  const handleSelectCampaign = (title: string) => {
    setSelectedCampaignForForm(title);
    // Smooth scroll down to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans selection:bg-[#ff5722] selection:text-white">
      {/* 1. Navigation Bar */}
      <Navbar onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Portfolio Section (Exactly 3 Campaign Cards + Video Players) */}
        <FeaturedPortfolio
          onSelectCampaignForForm={handleSelectCampaign}
          onOpenVault={() => setIsVaultOpen(true)}
        />

        {/* 4. Services Section (5 Core Ad Capabilities) */}
        <ServicesSection />

        {/* 5. Process Section (5 Step Production Pipeline) */}
        <ProcessSection />

        {/* 6. Why Work With Me Section (Speed, Variations, Storytelling, ROAS) */}
        <WhyWorkWithMe />

        {/* 7. Contact Section (WhatsApp, Email & Short Inquiry Form) */}
        <ContactSection initialCampaign={selectedCampaignForForm} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Extended Video Vault Modal (All 8 Ad Videos) */}
      <ExtendedVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />

      {/* Client Setup & Free Hosting Guide Modal */}
      <DeploymentGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
