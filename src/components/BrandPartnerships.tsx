import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { 
  Briefcase, 
  Video, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  Clock, 
  Share2, 
  ArrowUpRight, 
  Building2, 
  Utensils,
  Zap,
  Laptop,
  Rocket
} from "lucide-react";

interface BrandPartnershipsProps {
  onInquire: (packageTitle?: string) => void;
}

export function BrandPartnerships({ onInquire }: BrandPartnershipsProps) {
  const packages = [
    {
      id: "pkg-viral-tech",
      title: "Viral-Ready Promotion & Tech Setup",
      badge: "⭐ Empowering Provincial Hustles",
      tagline: "Future-proof your local hustle! When 1.4 million hungry viewers flood your social channels, we equip you with modern digital tools so your shop effortlessly captures bookings, takeout orders, and new customer inquiries without tech headaches.",
      icon: Zap,
      deliverables: [
        "Dedicated Vlog Feature & Viral Reels: A mouthwatering, heartwarming on-site feature by Pobreng Maestra introducing your brand's authentic story, specialty items, and location to 1.4M+ organic followers.",
        "Turnkey Online Booking & Direct Ordering Pages: A fast, mobile-friendly landing hub allowing guests to book tables, reserve rooms, or place delivery orders directly via WhatsApp, Viber, or Messenger.",
        "Streamlined Customer Onboarding & Automated Replies: An invisible digital engine that automatically answers FAQs, menu prices, and reservations 24/7 so you never leave a customer waiting.",
        "Custom QR Counter Signs & Digital Launch Kit: Ready-to-print branded QR code table tents for your physical shop counter and high-res photo assets optimized for your social media channels.",
      ],
      idealFor: "Traditional local shops, homegrown cafes, family carinderias, pasalubong makers, boutique homestays, and provincial service providers ready to modernize their hustle.",
      highlight: true,
      customBorder: "border-[#E81C76]",
    },
    {
      id: "pkg-dedicated",
      title: "Full Dedicated Destination / Resort Feature",
      badge: "Most Popular for Resorts & Tourism",
      tagline: "Comprehensive 8–15 minute immersive video vlog exploring every corner of your property.",
      icon: Video,
      deliverables: [
        "1x Long-form Facebook Dedicated Vlog (High-def 4K)",
        "2x High-energy Facebook Reels & YouTube Shorts",
        "1x High-Resolution Photo Album with location tagging",
        "Direct link to booking page, contact number & Google Map pin",
        "Permanent archival on Facebook Page (1.4M+ followers)",
      ],
      idealFor: "Resorts, Hotels, Eco-parks, Agri-tourism Farms, Provincial Tourism Offices",
      highlight: true,
      customBorder: "border-[#14532D]",
    },
    {
      id: "pkg-food",
      title: "Restaurant & Food Crawl Spotlight",
      badge: "Highest Virality",
      tagline: "Mouthwatering tasting session showcasing signature dishes and chef interviews.",
      icon: Utensils,
      deliverables: [
        "1x Dedicated Food Review Vlog (6–10 mins)",
        "2x Viral Food Sizzle Reels (B-roll of preparation & tasting)",
        "Menu highlight breakdown with pricing & location directions",
        "Pinned top comment with discount code or promo announcement",
      ],
      idealFor: "Restaurants, Cafes, Bakeries, Food Chains, Local Food Stalls & Night Markets",
      highlight: false,
      customBorder: "border-amber-200/70",
    },
    {
      id: "pkg-product",
      title: "Product Placement & Kitchen Integration",
      badge: "Best for FMCG & Appliances",
      tagline: "Organic, unforced incorporation into Maestra's home cooking and family life.",
      icon: Sparkles,
      deliverables: [
        "Natural mention & demonstration inside high-performing cooking vlog",
        "Key product benefits highlighted in conversational Filipino/Bicolano",
        "Product link in caption and comment section",
        "Non-compete exclusivity during campaign launch window",
      ],
      idealFor: "Food Seasonings, Kitchen Appliances, Beverages, Travel Gear, Home Goods",
      highlight: false,
      customBorder: "border-amber-200/70",
    },
    {
      id: "pkg-custom",
      title: "Custom Ambassadorship & Grand Openings",
      badge: "Maximum Impact",
      tagline: "On-site celebrity presence, ribbon cutting, live coverage, and multi-month contracts.",
      icon: Building2,
      deliverables: [
        "In-person appearance at grand opening or brand milestone",
        "Facebook Live coverage and meet-and-greet with local followers",
        "Quarterly content bundle (Reels, Vlogs, Photos)",
        "Usage rights for digital ads and print collaterals",
      ],
      idealFor: "Brand Launches, Shopping Malls, Regional Festivals, Long-term Endorsements",
      highlight: false,
      customBorder: "border-amber-200/70",
    },
  ];

  const featuredVlogs = [
    {
      title: "Hanapin niyo lang po ang Tay Ellis Motor Shop sa Brgy. Tugos, Sorsogon City",
      subtitle: "#ShihfaPhilippines #ShihFaTakesYouFarther",
      link: "https://www.facebook.com/reel/27895514250126248",
      category: "Shihfa Philippines",
      location: "Brgy. Tugos, Sorsogon City",
      imageKey: "thumb-tay-ellis-shihfa.jpg",
      fallbackKey: "thumb-tay-ellis-shihfa.svg",
      tagColor: "bg-blue-900 text-blue-100",
      sponsor: "Shihfa Tires & Motor Shop",
    },
    {
      title: "Greenwood Philippines",
      subtitle: "Eco-tourism, sustainable provincial farm & nature showcase",
      link: "https://www.facebook.com/reel/1031379939941023",
      category: "Greenwood Philippines",
      location: "Bicol Region",
      imageKey: "thumb-greenwood-ph.jpg",
      fallbackKey: "thumb-greenwood-ph.svg",
      tagColor: "bg-emerald-900 text-emerald-100",
      sponsor: "Greenwood Eco-Living",
    },
    {
      title: "Nakakatuwa magharvest ng PILI kapag hitik sa bunga",
      subtitle: "#buhayprobinsya #ShihfaPhilippines",
      link: "https://www.facebook.com/reel/1032944149763499",
      category: "Buhay Probinsya & Agri",
      location: "Sorsogon, Bicol",
      imageKey: "thumb-pili-harvest.jpg",
      fallbackKey: "thumb-pili-harvest.svg",
      tagColor: "bg-amber-900 text-amber-100",
      sponsor: "Shihfa x Buhay Probinsya",
    },
    {
      title: "Ginataang Buko sa Gulay",
      subtitle: "Authentic, mouthwatering heritage cooking straight from the province",
      link: "https://www.facebook.com/reel/1547647023832685",
      category: "Bicol Culinary Heritage",
      location: "Sorsogon Home Kitchen",
      imageKey: "thumb-ginataang-buko.jpg",
      fallbackKey: "thumb-ginataang-buko.svg",
      tagColor: "bg-[#14532D] text-[#FEDE2B]",
      sponsor: "Traditional Bicol Cuisine",
    },
    {
      title: "Highly recommended namin ito sainyo❤️ For all events and occasions.",
      subtitle: "#cateringservice #grazingtable",
      link: "https://www.facebook.com/reel/1442670117712223",
      category: "Catering & Grazing Table",
      location: "Bicol Events & Celebrations",
      imageKey: "thumb-catering-grazing.jpg",
      fallbackKey: "thumb-catering-grazing.svg",
      tagColor: "bg-pink-900 text-pink-100",
      sponsor: "Events & Catering Partner",
    },
    {
      title: "Nobody’s tough like Mama!🩷 Live Demo cooking at LCC Naga Felix Plazo",
      subtitle: "Live cooking demo with Tough Mama home and kitchen appliances! #ToughMama #toughmamamoments",
      link: "https://www.facebook.com/reel/2497713320710155",
      category: "Tough Mama Appliances",
      location: "LCC Naga Felix Plazo, CamSur",
      imageKey: "thumb-tough-mama-lcc.jpg",
      fallbackKey: "thumb-tough-mama-lcc.svg",
      tagColor: "bg-[#E81C76] text-white",
      sponsor: "Tough Mama x LCC Mall",
    },
  ];

  return (
    <section id="brand-partnerships" className="py-20 bg-white border-y border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#14532D] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-[#E81C76]" />
            <span>Commercial Services &amp; Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Brand Partnerships &amp; Campaigns
          </h2>
          <div className="w-24 h-1.5 bg-[#FEDE2B] rounded-full mx-auto" />
          <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
            Engineered to generate real foot traffic, customer inquiries, and measurable brand awareness.
          </p>
        </div>

        {/* Partnership Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isViralTech = pkg.id === "pkg-viral-tech";

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isViralTech
                    ? "md:col-span-2 bg-gradient-to-br from-white via-amber-50/40 to-pink-50/40 border-2 border-[#E81C76] shadow-2xl hover:-translate-y-1"
                    : pkg.highlight
                    ? "bg-gradient-to-b from-white to-amber-50/60 border-2 border-[#14532D] shadow-xl hover:-translate-y-1"
                    : "bg-[#FAF7F2] border border-amber-200/70 shadow-md hover:border-[#14532D]"
                }`}
              >
                {pkg.highlight && (
                  <div
                    className={`absolute -top-3.5 left-7 text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 ${
                      isViralTech
                        ? "bg-[#E81C76] text-white"
                        : "bg-[#14532D] text-[#FEDE2B]"
                    }`}
                  >
                    {isViralTech ? (
                      <Rocket className="w-3.5 h-3.5 text-[#FEDE2B]" />
                    ) : (
                      <Star className="w-3 h-3 fill-[#FEDE2B]" />
                    )}
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {!pkg.highlight && (
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#E81C76] bg-pink-50 px-2.5 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>
                  )}

                  <div className="flex items-center gap-3 pt-1">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                        isViralTech
                          ? "bg-[#E81C76] text-white shadow-md shadow-[#E81C76]/25"
                          : pkg.highlight
                          ? "bg-[#14532D] text-[#FEDE2B]"
                          : "bg-emerald-100 text-[#14532D]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {pkg.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pkg.tagline}
                  </p>

                  <div className="pt-2 border-t border-slate-200/70 space-y-2.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      What's Included:
                    </span>
                    <div className={isViralTech ? "grid grid-cols-1 sm:grid-cols-2 gap-2.5" : "space-y-2.5"}>
                      {pkg.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isViralTech ? "text-[#E81C76]" : "text-[#14532D]"
                            }`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-slate-500 font-medium">
                    <strong className="text-slate-800">Ideal for:</strong> {pkg.idealFor}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onInquire(pkg.title)}
                    className={`w-full py-3.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isViralTech
                        ? "bg-[#E81C76] hover:bg-[#d01568] text-white shadow-lg shadow-[#E81C76]/25"
                        : pkg.highlight
                        ? "bg-[#14532D] hover:bg-[#0f3f22] text-white shadow-md shadow-[#14532D]/20"
                        : "bg-white hover:bg-slate-100 text-[#14532D] border border-amber-300 shadow-xs"
                    }`}
                  >
                    <span>Request Rates &amp; Availability</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 ${
                        isViralTech ? "text-white" : "text-[#FEDE2B]"
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Video Portfolio & Thumbnails Placeholder Grid */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-amber-200/60 pb-4">
            <h3 className="text-2xl font-black text-slate-900">
              Sample Campaign Portfolio &amp; Viral Features
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Representative videos showcasing Maestra's high engagement and organic reach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVlogs.map((vlog, idx) => (
              <a
                key={idx}
                href={vlog.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Watch "${vlog.title}" on Facebook Reel`}
                className="group rounded-3xl overflow-hidden bg-[#FAF7F2] border border-amber-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* Thumbnail Container with Placeholder */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                  <ImagePlaceholder
                    src={`/images/thumbnails/${vlog.imageKey}`}
                    fallbackSrc={`/images/thumbnails/${vlog.fallbackKey}`}
                    alt={vlog.title}
                    containerClassName="w-full h-full"
                    label={vlog.title}
                    targetUploadPath={`public/images/thumbnails/${vlog.imageKey}`}
                  />
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#14532D]/95 backdrop-blur-sm text-[#FEDE2B] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                    {vlog.category}
                  </div>
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#E81C76] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                      <span>📍 {vlog.location}</span>
                      <span className="text-[#E81C76] font-semibold flex items-center gap-0.5">
                        <span>Reel</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#E81C76] transition-colors leading-snug line-clamp-2">
                      {vlog.title}
                    </h4>

                    {vlog.subtitle && (
                      <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                        {vlog.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#14532D] text-[11px]">
                      {vlog.sponsor}
                    </span>
                    <span className="inline-flex items-center gap-1 font-extrabold text-[#E81C76] group-hover:underline">
                      <span>Watch Reel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
