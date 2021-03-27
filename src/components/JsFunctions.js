import React from 'react'
import { Switch, Route, NavLink as Link } from 'react-router-dom'

import Arrays from './Functions/Arrays'
import Strings from './Functions/Strings'

import './JsFunctions.css'

const JsFunctions = () => {

  return (
    <div className='JsFunctions'>
      <h2>Fonctions JavaScript</h2>
      <div className='JsFunctionsMenu'>
        <Link to='/js_functions/arrays'>Gestion des tableaux</Link>
        <Link to='/js_functions/strings'>Gestion des Chaines de caractères</Link>
      </div>
      <Switch>
        <Route path='/js_functions/arrays' component={Arrays} />
        <Route path='/js_functions/strings' component={Strings} />
      </Switch>
    </div>
  )
}

export default JsFunctions
