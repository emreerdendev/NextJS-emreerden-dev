'use client'

import Link from 'next/link'
//
import { FaHeart } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'

type Props = {}

const SPONSOR_URL = 'https://github.com/sponsors/Wiazeph'

const SponsorComponent = (props: Props) => {
  return (
    <div className="Theme-Settings">
      <div className="Side-Bar-Title">Support</div>

      <Link
        href={SPONSOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="Side-Bar-Card group flex items-center justify-between"
      >
        <div className="Side-Bar-Card-Hover group-hover:ml-2 flex items-center justify-between text-[#5fd37f] text-sm">
          <FaHeart className='text-base' />
          <div className="text-sm">
            Sponsor
          </div>
        </div>

        <div className="flex gap-x-2 items-center">
          <div className="text-zinc-600 dark:text-zinc-400 text-xs">GitHub</div>

          <div className="text-base">
            <MdArrowOutward />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SponsorComponent
