import type { Metadata } from 'next'
//
import { getRepos } from '@/lib/github'
//
import ProjectsPageComponent from '@/containers/pages/portfolio/projects'

export const metadata: Metadata = {
  title: 'Projects - Emre Erden',
  description: "Emre Erden's Projects",
}

const ProjectsPage = async () => {
  const repos = await getRepos('project').catch(() => [])

  return <ProjectsPageComponent repos={repos} />
}

export default ProjectsPage
