import { Zap } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "HTML/CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Next.js", icon: "▲" },
      { name: "Redux", icon: "🔮" },
      // { name: "Vue.js", icon: "💚" },
    ],
    backend: [
      { name: "Go", icon: "🐹" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Redis", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "REST APIs", icon: "🔌" },
      { name: "Python", icon: "🐍" },
      // { name: "Django", icon: "🎸" },
    ],
    devops: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Linux", icon: "🐧" },
      { name: "Nginx", icon: "🌐" },
      // { name: "Kubernetes", icon: "☸️" },
      // { name: "Jenkins", icon: "🔧" },
      { name: "GCP", icon: "☁️" },
    ],
    tools: [
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎨" },
      { name: "Postman", icon: "📮" },
      { name: "Webpack", icon: "📦" },
      { name: "Babel", icon: "🃏" },
      { name: "GitHub", icon: "🐙" },
      { name: "Google Meet", icon: "📋" },
      { name: "Slack", icon: "💬" },
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend", icon: "💻" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "devops", label: "DevOps", icon: "🚀" },
    { id: "tools", label: "Tools", icon: "🛠️" },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center py-24">
      <div className="w-[1300px] mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-x-2.5">
            <Zap className="w-7 h-7 md:w-10 md:h-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb:2 md:mb-4">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Expertise
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Technical Competencies & Tools.
          </p>
        </div>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 max-md:w-full md:inline-flex bg-gray-900 rounded-xl p-2 border border-gray-800 flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-lg shadow-white/20 scale-105"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Minimized */}
        <div className="flex flex-wrap max-md:grid max-md:grid-cols-2 gap-3 justify-cente r">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg px-4 py-3 hover:border-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 group cursor-pointer"
              style={{
                animation: `fadeInScale 0.4s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-white font-medium text-sm whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-700" />
            <span>Always learning & evolving</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
