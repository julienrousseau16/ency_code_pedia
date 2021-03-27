import React, { useState } from 'react'

import './Arrays.css'

const Arrays = () => {

  const [example, setExample] = useState('')
  const [total, setTotal] = useState(0)

  const accResult = () => {
    const demo = example.split(' ')
    const array = demo.map(item => parseInt(item))
    const reducer = (acc, cur) => acc + cur
    setTotal(array.reduce(reducer))
  }

  return (
    <div className='Arrays'>
      <h2>Tableaux</h2>
      <p>Accumulateur</p>
      <input type='text' value={example} onChange={e => setExample(e.target.value)} />
      <br />
      <button onClick={accResult}>Go</button>
      <p>{total}</p>
    </div>
  )
}

export default Arrays
