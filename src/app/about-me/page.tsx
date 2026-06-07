import type { Metadata } from 'next'
import React from 'react'
//
import AboutComponent from '@/containers/pages/about-me'

export const metadata: Metadata = {
  title: 'About - Emre Erden',
  description: "Emre Erden's About",
}

const AboutPage = () => {
  return <AboutComponent />
}

export default AboutPage
