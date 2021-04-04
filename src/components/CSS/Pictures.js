import React from 'react'

import Trick from '../Global/Trick'

import { pictures as pics } from '../../tools/CSS/pictures'
import { picturesTricks as tricks } from '../../tools/CSS/picturesTricks'

import './Pictures.css'
import Pic from './Pic'

const Pictures = () => {

  return (
    <div className='Pictures'>
      <h3>Images</h3>
      <h5>Conseils</h5>
      {
        tricks.map(item =>
          <Trick key={item.id} trick={item.trick} />)

      }
      <h5>Galerie</h5>
      <div className='GalleryContainer'>
        {
          pics.map(pic =>
            <Pic key={pic.id} name={pic.name} url={pic.url} />)
        }
      </div>
    </div>
  )
}
export default Pictures
