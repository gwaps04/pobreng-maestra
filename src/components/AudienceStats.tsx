import React from "react";
import { 
  Users, 
  Eye, 
  BarChart3, 
  Globe2, 
  TrendingUp, 
  PieChart, 
  ThumbsUp, 
  Share2, 
  Smartphone,
  CheckCircle2
} from "lucide-react";

export function AudienceStats() {
  const geoBreakdown = [
    { region: "Bicol Region (Sorsogon, Albay, CamSur)", pct: 45, color: "bg-[#14532D]" },
    { region: "Metro Manila & Mega Manila", pct: 20, color: "bg-[#E81C76]" },
    { region: "Overseas Filipino Workers (OFWs worldwide)", pct: 22, color: "bg-[#FEDE2B]" },
    { region: "Other Regions (Visayas & Mindanao)", pct: 13, color: "bg-slate-400" },
  ];

  const ageBreakdown = [
    { bracket: "25 - 34 years old (Key Shoppers)", pct: 38 },
    { bracket: "35 - 44 years old (Family Heads)", pct: 34 },
    { bracket: "45 - 54 years old (Homemakers)", pct: 18 },
    { bracket: "18 - 24 years old (Young Adults)", pct: 10 },
  ];

  const topVideoFormats = [
    {
      format: "Food & Heritage Recipe Features",
      views: "2.8M - 4.5M",
      engagement: "14.2%",
      desc: "Authentic cooking, local palengke food crawls, Bicol specialties, and restaurant tastings.",
    },
    {
      format: "Resort & Travel Escapes",
      views: "1.9M - 3.2M",
      engagement: "11.8%",
      desc: "Full property walk-throughs, room amenities, pool highlights, and travel directions.",
    },
    {
      format: "Bicol Provincial Life & Culture",
      views: "1.5M - 2.8M",
      engagement: "13.5%",
      desc: "Wholesome daily vlogs, pagcopra, local traditions, and heartwarming community stories.",
    },
    {
      format: "Brand Integrations & Product Demos",
      views: "1.2M - 2.4M",
      engagement: "10.4%",
      desc: "Native product use in cooking, travel essentials, kitchen appliances, and FMCG brands.",
    },
  ];

  return (
    <section id="audience-stats" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-[#E81C76]" />
            <span>Verified Creator Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Audience Demographics &amp; Reach
          </h2>
          <div className="w-24 h-1.5 bg-[#FEDE2B] rounded-full mx-auto" />
          <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
            Real data from Facebook Insights &amp; YouTube Analytics. Unrivaled organic reach and commercial influence.
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
              Facebook Followers
            </h4>
            <p className="text-xs text-slate-500">100% Organic follower growth across the Philippines.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#14532D] flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              25.8M+
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Monthly Impressions
            </h4>
            <p className="text-xs text-slate-500">Consistent multi-million views per video release.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-yellow-100 text-amber-800 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              12.4%
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Average Engagement
            </h4>
            <p className="text-xs text-slate-500">5x higher than typical macro-influencer averages.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-md space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              22% OFW
            </div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#14532D]">
              Global Filipino Diaspora
            </h4>
            <p className="text-xs text-slate-500">Subscribers who finance vacations for their families back home.</p>
          </div>
        </div>

        {/* Detailed Demographics Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Geographic Reach */}
          <div className="lg:col-span-6 bg-white p-7 rounded-3xl border border-amber-200/80 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Geographic Distribution</h3>
                <p className="text-xs text-slate-500">Where Maestra's viewers are located</p>
              </div>
              <span className="p-2 rounded-xl bg-[#FAF7F2] text-[#14532D]">
                <Globe2 className="w-5 h-5" />
              </span>
            </div>

            <div className="space-y-4 pt-2">
              {geoBreakdown.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-800">
                    <span>{item.region}</span>
                    <span className="text-[#14532D] font-extrabold">{item.pct}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-[#14532D] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p>
                <strong>Ideal for Local &amp; National Brands:</strong> Dominant presence in Region V with strong spillover into Manila foodies and OFWs craving hometown nostalgia.
              </p>
            </div>
          </div>

          {/* Age & Purchasing Power */}
          <div className="lg:col-span-6 bg-white p-7 rounded-3xl border border-amber-200/80 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Audience Age &amp; Gender</h3>
                <p className="text-xs text-slate-500">High purchasing power demographic</p>
              </div>
              <span className="p-2 rounded-xl bg-[#FAF7F2] text-[#E81C76]">
                <PieChart className="w-5 h-5" />
              </span>
            </div>

            {/* Gender bar */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-slate-100 flex items-center justify-around text-center">
              <div>
                <span className="text-2xl font-black text-[#E81C76]">64%</span>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Female / Moms / Decision Makers</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <span className="text-2xl font-black text-[#14532D]">36%</span>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Male / Travelers / Foodies</p>
              </div>
            </div>

            {/* Age brackets */}
            <div className="space-y-3">
              {ageBreakdown.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{item.bracket}</span>
                    <span className="font-bold text-slate-900">{item.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#E81C76]"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic pt-1">
              Over <strong>72%</strong> of followers belong to the 25–44 age bracket with disposable income for travel, dining out, and consumer goods.
            </p>
          </div>
        </div>

        {/* Content Performance Breakdown */}
        <div className="bg-white p-8 rounded-3xl border border-amber-200/80 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Average Performance by Video Category
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Consistent benchmark figures across typical campaign deliveries
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#14532D] text-[#FEDE2B]">
              High Organic Virality
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topVideoFormats.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h4 className="font-extrabold text-sm text-slate-900 leading-snug">
                    {card.format}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-amber-200/60 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Avg Views:</span>
                    <span className="font-black text-[#14532D]">{card.views}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Avg Engagement:</span>
                    <span className="font-black text-[#E81C76]">{card.engagement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
