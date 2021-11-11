import express from 'express'
import { createPark, deletePark, editingPark, getAllParks, getParkByID } from '../controlers/parks.js'
import { getRegion } from '../controlers/filters.js'
import { addComment, deleteComment, showComments } from '../controlers/comments.js'
import { loginUser, registerUser } from '../controlers/auth.js'
import { secureRoute } from '../config/secureRoute.js'

const router = express.Router()

router.route('/london-parks-api')
  .get(getAllParks)
  .post(secureRoute,createPark)

router.route('/london-parks-api/:id')
  .get(getParkByID)
  .delete(secureRoute,deletePark)
  .post(secureRoute,editingPark)

router.route('/london-parks-api/region/:id')
  .get(getRegion)

router.route('/login')
  .post(loginUser)

router.route('/register')
  .post(registerUser)

router.route('/london-parks-api/:id/comments')
  .post(secureRoute,addComment)
  .get(showComments)

router.route('/london-parks-api/:id/comments/:commentId')
  .delete(secureRoute,deleteComment)
export default router