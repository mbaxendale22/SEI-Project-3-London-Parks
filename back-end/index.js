import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'

//create an instance of an express server
const app = express()

const startServer = async () => {
  try {

    //connect to the database
    await mongoose.connect(dbURI)
    console.log(`database connected on port ${port}`)

    //middleware 

    // request logger
    app.use((req, _res, next) => {
      console.log(`incoming ${req.method} request to ${req.url}`)
      next()
    })

    // json body parser
    app.use(express.json())

    //send requests to the router 
    app.use(router)

  } catch (err) {
    console.log(err)
    console.log('error connecting to the database')
  }

}

startServer()