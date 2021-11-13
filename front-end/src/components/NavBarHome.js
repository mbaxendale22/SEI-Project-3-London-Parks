import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu, Segment, Image, Icon, MenuItem } from 'semantic-ui-react'
import RegionLinks from './RegionLinks'
import { getPayload } from '../helpers/auth'


const NavBarHome = ({ userData }) => {
  const history = useHistory()
  const [toggle, setToogle] = useState(false)
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')// remove token from local storage
    history.push('/')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload() // get payload part of the token by calling get payload function
    if (!payload) return false // if there is no payload returned function returns false
    const now = Math.round(Date.now() / 1000) // get the current time in milliseconds and convert to seconds as this is the format the expiry time on the token is in
    return now < payload.exp // check if the current time is less than the expiry time, returns a boolean
  }


  return (
    <>
      <Segment color='green' inverted>
        <Menu icon secondary color='green' inverted  >
          <MenuItem position='left'>
            <Menu.Item onClick={() => history.push('/')}>
              <Icon name='home' size='big' />
            </Menu.Item>
            <Menu.Item
              name='Parks by Region'
              onClick={() => setToogle(!toggle)}
            />
          </MenuItem>
          {userIsAuthenticated() ?
            <MenuItem position='right'>
              <Menu.Item onClick={() => history.push('/profile')}>
                <Image src={userData.profilePicture} size='mini' avatar />
                <p>{userData.username}</p>
              </Menu.Item>
              <Menu.Item name='Logout' onClick={handleLogout} />
            </MenuItem>
            :
            <MenuItem position='right'>
              <Menu.Item onClick={() => history.push('/login')}>Login</Menu.Item>
              <Menu.Item onClick={() => history.push('/register')}>Register</Menu.Item>
            </MenuItem>
          }
        </Menu>
      </Segment>
      <>
        {
          toggle && < RegionLinks />
        }
      </>
    </>
  )
}

export default NavBarHome