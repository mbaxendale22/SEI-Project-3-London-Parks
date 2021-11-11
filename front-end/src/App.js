import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
// import NavBarHome from './components/NavBarHome'
import NavBar from './components/NavBar.js'
import ParkIndex from './components/ParkIndex.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import UserProfile from './components/UserProfile.js'
import Region from './components/Region.js'
import ParkPage from './components/ParkPage.js'

const App = () => {

  return (
    <BrowserRouter >
    <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/parks' component={ParkIndex} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route excat path='/profile' component={UserProfile}/>
        <Route exact path='/parks/region' component={Region} />
        <Route exact path='/parks/:id' component={ParkPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App