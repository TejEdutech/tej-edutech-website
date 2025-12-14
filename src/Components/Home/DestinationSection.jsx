import React, { memo } from "react";
import Container from "../common/Container"; // Ensure this path is correct for your project
import { Compass, MapPin, Sparkles } from "lucide-react";

// --- IMPORTING LOCAL IMAGES ---
import p1 from "../../assets/images/p1.avif";
import p2 from "../../assets/images/p2.avif";
import p3 from "../../assets/images/p3.avif";
import p4 from "../../assets/images/p4.avif";
import p5 from "../../assets/images/p5.avif";

import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import image4 from "../../assets/images/image4.jpeg";
import image5 from "../../assets/images/image5.jpeg";

// Assigning images
const northImages = [p1, p2, p3, p4, p5];
const southImages = [image2, image3, image4, image5, image2];

const DestinationSection = memo(() => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
      {/* 1. MATCHING BACKGROUND: Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* 2. MATCHING GLOWS */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        
        {/* Modern Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wide mb-4 shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>Pan India Presence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                Explore Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dream Destination</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-medium">
                From the heritage of the North to the innovation of the South.
            </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* === NORTH INDIA PANEL === */}
          <div className="flex flex-col h-[600px] relative">
            
            {/* Glass Label */}
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-100 text-blue-900 px-6 py-2 rounded-full font-bold shadow-sm">
                    <Compass className="w-5 h-5 text-blue-600" />
                    NORTH INDIA
                </div>
            </div>
            
            {/* Scroll Container (Glassmorphism) */}
            <div className="flex-1 relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl shadow-blue-900/5">
                {/* Gradient Fades */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                {/* Scroll Track */}
                <div className="scroll-vertical px-6 py-4">
                    {[...northImages, ...northImages].map((img, i) => (
                        <div key={i} className="mb-6">
                            <div className="group relative h-64 w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
                                <img 
                                  src={img} 
                                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                  alt="North Campus" 
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                        View Campus
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* === SOUTH INDIA PANEL === */}
          <div className="flex flex-col h-[600px] relative">
             
             {/* Glass Label */}
             <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-purple-100 text-purple-900 px-6 py-2 rounded-full font-bold shadow-sm">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    SOUTH INDIA
                </div>
            </div>

            {/* Scroll Container (Glassmorphism) */}
            <div className="flex-1 relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-xl shadow-purple-900/5">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                {/* Scroll Track (Reverse) */}
                <div className="scroll-vertical-reverse px-6 py-4">
                    {[...southImages, ...southImages].map((img, i) => (
                        <div key={i} className="mb-6">
                            <div className="group relative h-64 w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
                                <img 
                                  src={img} 
                                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                  alt="South Campus" 
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/40 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                        View Campus
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Animation Styles */}
      <style>{`
        .scroll-vertical {
          animation: scrollDown 40s linear infinite; /* Slower for premium feel */
        }

        .scroll-vertical-reverse {
          animation: scrollUp 40s linear infinite;
        }

        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .scroll-vertical:hover,
        .scroll-vertical-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
});

export default DestinationSection;