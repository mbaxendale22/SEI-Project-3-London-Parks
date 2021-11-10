import React, { useState, useEffect} from 'react'
import axios from 'axios'
import ParkCard from './ParkCard'

const ParkIndex = () => {
  const [parks, setParks] = useState([])

    useEffect(() => {
        const getData = async () => {
          const { data } = await axios.get('/api/london-parks-api')
          setParks(data)
          console.log(data)
        }
        getData()
    }, [])

return (
  // <h1>My Parks</h1>
  <section className="section">
  <div className='container'>
    <div className="columns is-multiline">
      {parks.map(park => {
        return (
          <ParkCard 
            key={park._id}
            title={park.title}
            images={park.images}
            description={park.description}
            postcode={park.postcode}
            activities={park.activities}
            url={park.url}
          />
        )
      })}
    </div>
  </div>
</section>
)

}
export default ParkIndex