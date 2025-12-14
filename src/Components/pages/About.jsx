import React, { useState } from "react";
import { Button } from "../../Components/UI/button";
import hero3 from "../../../src/assets/images/image3.jpeg";
import Umesh from "../../assets/images/Umesh.png";
import ContactModal from "../../Components/Forms/ContactModal";
import {
    Award,
    Heart,
    Lightbulb,
    Shield,
    Instagram,
    Youtube,
    Facebook,
    Twitter,
    Linkedin,
    Users,
    DollarSign,
    GraduationCap,
    Clock, // Added Clock for the statistics section
    ArrowRight,
} from "lucide-react";
import Container from "../../Components/common/Container";

export default function About() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Core Values with updated accent colors for contrast
    const coreValues = [
        {
            icon: <Award className="h-8 w-8 text-amber-600" />,
            title: "Excellence",
            description: "Delivering the highest quality guidance and support.",
        },
        {
            icon: <Heart className="h-8 w-8 text-red-500" />,
            title: "Commitment",
            description: "Standing with you at every step of your journey.",
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
            title: "Knowledge",
            description: "Up-to-date insights on 20+ universities across India.",
        },
        {
            icon: <Shield className="h-8 w-8 text-green-600" />,
            title: "Trust",
            description: "Trusted by hundreds of students across the country.",
        },
    ];

    const socialLinks = {
        instagram: "https://www.instagram.com/tej_edutech_consultancy/",
        facebook:
            "https://www.facebook.com/people/Tej-Edutech/61585189462882/",
        youtube: "https://www.youtube.com/@tej_edutech_consulatancy",
        linkedin: "https://www.instagram.com/tej_edutech_consultancy/",
        twitter: "https://www.instagram.com/tej_edutech_consultancy/",
    };

    return (
        <div className="pt-0 bg-gray-50 font-sans text-slate-800">
            {/* 1. HERO SECTION - Premium Deep Indigo Header */}
            <section className="relative bg-gradient-to-br from-indigo-900 to-blue-950 text-white py-24 md:py-36 shadow-2xl overflow-hidden">
                {/* Subtle Background Pattern/Glow */}
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10" 
                    style={{ backgroundImage: `url(${hero3})` }}
                ></div>

                <Container className="relative z-10">
                    <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-amber-500 text-slate-900 text-sm font-bold uppercase tracking-widest shadow-md">
                        Our Story
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-4xl tracking-tighter">
                        Empowering Futures Through <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-white">
                            Strategic Guidance.
                        </span>
                    </h1>
                    <p className="mt-4 text-indigo-200 text-xl max-w-xl font-light">
                        We are more than consultants; we are your dedicated partners in achieving academic excellence and career clarity.
                    </p>

                    <Button
                        onClick={() => setIsContactModalOpen(true)}
                        // High impact CTA button (Amber accent)
                        className="mt-8 bg-amber-500 text-slate-900 font-bold px-8 py-6 rounded-lg shadow-xl shadow-amber-500/30 hover:bg-amber-400 transition-transform hover:-translate-y-1 group"
                    >
                        Start Your Journey 
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Container>
            </section>

            {/* 2. CORE VALUES - Clean, Elevated Cards with Hover Effects */}
            <section className="py-20 bg-white">
                <Container>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-12">
                        Commitment Driven by Strong Principles
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                // Card styling with focus on border and shadow
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-400/50 transition-all text-center transform hover:-translate-y-1"
                            >
                                {/* Icon container with subtle shadow and border */}
                                <div className="mx-auto mb-4 bg-gray-50 rounded-full p-4 w-fit shadow-md border border-gray-200">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 3. ABOUT FOUNDER - Modern, Asymmetric Layout */}
            <section className="py-20 md:py-32 bg-gray-50 border-t border-b border-gray-100">
                <Container>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-16">
                        Meet Our Visionary Founder
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        
                        {/* Founder Image (Col 1-2) - Visual focus point */}
                        <div className="lg:col-span-2 relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-300/40 border-8 border-white h-[500px] lg:h-[600px] group">
                                <img
                                    src={Umesh}
                                    alt="Umesh - Founder & CEO"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                            </div>
                            {/* Floating Role Card (High contrast) */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white py-3 px-6 rounded-full shadow-xl shadow-blue-500/50 border-2 border-white">
                                <p className="font-semibold text-sm">Umesh - Founder & CEO</p>
                            </div>
                        </div>

                        {/* Text Content (Col 3-5) - Narrative focus */}
                        <div className="lg:col-span-3 pt-6 lg:pt-0">
                            <h3 className="text-3xl font-extrabold text-slate-900">
                                The Vision Behind Tej EduTech
                            </h3>
                            <p className="text-amber-600 text-xl font-semibold mb-6 mt-1">
                                Driven by Guiding the Next Generation
                            </p>

                            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                                <p>
                                    Growing up in a small town, Umesh witnessed many talented
                                    students miss life-changing opportunities simply due to the
                                    lack of proper guidance. This realization became the driving
                                    force behind the creation of Tej EduTech.
                                </p>

                                <p>
                                    He holds a B.Tech in Electronics & Communication Engineering
                                    from Kalasalingam University and brings over two years of hands-on mentoring experience.
                                    Through a student-first approach, he has guided 200+ students, helping them navigate their
                                    academic journeys with clarity and confidence.
                                </p>

                                <p>
                                    His vision is to ensure that no student ever feels lost,
                                    unsupported, or overwhelmed while shaping their future. Under
                                    his leadership, Tej EduTech continues to grow as a trusted
                                    education consulting brand committed to empowering students
                                    and unlocking their true potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 4. STATISTICS - Iconic, High-Impact Stat Cards */}
            <section className="py-20 md:py-28 bg-white">
                <Container>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-12">
                        Our Impact by the Numbers
                    </h2>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            // Using distinct icons and colors for separation
                            { icon: Clock, number: "2+", label: "Years of Excellence", color: "text-blue-600" },
                            { icon: Users, number: "200+", label: "Students Mentored", color: "text-amber-600" },
                            { icon: GraduationCap, number: "20+", label: "Partner Universities", color: "text-purple-600" },
                            { icon: DollarSign, number: "₹15 Cr+", label: "Scholarships Secured", color: "text-green-600" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                // Stat Card: Clean background, strong border on hover
                                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 transition-all hover:border-blue-500 hover:shadow-xl group"
                            >
                                <div className={`mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-white border-4 ${stat.color}/20 group-hover:bg-blue-50`}>
                                    {React.createElement(stat.icon, { className: `h-6 w-6 ${stat.color}` })}
                                </div>
                                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tighter">
                                    {stat.number}
                                </h3>
                                <p className="text-slate-600 text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. CTA - Final High-Contrast Block with Social Links */}
            <section className="py-16 bg-blue-900 text-white">
                <Container className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Join Our Success Story
                    </h2>
                    <p className="text-blue-200 mt-2 mb-8 text-lg">
                        Be part of our mission to guide students toward a brighter future.
                    </p>

                    <Button
                        onClick={() => setIsContactModalOpen(true)}
                        // High-contrast Gold/Amber button
                        className="bg-amber-500 text-slate-900 font-bold px-8 py-6 shadow-xl shadow-amber-500/30 hover:bg-amber-400 transition-transform hover:-translate-y-0.5 rounded-lg"
                    >
                        Book Your Free Consultation
                    </Button>

                    <div className="flex justify-center gap-6 mt-10 text-blue-300">
                        {/* Social Icons with hover accent */}
                        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                            <Instagram className="w-6 h-6 hover:text-amber-400 transition" />
                        </a>
                        <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
                            <Youtube className="w-6 h-6 hover:text-red-400 transition" />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                            <Linkedin className="w-6 h-6 hover:text-amber-400 transition" />
                        </a>
                        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                            <Facebook className="w-6 h-6 hover:text-blue-400 transition" />
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                            <Twitter className="w-6 h-6 hover:text-amber-400 transition" />
                        </a>
                    </div>
                </Container>
            </section>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
}