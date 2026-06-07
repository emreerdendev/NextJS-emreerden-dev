import React from 'react'
//
import { MdArrowOutward } from 'react-icons/md'
//
import { cn } from '@/lib/utils'

type Props = {
  href: string
  icon: React.ReactNode
  label: string
  /** Small muted text shown on the right (e.g. the link's source). */
  meta?: string
  /** Extra classes for the anchor — used for one-off accents like the sponsor link. */
  className?: string
  /** Extra classes for the icon wrapper to fine-tune icon sizing. */
  iconClassName?: string
}

/**
 * Shared external link styled as a sidebar card: leading icon + label on the
 * left, optional source label and an outward arrow on the right. Used by the
 * social/contact lists, the CV link and the sponsor link.
 */
const SideBarExternalLink = ({
  href,
  icon,
  label,
  meta,
  className,
  iconClassName,
}: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'Side-Bar-Card group flex items-center justify-between',
        className
      )}
    >
      <div className="Side-Bar-Card-Hover group-hover:ml-2">
        <div className={cn('text-lg', iconClassName)}>{icon}</div>

        <div className="text-sm">{label}</div>
      </div>

      <div className="flex items-center gap-x-2">
        {meta && (
          <div className="text-xs text-zinc-600 dark:text-zinc-400">{meta}</div>
        )}

        <div className="text-base text-zinc-600 dark:text-zinc-400">
          <MdArrowOutward />
        </div>
      </div>
    </a>
  )
}

export default SideBarExternalLink
