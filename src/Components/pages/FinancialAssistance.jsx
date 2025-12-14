import React, { useState } from "react";

import FA from "../../../src/assets/images/FA.webp";
import {
  FileText,
  CreditCard,
  CheckCircle,
  BookOpen,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "../../Components/UI/button";
import ContactModal from "../../Components/Forms/ContactModal";

const FinancialAssistance = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Define services with strong colors
  const services = [
    {
      number: "01",
      icon: FileText,
      title: "Loan Documentation",
      description: "We prepare and organize all required documents for loan applications, ensuring error-free submissions to banks.",
      color: "text-blue-600",
      accent: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: CreditCard,
      title: "Education Loan Guidance",
      description: "Get expert assistance in choosing the best loan options and securing favorable terms from trusted financial partners.",
      color: "text-purple-600",
      accent: "bg-purple-50",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Scholarship Maximization",
      description: "We help identify, apply for, and secure scholarships worth crores, reducing your financial burden significantly.",
      color: "text-amber-600",
      accent: "bg-amber-50",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Budget & Planning",
      description: "Get detailed guidance to plan, budget, and manage finances for your entire education journey, from tuition to living costs.",
      color: "text-green-600",
      accent: "bg-green-50",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const documents = [
    "Academic transcripts and certificates",
    "Admission offer letters (Mandatory)",
    "Income proof and financial statements",
    "Identity and address proof documents",
    "Bank statements (Last 6 months)",
    "Collateral documents (if applicable)",
    "Scholarship application forms & essays",
    "Loan application forms & supporting documents",
    "Co-applicant / guarantor documents",
  ];

  return (
    <div className="bg-white pt-0 mt-0 font-sans">
      
      {/* 1. HERO SECTION: FIX APPLIED - Minimal Padding on Top */}
      <section className="relative pt-6 pb-16 md:pt-16 md:pb-24 bg-slate-50 border-b border-slate-200">
        <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>SMART FINANCIAL PLANNING</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                    Make Education <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Affordable, Not Daunting.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                    We demystify the financing process, helping you secure scholarships, manage loans, and prepare every document with confidence.
                </p>

                <div className="pt-4">
                    <Button
                        onClick={() => setIsContactModalOpen(true)}
                        className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-blue-500/30 transition-transform hover:-translate-y-1"
                    >
                        Get Financial Guidance
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>

            {/* Right Image/Stat Card */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-700 ease-out group">
                    <img 
                        src={FA} 
                        alt="Financial Planning" 
                        loading="lazy"
                        className="w-full max-w-lg h-72 md:h-96 object-cover saturate-150" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 w-64 md:w-72 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-blue-700 mb-2">₹15 Crores+</h3>
                    <p className="text-slate-600 text-sm">Scholarships Secured for Our Students</p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. SERVICES GRID: Modern Numbered Cards */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-4">
            Our Complete Financial Ecosystem
          </h2>
          <p className="text-slate-600 text-lg text-center mb-16 max-w-3xl mx-auto">
            From documentation to securing the funds, we cover every step of your financial journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-300 border border-slate-200 bg-slate-50 hover:shadow-2xl hover:shadow-blue-100/50 hover:border-transparent hover:-translate-y-2`}
                >
                    {/* Floating Number (Background) */}
                    <div className="absolute -top-4 left-4 text-6xl font-black text-slate-100 opacity-70 group-hover:text-slate-200 transition-colors duration-300">
                        {service.number}
                    </div>

                    {/* Icon and Title */}
                    <div className="relative z-10 flex items-start gap-4">
                        <div className={`p-4 rounded-full ${service.accent} shadow-md`}>
                            {React.cloneElement(<Icon />, { className: `h-7 w-7 ${service.color}` })}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 pt-2">
                            {service.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-sm mt-4">
                        {service.description}
                    </p>
                    
                    {/* Gradient Border on Hover */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${service.gradient}`} style={{ zIndex: 0, padding: '2px' }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DOCUMENTS SECTION: Clean Check List */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
            Documents We Help You Organize
          </h2>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL SECTION */}
      <section className="py-16 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Explore Your Financial Options?
          </h2>

          <p className="text-slate-400 text-lg mb-8">
            Stop worrying about costs. Book a free consultation with our financial assistance experts today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="
                  group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                  text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-blue-900/30 transition-transform hover:scale-105
                  flex items-center gap-3 whitespace-nowrap
                "
              >
                  Book Free Consultation 
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <a 
                href="https://wa.me/916362520959" 
                target="_blank"
                rel="noreferrer"
                className="
                    bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-green-900/30 transition-transform hover:scale-105
                    flex items-center justify-center gap-3 whitespace-nowrap
                "
              >
                  <MessageCircle className="w-5 h-5" /> Quick Chat
              </a>
          </div>

          <div className="flex justify-center gap-6 mt-12 text-slate-500">
            <Instagram className="h-6 w-6 hover:text-pink-500 cursor-pointer transition-colors" />
            <Youtube className="h-6 w-6 hover:text-red-500 cursor-pointer transition-colors" />
            <Linkedin className="h-6 w-6 hover:text-blue-400 cursor-pointer transition-colors" />
            <Facebook className="h-6 w-6 hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </section>

      {/* Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default FinancialAssistance;