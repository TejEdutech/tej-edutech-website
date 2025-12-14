import React, { useState } from "react";
import Container from "../common/Container";
import ContactModal from "../../Components/Forms/ContactModal";
import AD from "../../../src/assets/images/AD.avif";
import Ac from "../../../src/assets/images/Ac.jpeg";
import {
  CheckCircle2,
  Target,
  TrendingUp,
  Compass,
  GraduationCap,
  ArrowRight,
  BrainCircuit,
  Lightbulb
} from "lucide-react";
import { Button } from "../../Components/UI/button";

export default function CareerCounseling() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION: Dark Premium Theme */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <BrainCircuit className="w-4 h-4" />
                <span>Unlock Your Potential</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl md:leading-tight font-black text-white mb-6 tracking-tight">
              Designing Futures with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Precision & Clarity
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We move beyond generic advice. Our aptitude guidance uses data-driven insights to align your strengths with the right career opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
              >
                Start Your Assessment
              </Button>
              <Button 
                onClick={() => document.getElementById('explore').scrollIntoView({ behavior: 'smooth' })}
                className="h-14 px-8 bg-transparent border border-slate-700 text-white hover:bg-slate-800 rounded-full text-lg font-semibold"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. INTRO SECTION: Clean Split Layout */}
      <section id="explore" className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Not Just Counseling.<br/>
                <span className="text-blue-600">Strategic Career Planning.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Career counseling helps students identify their aptitude, interests, strengths, and opportunities so they can make confident, well-informed decisions about their future. We don't just tell you what to do; we show you why it fits.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Psychometric Assessment",
                  "One-on-One Expert Consultation",
                  "Industry Trend Analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image with Decorative Backdrop */}
            <div className="relative order-1 lg:order-2 group">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 scale-[0.98] opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src={AD}
                alt="Career Counseling Session"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover border border-slate-100 transform transition-transform duration-500 group-hover:-translate-y-2"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                        <Target className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-semibold uppercase">Success Rate</p>
                        <p className="text-2xl font-bold text-slate-900">98%</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. ACADEMIC PATHWAY: Alternate Layout */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-2xl opacity-70"></div>
               <img
                src={Ac}
                alt="Academic Planning"
                className="relative rounded-3xl shadow-lg w-full h-[400px] object-cover ring-8 ring-white"
              />
            </div>

            {/* Text Side */}
            <div>
              <div className="bg-white inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm mb-6 border border-slate-100">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-800 text-sm">Academic Roadmap</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Chart Your Path to <span className="text-blue-600">University Success</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Choosing a stream is just the beginning. Our counselors help students set goals, select the right courses, and create a structured roadmap that leads to academic and career success in the global marketplace.
              </p>
              <Button onClick={() => setIsContactModalOpen(true)} variant="outline" className="border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-600">
                Plan Your Academics <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. IMPORTANCE GRID (Bento Style) */}
      <section className="py-24 bg-white">
        <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Aptitude Tests Matter</h2>
                <p className="text-slate-600 text-lg">An objective assessment of your natural abilities is the foundation of a successful career choice.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Eliminate Confusion",
                  "Identify Hidden Talents",
                  "Unbiased Assessment",
                  "Educational Planning",
                  "Self-Awareness Boost",
                  "Effective Selection"
                ].map((item, index) => (
                    <div key={index} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg transition-all duration-300 cursor-default">
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Lightbulb className="w-5 h-5 text-yellow-500" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{item}</h4>
                        <p className="text-slate-500 text-sm mt-2">Provides clear, scientific data to back your life decisions.</p>
                    </div>
                ))}
            </div>
        </Container>
      </section>

      {/* 5. WHAT YOU GAIN (Dark Cards) */}
      <section className="py-24 bg-slate-900 text-white">
        <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">What You Gain</h2>
                    <p className="text-slate-400">Tangible outcomes from our counseling sessions.</p>
                </div>
                <Button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6"
                >
                    Get Started Today
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <Compass className="w-7 h-7 text-blue-400 group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Clear Direction</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Stop guessing. Get a definitive path tailored to your unique psychological profile and academic history.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                        <TrendingUp className="w-7 h-7 text-purple-400 group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Skill Mapping</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Understand your personality type and skill gaps. We help you map your traits to high-growth industries.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                        <Target className="w-7 h-7 text-green-400 group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Strategic Plan</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Leave with a step-by-step action plan, including course selection, entrance exams, and college applications.
                    </p>
                </div>
            </div>
        </Container>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-20 bg-white">
        <Container>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden px-8 py-16 text-center shadow-2xl">
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Ready to shape your future?
                    </h2>
                    <p className="text-blue-100 text-lg mb-10">
                        Join 200+ students who found their dream career path with Tej EduTech.
                    </p>
                    <button 
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
                    >
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </Container>
      </section>

      {/* MODAL */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}