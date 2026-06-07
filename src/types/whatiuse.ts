export interface WhatIUse {
  name: string
  path:
    | string
    | {
        website?: string
        firefox?: string
        chrome?: string
      }
  browser?: ('Firefox' | 'Chrome')[]
}

export interface Kit {
  name: {
    title: string
    specs: string
  }
  description: string
}
