import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { 
  ArrowRight, 
  MapPin, 
  UtensilsCrossed, 
  Sparkles, 
  Users, 
  Play, 
  CheckCircle2, 
  Download, 
  Mail,
  Camera
} from "lucide-react";

interface HeroSectionProps {
  onExplore: (sectionId: string) => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Feature Banner (User Uploaded Banner Replica with Placeholder) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">
          <div className="w-full aspect-[16/6] min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] relative">
            <ImagePlaceholder
              src="/images/hero-banner.png"
              fallbackSrc="/images/hero-banner.svg"
              alt="Pobreng Maestra Official Banner"
              containerClassName="w-full h-full"
              label="Pobreng Maestra Hero Banner"
              targetUploadPath="public/images/hero-banner.png"
            />
          </div>

          {/* Quick Upload Hint Tag */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 shadow-sm border border-slate-200/80 hidden sm:flex items-center gap-1.5">
            <Camera className="w-3 h-3 text-[#E81C76]" />
            <span>Banner location: <code className="text-[#14532D]">public/images/hero-banner.png</code></span>
          </div>
        </div>

        {/* Hero Narrative & Media Kit Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio, and Brand Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#14532D] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E81C76]" />
              <span>Official Media Kit &amp; Commercial Partnerships 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Bringing the Heart of{" "}
              <span className="relative inline-block text-[#14532D]">
                Bicol &amp; Beyond
                <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-[#FEDE2B] -z-10 rounded-sm opacity-90 transform -rotate-1" />
              </span>{" "}
              to <span className="text-[#E81C76]">1.4 Million</span> Hungry Travelers.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Mabuhay! I'm <strong>Cecille Escullar</strong>, widely known as <strong>Pobreng Maestra</strong>. 
              I celebrate genuine provincial life, mouthwatering heritage recipes, hidden resorts, and unforgettable travel experiences. 
              We connect brands to an exceptionally loyal, high-engagement Filipino audience that acts on our recommendations.
            </p>

            {/* Quick Badges Strip */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs font-bold text-amber-900">
                <MapPin className="w-3.5 h-3.5 text-[#E81C76]" />
                <span>Sorsogon, Albay, Camarines &amp; Nationwide</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-[#14532D]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-emerald-600" />
                <span>Food, Resorts &amp; Local Tourism</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 border border-pink-200/80 text-xs font-bold text-[#E81C76]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E81C76]" />
                <span>Verified Facebook Creator</span>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onExplore("collaborate")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E81C76] hover:bg-[#d01568] text-white font-extrabold text-sm shadow-lg shadow-[#E81C76]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Partner With Maestra</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExplore("audience-stats")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#14532D] hover:bg-[#0f3f22] text-white font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#FEDE2B]" />
                <span>View Audience Data</span>
              </button>
            </div>

            {/* Quick contact direct access */}
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E81C76]" />
                <a href="mailto:escullarcecille3@gmail.com" className="hover:text-slate-800 underline">
                  escullarcecille3@gmail.com
                </a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Accepting Q2/Q3 Brand Features</span>
              </span>
            </div>
          </div>

          {/* Right Column: Profile Card & Quick Stats Highlight */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-200/70 space-y-6">
              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#FEDE2B] flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-slate-900" />
              </div>

              {/* Avatar with placeholder */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-[#E81C76] flex-shrink-0 bg-yellow-100">
                  <ImagePlaceholder
                    src="/images/avatar.png"
                    fallbackSrc="/images/avatar.svg"
                    alt="Cecille Escullar - Pobreng Maestra"
                    containerClassName="w-full h-full"
                    label="Maestra Avatar"
                    targetUploadPath="public/images/avatar.png"
                  />
                </div>
                <div>
                  <h3 className="font-bubble text-xl sm:text-2xl font-black text-slate-900">
                    Cecille Escullar
                  </h3>
                  <p className="text-xs font-bold text-[#E81C76] uppercase tracking-wider">
                    "Pobreng Maestra"
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Authentic Bicol Food, Travel &amp; Lifestyle Influencer
                  </p>
                </div>
              </div>

              {/* Key Vital Metrics at a Glance */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Facebook Following
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#14532D] mt-0.5">
                    1.4M+
                  </div>
                  <span className="text-[10px] text-emerald-700 font-semibold">
                    100% Organic Community
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Monthly Reach
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#E81C76] mt-0.5">
                    25M+
                  </div>
                  <span className="text-[10px] text-slate-600 font-semibold">
                    Video Views &amp; Feed Impressions
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Audience Loyalty
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 mt-0.5">
                    12.4%
                  </div>
                  <span className="text-[10px] text-slate-600 font-semibold">
                    Average Engagement Rate
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Audience Demographics
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-slate-800 mt-0.5">
                    78% PH / 22% OFW
                  </div>
                  <span className="text-[10px] text-slate-600 font-semibold">
                    Prime Purchasing Power
                  </span>
                </div>
              </div>

              {/* What Brands Say Mini Quote */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs text-[#14532D] leading-relaxed">
                <span className="font-extrabold">💡 Why Brands Choose Maestra:</span>{" "}
                <em>
                  "Pobreng Maestra doesn't just review our restaurant or resort; her warm Bicolana storytelling makes our brand feel like home to millions of viewers."
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
