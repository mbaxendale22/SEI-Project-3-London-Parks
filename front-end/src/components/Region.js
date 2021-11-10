import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Region = () => {
  
  const [ region, setRegion ] = useState(null)
  const location = useLocation()

  useEffect(()=> {
    const getData = async () => {
      const { data } = await axios.get(`/api/london-parks-api/region/${location.state}`)
      setRegion(data)
    }
    getData()
  }, [location.state])

  return (
    <>
    <h1>Test</h1>
    { region &&
    <ul>
    {region.map(r => <li>{r.title}</li>)}
    </ul>
    }
    </>

  )

}

export default Region