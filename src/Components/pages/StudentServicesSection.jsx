import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  BookOpen,
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Phone
} from "lucide-react";

import { Button } from "../../Components/UI/button";
import ContactModal from "../../Components/Forms/ContactModal";

// Images
import hero4 from "../../../src/assets/images/image4.jpeg";
import AD from "../../../src/assets/images/AD.avif";
import CC from "../../../src/assets/images/CC.avif";
import TP from "../../../src/assets/images/TP.avif";
import FA from "../../../src/assets/images/FA.webp";

const StudentServicesSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      icon: GraduationCap,
      title: "Admission Guidance",
      description:
        "Step-by-step support for university selection, SOPs, and securing your offer letter.",
      link: "/admission-guidance",
      image: AD,
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Users,
      title: "Career Counseling",
      description:
        "Expert mentorship to align your strengths with the best global career opportunities.",
      link: "/career-counseling",
      image: CC,
      color: "from-purple-600 to-fuchsia-500"
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description:
        "Premium training for IELTS, TOEFL, GRE, GMAT & SAT by top-tier faculty.",
      link: "#",
      image: TP,
      color: "from-pink-600 to-rose-500"
    },
    {
      icon: CreditCard,
      title: "Financial Aid",
      description:
        "Complete assistance for education loans, scholarship applications, and budgeting.",
      link: "/financial-assistance",
      image: FA,
      color: "from-amber-600 to-orange-500"
    }
  ];

  return (
    <section className="bg-slate-50 font-sans pb-24 overflow-hidden">
      {/* HERO SECTION */}
      <div className="max-w-[1400px] mx-auto pt-4 md:pt-6 px-4 md:px-6">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 min-h-[500px] lg:min-h-[550px] flex items-center shadow-2xl shadow-slate-900/50">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(37,99,235,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147,51,234,0.25) 0%, transparent 50%)"
            }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12">
            {/* LEFT */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-blue-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                PREMIUM STUDENT SERVICES
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                Your Global Journey <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Starts Here.
                </span>
              </h1>

              <p className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0">
                Navigate admissions, careers, and finances with expert-led,
                end-to-end guidance built for ambitious students.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="
                    bg-gradient-to-r from-blue-600 to-cyan-500
                    text-white px-8 py-6 rounded-xl text-lg font-bold
                    shadow-lg shadow-blue-600/40
                    hover:from-blue-500 hover:to-cyan-400
                    transition-all
                  "
                >
                  <span className="flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>

                <a
                  href="tel:+916362520959"
                  className="flex items-center gap-2 px-8 py-6 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition"
                >
                  <Phone className="w-5 h-5" />
                  Call Support
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden border-8 border-slate-700 shadow-2xl">
                <img
                  src={hero4}
                  alt="Student Success"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-4 rounded-xl flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      100% Admission Success
                    </p>
                    <p className="text-sm text-slate-500">
                      Proven guidance record
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Our Core <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Personalized solutions designed to turn education goals into success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute -bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="p-8 pt-10">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{service.description}</p>

                  <Link to={service.link} className="font-bold text-sm text-slate-900 hover:text-blue-600 flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA STRIP – ADDED */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0f172a] p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect with our Expert Counselors
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Don’t let doubts hold you back. Get your profile evaluated today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:from-blue-500 hover:to-purple-500
                  text-white px-10 py-6 rounded-full
                  text-lg font-bold shadow-lg hover:scale-105 transition
                "
              >
                Get Started Now
              </Button>

              <div className="flex gap-4 p-2 bg-white/5 rounded-full border border-white/10">
                <a href="https://www.instagram.com/tej_edutech_consultancy/" target="_blank" rel="noreferrer" className="text-white hover:text-pink-500"><Instagram /></a>
                <a href="https://www.facebook.com/people/Tej-Edutech/61585189462882/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-500"><Facebook /></a>
                <a href="https://www.linkedin.com/in/tej-edutech-consulatancy-3687a1396/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400"><Linkedin /></a>
                <a href="https://www.youtube.com/@tej_edutech_consulatancy" target="_blank" rel="noreferrer" className="text-white hover:text-red-500"><Youtube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default StudentServicesSection;
