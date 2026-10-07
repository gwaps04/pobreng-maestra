import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Heart, Sparkles, MapPin, Award, Check, Coffee, Compass, ChefHat, Users2 } from "lucide-react";

export function MeetMaestra() {
  const pillars = [
    {
      title: "Authentic Culinary Storytelling",
      desc: "From authentic Sorsogon Ginataan, spicy Bicol Express, and fresh catch seafood to bustling night markets, Maestra presents food with irresistible warmth.",
      icon: ChefHat,
    },
    {
      title: "Promoting Local Tourism & Escapes",
      desc: "Putting hidden gems, provincial farm resorts, beachside villas, and scenic destinations on the national tourism map.",
      icon: Compass,
    },
    {
      title: "100% Wholesome & Brand-Safe",
      desc: "Trusted by families, mothers, OFWs, and travelers. Zero controversies, pure positive vibes, and respect for community traditions.",
      icon: Award,
    },
    {
      title: "High Conversion for Partners",
      desc: "Her followers don't just 'like' videos; they physically visit featured restaurants, order products, and book weekend stays.",
      icon: Users2,
    },
  ];

  return (
    <section id="meet-maestra" className="py-20 bg-white border-y border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#14532D] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#E81C76] fill-[#E81C76]" />
            <span>Ang Kwento sa Likod ng Vlogger</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Meet the Maestra:{" "}
            <span className="text-[#E81C76]">Cecille Escullar</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#FEDE2B] rounded-full mx-auto" />
          <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
            An educator, proud Bicolana, and one of the Philippines' most trusted provincial lifestyle voices.
          </p>
        </div>

        {/* Narrative Split: Image & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait & Visual Assets */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#FEDE2B] shadow-2xl bg-[#FAF7F2] aspect-[4/5] max-w-md mx-auto">
              <ImagePlaceholder
                src="/images/avatar.png"
                fallbackSrc="/images/avatar.svg"
                alt="Maestra Cecille Escullar Portrait"
                containerClassName="w-full h-full"
                label="Maestra Portrait"
                targetUploadPath="public/images/avatar.png"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Cecille Escullar</h4>
                  <p className="text-[11px] text-slate-500">Teacher • Food &amp; Travel Vlogger</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#14532D] bg-emerald-50 px-2.5 py-1 rounded-lg">
                  <MapPin className="w-3 h-3 text-[#E81C76]" />
                  <span>Sorsogon, Bicol</span>
                </div>
              </div>
            </div>

            {/* Quick Upload Note */}
            <p className="text-[11px] text-center text-slate-400">
              Easily update this portrait anytime at <code className="text-slate-600">public/images/avatar.png</code>
            </p>
          </div>

          {/* Right Column: Narrative Story & Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p className="font-semibold text-lg text-slate-900">
                What began as sharing raw, heartfelt glimpses of life in Bicol quickly blossomed into a vibrant family of over 1.4 million followers across the country and the OFW diaspora.
              </p>
              <p>
                Known affectionately as <em>"Pobreng Maestra"</em>, Cecille embodies humility, hardworking Filipino spirit, and unpretentious joy. Whether cooking <strong>Ginataang may dahon ng gabi</strong>, picking coconuts, visiting remote mountain communities, or testing out the newest family resort in Albay and Camarines, she invites her audience to pull up a chair as if they are right beside her.
              </p>
              <p>
                For businesses, collaborating with Maestra means gaining an ambassador who treats your brand with personal respect and enthusiasm. She crafts content that seamlessly blends commercial value with organic, mouthwatering visual storytelling.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-amber-200/70 space-y-2 hover:border-[#14532D] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#14532D] text-[#FEDE2B] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
