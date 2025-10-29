import { useState, useEffect } from "react";
import Experience from "../sections/ExperienceSection";
import ProjectSection from "../sections/ProjectSection";
import Skills from "../sections/SkillsSection";
import HeroSection from "../sections/HeroSection";
import JourneySection from "../sections/JourneySection";
import StatsSection from "../sections/StatsSection";
import { useNavigate } from "react-router-dom";
import HeroAnimatedObject from "../components/AnimationBg";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white mx-auto">
      <HeroAnimatedObject />
      <HeroSection />
      <JourneySection isVisible={isVisible} />
      <Experience />
      <ProjectSection />
      <Skills />
      <StatsSection isVisible={isVisible} />
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <button
              className="mt-8 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold inline-flex items-center gap-2 group cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <span>GET IN TOUCH</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
