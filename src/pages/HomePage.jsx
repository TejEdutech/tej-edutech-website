import React from "react";

import HeroCarousel from "../Components/Home/HeroCarousel";
import MetricsBoxes from "../Components/Home/MetricsBoxes";
import SuccessStories from "../Components/Home/SuccessStories";
import PartnersGrid from "../Components/Home/PartnersGrid";
import ThreeSteps from "../Components/Home/ThreeSteps";
import DestinationSection from "../Components/Home/DestinationSection";
import TrendingCourses from "../Components/Home/TrendingCourses";
import ContactForm from "../Components/Forms/ContactForm";
import FAQSection from "../Components/Home/FAQSection";

export default function HomePage() {
  return (
    <div className="pt-0 mt-0">

      <HeroCarousel />
      <MetricsBoxes />
      <SuccessStories />
      <ContactForm />
      <PartnersGrid />
      <ThreeSteps />
      <DestinationSection />
      <TrendingCourses />
      <FAQSection />

    </div>
  );
}
