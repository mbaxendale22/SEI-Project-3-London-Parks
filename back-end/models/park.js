import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import northParksSchema from './north.js'
import southParksSchema from './south.js'
import eastParksSchema from './east.js'
import westParksSchema from './west'
import centralParksSchema from './central.js'


const parkSchema = new mongoose.Schema({
  North: [northParksSchema],
  South: [southParksSchema],
  East: [eastParksSchema],
  West: [westParksSchema],
  Central: [centralParksSchema]
})

parkSchema.plugin(uniqueValidator)

export const AllPark = mongoose.model('AllPark', parkSchema)  