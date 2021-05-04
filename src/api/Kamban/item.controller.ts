import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { IKambanItem } from '../../interfaces/kamban.interface'

const prisma = new PrismaClient()

class ItemKambanController {
  public static async show(req: Request, res: Response) {
    const { columnId } = req.params

    try {
      const kamban = await prisma.kambanItem.findMany({ where: { columnId } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async create(req: Request, res: Response) {
    const { columnId } = req.params
    const payload = req.body as IKambanItem

    try {
      const kamban = await prisma.kambanItem.create({ data: { name: payload.name, description: payload.description, column: { connect: {id: columnId }} }})

      return res.status(201).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async update(req: Request, res: Response) {
    const { itemId } = req.params
    const payload = req.body as IKambanItem

    try {
      const kamban = await prisma.kambanItem.update({ data: { name: payload.name, description: payload.description, order: payload.order  }, where: { id: itemId } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async delete(req: Request, res: Response) {
    const { itemId } = req.params

    try {
      await prisma.kambanItem.delete({ where: { id: itemId } })

      return res.status(200).json({ message: "Sucess item kamban delete" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

}


export default ItemKambanController
