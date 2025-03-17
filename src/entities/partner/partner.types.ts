export interface Partner {
  id: number
  icon: JSX.Element
  name: string
  link: string
}

export interface PartnerDocument {
  id: number
  title: string
  subtitle: string
  photo: string
  documentItems: Partner[]
}
