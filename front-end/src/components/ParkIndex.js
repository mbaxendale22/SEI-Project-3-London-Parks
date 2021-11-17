import React, { useState, useEffect} from 'react'
import axios from 'axios'
import ParkCard from './ParkCard'

const ParkIndex = () => {
  const [parks, setParks] = useState([])

    useEffect(() => {
        const getData = async () => {
          const { data } = await axios.get('/api/london-parks-api')
          setParks(data)
        }
        getData()
    }, [])

return (
  <section className="section">
  <div className='container'>
    <div className="columns is-multiline">
      {parks.map(park => {
        return (
          <ParkCard 
            _id={park._id}
            title={park.title}
            images={park.images}
            description={park.description}
            postcode={park.postcode}
            activities={park.activites}
            url={park.url}
            latitude={parseFloat(park.latitude)}
            longitude={parseFloat(park.longitude)}
          />
        )
      })}
    </div>
  </div>
</section>
)

}
export default ParkIndex