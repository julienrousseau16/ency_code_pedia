import React from 'react'

import { NavLink as Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <ul className='Nav'>
      <li><Link to='/' className='Link'>Accueil</Link></li>
      <li><Link to='/js_functions' className='Link'>Fonctions JS</Link></li>
    </ul>
  )
}
export default Nav
