import { Router } from 'express'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { createRolesControler } from '@roles/useCases/createRole'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (request, response) => {
  return createRolesControler.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.json(roles)
})

export { rolesRouter }
