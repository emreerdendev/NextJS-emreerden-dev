import React from 'react'
//
import { GoLink } from 'react-icons/go'
//
import { Certification } from '@/types/about-me'

const CertificationCardComponent = (props: Certification) => {
  return (
    <li className="relative max-w-[550px] list-none pb-8 before:absolute before:-left-[9px] before:top-[6px] before:h-4 before:w-4 before:rounded-full before:border-2 before:bg-zinc-100 before:content-[''] last:pb-0 before:dark:border-zinc-600 before:dark:bg-zinc-800">
      <div className="ml-5 flex flex-col gap-y-1">
        <div className="text-lg font-medium">{props.name}</div>

        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {props.issuer}
        </div>

        <div className="text-sm text-zinc-500 dark:text-zinc-500">
          {props.date}
        </div>

        {props.credentialUrl && (
          <a
            href={props.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex w-fit items-center gap-x-1.5 rounded-md border px-2 py-1 text-xs transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Show Credential
            <GoLink className="text-xs" />
          </a>
        )}
      </div>
    </li>
  )
}

export default CertificationCardComponent
