import AboutHero from "@/components/sections/about/AboutHero";
import Timeline from "@/components/sections/about/Timeline";
import MissionVisionValues from "@/components/sections/about/MissionVisionValues";
import LeadershipTeam from "@/components/sections/about/LeadershipTeam";
import AboutOffices from "@/components/sections/about/AboutOffices";
import Certifications from "@/components/sections/about/Certifications";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <MissionVisionValues />
      <LeadershipTeam />
      <AboutOffices />
      <Certifications />
    </>
  );
}
