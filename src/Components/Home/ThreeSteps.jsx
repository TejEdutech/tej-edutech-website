import React, { memo } from "react";
import { Users, FileText, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../Components/UI/button";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Counseling",
    description: "Expert guidance tailored to your goals.",
    // Gradients for the 'Glow' effect
    glow: "from-blue-500/20 via-blue-500/5 to-transparent",
    textGradient: "from-blue-600 to-cyan-500",
    iconColor: "text-blue-600",
    borderColor: "group-hover:border-blue-200",
  },
  {
    number: "02",
    icon: FileText,
    title: "Applications",
    description: "Seamless documentation & strategic support.",
    glow: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    textGradient: "from-indigo-600 to-purple-500",
    iconColor: "text-indigo-600",
    borderColor: "group-hover:border-indigo-200",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Scholarships",
    description: "Unlock financial aid & loan options easily.",
    glow: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
    textGradient: "from-fuchsia-600 to-pink-500",
    iconColor: "text-fuchsia-600",
    borderColor: "group-hover:border-fuchsia-200",
  },
];

const ThreeSteps = memo(({ onConsultationClick }) => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      
      {/* Modern Tech Background: Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      
      {/* Faint Center Glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-100/40 to-purple-100/40 blur-3xl rounded-full z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium mb-4 shadow-lg shadow-gray-900/20">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span>Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Your Journey. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Accelerated.</span>
            </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${step.borderColor} overflow-hidden`}
              >
                {/* Dynamic Background Glow on Hover */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${step.glow} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Card Header: Icon & Number */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>
                    <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.textGradient} opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
                        {step.number}
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Modern Link Button */}
                <div className="relative z-10">
                    <button 
                        onClick={onConsultationClick}
                        className="group/btn flex items-center text-sm font-bold text-gray-900 hover:text-black transition-colors"
                    >
                        Start Now 
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                    {/* Underline animation */}
                    <div className={`h-0.5 w-0 bg-gradient-to-r ${step.textGradient} transition-all duration-300 group-hover:w-20 mt-1`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ThreeSteps;