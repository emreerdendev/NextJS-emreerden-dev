'use client'

import React, { useEffect, useState } from 'react'
//
import { cn } from '@/lib/utils'
//
import { useTheme } from 'next-themes'
//
import { IoMoonOutline } from 'react-icons/io5'
import { IoSunnyOutline } from 'react-icons/io5'

const ThemeSettingsComponent = () => {
  const { theme, setTheme } = useTheme()

  // Avoid a hydration mismatch: the resolved theme is only known on the client,
  // so we don't highlight the active option until after mount.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Mount-once flag for the hydration guard; runs a single render on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const themeValue = mounted ? theme : undefined

  return (
    <div className="Theme-Settings">
      <div className="Side-Bar-Title">Theme</div>

      <div className="Side-Bar-Card-List">
        <div
          onClick={() => setTheme('light')}
          className={cn(
            'Side-Bar-Card group cursor-pointer',
            themeValue === 'light' && 'bg-zinc-200/70 dark:bg-zinc-700'
          )}
        >
          <div className="Side-Bar-Card-Hover group-hover:ml-2">
            <IoSunnyOutline />

            <div className="text-sm">Light</div>
          </div>
        </div>

        <div
          onClick={() => setTheme('dark')}
          className={cn(
            'Side-Bar-Card group cursor-pointer',
            themeValue === 'dark' && 'bg-zinc-200/70 dark:bg-zinc-700'
          )}
        >
          <div className="Side-Bar-Card-Hover group-hover:ml-2">
            <IoMoonOutline />

            <div className="text-sm">Dark</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettingsComponent
