import { Router } from 'express'
import user from './api/User/user.routes'
import kamban from './api/Kamban/kamban.routes'

const router = Router()

router.use(user)
router.use(kamban)

export default router
