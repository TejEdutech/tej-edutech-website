import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";

import Navbar from "./Components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import FloatingActions from "./components/Layout/FloatingActions";

import ContactModal from "./Components/Forms/ContactModal";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* ✅ SEO FOR LANDING / HOME PAGE */}
      <Helmet>
        <title>Tej EduTech Consultancy | Career Counseling & Admission Guidance in India</title>
        <meta
          name="description"
          content="Tej EduTech Consultancy helps students with career counseling, college admissions, scholarships, and financial assistance across India."
        />
      </Helmet>

      <ScrollToTop />
      <Toaster position="top-right" richColors />

      <ContactModal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
      />

      <Navbar onOpenContact={() => setOpenContact(true)} />

      <main className="pt-20">
        <AppRoutes />
      </main>

      <FloatingActions onOpenContact={() => setOpenContact(true)} />
      <Footer />
    </div>
  );
}
