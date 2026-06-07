import type { Repo } from '@/types/repo'
//
import PageHeaderComponent from '@/components/page-header'
import PortfolioListComponent from '@/components/portfolio-list'

type Props = {
  repos: Repo[]
}

const StudiesPageComponent = ({ repos }: Props) => {
  return (
    <main className="Studies Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="studies"
          pageDescription="My simple studies and what I applied while learning"
        />

        {repos.length > 0 && <PortfolioListComponent repoName={repos} />}
      </div>
    </main>
  )
}

export default StudiesPageComponent
