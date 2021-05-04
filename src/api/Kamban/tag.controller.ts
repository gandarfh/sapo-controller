import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { ITag } from '../../interfaces/kamban.interface'

const prisma = new PrismaClient()

class TagKambanController {
  public static async show(req: Request, res: Response) {
    try {
      const kamban = await prisma.tag.findMany({ include: { kambanItem: true } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async create(req: Request, res: Response) {
    const { itemId } = req.params
    const payload = req.body as ITag

    try {
      const kamban = await prisma.tag.create({ data: { name: payload.name, color: payload.color, kambanItem: { connect: { id: itemId, }} }})

      return res.status(201).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async update(req: Request, res: Response) {
    const { tagId } = req.params
    const payload = req.body as ITag

    try {
      const kamban = await prisma.tag.update({ data: { name: payload.name, color: payload.color  }, where: { id: tagId } })

      return res.status(200).json(kamban)
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  public static async delete(req: Request, res: Response) {
    const { itemId } = req.params

    try {
      await prisma.tag.delete({ where: { id: itemId } })

      return res.status(200).json({ message: "Sucess item kamban delete" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

}


export default TagKambanController
