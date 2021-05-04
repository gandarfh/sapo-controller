import { Request, Response } from 'express'
import { IUser, IUserProfile } from '../../interfaces/user.interface'
import { PrismaClient } from '@prisma/client'
import Crypto from '../common/hashPassword'

const prisma = new PrismaClient()

class UserController {
  public static async show(req: Request, res: Response) {
    try {
      const users = await prisma.profile.findMany()

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  public static async showById(req: Request, res: Response) {
    const { id } = req.params

    try {
      if (id) {
        const user = await prisma.user.findUnique({where: { id }, include:{ profile: true }})

        return res.status(200).json(user)
      }

      return res.status(422).json({ message: 'Must provide id' })

    } catch (error) {
      return res.status(500).json(error)
    }
  }

  public static async create(req: Request, res: Response) {
    const payload = req.body as IUserProfile & IUser
    try {
      const user = await prisma.user.create({
        data: {
          email: payload.email,
          password: Crypto.encrypt(payload.password),
          profile: {create: {
            city: payload.city,
            country: payload.country,
            firstName: payload.firstName,
            lastName: payload.lastName,
            neighborhood: payload.neighborhood,
            numberStreet: payload.numberStreet,
            state: payload.state,
            street: payload.street,
            zipcode: payload.zipcode,
            role: payload.role,
            email: payload.email,
           }}
        }
      })
      const profile = await prisma.profile.findUnique({where: { id: user.id }})

      return res.status(201).json({ message: "Success to create user.", ...profile })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  public static async update(req: Request, res: Response) {
    const payload = req.body as IUserProfile
    const { id } = req.params

    try {
      const userUpdate = await prisma.profile.update({data: {
        email: payload.email,
        lastName: payload.lastName,
        firstName: payload.firstName,
        role: payload.role,
        street: payload.street,
        numberStreet: payload.numberStreet,
        neighborhood: payload.neighborhood,
        city: payload.city,
        state: payload.state,
        country: payload.country,
        zipcode: payload.zipcode,
       }, where: { id }})

      return res.status(200).json(userUpdate)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  public static async delete(req: Request, res: Response) {
    const { id } = req.params
    try {
      await prisma.user.delete({ where: { id }, include: {profile: true }})

      return res.status(200).json({ message: "Success delete user." })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

export default UserController
