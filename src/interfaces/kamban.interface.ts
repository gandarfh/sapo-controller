export interface IKamban {
  id: string
  name: string
  columns?: IKambanColumn[]
  createdAt: string
}

export interface IKambanColumn {
  id: string
  name: string
  fatherId: string
  order: number
  items: IKambanItem[]
}

export interface IKambanItem {
  id: string
  name: string
  description: string
  order: number
  columnId: string
  tagId: string
  createdAt: string
}

export interface ITag {
  id: string
  name: string
  color: string
  kambanItem: IKambanItem[]
}
