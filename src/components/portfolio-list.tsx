'use client'

import React from 'react'
import Image from 'next/image'
//
import { motion } from 'framer-motion'
//
import { Repo } from '@/types/repo'
//
import { FiGithub, FiStar } from 'react-icons/fi'
import { IoLogoVercel } from 'react-icons/io5'

type Props = {
  repoName: Repo[]
}

const PortfolioListComponent = (props: Props) => {
  return (
    <ul className="Repo-List Main-Card-List">
      {props.repoName.map((repo, index) => (
        <motion.li
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          key={index}
          className="Repo-Card group relative h-66 w-76 overflow-hidden rounded-md shadow-sm sm:h-68 sm:w-80 md:h-72 md:w-88 mdl:h-68 lg:flex lg:h-52 lg:w-full lg:shadow-none"
        >
          <div className="Repo-Image relative z-10 h-full w-full select-none rounded-md border transition-all duration-300 group-hover:scale-125 group-hover:blur-sm dark:border-zinc-800 lg:z-0 lg:w-2/5 lg:rounded-bl-md lg:rounded-br-none lg:rounded-tl-md lg:rounded-tr-none lg:border-y lg:border-l lg:border-r-0 lg:group-hover:scale-100 lg:group-hover:blur-none">
            <Image
              src={repo.img}
              alt={repo.name}
              fill
              sizes="100%"
              className="rounded-md object-cover lg:rounded-bl-md lg:rounded-br-none lg:rounded-tl-md lg:rounded-tr-none"
            />
          </div>

          <div className="group relative z-20 w-full border-x border-b bg-zinc-50 transition-transform duration-300 group-hover:-translate-y-full dark:border-zinc-800 dark:bg-zinc-800 lg:z-0 lg:w-3/5 lg:border-x-0 lg:border-r lg:border-t lg:group-hover:-translate-y-0">
            <div className="Repo-Information flex flex-col gap-y-6 px-2 pb-2 pt-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:h-full lg:justify-center lg:gap-y-4 lg:px-6 lg:pb-4 lg:text-left lg:opacity-100">
              <div className="Repo-Name lg:font-medium">{repo.name}</div>

              <div className="Repo-Description text-sm">{repo.desc}</div>

              <div className="flex select-none justify-center gap-x-2 text-sm lg:justify-start lg:gap-x-4">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Main-Border-Color flex items-center gap-x-1.5 rounded-md px-2 py-2"
                >
                  <FiGithub />

                  <div className="h-1 w-1 rounded-full bg-zinc-700"></div>

                  <div className="flex items-center gap-x-1.5">
                    <FiStar />

                    <div className="">Star</div>

                    <div className="rounded-full bg-zinc-200 px-[7px] pb-0.5 pt-[3px] leading-4 dark:bg-zinc-700">
                      {repo.stars}
                    </div>
                  </div>
                </a>

                <a
                  href={repo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Main-Border-Color flex items-center gap-x-1.5 rounded-md px-2 py-2"
                >
                  <IoLogoVercel />

                  <div className="w-max">Live Action</div>
                </a>
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  )
}

export default PortfolioListComponent
