import React, { useState } from "react";
// Image path fix applied
import unv from "../../../src/assets/images/unv.jpeg"; 

import { Search, MapPin, TrendingUp, Filter } from "lucide-react";

// --- START: Placeholder for your Input Component ---
const SimpleInput = ({ placeholder, value, onChange, className }) => (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // Input style emphasizing depth and focus (Accent changed to Blue-500)
        className={`w-full border-2 border-gray-300 bg-white rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 ease-in-out placeholder:text-gray-500 ${className}`}
    />
);
// --- END: Placeholder for your Input Component ---


// University Images Imports (Paths fixed for consistency)
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


const universitiesData = [
    { name: "Kalasalingam University", location: "Krishnankoil", region: "South", image: kalasalingamImg },
    { name: "Vel Tech University", location: "Chennai", region: "South", image: veltechImg },
    { name: "AVIT", location: "Chennai", region: "South", image: Avit },
    { name: "Marwadi University", location: "Gujarat", region: "West", image: marwadiImg },
    { name: "Uttranchal University", location: "Dehradun", region: "North", image: uttranchalImg },
    { name: "Excel University", location: "Namakkal", region: "South", image: excelImg },
    { name: "Hindustan University", location: "Chennai", region: "South", image: hindustanImg },
    { name: "Excel University", location: "Namakkal", region: "South", image: excelImg },
    { name: "Kalasalingam University", location: "Krishnankoil", region: "South", image: kalasalingamImg },
    { name: "VIT", location: "Vellore", region: "South", image: vitImg },
    { name: "SRM University", location: "Chennai", region: "South", image: srmImg },
    { name: "Dr. MGR University", location: "Chennai", region: "South", image: mgrImg },
    { name: "Saveetha University", location: "Chennai", region: "South", image: saveethaImg },
    { name: "Bharath University", location: "Chennai", region: "South", image: bharathImg },
    { name: "Sathyabama University", location: "Chennai", region: "South", image: sathyabamaImg },
    { name: "Joy University", location: "Kanyakumari", region: "South", image: joyImg },
    { name: "New Horizon Institute of Technology", location: "Bangalore", region: "South", image: newHorizonImg },
    { name: "Akash Institute of Technology", location: "Bangalore", region: "South", image: akashImg },
    { name: "T. Johns", location: "Bangalore", region: "South", image: tjohnImg },
    { name: "REVA University", location: "Bangalore", region: "South", image: revaImg },
    { name: "Presidency University", location: "Bangalore", region: "South", image: presidencyImg },
    { name: "Uttranchal University", location: "Dehradun", region: "North", image: uttranchalImg },
    { name: "Sandeep University", location: "Nashik", region: "West", image: sandeepImg },
    { name: "Manipal University", location: "Manipal", region: "South", image: manipalImg },
    { name: "LPU University", location: "Punjab", region: "North", image: lpuImg },
    { name: "Parul University", location: "Vadodara", region: "West", image: parulImg },
];

const Universities = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const universities = universitiesData; 

    // SEARCH + PAGINATION LOGIC
    const filtered = universities.filter(
        (u) =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.region.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const displayed = filtered.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* HERO SECTION - Deep Navy Blue Professional Header */}
            <section className="relative h-[280px] md:h-[350px] bg-gradient-to-br from-blue-900 to-slate-900 flex items-center shadow-2xl">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${unv})` }}
                ></div>
                {/* Subtle Blue line for separation (Replaced Gold/Amber) */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500/80"></div>

                <div className="relative text-center w-full px-6">
                    {/* Heading in crisp white and secondary text in light blue */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        Global Partner Network
                    </h1>
                    <p className="text-blue-300 text-lg max-w-3xl mx-auto mt-4 font-light italic">
                        Aligning with institutions of distinction and academic excellence.
                    </p>
                </div>
            </section>

            {/* SEARCH & INFO BAR - Elevated and Focused */}
            <section className="py-10 -mt-10 mb-10 z-10 relative">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-5 rounded-xl shadow-2xl shadow-blue-200/50">
                        
                        {/* Search Input */}
                        <div className="relative flex-grow w-full md:w-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 h-5 w-5" />
                            <SimpleInput 
                                placeholder="Search by Institution, City, or Region..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-12 pr-4 py-3 text-base"
                            />
                        </div>
                        
                        {/* Results Count */}
                        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                            <div className="text-gray-700 font-medium whitespace-nowrap flex items-center gap-1.5 border-l-2 border-blue-300 pl-4 py-1">
                                <TrendingUp className="h-4 w-4 text-blue-700" />
                                <span className="font-extrabold text-blue-900 text-xl">{filtered.length}</span> Results
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNIVERSITIES GRID - Elegant Card Design */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {displayed.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                            {displayed.map((uni, index) => (
                                <div
                                    key={index}
                                    // Card hover border changed to Blue-400
                                    className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-400 transition duration-300 ease-in-out"
                                >
                                    {/* Logo Image Box */}
                                    <div className="w-full h-32 bg-white rounded-lg overflow-hidden flex justify-center items-center mb-5 p-4 border border-gray-200">
                                        <img
                                            src={uni.image}
                                            alt={uni.name}
                                            className="h-full w-auto object-contain max-h-[85%]"
                                        />
                                    </div>

                                    {/* University Name */}
                                    <h3 className="text-lg font-bold text-blue-900 text-center line-clamp-2 min-h-[3rem]">
                                        {uni.name}
                                    </h3>

                                    {/* Location */}
                                    <div className="flex items-center justify-center text-gray-500 mt-2 text-base">
                                        <MapPin className="h-4 w-4 mr-1.5 text-blue-500" /> {uni.location}
                                    </div>

                                    {/* Region Badge - --- FIX APPLIED HERE: Changed to Blue-600 --- */}
                                    <div className="text-center mt-4">
                                        <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md shadow-blue-500/40">
                                            {uni.region}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // No results message
                        <div className="text-center py-20 bg-white rounded-xl shadow-lg border border-gray-200">
                            <h2 className="text-3xl font-bold text-blue-700">No Universities Match Your Criteria</h2>
                            <p className="text-gray-500 mt-3 text-lg">Please check your spelling or broaden your search terms.</p>
                        </div>
                    )}
                    
                    {/* PAGINATION - Professional and distinct buttons */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center gap-2">
                            {[...Array(totalPages)].map((_, pageIndex) => {
                                const page = pageIndex + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        aria-label={`Go to page ${page}`}
                                        className={`h-10 w-10 rounded-lg flex items-center justify-center text-base font-semibold transition duration-200 ease-in-out
                                            ${
                                                page === currentPage
                                                    ? "bg-blue-900 text-white shadow-lg shadow-blue-700/50"
                                                    : "bg-white text-slate-700 border-2 border-gray-300 hover:bg-blue-50 hover:border-blue-400"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Universities;