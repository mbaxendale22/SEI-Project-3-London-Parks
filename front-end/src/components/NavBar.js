import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar has-background-success">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title"> 
          </span>
        </div>
        <div className="navbar-start">
        <div>
          <select>
            <option value='North'>North London</option>
            <option value='Central'>Central London</option>
            <option value='South'>South London</option>
            <option value='East'>East London</option>
            <option value='West'>West London</option>
            <option value='All'>All Parks</option>
          </select>
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

export default NavBar