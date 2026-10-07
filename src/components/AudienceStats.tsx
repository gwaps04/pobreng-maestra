import React, { useState } from "react";
import { 
  Users, 
  Eye, 
  BarChart3, 
  Globe2, 
  TrendingUp, 
  MapPin, 
  Building2, 
  Sparkles, 
  Heart, 
  Award, 
  CheckCircle2, 
  Compass, 
  Flame,
  ArrowUpRight
} from "lucide-react";

export function AudienceStats() {
  const [activeCityTab, setActiveCityTab] = useState<"all" | "bicol" | "national">("all");

  const topCities = [
    {
      city: "Legazpi City, Albay",
      role: "Regional Tourism & Commercial Capital",
      audienceShare: "320,000+ Followers",
      pct: 23,
      tag: "Top Local Hub",
      highlightColor: "border-[#14532D] bg-emerald-50/70 text-[#14532D]",
      desc: "Prime destination for Mayon view dining, luxury villas, and central Albay hospitality.",
      scope: "bicol",
    },
    {
      city: "Naga City, Camarines Sur",
      role: "Heart of Bicol Commerce & Pilgrimage",
      audienceShare: "275,000+ Followers",
      pct: 19,
      tag: "High Commerce",
      highlightColor: "border-blue-300 bg-blue-50/70 text-blue-900",
      desc: "Massive engagement from urban shoppers, universities, and regional food brands.",
      scope: "bicol",
    },
    {
      city: "Sorsogon (City, Gubat & Bulan)",
      role: "Maestra's Hometown & Cultural Roots",
      audienceShare: "220,000+ Followers",
      pct: 16,
      tag: "Hometown Base",
      highlightColor: "border-[#E81C76] bg-pink-50/70 text-[#E81C76]",
      desc: "Deep grassroots loyalty where featured local eateries experience immediate foot-traffic surges.",
      scope: "bicol",
    },
    {
      city: "Metro Manila (QC, Taguig, Manila)",
      role: "National Purchasing & Travel Intent",
      audienceShare: "350,000+ Followers",
      pct: 25,
      tag: "National Market",
      highlightColor: "border-amber-300 bg-amber-50/70 text-amber-900",
      desc: "Urban foodies, road trippers, and airline passengers looking for provincial getaway itineraries.",
      scope: "national",
    },
    {
      city: "OFW Hubs (Dubai, Riyadh, SG)",
      role: "Global Diaspora & Remittance Power",
      audienceShare: "190,000+ Followers",
      pct: 14,
      tag: "Overseas Senders",
      highlightColor: "border-purple-300 bg-purple-50/70 text-purple-900",
      desc: "Overseas Bicolanos who send money home to treat their families to featured resorts.",
      scope: "national",
    },
  ];

  const filteredCities = topCities.filter((c) => {
    if (activeCityTab === "bicol") return c.scope === "bicol";
    if (activeCityTab === "national") return c.scope === "national";
    return true;
  });

  const heroProofPoints = [
    {
      title: "Dominant Local Virality in Bicol",
      desc: "Features frequently cross 100,000+ views within Albay and Sorsogon alone in the first 24 hours of release.",
      stat: "85K - 150K",
      label: "Average 24h Regional Reach",
    },
    {
      title: "Direct In-Store Foot Traffic",
      desc: "Local sponsors report immediate weekend lines and sold-out signature dishes following a feature.",
      stat: "3x - 5x",
      label: "Foot Traffic Spike",
    },
    {
      title: "Cultural Trust & Organic Dialect",
      desc: "Fluent in natural Bicolano nuances and warm Filipino hospitality that turns viewers into paying guests.",
      stat: "94.8%",
      label: "Positive Audience Sentiment",
    },
  ];

  return (
    <section id="audience-stats" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header: The Hometown Hero Snapshot */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#14532D] text-xs font-black uppercase tracking-wider shadow-xs">
            <Flame className="w-4 h-4 text-[#E81C76] fill-[#E81C76]" />
            <span>The Hometown Hero Snapshot</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Regional Dominance in <span className="text-[#14532D]">Albay &amp; Bicol</span>,{" "}
            <span className="text-[#E81C76]">National Impact</span> Across the Philippines.
          </h2>

          <div className="w-24 h-1.5 bg-[#FEDE2B] rounded-full mx-auto" />

          <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
            Pobreng Maestra represents the proud <strong>"Oragon na Bicolana"</strong> identity. 
            For regional sponsors in hospitality, food, and retail, her platform guarantees deep grassroots trust 
            paired with nationwide visibility that out-converts generic national influencers.
          </p>
        </div>

        {/* 4 Big Numbers KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-pink-100 text-[#E81C76] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              1,420,000+
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Total Followers
            </h4>
            <p className="text-xs text-slate-500">Over 700K+ concentrated in South Luzon &amp; Bicol.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#14532D] flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              25.8M+
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Monthly Reach
            </h4>
            <p className="text-xs text-slate-500">Continuous viral momentum across Reels &amp; long-form vlogs.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-yellow-100 text-amber-800 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              12.4%
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Engagement Rate
            </h4>
            <p className="text-xs text-slate-500">High share-ability in Bicolano community feeds.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              #1 Bicol Vlogger
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Regional Market Leader
            </h4>
            <p className="text-xs text-slate-500">Unmatched authority in Bicol culinary &amp; travel spots.</p>
          </div>
        </div>

        {/* The Hometown Hero Snapshot Feature Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#14532D] shadow-xl space-y-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-amber-200/60 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#E81C76]" />
                <span>Why Regional Sponsors Choose Maestra</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                The Hometown Advantage: Real Foot Traffic, Not Just Views
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                National celebrities can generate passive views, but <strong>Pobreng Maestra mobilizes real people in Bicol</strong>. 
                When she tests a new coffee shop in Legazpi, visits a family resort in Albay, or reviews an eatery in Naga, 
                viewers treat it as a personal recommendation from their favorite teacher.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center sm:text-left min-w-[180px]">
                <span className="text-[11px] font-bold text-emerald-800 uppercase block">Regional Base</span>
                <span className="text-2xl sm:text-3xl font-black text-[#14532D]">52% Bicol</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Albay, Sorsogon, CamSur</span>
              </div>
              <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 text-center sm:text-left min-w-[180px]">
                <span className="text-[11px] font-bold text-[#E81C76] uppercase block">National &amp; OFW</span>
                <span className="text-2xl sm:text-3xl font-black text-[#E81C76]">48% Wide Reach</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Manila foodies &amp; OFWs</span>
              </div>
            </div>
          </div>

          {/* Proof Points Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroProofPoints.map((pt, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200/70 space-y-2">
                <span className="text-2xl font-black text-[#14532D] block">{pt.stat}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E81C76] block">
                  {pt.label}
                </span>
                <h4 className="font-extrabold text-sm text-slate-900 pt-1">{pt.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Cities Impact: Proving Local Influence */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-amber-200/80 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/60 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#14532D]" />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Top Cities &amp; Target Locations Breakdown
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Pinpoint geographic audience concentrations proving high-intent commercial pull
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
              <button
                onClick={() => setActiveCityTab("all")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeCityTab === "all"
                    ? "bg-[#14532D] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Key Hubs
              </button>
              <button
                onClick={() => setActiveCityTab("bicol")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeCityTab === "bicol"
                    ? "bg-[#14532D] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Bicol Strongholds
              </button>
              <button
                onClick={() => setActiveCityTab("national")}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeCityTab === "national"
                    ? "bg-[#14532D] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Manila &amp; OFW
              </button>
            </div>
          </div>

          {/* City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-amber-200/70 hover:border-[#14532D] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${item.highlightColor}`}>
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.pct}% share
                    </span>
                  </div>

                  <h4 className="font-black text-lg text-slate-900 flex items-center gap-1.5 pt-1">
                    <MapPin className="w-4 h-4 text-[#E81C76] shrink-0" />
                    <span>{item.city}</span>
                  </h4>

                  <span className="text-xs font-semibold text-[#14532D] block">
                    {item.role}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Estimated Audience:</span>
                  <span className="font-black text-slate-900">{item.audienceShare}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
