import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import ParkCard from './ParkCard.js'
import axios from 'axios'

const Region = () => {
  
  const [ region, setRegion ] = useState(null)
  const location = useLocation()

  useEffect(()=> {
    const getData = async () => {
      const { data } = await axios.get(`/api/london-parks-api/region/${location.state}`)
      console.log(data)
      setRegion(data)
    }
    getData()
  }, [location.state])
  

  return (
    <section className="section">
  <div className='container'>
    <div className="columns is-multiline">
      <Header as={'h1'} textAlign={'center'}>
        {region && region[0].region}
        </Header>
      {region && 
        region.map(region => {
        return (
          <ParkCard 
            _id={region._id}
            title={region.title}
            images={region.images}
            description={region.description}
            postcode={region.postcode}
            activities={region.activites}
            url={region.url}
          />
        )
      })
      }
    </div>
  </div>
</section>

  )

}

export default Region