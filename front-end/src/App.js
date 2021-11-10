import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
// import NavBarHome from './components/NavBarHome'
import NavBar from './components/NavBar.js'
import ParkIndex from './components/ParkIndex.js'

const App = () => {

  return (
    <BrowserRouter >
    <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/parks' component={ParkIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App