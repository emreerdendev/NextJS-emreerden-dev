import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  pageTitle: string
  pageDescription: string
}

/**
 * Loading placeholder shown while the portfolio repos are fetched on the
 * server. Mirrors the layout of the real page (header + card grid) so the
 * transition to loaded content doesn't shift.
 */
const PortfolioListSkeleton = ({ pageTitle, pageDescription }: Props) => {
  return (
    <main className="Page">
      <div className="Page-Content">
        <div className="flex flex-col gap-y-5 mdl:gap-y-6">
          <div className="Page-Title">{pageTitle}.</div>

          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:flex-wrap mdl:justify-start mdl:text-left">
            <div className="text-zinc-950 dark:text-zinc-200">
              {pageDescription}
            </div>
          </div>
        </div>

        <ul className="Main-Card-List">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className="h-66 w-76 overflow-hidden rounded-md shadow-sm sm:h-68 sm:w-80 md:h-72 md:w-88 mdl:h-68 lg:flex lg:h-52 lg:w-full lg:shadow-none"
            >
              <Skeleton className="h-full w-full rounded-md lg:w-2/5" />
              <div className="hidden w-3/5 flex-col justify-center gap-y-4 p-6 lg:flex">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-9 w-40" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default PortfolioListSkeleton
