import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutTeaser from "@/components/sections/AboutTeaser";
import ClassesGrid from "@/components/sections/ClassesGrid";
import WhyUs from "@/components/sections/WhyUs";
import CoachesCarousel from "@/components/sections/CoachesCarousel";
import Testimonials from "@/components/sections/Testimonials";
import MembershipTeaser from "@/components/sections/MembershipTeaser";
import InstagramStrip from "@/components/sections/InstagramStrip";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Boksschool in Gent",
  description:
    "The Academy Ghent is dé boksschool in Gent voor beginners, recreanten en competitieboksers. 600 m² trainingsruimte, gediplomeerde coaches. Boek een gratis proefles.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutTeaser />
      <ClassesGrid />
      <WhyUs />
      <CoachesCarousel />
      <Testimonials />
      <MembershipTeaser />
      <InstagramStrip />
      <ClosingCTA />
    </>
  );
}
