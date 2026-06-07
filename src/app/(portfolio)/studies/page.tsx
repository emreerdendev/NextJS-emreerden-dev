import type { Metadata } from 'next'
//
import { getRepos } from '@/lib/github'
//
import StudiesPageComponent from '@/containers/pages/portfolio/studies'

export const metadata: Metadata = {
  title: 'Studies - Emre Erden',
  description: "Emre Erden's Studies",
}

const StudiesPage = async () => {
  const repos = await getRepos('study').catch(() => [])

  return <StudiesPageComponent repos={repos} />
}

export default StudiesPage
