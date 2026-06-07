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
      <div className="w-full max-w-[780px] mx-auto pt-18 pb-12 mdl:py-14 lg:py-18 lgx:py-22 xl:py-30 px-6 mdl:pr-10 flex flex-col gap-y-14">
        <div className="flex flex-col items-center mdl:items-start gap-y-8 text-center mdl:text-left">
          <div className="flex flex-col mdl:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 2 * 0.1 }}
            >
              <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mdl:h-32 mdl:w-32 rounded-2xl">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/37252753?v=4"
                  alt="Emre Erden"
                />
                <AvatarFallback>
                  <Skeleton className="w-12 h-12 bg-zinc-300 rounded-full" />
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="flex flex-col gap-y-2.5 items-center mdl:items-start">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 3 * 0.1 }}
                className="font-medium text-lg tracking-wide"
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
                  className="inline-block text-xl cursor-default"
                >
                  👋
                </motion.span>
              </motion.span>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 4 * 0.1 }}
                className="-mt-0.5 text-xl mdl:text-2xl font-semibold flex items-baseline gap-x-1.5"
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
                className="font-semibold text-xl sm:text-2xl"
              >
                <span className="text-zinc-400">{'<'}</span>

                <span className="sm:ml-0.5 text-pink-500 dark:text-pink-400">
                  Software Developer
                </span>

                <span className="text-zinc-400 text-xl">{' />'}</span>
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
