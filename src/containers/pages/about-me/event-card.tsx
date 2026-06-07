import React from 'react'
//
import { Event } from '@/types/about-me'

const EventCardComponent = (props: Event) => {
  return (
    <li className="relative max-w-[550px] list-none pb-8 before:absolute before:-left-[9px] before:top-[6px] before:h-4 before:w-4 before:rounded-full before:border-2 before:bg-zinc-100 before:content-[''] last:pb-0 before:dark:border-zinc-600 before:dark:bg-zinc-800">
      <div className="ml-5 flex flex-col gap-y-1">
        <div className="text-lg font-medium">{props.name}</div>

        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {props.role} · {props.date}
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-500">
          {props.location}
        </div>
      </div>
    </li>
  )
}

export default EventCardComponent
