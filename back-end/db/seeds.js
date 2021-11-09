import mongoose, { mongo } from 'mongoose'
import { dbURI } from '../config/environment.js'
// import AllPark from '../models/park.js'
import North from '../models/north.js'
import South from '../models/south.js'
import East from '../models/east.js'
import West from '../models/west.js'
import Central from '../models/central.js'
import northData from './data/north_data.js'
import southData from './data/south_data.js'
import eastData from './data/east_data.js'
import westData from './data/west_data.js'
import centralData from './data/central_data.js'

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('connected to the database successfully')

    await mongoose.connection.db.dropDatabase()
    console.log('db dropped, data cleared')

    //adding data into each model

    const north = await North.create(northData)
    const south = await South.create(southData)
    const east = await East.create(eastData)
    const west = await West.create(westData)
    const central = await Central.create(centralData)


    //close connection to the database
    await mongoose.connection.close()
    console.log('connection to the database closed')

  } catch (err) {
    console.log('error has occured while trying to connect to the database')
    console.log(err)
    await mongoose.connection.close()
    console.log('connection to database closed')
  }
}

seedDatabase