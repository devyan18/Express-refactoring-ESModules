import { Router } from 'express'
const route = Router()
import { getNodes } from '../controllers/nodes.controller'


route.get('/', getNodes )


export default route