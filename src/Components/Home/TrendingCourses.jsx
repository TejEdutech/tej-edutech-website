import React, { memo } from "react";
import { Code, Cpu, Zap, Hammer, Building, Wifi, ArrowUpRight, Sparkles } from "lucide-react";

// Images (Keep your existing imports)
import CSE from "../../../src/assets/images/cse.jpeg";
import AI from "../../../src/assets/images/ai.jpeg";
import ECE from "../../../src/assets/images/ece.jpeg";
import EEE from "../../../src/assets/images/ee.jpeg";
import ME from "../../../src/assets/images/me.jpeg";
import CE from "../../../src/assets/images/ce.jpeg";
import DS from "../../../src/assets/images/ds.jpeg";
import IT from "../../../src/assets/images/it.jpeg";

const courses = [
  {
    name: "Computer Science",
    icon: Code,
    image: CSE,
    gradient: "from-blue-950 via-blue-900/80 to-transparent",
    accent: "group-hover:text-blue-400",
  },
  {
    name: "AI & ML", // Shortened for compact look
    icon: Cpu,
    image: AI,
    gradient: "from-purple-950 via-purple-900/80 to-transparent",
    accent: "group-hover:text-purple-400",
  },
  {
    name: "Electronics (ECE)",
    icon: Wifi,
    image: ECE,
    gradient: "from-indigo-950 via-indigo-900/80 to-transparent",
    accent: "group-hover:text-indigo-400",
  },
  {
    name: "Electrical (EEE)",
    icon: Zap,
    image: EEE,
    gradient: "from-yellow-950 via-yellow-900/80 to-transparent",
    accent: "group-hover:text-yellow-400",
  },
  {
    name: "Mechanical",
    icon: Hammer,
    image: ME,
    gradient: "from-red-950 via-red-900/80 to-transparent",
    accent: "group-hover:text-red-400",
  },
  {
    name: "Civil Engg",
    icon: Building,
    image: CE,
    gradient: "from-emerald-950 via-emerald-900/80 to-transparent",
    accent: "group-hover:text-emerald-400",
  },
  {
    name: "Data Science",
    icon: Code,
    image: DS,
    gradient: "from-teal-950 via-teal-900/80 to-transparent",
    accent: "group-hover:text-teal-400",
  },
  {
    name: "Information Tech",
    icon: Cpu,
    image: IT,
    gradient: "from-cyan-950 via-cyan-900/80 to-transparent",
    accent: "group-hover:text-cyan-400",
  },
];

const TrendingCourses = memo(() => {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Compact Header */}
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-3 shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>Future Ready</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                Trending Courses
            </h2>
        </div>

        {/* COMPACT GRID: 
            - h-40 on mobile (very sleek)
            - h-52 on desktop (landscape card)
            - gap-4 (tight spacing)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {courses.map((course, index) => {
            const Icon = course.icon;
            
            return (
              <div
                key={index}
                className="group relative h-40 md:h-52 w-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-200"
              >
                {/* 1. BACKGROUND IMAGE */}
                <div className="absolute inset-0 bg-gray-900">
                    <img
                    src={course.image}
                    alt={course.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                </div>

                {/* 2. COMPACT GRADIENT OVERLAY */}
                {/* Stronger gradient at bottom for text readability on small card */}
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-90`} />

                {/* 3. CONTENT CONTAINER */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 relative z-10">
                  
                  {/* Small Floating Icon */}
                  <div className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                    <Icon className={`w-4 h-4 text-white ${course.accent} transition-colors duration-300`} />
                  </div>

                  {/* Text Content */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm md:text-lg font-bold text-white leading-tight mb-1 drop-shadow-md">
                      {course.name}
                    </h3>
                    
                    {/* Animated Line */}
                    <div className="w-6 h-0.5 bg-white/50 rounded-full mb-2 group-hover:w-full group-hover:bg-white transition-all duration-500" />
                    
                    {/* 'View' Link - Only visible on hover */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] md:text-xs font-bold text-white/90 tracking-wide uppercase">View</span>
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

export default TrendingCourses;