import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordConfirmation: { type: String, required: true },
  profilePicture: { type: String }
})

//******************* */ needs methods for user validation 


userSchema.plugin(uniqueValidator)

export const User = mongoose.model('User', userSchema)