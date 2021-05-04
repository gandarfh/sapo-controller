import { Router } from 'express'
import Token from '../middlewares/token'
import KambanController from './kamban.controller'
import ColumnKambanController from './column.controller'
import ItemKambanController from './item.controller'
import TagKambanController from './tag.controller'

const kambanRoutes = Router()

kambanRoutes.get('/kamban', Token.verifyToken, KambanController.show)
kambanRoutes.post('/kamban', Token.verifyToken, KambanController.create)
kambanRoutes.patch('/kamban/:id', Token.verifyToken, KambanController.update)
kambanRoutes.delete('/kamban/:id', Token.verifyToken, KambanController.delete)

kambanRoutes.get('/kamban/:fatherId/columns', Token.verifyToken, ColumnKambanController.show)
kambanRoutes.post('/kamban/:fatherId/columns', Token.verifyToken, ColumnKambanController.create)
kambanRoutes.patch('/kamban/:fatherId/columns/:columnId', Token.verifyToken, ColumnKambanController.update)
kambanRoutes.delete('/kamban/:fatherId/columns/:columnId', Token.verifyToken, ColumnKambanController.delete)

kambanRoutes.get('/kamban/columns/:columnId/items', Token.verifyToken, ItemKambanController.show)
kambanRoutes.post('/kamban/columns/:columnId/items', Token.verifyToken, ItemKambanController.create)
kambanRoutes.patch('/kamban/columns/:columnId/items/:itemId', Token.verifyToken, ItemKambanController.update)
kambanRoutes.delete('/kamban/columns/:columnId/items/:itemId', Token.verifyToken, ItemKambanController.delete)

kambanRoutes.get('/kamban/:itemId/tags', Token.verifyToken, TagKambanController.show)
kambanRoutes.post('/kamban/:itemId/tags', Token.verifyToken, TagKambanController.create)
kambanRoutes.patch('/kamban/:itemId/tags/:tagId', Token.verifyToken, TagKambanController.update)
kambanRoutes.delete('/kamban/:itemId/tags/:tagId', Token.verifyToken, TagKambanController.delete)

export default kambanRoutes
