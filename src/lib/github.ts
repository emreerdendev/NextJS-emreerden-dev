import type { Repo } from '@/types/repo'

const GITHUB_USER = 'Wiazeph'
const REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`

/** Raw shape of the fields we read from the GitHub REST repos endpoint. */
interface GitHubRepo {
  name: string
  html_url: string
  homepage: string | null
  description: string | null
  stargazers_count: number
  topics: string[]
}

/**
 * Fetch the user's repositories filtered by a topic, mapped to the shape the
 * UI needs and sorted by star count (desc). Runs on the server and is cached
 * for an hour so the GitHub API isn't hit on every request.
 */
export async function getRepos(topic: 'project' | 'study'): Promise<Repo[]> {
  const response = await fetch(REPOS_URL, {
    headers: { Accept: 'application/vnd.github+json' },
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`
    )
  }

  const repos: GitHubRepo[] = await response.json()

  return repos
    .filter((repo) => repo.topics.includes(topic))
    .map((repo) => ({
      url: repo.html_url,
      live: repo.homepage ?? '',
      name: repo.name,
      desc: repo.description ?? '',
      stars: repo.stargazers_count,
      topics: repo.topics,
      img: `https://github.com/${GITHUB_USER}/${repo.name}/blob/main/thumbnail/${repo.name}.png?raw=true`,
    }))
    .sort((a, b) => b.stars - a.stars)
}
