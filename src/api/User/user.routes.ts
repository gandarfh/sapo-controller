import { Router } from 'express'
import UserController from './user.controller'
import LoginController from './login.controller'
import Token from '../middlewares/token'
import MustHave from '../middlewares/mustHave'

const userRoutes = Router()

userRoutes.get('/user', Token.verifyToken, MustHave.adminRole, UserController.show)
userRoutes.get('/user/:id', Token.verifyToken, MustHave.sameId, UserController.showById)
userRoutes.post('/user', UserController.create)
userRoutes.patch('/user/:id', Token.verifyToken, MustHave.sameId, UserController.update)
userRoutes.delete('/user/:id', Token.verifyToken, MustHave.sameId, UserController.delete)

userRoutes.post('/user/login', LoginController.login)

export default userRoutes
