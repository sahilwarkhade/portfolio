import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Code2,
  Layers,
  Zap,
  ChevronRight,
  Filter,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroAnimatedObject from "../components/AnimationBg";

const categories = ["All", "Web App", "Mobile", "API", "Tool", "AI/ML"];

import { projects } from "../../public/constant";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-black text-white mx-auto">
      <HeroAnimatedObject />
      <section className="border-b border-white/10 mx-auto relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent -mt-6 via-black to-black z-10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container max-w-[1300px] mx-auto px-6 z-20">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 border border-white/20 text-sm tracking-wider">
                MY WORK
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
              Projects That
              <span className="block mt-2 text-white/60">Make an Impact</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              From concept to deployment — transforming ideas into impactful
              applications through design thinking, solid architecture, and
              efficient code.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1300px] mx-auto px-6 py-6">
          <div
            className={`flex flex-col md:flex-row gap-6 items-start md:items-center justify-between transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 focus:outline-none focus:border-white/30 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-5 h-5 text-white/40 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer px-4 py-2 border text-sm whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "border-white bg-white text-black"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="border-b border-white/10">
          <div className="max-w-[1300px] mx-auto px-6 py-20">
            <div
              className={`space-y-12 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4">
                <Zap className="w-8 h-8" />
                <h2 className="text-4xl md:text-5xl font-bold">
                  Featured Projects
                </h2>
              </div>

              <div className="space-y-12">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`grid cursor-pointer md:grid-cols-2 gap-8 items-center border border-white/10 p-8 hover:border-white/30 transition-all duration-500 group ${
                      index % 2 === 1 ? "md:grid-flow-dense" : ""
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => console.log(navigate(`/project/${project.id}`))}
                  >
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "md:col-start-2" : ""
                      }`}
                    >
                      <div className="space-y-3">
                        <span className="text-sm text-white/40 tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <p className="text-white/70 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 border border-white/20 text-sm hover:border-white/40 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group/btn"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-white bg-white text-black hover:bg-black hover:text-white transition-all duration-300 group/btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <div
                      className={`relative overflow-hidden border border-white/20 aspect-video ${
                        index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredProject === project.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <ChevronRight className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <div className="max-w-[1300px] mx-auto px-6 py-20">
            <div
              className={`space-y-12 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-4">
                <Layers className="w-8 h-8" />
                <h2 className="text-4xl md:text-5xl font-bold">
                  More Projects
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="cursor-pointer border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => console.log(navigate(`/project/${project.id}`))}
                  >
                    <div className="relative aspect-video overflow-hidden border-b border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredProject === project.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <ChevronRight className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <span className="text-xs text-white/40 tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 border border-white/10 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs text-white/40">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-sm hover:text-white/60 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-white/60 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {filteredProjects.length === 0 && (
        <section>
          <div className="max-w-[1300px] mx-auto px-6 py-32">
            <div className="text-center space-y-4">
              <Code2 className="w-16 h-16 mx-auto text-white/20" />
              <h3 className="text-2xl font-bold text-white/40">
                No projects found
              </h3>
              <p className="text-white/30">
                Try adjusting your filters or search term
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/10">
        <div className="max-w-[1300px] mx-auto px-6 py-20 text-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Want to Collaborate?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <button
              className="mt-8 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold inline-flex items-center gap-2 group cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <span>START A PROJECT</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
