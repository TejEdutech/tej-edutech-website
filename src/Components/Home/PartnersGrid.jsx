import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/UI/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Importing Local Images
import vitImg from "../../assets/images/vit.png";
import srmImg from "../../assets/images/srm.png";
import hindustanImg from "../../assets/images/HINDU.jpg";
import mgrImg from "../../assets/images/mgr.jpeg";
import veltechImg from "../../assets/images/veltech.jpg";
import saveethaImg from "../../assets/images/savetha.jpg";
import bharathImg from "../../assets/images/bharath.webp";
import sathyabamaImg from "../../assets/images/sathyabhama.jpeg";
import excelImg from "../../assets/images/excel.jpg";
import joyImg from "../../assets/images/joy.jpg";
import kalasalingamImg from "../../assets/images/kare.jpg";
import newHorizonImg from "../../assets/images/NewHorizon.webp";
import akashImg from "../../assets/images/Akash.jpg";
import tjohnImg from "../../assets/images/tjohns.webp";
import revaImg from "../../assets/images/reva.jpg";
import presidencyImg from "../../assets/images/presidency.jpg";
import marwadiImg from "../../assets/images/marwadi.gif";
import uttranchalImg from "../../assets/images/uttaranchal.png";
import sandeepImg from "../../assets/images/sandeep.png";
import manipalImg from "../../assets/images/manipal.webp";
import lpuImg from "../../assets/images/lpu.webp";
import parulImg from "../../assets/images/parul.webp";
import Avit from "../../assets/images/AVIT.jpeg";

const universities = [
  { name: "VEL TECH", image: veltechImg },
  { name: "AVIT", image: Avit },
  { name: "Marwadi Univ", image: marwadiImg },
  { name: "Kalasalingam", image: kalasalingamImg },
  { name: "Uttranchal", image: uttranchalImg },
  { name: "EXCEL Group", image: excelImg },
  { name: "VIT", image: vitImg },
  { name: "SRM", image: srmImg },
  { name: "HINDUSTAN", image: hindustanImg },
  { name: "DR. MGR", image: mgrImg },
  { name: "SAVEETHA", image: saveethaImg },
  { name: "Bharath", image: bharathImg },
  { name: "Sathyabama", image: sathyabamaImg },
  { name: "Joy Univ", image: joyImg },
  { name: "NEW HORIZON", image: newHorizonImg },
  { name: "AKASH Inst", image: akashImg },
  { name: "T. Johns", image: tjohnImg },
  { name: "REVA", image: revaImg },
  { name: "Presidency", image: presidencyImg },
  { name: "Sandeep Univ", image: sandeepImg },
  { name: "Manipal", image: manipalImg },
  { name: "LPU", image: lpuImg },
  { name: "Parul Univ", image: parulImg },
];

const PartnersGrid = memo(() => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-100/40 to-purple-100/40 blur-3xl rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium mb-4 shadow-lg shadow-gray-900/20">
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span>Elite Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Our Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Universities</span>
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {universities.map((university, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="h-32 md:h-40 p-4 flex items-center justify-center bg-white relative">
                    <img
                        src={university.image}
                        alt={university.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="py-3 px-2 bg-gray-50 border-t border-gray-100 text-center relative z-10">
                    <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide group-hover:text-blue-600 transition-colors truncate">
                        {university.name}
                    </h3>
                </div>
            </div>
          ))}
        </div>

        {/* --- FIXED BUTTON SECTION --- */}
        <div className="mt-14 text-center relative z-10">
            <Link to="/university-visits">
                {/* Option: A "Dark Tech" button. 
                   It contrasts beautifully with the white/gray cards and feels more "Premium" than standard blue.
                */}
                <Button 
                    className="
                      group bg-gray-900 hover:bg-black text-white 
                      rounded-xl px-10 py-6 text-base font-bold tracking-wide
                      shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30
                      transition-all duration-300 transform hover:-translate-y-1
                      flex items-center gap-3 mx-auto
                    "
                >
                    Explore All Universities
                    {/* The arrow moves when you hover the button */}
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </Link>
            
            {/* Cleaner subtitle */}
            <p className="mt-4 text-xs font-medium text-gray-400 uppercase tracking-widest">
                Check Fees • Placements • Scholarships
            </p>
        </div>

      </div>
    </section>
  );
});

export default PartnersGrid;