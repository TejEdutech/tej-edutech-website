import React, { memo } from "react";
import { Award, Users, IndianRupee } from "lucide-react";
import Container from "../common/Container";

const MetricsBoxes = memo(() => {
  const stats = [
    {
      icon: Award,
      value: "2.5+",
      label: "Years of Excellence",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-600 to-cyan-500",
      border: "group-hover:border-blue-200",
    },
    {
      icon: Users,
      value: "200+",
      label: "Success Stories",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      gradient: "from-indigo-600 to-purple-500",
      border: "group-hover:border-indigo-200",
    },
    {
      icon: IndianRupee,
      value: "15 Cr+",
      label: "Scholarships Secured",
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-50",
      gradient: "from-fuchsia-600 to-pink-500",
      border: "group-hover:border-fuchsia-200",
    },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      
      {/* 1. MATCHING BACKGROUND: Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
             const Icon = stat.icon;
             
             return (
                <div
                  key={index}
                  className={`
                    group relative p-8 
                    bg-white/80 backdrop-blur-sm 
                    rounded-2xl border border-gray-100 
                    shadow-sm hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1
                    flex flex-col items-center justify-center text-center
                    ${stat.border}
                  `}
                >
                  {/* Decorative Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                  {/* Icon Circle */}
                  <div className={`mb-4 w-16 h-16 rounded-full ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Gradient Number */}
                  <h3 className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2 tracking-tight`}>
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
             );
          })}
        </div>
      </Container>
    </section>
  );
});

export default MetricsBoxes;