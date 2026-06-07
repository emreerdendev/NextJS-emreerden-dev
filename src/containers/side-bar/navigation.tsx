'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
//
import { cn } from '@/lib/utils'
//
import { Routes } from '@/constants/routes'
import { PortfolioRoutes } from '@/constants/routes/portfolio-routes'
import { WhatIUseRoutes } from '@/constants/routes/whatiuse-routes'
//
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SideBarExternalLink from '@/components/side-bar-external-link'
//
import { MdOutlineWorkspaces } from 'react-icons/md'
import { LuUtilityPole } from 'react-icons/lu'
import { TbFileCv } from 'react-icons/tb'

const NavigationComponent = () => {
  const pathname = usePathname()

  const defaultAccordion = () => {
    if (PortfolioRoutes.some((route) => route.path === pathname)) {
      return 'item-1'
    } else if (WhatIUseRoutes.some((route) => route.path === pathname)) {
      return 'item-2'
    } else {
      return ''
    }
  }

  return (
    <div className="Navigation text-sm">
      <div className="Side-Bar-Title">Navigation</div>

      <div className="flex flex-col gap-y-1">
        <nav className="Routes-List Side-Bar-Card-List">
          {Routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              className={cn(
                'Side-Bar-Card group',
                pathname === route.path ? 'bg-zinc-200/70 dark:bg-zinc-700' : ''
              )}
            >
              <div className="Side-Bar-Card-Hover group-hover:ml-2">
                <div className="text-lg">{route.icon}</div>

                {route.name}
              </div>
            </Link>
          ))}
        </nav>

        <Accordion type="single" collapsible defaultValue={defaultAccordion()}>
          <AccordionItem value="item-1" className="mb-1 border-none">
            <AccordionTrigger className="Side-Bar-Card py-2 font-normal hover:no-underline">
              <div className="flex items-center gap-x-2">
                <div className="text-lg">
                  <MdOutlineWorkspaces />
                </div>
                <div>Portfolio</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex pb-1">
              <div className="relative w-[34px] shrink-0 before:absolute before:left-[9px] before:top-2 before:z-10 before:block before:h-[calc(100%-30px)] before:w-0.5 before:bg-zinc-200 before:content-[''] dark:before:bg-zinc-700">
                <div className="absolute left-[9px] top-[11px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[48px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>
              </div>

              <div className="Portfolio-Routes-List Side-Bar-Card-List mt-1 w-full p-0">
                {PortfolioRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={cn(
                      'Main-Hover-Color group rounded-md px-3 py-2',
                      pathname === route.path
                        ? 'bg-zinc-200/70 dark:bg-zinc-700'
                        : ''
                    )}
                  >
                    <div className="Side-Bar-Card-Hover group-hover:ml-2">
                      <div>{route.icon}</div>

                      {route.name}
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="Side-Bar-Card py-2 font-normal hover:no-underline">
              <div className="flex items-center gap-x-2">
                <div className="text-lg">
                  <LuUtilityPole />
                </div>
                <div>What I Use</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex pb-1">
              <div className="relative w-[34px] shrink-0 before:absolute before:left-[9px] before:top-2 before:z-10 before:block before:h-[calc(100%-30px)] before:w-0.5 before:bg-zinc-200 before:content-[''] dark:before:bg-zinc-700">
                <div className="absolute left-[9px] top-[8px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[48px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[88px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[128px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[168px] h-4 w-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>
              </div>

              <div className="whatiuse-routes-List Side-Bar-Card-List mt-1 w-full p-0">
                {WhatIUseRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={cn(
                      'Main-Hover-Color group rounded-md px-3 py-2',
                      pathname === route.path
                        ? 'bg-zinc-200/70 dark:bg-zinc-700'
                        : ''
                    )}
                  >
                    <div className="Side-Bar-Card-Hover group-hover:ml-2">
                      <div className="text-lg">{route.icon}</div>

                      {route.name}
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <SideBarExternalLink
          href="https://flowcv.com/resume/l3ncgjown0"
          icon={<TbFileCv />}
          iconClassName="-ml-px text-xl"
          label="View CV"
          meta="FlowCV"
        />
      </div>
    </div>
  )
}

export default NavigationComponent
