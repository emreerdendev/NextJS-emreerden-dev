import type { Metadata } from 'next'
import React from 'react'
//
import VSCodeComponent from '@/containers/pages/whatiuse/vscode'

export const metadata: Metadata = {
  title: 'VSCode Extensions - Emre Erden',
  description: "Emre Erden's VSCode Extensions",
}

const VSCodePage = () => {
  return <VSCodeComponent />
}

export default VSCodePage
