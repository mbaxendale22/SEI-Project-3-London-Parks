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

export const centralParksSchema = new mongoose.schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  postcode: { type: String, required: true, unique: true },
  dogFriendly: { type: String },
  cyclistFriendly: { type: String },
  images: [{ type: String, required: true }],
  url: { type: String },
  activites: [{ type: String }],
  comments: [commentSchema]
})

centralParksSchema.plugin(uniqueValidator)

export const Central = mongoose.model('Central', centralParksSchema) 