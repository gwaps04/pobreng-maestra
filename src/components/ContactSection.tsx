import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Download, 
  Sparkles, 
  FileText, 
  HelpCircle,
  Globe,
  Video,
  MessageSquare
} from "lucide-react";

interface ContactSectionProps {
  initialPackage?: string;
}

export function ContactSection({ initialPackage = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    collaborationType: initialPackage || "Resort / Hotel Destination Feature",
    targetDate: "",
    budgetRange: "₱25,000 - ₱50,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Do you travel to locations outside of Bicol?",
      a: "Yes! While Maestra is based in Sorsogon, she regularly travels across Albay, Camarines Sur/Norte, Metro Manila, Batangas, and other Philippine regions for dedicated brand features.",
    },
    {
      q: "Can our marketing team review the video before publishing?",
      a: "Yes, standard commercial agreements include one round of draft review to ensure your brand key messages and details are 100% accurate.",
    },
    {
      q: "How far in advance should we book our campaign date?",
      a: "We recommend booking at least 2–3 weeks in advance to accommodate shoot scheduling, script planning, and travel logistics.",
    },
    {
      q: "Do you provide analytical reports after the campaign?",
      a: "Yes! A 7-day performance snapshot (Views, Reach, Engagement, Top Comments) is provided upon request for your campaign recap.",
    },
  ];

  return (
    <section id="collaborate" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-[#E81C76] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Commercial Inquiries &amp; Bookings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1.5 bg-[#FEDE2B] rounded-full mx-auto" />
          <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
            Ready to introduce your brand, resort, or culinary spot to 1.4 million engaged followers? Send us a message below.
          </p>
        </div>

        {/* Main Grid: Form & Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Business Inquiries Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-amber-200/80 shadow-xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-black text-slate-900">
                Partner With Pobreng Maestra
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below. Our management team replies within 24 to 48 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-emerald-900">
                  Maraming Salamat! Message Received.
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  We have received your collaboration inquiry for <strong>{formData.businessName || "your business"}</strong>. 
                  Our team will review your requirements and reach out via <strong>{formData.email}</strong> shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-700">Business / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mayon Haven Resort"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-700">Contact Person &amp; Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Cruz (Marketing Manager)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-700">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="marketing@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-700">Mobile / Viber / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+63 917 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-700">Type of Collaboration *</label>
                    <select
                      value={formData.collaborationType}
                      onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                    >
                      <option value="Viral-Ready Promotion & Tech Setup">Viral-Ready Promotion &amp; Tech Setup</option>
                      <option value="Resort / Hotel Destination Feature">Resort / Hotel Destination Feature</option>
                      <option value="Restaurant / Food Crawl Review">Restaurant / Food Crawl Review</option>
                      <option value="Product Placement & Cooking Integration">Product Placement &amp; Cooking Integration</option>
                      <option value="Brand Ambassadorship / Event Guest">Brand Ambassadorship / Event Guest</option>
                      <option value="Custom Campaign Bundle">Custom Campaign Bundle</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-700">Target Shoot / Launch Window</label>
                    <input
                      type="text"
                      placeholder="e.g. Next Month / Q2 2026"
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-700">Project Overview &amp; Key Goals *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand, what makes your property or product special, and what outcome you want to achieve from the feature..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-[#FAF7F2] font-normal focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#E81C76] hover:bg-[#d01568] text-white font-extrabold text-sm shadow-lg shadow-[#E81C76]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Proposal</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info, Media Kit Download, and Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white p-7 rounded-3xl border border-amber-200/80 shadow-md space-y-5">
              <h3 className="text-lg font-black text-slate-900">
                Official Business Channels
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#E81C76] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block">Direct Inquiries:</span>
                    <a
                      href="mailto:escullarcecille3@gmail.com"
                      className="text-[#E81C76] font-bold hover:underline"
                    >
                      escullarcecille3@gmail.com
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Checked daily by Maestra's partnership team</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#14532D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block">Base of Operations:</span>
                    <span className="text-slate-700 font-medium">Sorsogon, Bicol Region, Philippines</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">Available for regional &amp; domestic travel</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF7F2] border border-amber-200/60">
                  <div className="w-9 h-9 rounded-xl bg-yellow-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 block">Production Lead Time:</span>
                    <span className="text-slate-700 font-medium">7 to 14 days after on-site shoot</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">Rush turnaround available upon request</p>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Follow &amp; Verify Her Reach:
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-blue-50 text-blue-800 hover:bg-blue-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Facebook (1.4M)</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Media Kit Download Card */}
            <div className="p-6 rounded-3xl bg-[#14532D] text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FEDE2B] text-slate-950 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">One-Page Rate Card &amp; Media Kit</h4>
                  <p className="text-[11px] text-emerald-200">Updated for 2026 Commercial Partners</p>
                </div>
              </div>

              <p className="text-xs text-emerald-100 leading-relaxed">
                Need a shareable PDF summary for your marketing director or executive committee review?
              </p>

              <button
                onClick={() => window.print()}
                className="w-full py-2.5 rounded-xl bg-[#FEDE2B] hover:bg-yellow-300 text-slate-950 font-black text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-950" />
                <span>Save / Print Media Kit (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQs for Business Partners */}
        <div className="pt-8 border-t border-amber-200/60 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900">
              Frequently Asked Questions by Brands
            </h3>
            <p className="text-xs text-slate-500">
              Clear answers to help you plan your marketing feature smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-amber-200/70 shadow-xs space-y-2"
              >
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#E81C76] shrink-0 mt-0.5" />
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
