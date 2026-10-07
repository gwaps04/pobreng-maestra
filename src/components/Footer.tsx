import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Heart, Mail, Globe, Video, MapPin, ArrowUp, Sparkles } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#14532D] text-white pt-16 pb-12 border-t-4 border-[#FEDE2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl p-1 shadow-md">
                <ImagePlaceholder
                  src="/images/logo.png"
                  fallbackSrc="/images/logo.svg"
                  alt="Pobreng Maestra Logo"
                  containerClassName="w-full h-full object-contain"
                  label="Logo"
                />
              </div>
              <div>
                <span className="font-bubble text-2xl font-black text-[#FEDE2B] tracking-tight leading-none block">
                  Pobreng Maestra
                </span>
                <span className="text-xs text-emerald-200 font-semibold mt-0.5 block">
                  Cecille Escullar • Bicol Travel &amp; Food Vlogger
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-sm">
              Showcasing the vibrant culture, mouthwatering cuisine, and breathtaking tourism destinations of Bicol and the Philippines to 1.4M+ organic followers.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-800 hover:bg-[#E81C76] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-800 hover:bg-[#E81C76] text-white flex items-center justify-center transition-colors shadow-xs"
                title="YouTube"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="mailto:escullarcecille3@gmail.com"
                className="w-9 h-9 rounded-xl bg-emerald-800 hover:bg-[#E81C76] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#FEDE2B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-emerald-100">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-[#FEDE2B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("meet-maestra")}
                  className="hover:text-[#FEDE2B] transition-colors cursor-pointer"
                >
                  Meet the Maestra
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("audience-stats")}
                  className="hover:text-[#FEDE2B] transition-colors cursor-pointer"
                >
                  Audience Stats &amp; Demographics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("brand-partnerships")}
                  className="hover:text-[#FEDE2B] transition-colors cursor-pointer"
                >
                  Brand Partnerships &amp; Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("collaborate")}
                  className="hover:text-[#FEDE2B] transition-colors cursor-pointer"
                >
                  Let's Collaborate (Inquiry Form)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#FEDE2B]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-emerald-100/90 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FEDE2B] shrink-0 mt-0.5" />
                <span>Sorsogon, Bicol Region, Philippines</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#FEDE2B] shrink-0 mt-0.5" />
                <a href="mailto:escullarcecille3@gmail.com" className="hover:underline">
                  escullarcecille3@gmail.com
                </a>
              </p>
              <p className="text-[11px] text-emerald-300 pt-1">
                Official Brand Representative &amp; Manager
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200">
          <p>
            &copy; {new Date().getFullYear()} Pobreng Maestra (Cecille Escullar). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>Made with pride in</span>
              <span className="font-bold text-[#FEDE2B]">Bicol, Philippines</span>
              <Heart className="w-3.5 h-3.5 text-[#E81C76] fill-[#E81C76]" />
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-emerald-800 hover:bg-[#FEDE2B] hover:text-slate-900 transition-colors text-white"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
