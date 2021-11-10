import React, { useEffect, useState } from 'react'
import { useLocation, useHistory} from 'react-router-dom'
import axios from 'axios'

const Region = () => {
  
  const [ region, setRegion ] = useState(null)
  const location = useLocation()
  const history = useHistory()

  useEffect(()=> {
    const getData = async () => {
      const { data } = await axios.get(`/api/london-parks-api/region/${location.state}`)
      setRegion(data)
      data.forEach(r => console.log(r._id))
    }
    getData()
  }, [location.state])

  return (
    <>
    <h1>Test</h1>
    { region &&
    <ul>
    {region.map(r => <li onClick={ () => history.push(`/parks/${r._id}`)}>{r.title}</li>)}
    </ul>
    }
    </>

  )

}

export default Region