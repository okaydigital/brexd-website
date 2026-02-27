import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutIntroSection from "@/components/sections/AboutIntroSection";
import SegmentsSection from "@/components/sections/SegmentsSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import GlobalPresenceSection from "@/components/sections/GlobalPresenceSection";
import PartnersSection from "@/components/sections/PartnersSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutIntroSection />
      <SegmentsSection />
      <ProjectsShowcase />
      <GlobalPresenceSection />
      <PartnersSection />
      <CTASection />
      <BlogSection />
    </>
  );
}
