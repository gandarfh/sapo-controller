require('dotenv').config()
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const { SECRET } = process.env

type TokenDefaultType = string | { [t: string]: any } | null


class Token {
  public static verifyToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).json({ auth: false, message: 'No token provided' })

    jwt.verify(authorization!, SECRET!, (err) => {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token' })

      next()
    })
  }
  public static decodeToken<T = TokenDefaultType>(token: string) {
    const decodedToken = jwt.decode(token)
    return decodedToken as T
  }
}

export default Token
