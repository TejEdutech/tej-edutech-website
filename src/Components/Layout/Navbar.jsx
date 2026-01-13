import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";

import { Button } from "../../Components/UI/button";
import ContactModal from "../../Components/Forms/ContactModal";
import Logo1 from "../../../src/assets/images/Logo1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // 1. Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Close mobile menu on route change (FIXED to avoid cascading renders)
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); 

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/916362520959", "_blank");
  };

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Services",
      path: "/student-services",
      dropdown: [
        { label: "All Services", path: "/student-services" },
        { label: "Career Counseling", path: "/career-counseling" },
        { label: "Admission Guidance", path: "/admission-guidance" },
        { label: "Financial Aid", path: "/financial-assistance" },
        { label: "Scholarships", path: "/scholarships" },
      ],
    },
    {
      label: "Process",
      path: "/what-we-do",
      dropdown: [
        { label: "Our Process", path: "/what-we-do" },
        { label: "Campus Visits", path: "/university-visits" },
      ],
    },
    { label: "About Us", path: "/about-us" },
  ];

  return (
    <>
      {/* 1. TOP BAR */}
      <div className="hidden lg:block bg-slate-900 text-white text-[11px] font-medium tracking-wide relative z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex justify-between items-center">
          <div className="flex items-center gap-4 xl:gap-6">
            <a href="mailto:tejedutech9@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>tejedutech9@gmail.com</span>
            </a>
            <div className="h-3 w-px bg-slate-700"></div>
            <a href="tel:+916362520959" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>+91 63625 20959</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/tej_edutech_consultancy/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-pink-500 transition-transform hover:scale-110"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="https://www.facebook.com/people/Tej-Edutech/61585189462882/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-500 transition-transform hover:scale-110"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="https://www.linkedin.com/in/tej-edutech-consulatancy-3687a1396/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-blue-400 transition-transform hover:scale-110"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="https://www.youtube.com/@tej_edutech_consulatancy" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-red-500 transition-transform hover:scale-110"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md py-2 top-0"
            : "bg-white py-4 lg:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* INTEGRATED LOGO */}
          <div className="flex-shrink-0 cursor-pointer py-1" onClick={handleLogoClick}>
            <img
              src={Logo1}
              alt="Tej EduTech"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"
              }`}
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => navigate(item.path)}
                  className={`px-3 xl:px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1 ${
                    activeDropdown === item.label ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {item.dropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-52 transform transition-all duration-200 ${activeDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <Link to="/refer-friend" className="hidden xl:flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-600">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
              <span>Refer</span>
            </Link>
            <Button onClick={() => setIsContactModalOpen(true)} className="hidden lg:flex bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-md hover:scale-105 transition-all">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <button className="lg:hidden p-2 text-gray-800 bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU DRAWER */}
      <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[300px] bg-white z-[70] transform transition-transform duration-300 ease-out lg:hidden flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 border-b flex justify-between items-center bg-gray-50">
          <img src={Logo1} alt="Logo" className="h-12 w-auto" />
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.label}>
              {!item.dropdown ? (
                <Link to={item.path} className="block text-lg font-bold text-gray-800">{item.label}</Link>
              ) : (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b pb-1 mb-2">{item.label}</div>
                  {item.dropdown.map((sub) => (
                    <Link key={sub.path} to={sub.path} className="block py-2 text-sm font-semibold text-gray-600">{sub.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-6 border-t bg-gray-50 space-y-4">
          <button onClick={() => { handleWhatsApp(); setMobileMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold shadow-md">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </button>
          <Button onClick={() => { setIsContactModalOpen(true); setMobileMenuOpen(false); }} className="w-full bg-slate-900 text-white rounded-xl py-3 font-bold">
            Contact Us
          </Button>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default Navbar;