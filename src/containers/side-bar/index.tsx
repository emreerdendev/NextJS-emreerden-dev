'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
//
import { cn } from '@/lib/utils'
//
import HeadlineComponent from './headline'
import NavigationComponent from './navigation'
import ThemeSettingsComponent from './theme-settings'
import SponsorComponent from './sponsor'
import SideBarListComponent from '../../components/side-bar-list'
//
import { SocialLinks } from '@/constants/side-bar/socials'
import { ContactLinks } from '@/constants/side-bar/contact'
//
import { ClickAwayListener } from '@/components/helpers/click-away-listener'

const SideBarLayout = () => {
  const pathname = usePathname()

  const [isActive, setIsActive] = useState(false)
  const handleOnClick = () => setIsActive((prev) => !prev)
  const activeClass = isActive && 'active'

  // Close the mobile menu whenever the route changes. On desktop the sidebar
  // is statically visible (mdl:translate-x-0), so this only affects mobile.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsActive(false)
  }, [pathname])

  return (
    <>
      <ClickAwayListener
        onClickAway={() => setIsActive(false)}
        className="ClickAwayListener"
      >
        <div className="Mobile-Menu z-40 absolute top-0 left-0 h-12 w-full bg-zinc-50 dark:bg-zinc-800 border-b dark:border-zinc-700 mdl:hidden overflow-hidden">
          <button
            type="button"
            onClick={handleOnClick}
            aria-label={isActive ? 'Close menu' : 'Open menu'}
            aria-expanded={isActive}
            className="ml-auto block mdl:hidden"
          >
            <svg
              className={cn(
                'Hamburger-Menu Menu-Rotate Ham-Menu w-12 h-12',
                activeClass
              )}
              viewBox="0 0 100 100"
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              />
            </svg>
          </button>
        </div>

        <div
          className={cn(
            'Side-Bar Menu z-50 absolute top-12 mdl:static -translate-x-full mdl:translate-x-0 h-[calc(100dvh-48px)] mdl:h-dvh transition-transform duration-300 ease-in-out',
            isActive && 'translate-x-0'
          )}
        >
          <div className="w-72 min-w-72 h-full border-r dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 flex flex-col gap-y-8 p-6 overflow-y-auto no-scrollbar">
            <HeadlineComponent />

            <NavigationComponent />

            <SideBarListComponent
              name="Social"
              title="Follow Me!"
              constName={SocialLinks}
            />

            <SideBarListComponent
              name="Contact"
              title="Contact Me!"
              constName={ContactLinks}
            />

            <ThemeSettingsComponent />

            <SponsorComponent />
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}

export default SideBarLayout
