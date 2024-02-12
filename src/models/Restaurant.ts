export class Restaurant {
  rate: number
  description: string
  banner: string
  name: string
  type: string
  id: number

  constructor(
    id: number,
    rate: number,
    description: string,
    banner: string,
    name: string,
    type: string,
  ) {
    this.id = id
    this.rate = rate
    this.description = description
    this.banner = banner
    this.name = name
    this.type = type
  }
}
