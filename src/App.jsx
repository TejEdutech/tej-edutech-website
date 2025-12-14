import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "sonner";

import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import FloatingActions from "./Components/Layout/FloatingActions";
import ContactModal from "./Components/Forms/ContactModal";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <div className="bg-white min-h-screen">
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
