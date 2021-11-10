import React from 'react'
// import { Link } from 'react-router-dom'

const ParkCard = ({ _id, title, images, description, postcode, activities, url }) => {
  console.log("IMAGES", images)
  return (
    <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card">
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