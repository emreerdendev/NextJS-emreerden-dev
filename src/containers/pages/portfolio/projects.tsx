import type { Repo } from '@/types/repo'
//
import PageHeaderComponent from '@/components/page-header'
import PortfolioListComponent from '@/components/portfolio-list'

type Props = {
  repos: Repo[]
}

const ProjectsPageComponent = ({ repos }: Props) => {
  return (
    <main className="Projects Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="projects"
          pageDescription="My projects I have done and are useable"
        />

        {repos.length > 0 && <PortfolioListComponent repoName={repos} />}
      </div>
    </main>
  )
}

export default ProjectsPageComponent
