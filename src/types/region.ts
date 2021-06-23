export interface Region {
  id: string
  name: string
  areas: Area[]
  createdAt: string
  updatedAt: string
}

export interface Area {
  id: string
  name: string
  regionId: string
  regionName: string
  createdAt: string
  updatedAt: string
}
