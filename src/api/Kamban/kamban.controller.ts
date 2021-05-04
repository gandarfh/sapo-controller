import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { IKamban } from '../../interfaces/kamban.interface'
import { IToken } from '../../interfaces/token.interface'
import Token from '../middlewares/token'

const prisma = new PrismaClient()

class KambanController {
  public static async show(req: Request, res: Response) {
    const { authorization } = req.headers

    try {
      const token = Token.decodeToken<IToken>(authorization!)
      const kamban = await prisma.kamban.findMany({where: { userId: token.id }})

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async create(req: Request, res: Response) {
    const { authorization } = req.headers
    const payload = req.body as IKamban

    try {
      const token = Token.decodeToken<IToken>(authorization!)
      const kamban = await prisma.kamban.create({
        data: { name: payload.name, user: { connect: { id: token.id }}}
      })

      return res.status(201).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async update(req: Request, res: Response) {
    const { id } = req.params
    const payload = req.body as IKamban

    try {
      const kamban = await prisma.kamban.update({ data: { name: payload.name  }, where: { id } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async delete(req: Request, res: Response) {
    const { id } = req.params

    try {
      await prisma.kamban.delete({ where: { id } })

      return res.status(200).json({ message: "Sucess kamban delete" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

}


export default KambanController
