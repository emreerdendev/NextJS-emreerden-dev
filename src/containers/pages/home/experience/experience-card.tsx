'use client'

import Image from 'next/image'
import { useState } from 'react'
//
import { GoLink } from 'react-icons/go'
//
import { calculateDaysBetween } from '@/lib/utils'
import { Experience } from '@/types/experience'

const ExperienceCardComponent = (props: Experience) => {
  const [showFullDetails, setShowFullDetails] = useState<
    Record<string, boolean>
  >({})

  const toggleShowFullDetails = (key: string) => {
    setShowFullDetails((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }
  return (
    <li className="relative max-w-[550px] list-none pb-10 pt-1 before:absolute before:-left-[9px] before:top-[6px] before:h-4 before:w-4 before:rounded-full before:border-2 before:bg-zinc-100 before:content-[''] last:pb-0 before:dark:border-zinc-600 before:dark:bg-zinc-800">
      <div className="flex flex-col gap-y-6">
        <div className="ml-5 flex flex-col gap-y-2">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {props.date} ({calculateDaysBetween(props.date)} days)
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Image
              src={props.icon}
              alt={props.name}
              width={24}
              height={24}
              className="h-6 w-6"
            />

            <a
              href={props.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              {props.name}
            </a>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {props.location} · {props.workType}
          </div>
        </div>

        <div className="ml-5 flex flex-col gap-y-6">
          {props.positions.map((position, positionIndex) => (
            <div key={positionIndex} className="relative flex flex-col gap-y-4">
              {/* Branch connector linking the position back to the company's
                  timeline line, mirroring the circle used per experience. */}
              <div
                aria-hidden="true"
                className="absolute -left-[21px] -top-[4px] h-4 w-4 rounded-bl-md border-b border-l dark:border-zinc-600"
              />

              <div className="flex flex-col gap-y-1">
                <div className="text-zinc-700 dark:text-zinc-300">
                  {position.title}
                </div>

                {position.date && (
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {position.date} ({calculateDaysBetween(position.date)}{' '}
                    days)
                  </div>
                )}
              </div>

              {position.projects && (
                <div className="flex flex-col gap-y-4">
                  {position.projects
                    .slice()
                    .reverse()
                    .map((project, projectIndex) => {
                      const detailsKey = `${positionIndex}-${projectIndex}`

                      return (
                        <div
                          key={projectIndex}
                          className="group flex w-fit flex-col gap-y-6 rounded-md border p-5 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50"
                        >
                          <a
                            href={project.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-x-2 transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                          >
                            <div className="text-base">{project.name}</div>

                            <div className="text-sm">
                              <GoLink />
                            </div>
                          </a>

                          <div className="-mt-1 text-left text-sm text-zinc-600 dark:text-zinc-400">
                            {project.description}
                          </div>

                          {project.stack && (
                            <div className="flex flex-col gap-y-3">
                              <div className="w-fit border-b border-zinc-400 text-xs text-zinc-800 dark:border-zinc-400 dark:text-zinc-300">
                                Tech Stack:
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {project.stack.map((stack, index) => (
                                  <div
                                    key={index}
                                    className="h-fit rounded-full border px-2.5 py-0.5 text-xs transition-colors group-hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800/80 group-hover:dark:border-zinc-700"
                                  >
                                    {stack}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {project.whatIDid && (
                            <div className="flex flex-col gap-y-3">
                              <div className="w-fit border-b border-zinc-400 text-xs text-zinc-800 dark:border-zinc-400 dark:text-zinc-300">
                                What i did in this project:
                              </div>

                              <ul className="flex list-disc flex-col gap-y-1 overflow-hidden pl-5 text-sm text-zinc-600 transition-all duration-300 dark:text-zinc-400">
                                {project.whatIDid
                                  .slice(
                                    0,
                                    showFullDetails[detailsKey]
                                      ? project.whatIDid.length
                                      : 2
                                  )
                                  .map((whatIDid, index) => (
                                    <li
                                      key={index}
                                      dangerouslySetInnerHTML={{
                                        __html: whatIDid,
                                      }}
                                    />
                                  ))}
                              </ul>

                              <button
                                id="show-more-button"
                                className="w-fit rounded-md border px-2 py-1 text-xs transition-colors hover:bg-zinc-100 dark:border-zinc-700 hover:dark:bg-zinc-700"
                                onClick={() => toggleShowFullDetails(detailsKey)}
                              >
                                {!showFullDetails[detailsKey]
                                  ? 'Show more'
                                  : 'Show less'}
                              </button>
                            </div>
                          )}
                        </div>
                      )
                    })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </li>
  )
}

export default ExperienceCardComponent
