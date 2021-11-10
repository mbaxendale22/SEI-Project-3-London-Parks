import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const NavBar = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token') // remove token from local storage
    history.push('/') // redirect user to the home page
  }

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
          <Link to="/parks"><div className="navbar-item ">Take me to Parks!</div></Link>
          <Link to="/register"><div className="navbar-item ">Register</div></Link>
          <Link to="/login"><div className="navbar-item">Login</div></Link>
          <Link to="/profile"><div className="navbar-item">My profile</div></Link>
          <div className="navbar-item" onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar