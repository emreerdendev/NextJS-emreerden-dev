import React from 'react'
//
import { Education } from '@/types/about-me'

const EducationCardComponent = (props: Education) => {
  return (
    <li className="relative max-w-[550px] list-none pb-8 before:absolute before:-left-[9px] before:top-[6px] before:h-4 before:w-4 before:rounded-full before:border-2 before:bg-zinc-100 before:content-[''] last:pb-0 before:dark:border-zinc-600 before:dark:bg-zinc-800">
      <div className="ml-5 flex flex-col gap-y-1">
        <div className="text-lg font-medium">{props.name}</div>

        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {props.degree && `${props.degree}, `}
          {props.field}
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-500">
          {props.date}
        </div>
      </div>
    </li>
  )
}

export default EducationCardComponent
