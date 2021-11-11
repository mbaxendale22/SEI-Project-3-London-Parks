import React from 'react'
import { useHistory} from 'react-router-dom'

const NavBar = () => {
  const history = useHistory()

  //onChange function that takes the value of each option and redirects to the corresponding router endpoint
  const redirect = e => e.target.value === 'All' ? history.push('/parks') : history.push({ pathname: '/parks/region', state: e.target.value }) 
  // 

  return (
    <nav className="navbar has-background-success">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" aria-label="logo" className="title"> 
          </span>
        </div>
        <div className="navbar-start">
        <div>
          <select onChange={redirect}>
            <option value='North%20London'>North London</option>
            <option value='Central%20London'>Central London</option>
            <option value='South%20London'>South London</option>
            <option value='East%20London'>East London</option>
            <option value='West%20London'>West London</option>
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