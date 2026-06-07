'use client'

import React from 'react'
//
import { motion } from 'framer-motion'

type Props = {
  pageTitle: string
  pageDescription: string
}

const PageHeaderComponent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-5 mdl:gap-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 2 * 0.1 }}
        className="Page-Title"
      >
        {props.pageTitle}.
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 3 * 0.1 }}
        className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:flex-wrap mdl:justify-start mdl:text-left"
      >
        <div className="select-none text-sm text-zinc-400 mdl:hidden lg:block">
          {'<span>'}
        </div>

        <div className="text-zinc-950 dark:text-zinc-200">
          {props.pageDescription}
        </div>

        <div className="select-none text-sm text-zinc-400 mdl:hidden lg:block">
          {'</span>'}
        </div>
      </motion.div>
    </div>
  )
}

export default PageHeaderComponent
