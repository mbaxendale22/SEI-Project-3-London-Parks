import React from 'react'
import { useHistory } from 'react-router-dom'


const ParkCard = ({ _id, title, images, description, postcode, activities, url }) => {
  const history = useHistory()
  
  return (
    <div 
      key={_id} className="column is-one-quarter-desktop is-one-third-tablet"
      >
      <div className="card"
        onClick={() => history.push(`/parks/${_id}`)}>
        <div className="card-header">
          <div className="card-header-title is-centered">{title}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-5by4">
            <img src={images[1]} alt={title}></img>
          </figure>
        </div>
        <div className="card-content">
          <h5>{description}</h5>
        </div>
        <div className="card-content">
          <h5>{postcode}</h5>
        </div>
        <div className="card-content">
          <h5>{activities}</h5>
        </div>
        <div className="card-content">
          <h5>{url}</h5>
        </div>
      </div>
    </div>
  )
}
export default ParkCard