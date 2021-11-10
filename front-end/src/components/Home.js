import React from 'react'

const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body ">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
                Best London Parks
          </h1>
          <button className='button'>
            All Parks
          </button>
          <button className='button'>
            North London
          </button>
          <button className='button'>
            Central London
          </button>
          <button className='button'>
            East London
          </button>
          <button className='button'>
            South London
          </button>
          <button className='button'>
            West London
          </button>
        </div>
      </div>
    </section>
    
  )
}
export default Home