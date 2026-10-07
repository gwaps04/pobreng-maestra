import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MeetMaestra } from "./components/MeetMaestra";
import { AudienceStats } from "./components/AudienceStats";
import { BrandPartnerships } from "./components/BrandPartnerships";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInquirePackage = (packageTitle?: string) => {
    if (packageTitle) {
      setSelectedPackage(packageTitle);
    }
    handleNavigate("collaborate");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-800 selection:bg-[#E81C76] selection:text-white">
      {/* Fixed Layout Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        <HeroSection onExplore={handleNavigate} />
        <MeetMaestra />
        <AudienceStats />
        <BrandPartnerships onInquire={handleInquirePackage} />
        <ContactSection initialPackage={selectedPackage} />
      </main>

      {/* Grounded Tropical Green Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
