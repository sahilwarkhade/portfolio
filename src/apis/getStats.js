import axios from "axios";

const getGitHubRepos = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data.public_repos;
};

const getTotalCommits = async (username) => {
  const repos = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  const repoNames = repos.data.map((r) => r.name);

  let total = 0;

  for (const repo of repoNames) {
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/stats/commit_activity`
    );

    const commits = response?.data?.reduce((sum, week) => sum + week.total, 0);
    total += commits;
  }

  return total;
};

const getLeetCodeStats = async (username) => {
  const response = await axios.get(
    `https://leetcode-stats-api.herokuapp.com/${username}`
  );

  return {
    totalSolved: response.data.totalSolved,
    easySolved: response.data.easySolved,
    mediumSolved: response.data.mediumSolved,
    hardSolved: response.data.hardSolved,
    ranking: response.data.ranking,
    contribution: response.data.contributionPoints,
  };
};

export const getOverallStats = async (githubUser, leetUser) => {
  const [repos, commits, leet] = await Promise.all([
    getGitHubRepos(githubUser),
    getCommits(githubUser),
    getLeetCodeStats(leetUser),
  ]);

  return {
    githubPublicRepos: repos,
    githubTotalCommits: commits,
    leetCodeSolved: leet.totalSolved,
    leetCodeContribution: leet.contribution,
  };
};

async function getCommits(username) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`
  );
  const data = await res.json();
  console.log(data?.total);

  let total = 0;
  Object.keys(data?.total).forEach((y) => (total += data.total[y]));
  return total;
}

// getCommits("sahilwarkhade");
