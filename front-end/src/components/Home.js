import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body ">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            Best London Parks
          </h1>
          <Link to={{ pathname: '/parks' }}>
            <button className='button'>
              All Parks
            </button></Link>
          <Link to={{ pathname: '/parks/region', state: 'North%20London' }}>
            <button className='button'>
              North London
            </button></Link>
          <Link to={{ pathname: '/parks/region', state: 'Central%20London' }}>
            <button className='button'>
              Central London
            </button></Link>
          <Link to={{ pathname: '/parks/region', state: 'East%20London' }}>
            <button className='button'>
              East London
            </button></Link>
          <Link to={{ pathname: '/parks/region', state: 'South%20London' }}>
            <button className='button'>
              South London
            </button></Link>
          <Link to={{ pathname: '/parks/region', state: 'West%20London' }}>
            <button className='button'>
              West London
            </button>
          </Link>
        </div>
      </div>
    </section>

  )
}
export default Home