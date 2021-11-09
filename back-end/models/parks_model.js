import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 300 },
  owner: { type: String, ref: 'User' }, // owner: { type: mongoose.Schema.ObjectId, ref: 'User' }, this will go when we will do authorization bit
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

export default  mongoose.model('Park', parkSchema) 