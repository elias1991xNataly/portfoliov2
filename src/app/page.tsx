import Image from "next/image";
import HeroSection from "./../componentss/HeroSection";
import Navbar from "../componentss/Navbar";
import AboutSection from "../componentss/AboutSection";
import ProjectsSection from "../componentss/ProjectsSection";
import EmailSection from "../componentss/EmailSection";
import Footer from "../componentss/Footer";
import AchievementsSection from "../componentss/AchievementsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">

      <Navbar />
      <div className="container mt-24 mx-auto px-12 pt-7">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
