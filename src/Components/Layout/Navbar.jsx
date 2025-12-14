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
  MapPin,
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

  // 2. Close mobile menu on route change (FIXED)
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // 3. Logo Click Handler
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  // WhatsApp Handler
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
      {/* =======================
			  1. TOP BAR (Desktop Only)
			  ======================= */}
      <div className="hidden lg:block bg-slate-900 text-white text-[11px] font-medium tracking-wide relative z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex justify-between items-center">
          {/* Left: Contact Details */}
          <div className="flex items-center gap-4 xl:gap-6">
            <a
              href="mailto:tejedutech9@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>tejedutech9@gmail.com</span>
            </a>
            <div className="h-3 w-px bg-slate-700"></div>
            <a
              href="tel:+916362520959"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>+91 63625 20959</span>
            </a>
            <div className="h-3 w-px bg-slate-700"></div>
            <div className="hidden xl:flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Ananthapur - Andhra Pradesh</span>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/tej_edutech_consultancy/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-pink-500 transition-transform hover:scale-110"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/people/Tej-Edutech/61585189462882/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-500 transition-transform hover:scale-110"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tej-edutech-consulatancy-3687a1396/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-transform hover:scale-110"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@tej_edutech_consulatancy"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-red-500 transition-transform hover:scale-110"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-full transition-all text-[10px] font-bold"
            >
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* =======================
			  2. MAIN STICKY NAVBAR
			  ======================= */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100 py-2 top-0"
            : "bg-white py-3 lg:py-4 lg:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <div
            className="flex-shrink-0 cursor-pointer z-50"
            onClick={handleLogoClick}
          >
            <img
              src={Logo1}
              alt="Tej EduTech"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-9 md:h-10" : "h-10 md:h-14"
              }`}
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => navigate(item.path)}
                  className={`
										px-3 xl:px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1 whitespace-nowrap
										${
                      activeDropdown === item.label
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }
									`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Card */}
                {item.dropdown && (
                  <div
                    className={`
											absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transform transition-all duration-200 origin-top
											${
                        activeDropdown === item.label
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible"
                      }
										`}
                  >
                    <div className="bg-white rounded-xl shadow-xl shadow-blue-900/10 border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                        >
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
            <Link
              to="/refer-friend"
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
              <span>Refer & Earn</span>
            </Link>

            <div className="hidden lg:block">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="
									whitespace-nowrap flex-shrink-0
									bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
									text-white rounded-full px-5 py-2.5 text-sm font-bold 
									shadow-md shadow-blue-600/20 hover:scale-105 transition-all
									flex items-center gap-2
								"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              className="lg:hidden p-2 text-gray-800 bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* =======================
			  3. MOBILE MENU DRAWER
			  ======================= */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[70] transform transition-transform duration-300 ease-out lg:hidden flex flex-col shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <img src={Logo1} alt="Logo" className="h-8 w-auto" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.label} className="space-y-3">
              {!item.dropdown ? (
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-800 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ) : (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">
                    {item.label}
                  </div>
                  <div className="pl-2 space-y-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-semibold text-gray-600 hover:text-blue-600"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/refer-friend"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-blue-600 pt-4 border-t border-gray-100"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" /> Refer & Earn
          </Link>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
          {/* WhatsApp Button */}
          <button
            onClick={() => {
              handleWhatsApp();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 py-3 rounded-xl font-bold border border-green-200 hover:bg-green-100 active:bg-green-200 active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </button>

          {/* Social Media Icons - FIXED FOR MOBILE */}
          <div className="flex justify-between items-center px-2">
            {/* Instagram */}
            <button
              onClick={() => {
                window.open("https://www.instagram.com/tej_edutech_consultancy/", "_blank");
                setMobileMenuOpen(false);
              }}
              className="p-2 bg-pink-50 rounded-lg text-pink-600 hover:bg-pink-100 active:bg-pink-200 active:scale-95 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </button>
            
            {/* Facebook */}
            <button
              onClick={() => {
                window.open("https://www.facebook.com/people/Tej-Edutech/61585189462882/", "_blank");
                setMobileMenuOpen(true);
              }}
              className="p-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100 active:bg-blue-200 active:scale-95 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </button>
            
            {/* LinkedIn */}
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/tej-edutech-consulatancy-3687a1396/", "_blank");
                setMobileMenuOpen(false);
              }}
              className="p-2 bg-sky-50 rounded-lg text-sky-600 hover:bg-sky-100 active:bg-sky-200 active:scale-95 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            
            {/* YouTube */}
            <button
              onClick={() => {
                window.open("https://www.youtube.com/@tej_edutech_consulatancy", "_blank");
                setMobileMenuOpen(false);
              }}
              className="p-2 bg-red-50 rounded-lg text-red-600 hover:bg-red-100 active:bg-red-200 active:scale-95 transition-all"
            >
              <Youtube className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Us Button */}
          <Button
            onClick={() => {
              setIsContactModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-3.5 font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navbar;