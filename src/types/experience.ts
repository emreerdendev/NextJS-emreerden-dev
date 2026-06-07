export interface Experience {
  name: string
  icon: string
  path: string
  date: string
  location: string
  workType: string
  positions: Position[]
}

export interface Position {
  title: string
  date: string
  projects?: Project[]
}

export interface Project {
  name: string
  path: string
  description: string
  whatIDid?: string[]
  stack?: string[]
}
