import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { IKambanColumn } from '../../interfaces/kamban.interface'

const prisma = new PrismaClient()

class ColumnKambanController {
  public static async show(req: Request, res: Response) {
    const { fatherId } = req.params

    try {
      const kamban = await prisma.kambanColumn.findMany({ where: { fatherId } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async create(req: Request, res: Response) {
    const { fatherId } = req.params
    const payload = req.body as IKambanColumn

    try {
      const kamban = await prisma.kambanColumn.create({ data: { name: payload.name, KambanFather: { connect: {id: fatherId }} }})

      return res.status(201).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async update(req: Request, res: Response) {
    const { columnId } = req.params
    const payload = req.body as IKambanColumn

    try {
      const kamban = await prisma.kambanColumn.update({ data: { name: payload.name, order: payload.order  }, where: { id: columnId } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async delete(req: Request, res: Response) {
    const { columnId } = req.params

    try {
      await prisma.kambanColumn.delete({ where: { id: columnId } })

      return res.status(200).json({ message: "Sucess column kamban delete" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

}


export default ColumnKambanController
