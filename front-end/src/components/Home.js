import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  toast.success('Welcome to London Parks!',{
    position: toast.POSITION.TOP_CENTER})
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
      <ToastContainer/>
    </section>
    
  )
}
export default Home