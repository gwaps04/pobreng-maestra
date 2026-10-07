import React, { useState, useEffect } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Menu, X, ArrowUpRight, Sparkles, Mail, Heart } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "meet-maestra", label: "Meet the Maestra" },
    { id: "audience-stats", label: "Audience Stats" },
    { id: "brand-partnerships", label: "Brand Partnerships" },
    { id: "collaborate", label: "Let's Collaborate" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-amber-200/60 py-2.5"
          : "bg-[#FAF7F2] border-b border-slate-200/40 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Image Placeholder */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex-shrink-0">
              <ImagePlaceholder
                src="/images/navbar-logo.png"
                fallbackSrc="/images/navbar-logo.png"
                alt="Pobreng Maestra Logo"
                containerClassName="w-full h-full object-contain"
                label="Pobreng Maestra Logo"
                targetUploadPath="public/images/navbar-logo.png"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bubble text-xl sm:text-2xl font-black text-[#E81C76] tracking-tight group-hover:scale-105 transition-transform duration-200 leading-none">
                Pobreng Maestra
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#14532D] mt-0.5 flex items-center gap-1">
                <span>Bicol Travel &amp; Food Vlogger</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEDE2B]" />
                <span className="text-slate-500 font-semibold">1.4M+ Followers</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#14532D] bg-emerald-100/70"
                      : "text-slate-700 hover:text-[#14532D] hover:bg-emerald-50/50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#FEDE2B] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Call to Action & Inquiries Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick("collaborate")}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#14532D] hover:bg-[#0f3f22] shadow-md shadow-[#14532D]/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Work With Cecille</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FEDE2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#14532D] hover:bg-emerald-100/50 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-amber-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-[#14532D] text-white"
                    : "text-slate-800 hover:bg-emerald-50"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#FEDE2B]" />}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick("collaborate")}
              className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-[#E81C76] hover:bg-[#d01568] shadow-md flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Collaborate &amp; Inquire</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
