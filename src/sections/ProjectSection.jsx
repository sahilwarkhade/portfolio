import {
  Check,
  ChevronRight,
  Workflow,
} from "lucide-react";
import simjob from "../../public/images/simjob.webp";
import epicentra from "../../public/images/epicentra.webp";
import learnnotion from "../../public/images/learnnotion.webp";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";

const portfolioProjects = [
  {
    company: "SimJob",
    year: "2025",
    title: "AI-Powered Mock Interview Platform",
    results: [
      { title: "Built real-time AI interview system" },
      { title: "Optimized backend for low latency" },
      { title: "Integrated TTS and STT features" },
    ],
    link: "https://simjob.space",
    image: simjob,
  },
  {
    company: "LearnNotion",
    year: "2024",
    title: "Learning Management System (LMS)",
    results: [
      { title: "Developed full-featured MERN LMS" },
      { title: "Integrated Cloudinary & NodeMailer" },
      { title: "Implemented payments & role control" },
    ],
    link: "https://learnnotion.vercel.app", // replace with actual link if hosted
    image: learnnotion,
  },
  {
    company: "Epicentra",
    year: "2024",
    title: "Full-Featured Blogging Platform",
    results: [
      { title: "Enabled rich text blogging with Editor.js" },
      { title: "Integrated Cloudinary for media" },
      { title: "Built social features like likes & comments" },
    ],
    link: "https://epicentra.vercel.app", // replace with actual link if hosted
    image: epicentra,
  },
];

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <section id="work" className="py-24 bg-[black] text-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-16">
        <div className="text-left mb-12">
          <div className="flex items-center gap-x-2.5">
            <Workflow className="w-7 h-7 md:w-10 md:h-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb:2 md:mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Projects
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Projects designed to create value and impact.
          </p>
        </div>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => {
            return (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${index * 50}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl font-serif">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li className="flex items-center gap-2 text-sm md:text-base text-white/50">
                          <Check size={14} strokeWidth={2} className="text-green-500" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank"> 
                      <button className="bg-white mt-8 px-6 py-2 border-2 h-12 w-full md:w-auto rounded-xl border-white text-black hover:bg-transparent hover:text-white transition-all duration-300 font-semibold inline-flex items-center justify-center gap-2 group cursor-pointer">
                        <span>Visit Live Site</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </a>
                  </div>
                  <div className="relative bg-[#121414] rounded-t-2xl md:rounded-tl-2xl border-2 border-[#383f42] md:w-3xl shadow-[inset_0_4px_4px_rgba(255,255,255,0.3)] mt-8 ">
                    <img
                      src={project.image}
                      alt="Project Image"
                      className="px-2.5 pt-3 md:px-4 md:pt-5 -mb-4 -md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-right mt-12">
          <button
            className="border px-4 py-2 rounded-3xl font-semibold cursor-pointer hover:scale-105 transition-all transform duration-300 bg-white text-black hover:bg-gray-950 hover:border-white hover:text-white"
            onClick={() => navigate("/projects")}
          >
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
