import React from 'react'
//
import { VSCode } from '@/constants/pages/whatiuse/vscode'
//
import PageHeaderComponent from '@/components/page-header'
import WhatIUseListComponent from '@/components/whatiuse-list'

const VSCodePageComponent = () => {
  return (
    <main className="VSCode-Extensions Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="vscode exts"
          pageDescription="Useful and efficient VSCode Extensions I use"
        />

        <WhatIUseListComponent name="VSCode" constName={VSCode} />
      </div>
    </main>
  )
}

export default VSCodePageComponent
