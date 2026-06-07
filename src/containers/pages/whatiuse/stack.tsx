import React from 'react'
//
import { Stack } from '@/constants/pages/whatiuse/stack'
//
import PageHeaderComponent from '@/components/page-header'
import WhatIUseListComponent from '@/components/whatiuse-list'

const StackPageComponent = () => {
  return (
    <main className="Stack Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="stack"
          pageDescription="Useful, efficient Tools and Resources I use"
        />

        <WhatIUseListComponent name="Stack" constName={Stack} />
      </div>
    </main>
  )
}

export default StackPageComponent
