import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero2 from "../../../src/assets/images/image2.jpeg";
import {
    Users,
    Building2,
    Award,
    ChevronRight,
    Instagram,
    Youtube,
    Linkedin,
    Facebook,
    Twitter,
} from "lucide-react";
// Assuming 'Button' is a component you can pass Tailwind classes to
import { Button } from "../../Components/UI/button";
import ContactModal from "../../Components/Forms/ContactModal";

const WhatWeDo = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const services = [
        {
            // Icon color updated to the new accent color
            icon: <Users className="h-14 w-14 text-cyan-600" />,
            title: "Career Counseling",
            description:
                "We help students choose the best academic and career pathways through expert profiling and guidance.",
            link: "/career-counseling",
        },
        {
            icon: <Building2 className="h-14 w-14 text-cyan-600" />,
            title: "Partnered Universities",
            description:
                "Tej EduTech collaborates with 20+ top universities across India to provide students direct access and customized guidance.",
            link: "/universities",
        },
        {
            icon: <Award className="h-14 w-14 text-cyan-600" />,
            title: "Scholarships",
            description:
                "We guide students to secure high-value scholarships based on merit, academic record, and eligibility.",
            link: "/scholarships",
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* HERO SECTION - Deep Teal/Slate Gradient */}
            <section className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-slate-800 to-cyan-800 flex items-center shadow-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10" // Reduced opacity for professional clarity
                    style={{ backgroundImage: `url(${hero2})` }}
                ></div>

                <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        What We Do
                    </h1>

                    <p className="text-cyan-200 text-lg md:text-xl max-w-2xl mt-4 font-light">
                        Discover the full spectrum of high-impact student services at Tej EduTech.
                    </p>

                    <Button
                        onClick={() => setIsContactModalOpen(true)}
                        size="lg"
                        // Button with reverse contrast for high visibility
                        className="mt-8 bg-cyan-400 text-slate-900 font-bold px-8 py-5 hover:bg-cyan-300 shadow-xl shadow-cyan-500/30 transition duration-300 rounded-lg"
                    >
                        Free Expert Consultation
                    </Button>
                </div>
            </section>

            {/* SERVICES GRID - Clean, modern cards with accent border */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-800 mb-16">
                        Our Core Areas of Expertise
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 
                                           hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out group"
                            >
                                {/* Icon container with a clean white circle and subtle shadow */}
                                <div className="bg-white rounded-full p-4 w-fit mb-6 shadow-lg border border-cyan-100">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6 border-b border-gray-100 pb-6">
                                    {service.description}
                                </p>

                                <Link to={service.link} className="block mt-4">
                                    <Button
                                        // Accent border color on hover
                                        className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center p-0 bg-transparent hover:bg-transparent"
                                        variant="link"
                                    >
                                        Explore Details
                                        <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* VALUE PROPOSITION/ABOUT US SECTION */}
            <section className="py-16 md:py-20 bg-gray-50 border-t border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
                        A Decade of Student Success
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        We don't just guide; we partner. Our dedicated approach ensures every student is matched 
                        with the right opportunity to thrive academically and professionally.
                    </p>
                    <Link to="/about">
                        <Button
                            size="lg"
                            className="bg-slate-700 text-white font-semibold px-8 py-5 hover:bg-slate-800 transition duration-300 rounded-lg shadow-md"
                        >
                            Learn About Our Mission
                        </Button>
                    </Link>
                </div>
            </section>

            {/* CTA SECTION - Updated look with social icons integrated */}
            <section className="py-16 md:py-24 bg-slate-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Start Your Journey Today
                    </h2>

                    <p className="text-slate-300 text-lg mb-10">
                        Get personalized support from our expert counselors and take the first step towards your future.
                    </p>

                    <Button
                        onClick={() => setIsContactModalOpen(true)}
                        size="lg"
                        // High-contrast button
                        className="bg-cyan-500 text-slate-900 px-8 py-5 font-bold hover:bg-cyan-400 shadow-xl shadow-cyan-500/40 transition duration-300 rounded-lg"
                    >
                        Request a Free Consultation
                    </Button>

                    <div className="flex justify-center gap-6 mt-12 text-slate-400">
                        {/* Social Icons with hover effect */}
                        <Instagram className="h-7 w-7 cursor-pointer hover:text-cyan-400 transition" />
                        <Youtube className="h-7 w-7 cursor-pointer hover:text-cyan-400 transition" />
                        <Linkedin className="h-7 w-7 cursor-pointer hover:text-cyan-400 transition" />
                        <Facebook className="h-7 w-7 cursor-pointer hover:text-cyan-400 transition" />
                        <Twitter className="h-7 w-7 cursor-pointer hover:text-cyan-400 transition" />
                    </div>
                </div>
            </section>

            {/* CONTACT MODAL */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
};

export default WhatWeDo;