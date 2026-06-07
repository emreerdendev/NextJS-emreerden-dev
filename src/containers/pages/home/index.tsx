'use client'

import React, { useState } from 'react'
//
import { motion } from 'framer-motion'
//
import ExperienceComponent from './experience'
//
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

const HomePageComponent = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="Home Page">
      <div className="mx-auto flex w-full max-w-[780px] flex-col gap-y-14 px-6 pb-12 pt-18 mdl:py-14 mdl:pr-10 lg:py-18 lgx:py-22 xl:py-30">
        <div className="flex flex-col items-center gap-y-8 text-center mdl:items-start mdl:text-left">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mdl:flex-row">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 2 * 0.1 }}
            >
              <Avatar className="h-20 w-20 rounded-2xl sm:h-24 sm:w-24 md:h-28 md:w-28 mdl:h-32 mdl:w-32">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/37252753?v=4"
                  alt="Emre Erden"
                />
                <AvatarFallback>
                  <Skeleton className="h-12 w-12 rounded-full bg-zinc-300" />
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="flex flex-col items-center gap-y-2.5 mdl:items-start">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 3 * 0.1 }}
                className="text-lg font-medium tracking-wide"
              >
                Hey{' '}
                <motion.span
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  animate={
                    isHovered
                      ? {
                          rotate: [0, 20, -20, 20, -20, 0],
                        }
                      : { rotate: 0 }
                  }
                  transition={{ duration: 0.5 }}
                  className="inline-block cursor-default text-xl"
                >
                  👋
                </motion.span>
              </motion.span>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 4 * 0.1 }}
                className="-mt-0.5 flex items-baseline gap-x-1.5 text-xl font-semibold mdl:text-2xl"
              >
                I&apos;m
                <div className="font-Caveat text-3xl sm:text-4xl">
                  Emre Erden,
                </div>
              </motion.h1>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 5 * 0.1 }}
                className="text-xl font-semibold sm:text-2xl"
              >
                <span className="text-zinc-400">{'<'}</span>

                <span className="text-pink-500 dark:text-pink-400 sm:ml-0.5">
                  Software Developer
                </span>

                <span className="text-xl text-zinc-400">{' />'}</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 6 * 0.1 }}
            className="max-w-[600px] leading-7"
          >
            I&apos;m working to become an experienced developer in the Software
            Development field. In this profession, I&apos;m open to learning and
            improving myself. And I enjoy learning new things. You can contact
            me to meet!
          </motion.p>
        </div>

        <ExperienceComponent />
      </div>
    </main>
  )
}

export default HomePageComponent
