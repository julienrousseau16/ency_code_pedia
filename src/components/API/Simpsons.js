import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Simpsons.css'

const Simpsons = () => {

  const initialValues = { quote: '', character: '', image: '' }

  const [simpsonData, setSimpsonData] = useState(initialValues)

  const fetchData = async () => {
    const results = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    setSimpsonData(results.data[0])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='Simpsons'>
      <h1>API des Simpsons</h1>
      <h4>Name</h4>
      <p>{simpsonData.character}</p>
      <img src={simpsonData.image} alt='simpson-character'/>
      <h4>Quote</h4>
      <p>{simpsonData.quote}</p>
      <button onClick={fetchData}>New Quote</button>
    </div>
  )
}
export default Simpsons
