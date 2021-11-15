import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import RegionLinks from './RegionLinks'

const NavBarHome = () => {
  const history = useHistory()
  const [toggle, setToogle ] = useState(false)

  const handleLogout = () => {
    window.localStorage.removeItem('token') // remove token from local storage
    history.push('/') }// redirect user to the home page


    return (
      <>
      <Segment color='green' inverted>
        <Menu color='green' inverted style = {{position: 'relative'}} >
        <Menu.Item
          name="Home"
          position='left'
          onClick={() => history.push('/')}
        />
          <Menu.Item
            name='Parks by Region'
            position ='left'
            onClick={() => setToogle(!toggle)}
          />
          <Menu.Item
            position='right'
            name='My Profile'
            onClick={() => history.push('/profile')}
            />
          <Menu.Item
            name='Register'
            position='right'
            right
            onClick={() => history.push('/register')}
            />
          <Menu.Item
            name='Login'
            position='right'
            onClick={() => history.push('/login')}
            />
          <Menu.Item
            name='Logout'
            position='right'
            onClick={handleLogout}
            />

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