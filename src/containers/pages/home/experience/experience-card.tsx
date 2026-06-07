'use client'

import { useState } from 'react'
import Image from 'next/image'
//
import { GoLink } from 'react-icons/go'
//
import { Experience } from '@/types/experience'
import { calculateDaysBetween } from '@/lib/utils'

const ExperienceCardComponent = (props: Experience) => {
  const [showFullDetails, setShowFullDetails] = useState<
    Record<number, boolean>
  >({})

  const toggleShowFullDetails = (index: number) => {
    setShowFullDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }
  return (
    <li className="relative max-w-[550px] pt-1 list-none pb-10 last:pb-0 before:content-[''] before:w-4 before:h-4 before:border-2 before:dark:border-zinc-600 before:bg-zinc-100 before:dark:bg-zinc-800 before:rounded-full before:absolute before:-left-[9px] before:top-[6px]">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2 ml-5">
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
              className="text-xl hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors font-medium"
            >
              {props.name}
            </a>

            <div className="flex gap-x-2 items-center">
              <div className="hidden sm:block text-zinc-600 dark:text-zinc-400">
                -
              </div>

              <div className="text-zinc-700 dark:text-zinc-300">
                {props.position}
              </div>
            </div>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {props.location} · {props.workType}
          </div>
        </div>

        {props.projects && (
          <div className="flex flex-col gap-y-4">
            {props.projects
              .slice()
              .reverse()
              .map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-6 border ml-5 w-fit dark:border-zinc-800 rounded-md p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
                >
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-x-2 items-center hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors w-fit"
                  >
                    <div className="text-base">{project.name}</div>

                    <div className="text-sm">
                      <GoLink />
                    </div>
                  </a>

                  <div className="text-zinc-600 dark:text-zinc-400 -mt-1 text-sm text-left">
                    {project.description}
                  </div>

                  {project.stack && (
                    <div className="flex flex-col gap-y-3">
                      <div className="text-xs text-zinc-800 dark:text-zinc-300 w-fit border-b border-zinc-400 dark:border-zinc-400">
                        Tech Stack:
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {project.stack.map((stack, index) => (
                          <div
                            key={index}
                            className="group-hover:border-zinc-300 transition-colors border dark:border-zinc-700 px-2.5 py-0.5 h-fit rounded-full text-xs dark:bg-zinc-800/80 group-hover:dark:border-zinc-700"
                          >
                            {stack}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.whatIDid && (
                    <div className="flex flex-col gap-y-3">
                      <div className="text-xs text-zinc-800 dark:text-zinc-300 w-fit border-b border-zinc-400 dark:border-zinc-400">
                        What i did in this project:
                      </div>

                      <ul className="flex flex-col gap-y-1 list-disc pl-5 text-zinc-600 dark:text-zinc-400 text-sm overflow-hidden transition-all duration-300">
                        {project.whatIDid
                          .slice(
                            0,
                            showFullDetails[index] ? project.whatIDid.length : 2
                          )
                          .map((whatIDid, index) => (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{ __html: whatIDid }}
                            />
                          ))}
                      </ul>

                      <button
                        id="show-more-button"
                        className="w-fit border dark:border-zinc-700 py-1 px-2 rounded-md text-xs hover:bg-zinc-100 hover:dark:bg-zinc-700 transition-colors"
                        onClick={() => toggleShowFullDetails(index)}
                      >
                        {!showFullDetails[index] ? 'Show more' : 'Show less'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </li>
  )
}

export default ExperienceCardComponent
