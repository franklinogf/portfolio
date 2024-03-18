type Date4Numbers = `${number}${number}${number}${number}`
type Date2Numbers = `${number}${number}`
type Date = `${Date4Numbers}-${Date2Numbers}`

export interface Experience {
  name: Capitalize<string>
  startDate: Date
  endDate?: Date
  descriptions: Capitalize<string>[]
}
export interface Project {
  name: Capitalize<string>
  image_url: string
}

export interface Portfolio {
  name: string
  title: string
  description: string
  projects: Project[]
  experiences: Experience[]
  footer_description: string
}
