import express from 'express'
import * as PecesApiController from '../controllers/peces.api.controllers.js'
const route = express.Router()

//---URI--> acciones masivas
route.route('/api/peces')
    .get(PecesApiController.findAll)
    .post(PecesApiController.create)

    

//---URI--> acciones sobre un elemento en particular----//
route.route('/api/peces/:id')
    .get(PecesApiController.findById)
    .patch(PecesApiController.editById)
    .delete(PecesApiController.deleteById)

export default route