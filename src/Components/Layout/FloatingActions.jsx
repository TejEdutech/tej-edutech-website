import React, { useState } from "react";
import { MessageCircle, Phone, Mail, X, MessageSquareText, Send } from "lucide-react";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: "Chat on WhatsApp",
      color: "bg-[#25D366] hover:bg-[#1ebd59]",
      delay: "delay-[0ms]",
      action: () => window.open("https://wa.me/916362520959", "_blank"),
    },
    {
      icon: Phone,
      label: "Call Support",
      color: "bg-blue-600 hover:bg-blue-700",
      delay: "delay-[50ms]",
      action: () => (window.location.href = "tel:+916362520959"),
    },
    {
      icon: Mail,
      label: "Email Us",
      color: "bg-red-500 hover:bg-red-600",
      delay: "delay-[100ms]",
      action: () => (window.location.href = "mailto:tejedutech9@gmail.com"),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-sans">
      
      {/* 1. BACKDROP BLUR (Mobile Only) */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. ACTION BUTTONS LIST */}
      <div className="flex flex-col gap-3 items-end z-50 mb-2">
        {actions.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 transition-all duration-300 transform ${item.delay} ${
                isOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-50 pointer-events-none"
              }`}
            >
              {/* Glass Label */}
              <span className="bg-white/90 backdrop-blur-md border border-white/20 text-slate-800 text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-black/5 whitespace-nowrap">
                {item.label}
              </span>

              {/* Action Button */}
              <button
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className={`${item.color} text-white p-3 rounded-full shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-110 transition-all duration-300 flex items-center justify-center group`}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. MAIN TOGGLE BUTTON */}
      <div className="relative z-50 group">
        
        {/* Animated Rings (Attention Grabber) */}
        {!isOpen && (
            <>
                <span className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping duration-[2s]"></span>
                <span className="absolute inset-0 rounded-full bg-blue-500 opacity-10 animate-ping delay-[1s] duration-[2s]"></span>
            </>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-500 ease-out
            ${isOpen ? "bg-slate-900 rotate-180" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 hover:shadow-blue-500/40"}
          `}
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
          ) : (
            <MessageSquareText className="w-6 h-6 md:w-7 md:h-7 text-white fill-white/20" />
          )}
        </button>

        {/* "Need Help?" Tooltip (Only shows when closed) */}
        <div 
            className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2.5 rounded-2xl shadow-xl shadow-blue-900/10 border border-blue-50 w-max transition-all duration-500 origin-right ${
                !isOpen ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 pointer-events-none"
            }`}
        >
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-sm font-bold text-slate-800">Need Help?</p>
            </div>
            {/* Little Triangle */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border-t border-r border-blue-50 rotate-45 transform"></div>
        </div>

      </div>
    </div>
  );
};

export default FloatingActions;