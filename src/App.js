import React from 'react'

import { Switch, Route } from 'react-router-dom'

import ApiContainer from './components/API/ApiContainer'
import Home from './components/Global/Home'
import JsFunctions from './components/Functions/JsFunctions'
import Nav from './components/Global/Nav'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Ency[CODE]Pedia</h1>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/apis' component={ApiContainer} />
        <Route path='/js_functions' component={JsFunctions} />
      </Switch>
    </div>
  )
}

export default App
