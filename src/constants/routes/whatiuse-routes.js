import { VscTools, VscExtensions } from 'react-icons/vsc'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { PiDevices } from 'react-icons/pi'

export const WhatIUseRoutes = [
  {
    name: 'Kit',
    path: '/kit',
    icon: <PiDevices />,
  },
  {
    name: 'Stack',
    path: '/stack',
    icon: <VscTools />,
  },
  {
    name: 'Browser Exts.',
    path: '/browser-extensions',
    icon: <IoExtensionPuzzleOutline />,
  },
  {
    name: 'VSCode Exts.',
    path: '/vscode-extensions',
    icon: <VscExtensions />,
  },
]
