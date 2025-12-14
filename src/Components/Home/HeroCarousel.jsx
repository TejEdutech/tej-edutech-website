import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "../../Components/UI/button";
import ContactModal from "../../Components/Forms/ContactModal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; 

import hero1 from "../../../src/assets/images/image5.jpeg";
import hero2 from "../../../src/assets/images/image2.jpeg";
import hero3 from "../../../src/assets/images/image3.jpeg";
import hero4 from "../../../src/assets/images/image4.jpeg";

const carouselSlides = [
  {
    image: hero1,
    title: "Dream, Discover, Conquer",
    highlight: "with Tej EduTech",
    subtitle: "Your Trusted Partner for Career Success",
    description: "Ready to start your career journey? Reach out to one of our EduTech Expert counselors today.",
  },
  {
    image: hero2,
    title: "Shape Your Future",
    highlight: "Expert Guidance",
    subtitle: "Personalized counseling for your dream college",
    description: "From admission to scholarships, we guide you at every step of the way.",
  },
  {
    image: hero3,
    title: "Your Success is",
    highlight: "Our Mission",
    subtitle: "Join 200+ successful students nationwide",
    description: "Expert counselors dedicated to making your educational dreams come true.",
  },
  {
    image: hero4,
    title: "Excellence in",
    highlight: "Education Consulting",
    subtitle: "Partnering with top universities across India",
    description: "Your journey to success starts here with Tej EduTech.",
  },
];

const HeroCarousel = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/916362520959", "_blank");
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? "eager" : "lazy"} 
              className="absolute inset-0 w-full h-full object-cover object-center z-0" 
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80 z-10" />

            <div className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-12">
              <div className="max-w-4xl w-full text-center text-white flex flex-col items-center gap-4 md:gap-6">
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
                  {slide.title} <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 block sm:inline mt-1">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="text-base sm:text-xl md:text-2xl font-medium text-blue-100 drop-shadow-md">
                  {slide.subtitle}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed hidden xs:block">
                  {slide.description}
                </p>

                {/* --- BUTTONS SECTION --- */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 items-center justify-center">
                  
                  {/* Button 1: Modern Gradient with Icon */}
                  <Button
                    onClick={() => setIsContactModalOpen(true)}
                    className="
                      group relative overflow-hidden
                      w-full sm:w-[200px] h-12
                      bg-gradient-to-r from-blue-600 to-indigo-600 
                      hover:from-blue-500 hover:to-indigo-500
                      text-white text-sm sm:text-base font-bold tracking-wide
                      rounded-full shadow-lg shadow-blue-500/30
                      transition-all duration-300 transform hover:-translate-y-1
                      flex items-center justify-center gap-2
                    "
                  >
                    {/* Calendar Icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Book Now</span>
                    {/* Shine Effect Overlay */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                  </Button>

                  {/* Button 2: WhatsApp Style with Icon */}
                  <Button
                    onClick={handleWhatsApp}
                    className="
                      group relative overflow-hidden
                      w-full sm:w-[200px] h-12
                      bg-gradient-to-r from-green-500 to-emerald-600
                      hover:from-green-400 hover:to-emerald-500
                      text-white text-sm sm:text-base font-bold tracking-wide
                      rounded-full shadow-lg shadow-green-500/30
                      transition-all duration-300 transform hover:-translate-y-1
                      flex items-center justify-center gap-2
                    "
                  >
                    {/* WhatsApp Icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp Us</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                  </Button>

                </div>
                {/* --- END BUTTONS SECTION --- */}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default HeroCarousel;