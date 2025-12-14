import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { Button } from "../../Components/UI/button";
import { Input } from '../../Components/UI/input';
import { useToast } from '../../hooks/use-toast';

import Logo1 from "../../../src/assets/images/Logo1.png";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({ title: 'Subscribed!', description: 'Thank you for joining our community.', className: "bg-blue-600 text-white" });
    setEmail('');
  };

  const openMap = () => {
    // Redirects to Google Maps with the specific query
    window.open("https://maps.app.goo.gl/8KtZwpSwA4PY9xv18", "_blank");
  };

  return (
    <footer className="bg-[#0b0f19] text-slate-400 font-sans border-t border-slate-900 relative overflow-hidden">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* 1. BRANDING & ABOUT (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo Container - Clean White Box for perfect visibility */}
            <div className="inline-block bg-white p-3 rounded-xl shadow-lg shadow-blue-900/10">
                <img
                    src={Logo1}
                    alt="Tej EduTech"
                    className="h-10 w-auto object-contain" 
                />
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400 pr-4">
              Empowering students to achieve their academic dreams. We provide expert counseling, admission support, and financial guidance for top universities across India.
            </p>

            {/* Newsletter */}
            <div className="pt-4">
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Stay Updated</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                    <Input 
                        placeholder="Your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-900/50 border-slate-800 text-white h-11 focus:ring-blue-600 rounded-lg placeholder:text-slate-600"
                    />
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white h-11 px-4 rounded-lg">
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </form>
            </div>
          </div>

          {/* 2. QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
                {['Career Counseling', 'Admission Guidance', 'Campus Visits', 'Education Loans', 'Scholarships'].map((item) => (
                    <li key={item}>
                        <Link to="/student-services" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                            <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors" />
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* 3. COMPANY (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
                {['About Us', 'Our Process', 'Contact Us', 'Refer & Earn', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                        <Link to="/about-us" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                            <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors" />
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* 4. LOCATION & INTERACTIVE MAP (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-lg">Visit Our HQ</h4>
            
            <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Flat No: 402, Sai Residency,<br/> Ananthpur, Andhra Pradesh - 515001</span>
                </div>

                {/* --- MODERN INTERACTIVE MAP CARD --- */}
                <div 
                    onClick={openMap}
                    className="group relative w-full h-40 rounded-xl overflow-hidden border border-slate-800 cursor-pointer shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-900/20"
                >
                    {/* Map Image / Iframe Overlay */}
                    <div className="absolute inset-0 bg-slate-800">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.226785294376!2d77.5945623148416!3d14.681887689752456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14bbf8f44655f%3A0x498715377787e934!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1625634892765!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{border:0, filter: 'grayscale(100%) invert(90%) opacity(0.6)'}} // Dark Mode Map Style
                            allowFullScreen="" 
                            loading="lazy"
                            title="Map"
                            className="transition-transform duration-700 group-hover:scale-110"
                        ></iframe>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center p-4">
                        <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <Navigation className="w-3 h-3 text-blue-600" />
                            Open in Google Maps
                        </div>
                    </div>
                    
                    {/* Static Badge (Always visible until hover) */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-[10px] px-2 py-1 rounded border border-slate-700 group-hover:opacity-0 transition-opacity">
                        Tap to View
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/tej_edutech_consultancy/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5"/></a>
                        <a href="https://www.facebook.com/people/Tej-Edutech/61585189462882/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5"/></a>
                        <a href="https://www.linkedin.com/in/tej-edutech-consulatancy-3687a1396/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5"/></a>
                        <a href="https://www.youtube.com/@tej_edutech_consulatancy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-500 transition-colors"><Youtube className="w-5 h-5"/></a>
                    </div>
                    <a href="tel:+916362520959" className="text-sm font-bold text-white hover:text-blue-400 flex items-center gap-2">
                        <Phone className="w-4 h-4" /> +91 63625 20959
                    </a>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-slate-900 bg-[#05080f] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Tej EduTech Consultancy. All rights reserved.</p>
            <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;