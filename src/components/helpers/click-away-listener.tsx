'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export interface ClickAwayListenerProps {
  onClickAway: () => void
  children: React.ReactNode
  className?: string
}

export const ClickAwayListener = ({
  onClickAway,
  children,
  className,
}: ClickAwayListenerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClickAway()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickAway])

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  )
}
