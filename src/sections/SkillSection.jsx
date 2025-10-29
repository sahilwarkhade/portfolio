const skills = [
  // {
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  //   name: "C",
  // },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML5",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS3",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    name: "Java",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    name: "Go",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    name: "Node.js",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    name: "Express",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    name: "Postgres",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    name: "AWS",
  },
];
const SkillSection = () => {
  return (
    <section id="skills" className="py-24 z-100 text-black">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="text-center text-4xl font-medium mb-16 pb-5 relative font-['Ubuntu'] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-44 before:h-0.5 before:bg-[#111] after:content-['what_i_know'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-xl after:text-[#dc143c] after:bg-white after:px-1">
          My Skills
        </h2>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-[48%] mb-8">
            <div className="text-xl font-semibold mb-2">
              About my creative skills.
            </div>
            <p className="text-justify mb-5">
              I am a dynamic and passionate professional with a strong
              background in web services, website development, and software
              development. My creative skills and diverse experiences have
              equipped me with the ability to tackle real-time problems and
              deliver innovative solutions.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#dc143c] text-white text-lg font-medium py-2 px-4 rounded-md border-2 border-[#dc143c] hover:text-[#dc143c] hover:bg-transparent transition-all"
            >
              Hire Me
            </a>
          </div>
          <div className="w-full md:w-[48%] md:border-l-2 md:border-black md:pl-7">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-2 hover:scale-110 transition-all hover:-translate-1.5 duration-500 "
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 rounded-full mb-2"
                  />
                  <p className="text-sm text-[#333]">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
