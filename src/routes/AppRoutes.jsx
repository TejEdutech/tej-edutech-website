import React from "react";
import { Routes, Route } from "react-router-dom";

/* Pages from src/pages */
import HomePage from "../pages/HomePage";
import StudentServicesPage from "../pages/StudentServicesPage";

/* Pages from src/components/Pages */
import StudentServicesSection from "../Components/pages/StudentServicesSection";
import CareerCounseling from "../Components/pages/CareerCounseling";
import AdmissionGuidance from "../Components/pages/AdmissionGuidance";
import FinancialAssistance from "../Components/pages/FinancialAssistance";
import WhatWeDo from "../Components/pages/WhatWeDo";
import About from "../Components/pages/About";
import NotFound from "../Components/pages/NotFound";
import Scholarships from "../Components/pages/Scholarships";
import Universities from "../Components/pages/Universities";
import ReferFriend from "../Components/pages/ReferFriend";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Student Services Main Page */}
      <Route path="/student-services" element={<StudentServicesPage />} />

      {/* Sub-pages inside Student Services */}
      <Route path="/career-counseling" element={<CareerCounseling />} />
      <Route path="/admission-guidance" element={<AdmissionGuidance />} />
      <Route path="/financial-assistance" element={<FinancialAssistance />} />
      <Route path="/scholarships" element={<Scholarships />} />

      {/* Other Main Pages */}
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/university-visits" element={<Universities />} />
      <Route path="/about-us" element={<About />} />
       <Route path="/refer-friend" element={<ReferFriend />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
