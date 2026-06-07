import React from 'react'
//
import SideBarExternalLink from '@/components/side-bar-external-link'

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
          <SideBarExternalLink
            key={index}
            href={item.path}
            icon={item.icon}
            label={item.name}
          />
        ))}
      </div>
    </div>
  )
}

export default SideBarListComponent
