import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 300 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  rating: { type: Number, required: true }
},
{
  timestamps: true
}
)

const parkSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  postcode: { type: String, required: true, unique: true },
  dogFriendly: { type: String },
  cyclistFriendly: { type: String },
  images: [{ type: String, required: true }],
  url: { type: String },
  activites: [{ type: String }],
  region: { type: String }, 
  comments: [commentSchema]
})

parkSchema.plugin(uniqueValidator)

export const Park = mongoose.model('Park', parkSchema) 