import { useState } from "react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code2,
  Zap,
  Shield,
  Users,
  Calendar,
  Tag,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../../public/constant";

const ProjectDescriptionPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects[id-1];

  return (
    <div className="min-h-screen bg-black text-white font-['poppins']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer flex items-center gap-2 text-white hover:text-red-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
          <div className="hidden sm:block text-sm text-white/60">
            {project.category}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-3xl mb-8">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors rounded-lg font-medium"
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: "Duration", value: project.duration },
              { icon: Users, label: "Role", value: project.role },
              {
                icon: Zap,
                label: "Status",
                value: (
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    {project.status}
                  </span>
                ),
              },
              { icon: Tag, label: "Category", value: project.category },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 border border-white/10 rounded-lg"
              >
                <Icon size={20} className="mb-2 text-red-500" />
                <div className="text-sm text-white/60">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 mb-4">
            <img
              src={project.images[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`flex-shrink-0 cursor-pointer w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === idx
                    ? "border-red-500"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-12">
            {[
              { title: "Overview", text: project.description },
              { title: "The Challenge", text: project.challenge },
              { title: "The Solution", text: project.solution },
            ].map((section, idx) => (
              <div key={idx}>
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-white/70 leading-relaxed">{section.text}</p>
              </div>
            ))}

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <span className="text-white/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Performance Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/5 border border-white/10 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-red-500 mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-white/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Technologies */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={20} className="text-red-500" />
                <h3 className="text-xl font-bold">Technologies</h3>
              </div>

              {Array.from(
                new Set(project.technologies.map((t) => t.category))
              ).map((cat) => (
                <div key={cat} className="mb-4">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    {cat}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .filter((t) => t.category === cat)
                      .map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                          {t.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Github size={18} />
                    GitHub Repository
                  </span>
                  <ExternalLink
                    size={16}
                    className="opacity-50 group-hover:opacity-100"
                  />
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink size={18} />
                    Live Demo
                  </span>
                  <ExternalLink
                    size={16}
                    className="opacity-50 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-white/5 border border-red-500/20 rounded-xl">
              <Shield size={32} className="text-red-500 mb-3" />
              <h3 className="text-lg font-bold mb-2">
                Interested in this project?
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Let's discuss how similar solutions can benefit your business.
              </p>
              <a
                href="/contact"
                className="block text-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Want to see more?
          </h2>
          <p className="text-white/60 mb-8">Check out my other projects</p>
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors rounded-lg"
          >
            View All Projects
            <ArrowLeft size={20} className="rotate-180" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDescriptionPage;
