'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//
import { cn } from '@/lib/utils';
//
import { Routes } from '@/constants/routes';
import { PortfolioRoutes } from '@/constants/routes/portfolio-routes';
import { WhatIUseRoutes } from '@/constants/routes/whatiuse-routes';
//
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
//
import { MdOutlineWorkspaces } from 'react-icons/md';
import { LuUtilityPole } from 'react-icons/lu';
import { TbFileCv } from 'react-icons/tb';
import { MdArrowOutward } from 'react-icons/md';

type Props = {};

const NavigationComponent = (props: Props) => {
  const pathname = usePathname();

  const defaultAccordion = () => {
    if (PortfolioRoutes.some((route) => route.path === pathname)) {
      return 'item-1';
    } else if (WhatIUseRoutes.some((route) => route.path === pathname)) {
      return 'item-2';
    } else {
      return '';
    }
  };

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
          <AccordionItem value="item-1" className="border-none mb-1">
            <AccordionTrigger className="Side-Bar-Card font-normal hover:no-underline py-2">
              <div className="flex items-center gap-x-2">
                <div className="text-lg">
                  <MdOutlineWorkspaces />
                </div>
                <div>Portfolio</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex pb-1">
              <div className="relative w-[34px] before:content-[''] before:block before:absolute before:top-2 before:left-[9px] before:w-0.5 before:h-[calc(100%-30px)] before:bg-zinc-200 dark:before:bg-zinc-700 before:z-10 shrink-0">
                <div className="absolute left-[9px] top-[11px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[52px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>
              </div>

              <div className="Portfolio-Routes-List Side-Bar-Card-List p-0 mt-1 w-full">
                {PortfolioRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={cn(
                      'px-3 py-2 rounded-md Main-Hover-Color group',
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
            <AccordionTrigger className="Side-Bar-Card font-normal hover:no-underline py-2">
              <div className="flex items-center gap-x-2">
                <div className="text-lg">
                  <LuUtilityPole />
                </div>
                <div>What I Use</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex pb-1">
              <div className="relative w-[34px] before:content-[''] before:block before:absolute before:top-2 before:left-[9px] before:w-0.5 before:h-[calc(100%-30px)] before:bg-zinc-200 dark:before:bg-zinc-700 before:z-10 shrink-0">
                <div className="absolute left-[9px] top-[8px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[48px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[88px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[128px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>

                <div className="absolute left-[9px] top-[168px] w-4 h-4 rounded-bl-md border-b-2 border-l-2 dark:border-zinc-700"></div>
              </div>

              <div className="whatiuse-routes-List Side-Bar-Card-List p-0 mt-1 w-full">
                {WhatIUseRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.path}
                    className={cn(
                      'px-3 py-2 rounded-md Main-Hover-Color group',
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

        <a
          href="https://flowcv.com/resume/l3ncgjown0"
          target="_blank"
          rel="noopener noreferrer"
          className="Side-Bar-Card group flex items-center justify-between"
        >
          <div className="Side-Bar-Card-Hover group-hover:ml-2 flex items-center justify-between">
            <div className="text-xl -ml-px">
              <TbFileCv />
            </div>
            View CV
          </div>

          <div className="flex gap-x-2 items-center">
            <div className="text-zinc-600 dark:text-zinc-400 text-xs">
              FlowCV
            </div>

            <div className="text-base">
              <MdArrowOutward />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavigationComponent;
