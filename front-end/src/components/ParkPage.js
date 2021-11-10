import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ParkPage = () => {

const { id } = useParams()
console.log(id)
const [park, setPark] = useState(null)

useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get(`/api/london-parks-api/${id}`)
    setPark(data)
  }
  getData()
}, [id])


  return (
      <>
      {park &&
      <>
      <h1>Test</h1>
      <h2>{park.title}</h2>
      <p>{park.description}</p>
      </>
      }
      </>
  )
}

export default ParkPage