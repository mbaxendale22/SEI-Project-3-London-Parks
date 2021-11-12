import User from '../models/user.js'

export const getAllUsers = async (_req, res) => {
  try {
    const getUsersData = await User.find().populate('favouriteParks')
    return res.status(200).json(getUsersData)
  } catch (err) {
    return res.status(404).json({ message: 'Users not found' })
  }
}