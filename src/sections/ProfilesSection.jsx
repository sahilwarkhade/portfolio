const codingProfiles = [
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/sahilwark8ih1/",
    icon: "/images/gfg.svg",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/sahil_warkhade",
    icon: "/images/leetcode.webp",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com",
    icon: "/images/codeforces.webp",
  },
  {
    name: "GitHub",
    url: "https://github.com/sahilwarkhade",
    icon: "/images/github.svg",
  },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" className="py-24 bg-[white] text-black">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="text-center text-4xl font-medium mb-12 pb-5 relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-50 before:h-0.5 before:bg-[#111] after:content-['coding_profiles'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:text-xl after:text-[#dc143c] after:bg-white after:px-1">
          My Coding Profiles
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-1/2">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={profile.icon}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full bg-white p-2 hover:scale-105 transition-transform duration-500 animate-[subtle-float_4s_ease-in-out_infinite] shadow-[0_25px_15px_rgba(137,29,29,0.3)]"
                />
              </a>
            ))}
          </div>
          <div className="w-full md:w-1/2 md:border-l-2 md:border-black md:pl-8">
            <div className="text-2xl font-semibold mb-2">
              About my coding profiles.
            </div>
            <p className="text-justify">
              I actively contribute to various coding platforms, constantly
              improving my problem-solving skills and staying up-to-date with
              new challenges. You can find my work and solutions on platforms
              like GitHub, LeetCode, Codeforces, and GeeksforGeeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
