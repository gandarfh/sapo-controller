import { NextFunction, Request, Response } from "express"
import { IToken } from "../../interfaces/token.interface"
import Token from "./token"



class MustHave {
  public static adminRole(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    const token = Token.decodeToken<IToken>(authorization!)
    const isAdmin = token.role.includes('ADMIN')

    if (!isAdmin) {
      return res.status(401).json({message: "Not authorized"})
    }
    next()
  }

  public static sameId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    const { authorization } = req.headers
    const token = Token.decodeToken<IToken>(authorization!)

    if (id !== token.id) {
      return res.status(401).json({message: "Not authorized"})
    }
    next()
  }
}

export default MustHave
