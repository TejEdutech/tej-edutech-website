import React, { memo } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// --- IMPORTING LOCAL IMAGES ---
import sanjanaImg from "../../assets/images/sanjana.avif";
import arunImg from "../../assets/images/Arun.avif";
import karthikImg from "../../assets/images/Karthik.avif";
import priyaImg from "../../assets/images/priya.png";
import vishnuImg from "../../assets//images/Vishnu.avif";
import meghanaImg from "../../assets/images/meghana.avif";
import rahulImg from "../../assets/images/Rahul.avif";
import divyaImg from "../../assets/images/divya.avif";
import adityaImg from "../../assets/images/aditya.avif";
import manojImg from "../../assets/images/manoj.avif";
import anjaliImg from "../../assets/images/anjali.avif";

const stories = [
  {
    university: "VEL TECH University",
    image: sanjanaImg,
    comment: "Tej EduTech was a lifesaver! They not only helped me choose Vel Tech but also guided me to get a merit scholarship. The AI labs here are world-class.",
    name: "Sanjana Reddy",
    course: "B.Tech CSE (AI & ML)",
  },
  {
    university: "Kalasalingam University",
    image: arunImg,
    comment: "I was confused about which college to join for ECE. The counselors at Tej EduTech gave me a clear comparison, and Kalasalingam was the perfect choice.",
    name: "Arun Kumar",
    course: "B.Tech ECE",
  },
  {
    university: "VIT Vellore",
    image: karthikImg,
    comment: "Getting into VIT seemed impossible, but the Tej EduTech team made the management quota process transparent and stress-free. Highly recommended!",
    name: "Karthik Nair",
    course: "B.Tech IT",
  },
  {
    university: "SRM University",
    image: priyaImg,
    comment: "Tej EduTech handled my admission to SRM smoothly. Their team is very professional and stayed in touch until I got my ID card. Best consultancy!",
    name: "Priya Darshini",
    course: "B.Tech CSE",
  },
  {
    university: "HINDUSTAN University",
    image: vishnuImg,
    comment: "For Aeronautical Engineering, Tej EduTech strongly recommended Hindustan, and I am so glad they did. The practical exposure here is amazing.",
    name: "Vishnu Vardhan",
    course: "B.Tech Aeronautical",
  },
  {
    university: "Sathyabama University",
    image: meghanaImg,
    comment: "The best part about Tej EduTech is they don't overcharge. They helped me secure a seat at Sathyabama with a very affordable fee structure.",
    name: "Meghana Krishnan",
    course: "B.Tech BioTech",
  },
  {
    university: "Marwadi University",
    image: rahulImg,
    comment: "I wanted a college with 100% placement support. Tej EduTech suggested Marwadi University, and the coding culture here is exactly what I needed.",
    name: "Rahul Verma",
    course: "B.Tech Computer Eng.",
  },
  {
    university: "SAVEETHA University",
    image: divyaImg,
    comment: "Thank you, Tej EduTech! I got my admission letter for Saveetha University within 2 days. The process was super fast and completely online.",
    name: "Divya Sri",
    course: "B.Tech ECE",
  },
  {
    university: "Bharath University",
    image: adityaImg,
    comment: "My rank was low, but Tej EduTech gave me hope. They helped me get into Bharath University in the Mechatronics stream without any donation hassle.",
    name: "Aditya Roy",
    course: "Mechatronics",
  },
  {
    university: "AVIT",
    image: manojImg,
    comment: "Tej EduTech is very genuine. They suggested AVIT for Mechanical Engineering based on my budget, and I am really happy with the campus facilities.",
    name: "Manoj Kumar",
    course: "B.Tech Mechanical",
  },
  {
    university: "EXCEL University",
    image: anjaliImg,
    comment: "The guidance from Tej EduTech was like having a mentor. They explained the future scope of Civil Engineering at Excel, and it was a great decision.",
    name: "Anjali Menon",
    course: "B.Tech Civil",
  },
];

const SuccessStories = memo(() => {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Swiper Custom Styles */}
      <style>{`
        .mySwiper { padding-bottom: 40px !important; }
        .swiper-pagination-bullet { background-color: #cbd5e1; opacity: 1; }
        .swiper-pagination-bullet-active { background-color: #2563eb !important; width: 20px; border-radius: 10px; transition: width 0.3s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide mb-3">
                <Sparkles className="w-3 h-3" />
                <span>200+ Placed Students</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                Success Stories
            </h2>
        </div>

        {/* SWIPER */}
        <div className="px-0 md:px-2">
          <Swiper
            modules={[Autoplay, Pagination]} 
            spaceBetween={20}
            slidesPerView={1} 
            loop={true} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }} 
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {stories.map((story, i) => (
              <SwiperSlide key={i} className="h-auto">
                
                {/* COMPACT & SPECIAL CARD */}
                <div className="group relative bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden">
                  
                  {/* The "Special" Glow Bar at Bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Header: Image Left, Text Right (Compact) */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={story.image}
                      alt={story.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">{story.name}</h4>
                      <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mt-0.5">{story.university}</p>
                      <p className="text-[10px] text-gray-400">{story.course}</p>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="h-px w-full bg-gray-50 mb-3" />

                  {/* Quote & Stars */}
                  <div className="flex-grow relative">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-gray-100 fill-current -z-10" />
                    <p className="text-gray-600 text-xs leading-relaxed relative z-10 italic">
                      "{story.comment}"
                    </p>
                  </div>

                  {/* Stars (Compact at bottom right) */}
                  <div className="flex justify-end mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
});

export default SuccessStories;