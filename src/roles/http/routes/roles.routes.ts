import { Router } from 'express'
import { createRolesControler } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  return createRolesControler.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response)
})

export { rolesRouter }
