'use client'

import { useState } from 'react'
//
import { motion } from 'framer-motion'
//
import PageHeaderComponent from '@/components/page-header'
import TruncatedTooltip from '@/components/truncated-tooltip'
import { Button } from '@/components/ui/button'
//
import { Gear, Setup, Equipment } from '@/constants/pages/whatiuse/kit'
//
import type { Kit } from '@/types/whatiuse'
import { cn } from '@/lib/utils'

const tabs = ['Gear', 'Setup', 'Equipment'] as const
type Tab = (typeof tabs)[number]

const tabData: Record<Tab, Kit[]> = {
  Gear,
  Setup,
  Equipment,
}

const KitRow = ({ item }: { item: Kit }) => {
  return (
    <div className="flex h-11 w-full items-center gap-x-4 border-b px-4 text-sm text-zinc-950 last:border-b-0 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800">
      <div className="flex w-[60%] items-center gap-x-2">
        <span className="text-nowrap">{item.name.title} </span>
        <span className="text-zinc-500 dark:text-zinc-500">{'>'}</span>{' '}
        <TruncatedTooltip text={item.name.specs} />
      </div>
      <div className="w-1/3">{item.description}</div>
    </div>
  )
}

const KitPageComponent = () => {
  const [tab, setTab] = useState<Tab>('Gear')

  return (
    <main className="Kit Page">
      <div className="Page-Content items-center mdl:items-start">
        <PageHeaderComponent
          pageTitle="kit"
          pageDescription="List of my Gear, Setup and Equipment"
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 4 * 0.1 }}
          className="flex w-full max-w-72 rounded-md border bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-zinc-800"
        >
          {tabs.map((b) => (
            <Button
              key={b}
              onClick={() => setTab(b)}
              variant={'secondary'}
              size={'sm'}
              className={cn('h-8 w-full', {
                'bg-white hover:bg-white dark:bg-zinc-700 dark:hover:bg-zinc-700':
                  tab === b,
              })}
            >
              {b}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 5 * 0.1 }}
          className="w-full overflow-auto"
        >
          <div className="w-full min-w-max rounded-lg border dark:border-zinc-700">
            <div className="flex h-11 w-full select-none items-center gap-x-4 border-b px-4 text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-500">
              <div className="w-[60%]">Name/Specs</div>
              <div className="w-1/3">Description</div>
            </div>

            {tabData[tab].map((item, index) => (
              <KitRow key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default KitPageComponent
