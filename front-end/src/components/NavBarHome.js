import React from 'react'
import { Link } from 'react-router-dom'

const NavBarHome = () => {

  return (
    <nav className="navbar has-background-success">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title"> 
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="has-text-white" to="/cars">All parks 🌳</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item ">Register</div>
          <div className="navbar-item">Login</div>
        </div>
      </div>
    </nav>
  )
}

export default NavBarHome