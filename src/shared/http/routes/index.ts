import { AppError } from '@shared/errors/AppError'
import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.routes'
const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado')
  return response.json({ message: 'Olá Dev!' })
})

routes.use('/roles', rolesRouter)

export { routes }
