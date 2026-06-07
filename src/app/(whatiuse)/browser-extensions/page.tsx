import type { Metadata } from 'next'
import React from 'react'
//
import BrowserComponent from '@/containers/pages/whatiuse/browser'

export const metadata: Metadata = {
  title: 'Browser Extensions - Emre Erden',
  description: "Emre Erden's Browser Extensions",
}

const VSCodePage = () => {
  return <BrowserComponent />
}

export default VSCodePage
