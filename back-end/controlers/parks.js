import Park from '../models/parks_model.js'

// getting all parks
export const getAllParks = async (_req, res) => {
  try {
    const getParksData = await Park.find()
    return res.status(200).json(getParksData)
  } catch (err) {
    return res.status(404).json({ message: 'API doesnt exist' })
  }
}

// adding new park to db
export const createPark = async (req, res) => {
  try {
    const newPark = { ...req.body } // getting body from request
    const addPark = await Park.create(newPark) // adding new park to db using schema
    return res.status(201).json(addPark)
  } catch (err) {
    return res.status(422).json(err)
  }
}

// getting park  by ID

export const getParkByID = async (req, res) => {
  try {
    const { id } = req.params // grabing ID from request
    const getSinglePark = await Park.findById(id).populate({
      path: 'comments',
      populate: { 
        path: 'owner',
        model: 'User'
      }
    })// searching for given park by ID
    if (!getSinglePark) throw new Error() // error handeling if park doesn' exists
    return res.status(200).json(getSinglePark) //returning status with park data
  } catch (err) {
    return res.status(404).json({ message: 'Park not found' })
  }
}

// deleting park 

export const deletePark = async (req, res) => {
  try {
    const { id } = req.params
    const removePark = await Park.findOneAndRemove({ _id: id })
    if (!removePark) throw new Error()
    return res.status(200).json({ message: 'User Data has been deleted!' })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}


//editng parks by id
export const editingPark = async (req, res) => {
  try {
    const { id } = req.params
    const updatePark = await Park.findByIdAndUpdate(id, req.body)
    if (!updatePark) throw new Error()
    return res.status(200).json({ message: 'Park data has been updated' })
  } catch (err) {
    return res.status(200).json(err)
  }
}

// // * COMMENTS
// export const addAComment = async (req, res) => {
//   try {
//     const { id } = req.params
//     const park = await Park.findById(id)
//     if (!park) throw new Error('Park not found') // if no park
//     const newComment = { ...req.body, owner: req.currentUser._id }
//     // console.log(newComment)
//     park.comments.push(newComment)// add new comment
//     await park.save({ validateModifiedOnly: true }) //save the updated park
//     return res.status(200).json(park) 
//   } catch (err) {
//     console.log(err)
//     return res.status(404).json({ ' message': err.message })
//   }
// }

// export const deleteAComment = async (req, res) => {
//   try {
//     const { id, commentId } = req.params
//     const park = await Park.findById(id)
//     if (!park) throw new Error('Park not found')
//     const commentToDelete = park.comments.id(commentId)
//     if (!commentToDelete) throw new Error('Comment not found') // if no comment
//     if (!commentToDelete.owner.equals(req.currentUser._id)) throw new Error('unauthorized') // if owner is not current user
//     await commentToDelete.remove() // remove comment
//     await park.save({ validateModifiedOnly: true }) //save the updated park
//     return res.sendStatus(204)
//   } catch (err) {
//     console.log()
//     return res.status(404).json({ 'message': err.message })
//   }
// }