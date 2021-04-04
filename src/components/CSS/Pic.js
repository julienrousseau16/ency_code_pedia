import React from 'react'

import './Pic.css'

const Pic = ({ name, url }) => {

  const baseUrl = "https://drive.google.com/uc?export=view&id="

  return (
    <div className='Pic'>
      <img src={baseUrl + url} alt={name}/>
      <h2>{name}</h2>
    </div>
  )
}
export default Pic
