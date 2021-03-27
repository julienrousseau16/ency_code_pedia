import React, { useState } from 'react'

import './Strings.css'

const Strings = () => {

  const [example, setExample] = useState('')
  const [secondArg, setSecondArg] = useState('')

  const splitMethod = () => {
    const result = example.split(secondArg)
    console.log(result)
  }

  return (
    <div className='Strings'>
      <h2>Chaines de caractères</h2>
      <h4>Split: de Chaine à Tableau de Chaines</h4>
      <legend>chaine à diviser en morceaux :</legend>
      <input type='text' value={example} onChange={e => setExample(e.target.value)} />
      <legend>repère de coupe :</legend>
      <input type='text' value={secondArg} onChange={e => setSecondArg(e.target.value)} />
      <br />
      <button onClick={splitMethod}>SPLIT (voir console)</button>

    </div>
  )
}

export default Strings
