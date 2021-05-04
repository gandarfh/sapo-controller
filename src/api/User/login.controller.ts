import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import Crypto from '../common/hashPassword'

const prisma = new PrismaClient()

class LoginController {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body
    try {
      const user = await prisma.user.findUnique({ where: { email }, include: {profile: true } })
      if (user) {
        const passwordDescrypted = Crypto.decrypt(password, user.password)

        if (passwordDescrypted) {
          const token = jwt.sign({ email, id: user.id, role: user.profile?.role }, process.env.SECRET!, {
            expiresIn: '1d',
          })

          const payload = {...(({ password, ...rest } = user) => (rest))() }

          return res.status(201).json({ ...payload, accessToken: token })
        }

        return res.status(500).json({ message: "Password does not match" })
      }
      return res.status(422).json({ message: "User not found" })
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }

}

export default LoginController
