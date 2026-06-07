'use client'

import { useState } from 'react'
//
import { motion } from 'framer-motion'
//
import { Browser } from '@/constants/pages/whatiuse/browser'
//
import PageHeaderComponent from '@/components/page-header'
import { Button } from '@/components/ui/button'
import WhatIUseListComponent from '@/components/whatiuse-list'
import { cn } from '@/lib/utils'

const BrowserPageComponent = () => {
  const [browser, setBrowser] = useState<'Firefox' | 'Chrome'>('Firefox')
  const browsers = ['Firefox', 'Chrome'] as const

  return (
    <main className="Browser-Extensions Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="browser exts"
          pageDescription="Useful and efficient Browser Add-ons I use"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          className="flex w-full max-w-72 rounded-md border bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-800"
        >
          {browsers.map((b) => (
            <Button
              key={b}
              onClick={() => setBrowser(b)}
              variant={'secondary'}
              size={'sm'}
              className={cn('h-8 w-full hover:text-zinc-500 dark:hover:text-zinc-400', {
                'bg-white hover:bg-white hover:text-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-50':
                  browser === b,
              })}
            >
              {b}
            </Button>
          ))}
        </motion.div>

        <WhatIUseListComponent
          name="Browser"
          constName={Browser}
          browser={browser}
        />
      </div>
    </main>
  )
}

export default BrowserPageComponent
