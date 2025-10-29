import { Award, Code2, GitCommit, Github, TrendingUp } from "lucide-react";
import { getOverallStats } from "../apis/getStats";
import { useEffect, useState } from "react";

const stats = [
  { icon: Github, label: "GitHub Repos", value: "50+", delay: 0 },
  { icon: GitCommit, label: "Total Commits", value: "150+", delay: 300 },
  { icon: Code2, label: "Problems Solved", value: "500+", delay: 100 },
  { icon: Award, label: "Contributions", value: "1000+", delay: 200 },
];
const StatsSection = ({ isVisible }) => {
  const [userStats, setUserStats] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const {
        githubPublicRepos,
        githubTotalCommits,
        leetCodeSolved,
        leetCodeContribution,
      } = await getOverallStats("sahilwarkhade", "sahil_warkhade");

      setUserStats([
        githubPublicRepos,
        githubTotalCommits,
        leetCodeSolved,
        leetCodeContribution,
      ]);
      setLoading(false);
    })();
  }, []);

  return (
    <section id="section-stats" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible["section-stats"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              GitHub & LeetCode
            </h2>
            <p className="text-gray-400 text-lg">Consistency meets passion</p>
          </div>

          <div className="grid max-md:grid-cols-2 grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  style={{
                    animation: isVisible["section-stats"]
                      ? `fadeInUp 0.6s ease-out ${stat.delay}ms forwards`
                      : "none",
                    opacity: isVisible["section-stats"] ? 1 : 0,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 group-hover:text-black" />
                  </div>
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {loading ? "00" : userStats[index] }
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* GitHub/LeetCode Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden border-2 border-gray-800 hover:border-white transition-all duration-300 p-8 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Github className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">GitHub Profile</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Active contributor with a strong focus on open-source projects
                  and collaborative development.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-black p-4 rounded">
                    <div className="text-2xl font-bold">250+</div>
                    <div className="text-sm text-gray-400">Stars</div>
                  </div>
                  <div className="flex-1 bg-black p-4 rounded">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-gray-800 hover:border-white transition-all duration-300 p-8 rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Code2 className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">LeetCode Stats</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Problem-solving enthusiast with consistent daily practice and
                  continuous improvement.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-black p-4 rounded">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-400">Solved</div>
                  </div>
                  <div className="flex-1 bg-black p-4 rounded">
                    <div className="text-2xl font-bold">Top 10%</div>
                    <div className="text-sm text-gray-400">Ranking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
