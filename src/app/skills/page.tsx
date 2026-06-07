import type { Metadata } from 'next'
import React from 'react'
//
import SkillsComponent from '@/containers/pages/skills'

export const metadata: Metadata = {
  title: 'Skills - Emre Erden',
  description: "Emre Erden's Skills",
}

const SkillsPage = () => {
  return <SkillsComponent />
}

export default SkillsPage
