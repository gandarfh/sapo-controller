export type RoleUser = 'ADMIN' | 'USER'

export interface IUser {
  id: string
  email: string
  password: string
  createdAt: string
}
export interface IUserProfile {
  email: string
  id: string
  firstName: string
  lastName: string
  street: string
  numberStreet: number
  neighborhood: string
  city: string
  state: string
  country: string
  zipcode: string
  role: RoleUser[]
  createdAt: string
}
