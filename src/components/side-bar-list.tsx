import React from 'react'
//
import { MdArrowOutward } from 'react-icons/md'

type Props = {
  name: string
  title: string
  constName: {
    name: string
    path: string
    icon: React.ReactNode
  }[]
}

const SideBarListComponent = (props: Props) => {
  return (
    <div className={props.name}>
      <div className="Side-Bar-Title">{props.title}</div>

      <div className={`${props.name}-List Side-Bar-Card-List`}>
        {props.constName.map((item, index) => (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="Side-Bar-Card group flex items-center justify-between"
          >
            <div className="Side-Bar-Card-Hover group-hover:ml-2">
              {item.icon}

              <div className="text-sm">{item.name}</div>
            </div>

            <MdArrowOutward />
          </a>
        ))}
      </div>
    </div>
  )
}

export default SideBarListComponent
