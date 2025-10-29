import { Terminal } from "lucide-react";
import { useState } from "react";

const JourneySection = ({ isVisible }) => {
  const [isFull, setIsFull] = useState(false);
  return (
    <section id="section-about" className="py-24 relative mx-auto">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible["section-about"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <Terminal className="w-8 h-8 text-green-200" />
            <h2 className="text-4xl md:text-5xl font-bold">My Journey</h2>
          </div>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed border-l-4 border-white pl-8">
            <p className="hover:text-white transition-colors">
              My journey in software development began with a strong curiosity
              for how technology powers real-world solutions. Over time, this
              interest evolved into a passion for building scalable systems and
              user-focused products. During my academic years, I strengthened my
              fundamentals in data structures, algorithms, databases, and core
              programming concepts while actively developing projects that
              challenged my problem-solving capability.
            </p>
            <p className="hover:text-white transition-colors">
              I started gaining industry experience as a Full Stack Developer
              Intern at AB Infotech Solution, where I worked across both
              frontend and backend environments. This role helped me understand
              end-to-end development workflows—from building responsive UIs to
              designing REST APIs, integrating cloud services, and ensuring
              smooth deployment. Collaborating with teams and contributing to
              real client features gave me practical exposure to product
              thinking, code quality, version control, and agile practices.
            </p>
            {isFull && (
              <>
                <p className="hover:text-white transition-colors">
                  Currently, I’m working as a Backend Developer Intern at
                  Technoyug, focusing on backend architectures, system design,
                  authentication flows, database optimizations, and scalable API
                  development. Here, I’ve learned how backend systems interact
                  with complex business logic, handle security, and maintain
                  performance at scale. Working in a live environment has
                  sharpened my debugging abilities, documentation skills, and
                  understanding of production-level challenges.
                </p>
                <p className="hover:text-white transition-colors">
                  Across both roles, I’ve grown significantly—not just as a
                  developer, but also as a collaborator. I’ve learned to break
                  down requirements, communicate clearly, iterate on feedback,
                  and deliver reliable solutions on time. My hands-on experience
                  with modern stacks and real-world problem-solving continues to
                  shape my engineering mindset.
                </p>
                <p className="hover:text-white transition-colors">
                  Today, I’m driven by the constant pursuit of improvement. I
                  enjoy exploring new technologies, refining system efficiency,
                  and creating solutions that genuinely help users and
                  businesses. As I continue evolving, my goal is to build
                  meaningful, production-ready software that balances
                  performance, usability, and scalability.
                </p>
              </>
            )}

            <button
              className="text-red-600 cursor-pointer text-lg hover:text-red-900 transition duration-300"
              onClick={() => setIsFull((prev) => !prev)}
            >
              {isFull ? "see less" : "read more..."}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
