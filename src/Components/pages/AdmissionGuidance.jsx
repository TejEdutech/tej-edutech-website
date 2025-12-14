import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Users,
    Search,
    FileEdit,
    Send,
    Check,
    ArrowRight,
    MessageCircle,
    Instagram,
    Youtube,
    Linkedin,
    Facebook,
    Target,
    Zap,
} from "lucide-react";
import { Button } from "../../Components/UI/button";
import ContactModal from "../../Components/Forms/ContactModal";

// --- Import Images ---
import TP from "../../../src/assets/images/TP.avif"; 
import hero4 from "../../../src/assets/images/image4.jpeg"; 

const AdmissionGuidance = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Define steps with Light Mode color properties (Gold/Navy focused)
    const steps = [
        {
            number: "01",
            icon: Users,
            title: "Expert Counseling",
            description: "Personalized guidance based on your academic profile, career vision, and preferred study destination.",
            color: "text-blue-700", 
            accent: "bg-blue-50", 
            gradient: "from-blue-600 to-blue-400",
        },
        {
            number: "02",
            icon: Search,
            title: "University Matching",
            description: "We match you with the right course and institution based on data-driven evaluation and potential.",
            color: "text-amber-600",
            accent: "bg-amber-50",
            gradient: "from-amber-600 to-orange-400",
        },
        {
            number: "03",
            icon: FileEdit,
            title: "Document Refinement",
            description: "Professional editing of your SOPs, LORs, and Essays to ensure they are compelling and accurate.",
            color: "text-teal-600",
            accent: "bg-teal-50",
            gradient: "from-teal-600 to-cyan-400",
        },
        {
            number: "04",
            icon: Send,
            title: "Application & Submission",
            description: "Flawless management of the entire application process, from form filling to final submission.",
            color: "text-purple-600",
            accent: "bg-purple-50",
            gradient: "from-purple-600 to-pink-400",
        },
        {
            number: "05",
            icon: Check,
            title: "Visa & Enrollment",
            description: "Finalize your offer, manage visa and loan documents, and prepare for your academic departure.",
            color: "text-green-600",
            accent: "bg-green-50",
            gradient: "from-green-600 to-lime-400",
        },
    ];

    return (
        <div className="bg-white font-sans text-slate-900 overflow-hidden min-h-screen">
            
            {/* 1. HERO SECTION: Space reduced (pt-0 and md:pt-0 applied) */}
            <section className="relative pt-0 pb-16 md:pt-0 md:pb-24 bg-white border-b border-gray-100">
                <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-6 pt-10 md:pt-20"> {/* Added padding directly to content for internal spacing */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                            <Target className="w-4 h-4 text-amber-600" />
                            <span>PREMIER ADMISSION SUPPORT</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            The Gold Standard for <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-600">
                                Guaranteed Admissions.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                            Experience comprehensive, personalized support designed to secure your seat in India's premier educational institutions.
                        </p>

                        <div className="pt-4">
                            <Button
                                onClick={() => setIsContactModalOpen(true)}
                                // Primary Button: Solid Navy/Blue with Gold Hover
                                className="group bg-blue-800 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-1"
                            >
                                Start Your Application
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Image/Stat Card (Clean Light Mode Styling) */}
                    <div className="relative flex justify-center lg:justify-end pt-10 md:pt-20"> {/* Added padding here too for alignment */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-700 ease-out group">
                            <img 
                                src={hero4} 
                                alt="Student Consultation" 
                                loading="lazy"
                                className="w-full max-w-lg h-72 md:h-96 object-cover saturate-150" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>

                        {/* Floating Stat Card (Gold Accent) */}
                        <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white p-6 rounded-2xl shadow-2xl border border-amber-300 w-64 md:w-72 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                            <h3 className="text-4xl font-extrabold text-amber-600 mb-2">100%</h3>
                            <p className="text-slate-600 text-sm">Admission Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES GRID: Modern Numbered Cards with Light Backgrounds */}
            <section className="py-20 md:py-28 bg-gray-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-4">
                        Our Comprehensive 5-Step Process
                    </h2>
                    <p className="text-slate-600 text-lg text-center mb-16 max-w-3xl mx-auto">
                        A systematic, transparent process covering everything from personalized counseling to final enrollment.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    // Light Card Style
                                    className={`group relative rounded-3xl p-6 transition-all duration-300 border border-gray-200 bg-white hover:shadow-2xl hover:shadow-blue-100/50 hover:border-transparent hover:-translate-y-2`}
                                >
                                    {/* Floating Number (Light Background) */}
                                    <div className="absolute -top-4 left-4 text-7xl font-black text-gray-100 opacity-90 group-hover:text-amber-100 transition-colors duration-300">
                                        {step.number}
                                    </div>

                                    {/* Icon and Title */}
                                    <div className="relative z-10 flex items-start gap-4">
                                        {/* Icon container: Light, colored background */}
                                        <div className={`p-4 rounded-full ${step.accent} shadow-md`}>
                                            {React.cloneElement(<Icon />, { className: `h-7 w-7 ${step.color}` })}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 pt-2">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed text-sm mt-4">
                                        {step.description}
                                    </p>
                                    
                                    {/* Gradient Border on Hover (Accent color) */}
                                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${step.gradient}`} style={{ zIndex: 0, padding: '2px' }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. CTA FINAL SECTION (Navy Background, Gold Buttons) */}
            <section className="py-16 bg-blue-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                        Ready to Secure Your Seat?
                    </h2>

                    <p className="text-blue-200 text-lg mb-10">
                        Get personalized guidance from our experts and guarantee your university admission today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsContactModalOpen(true)}
                            // Primary CTA Button: Gold/Amber
                            className="
                                group bg-amber-500 hover:bg-amber-600 text-white
                                rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-amber-500/30 transition-transform hover:scale-105
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
                            // Secondary CTA Button: Green/Success color
                            className="
                                bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-green-900/30 transition-transform hover:scale-105
                                flex items-center justify-center gap-3 whitespace-nowrap
                            "
                        >
                            <MessageCircle className="w-5 h-5" /> Quick Chat
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 mt-12 text-blue-300">
                        <Instagram className="h-6 w-6 hover:text-amber-400 cursor-pointer transition-colors" />
                        <Youtube className="h-6 w-6 hover:text-red-400 cursor-pointer transition-colors" />
                        <Linkedin className="h-6 w-6 hover:text-blue-400 cursor-pointer transition-colors" />
                        <Facebook className="h-6 w-6 hover:text-blue-400 cursor-pointer transition-colors" />
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

export default AdmissionGuidance;