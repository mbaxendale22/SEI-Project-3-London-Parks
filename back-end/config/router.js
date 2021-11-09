import express from 'express'
import { createPark, deletePark, editingPark, getAllParks, getParkByID } from '../controlers/parks.js'
import { addComment,deleteComment, showComments } from '../controlers/comments.js'

const router = express.Router()

router.route('/london-parks-api')
  .get(getAllParks)
  .post(createPark)

router.route('/london-parks-api/:id')
  .get(getParkByID)
  .delete(deletePark)
  .post(editingPark)

// router.route('/login')
//   .post(loginUser)

// router.route('/register')
//   .post(registerNewUser)

router.route('/london-parks-api/:id/comments')
  .post(addComment)
  .get(showComments)

router.route('/london-parks-api/:id/comments/:commentId')
  .delete(deleteComment)
export default router