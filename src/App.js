import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import JsFunctions from './components/JsFunctions'
import Nav from './components/Nav'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Ency[CODE]Pedia</h1>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/js_functions' component={JsFunctions} />
      </Switch>
    </div>
  )
}

export default App
