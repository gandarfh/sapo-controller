import { RoleUser } from "./user.interface";

export interface IToken {
  email: string
  id: string
  role: RoleUser[]
}
