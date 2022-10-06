import React from 'react'
import './Categoriestyle.scss'
import fertilizer from '../../assets/image/fertilizer.png'

function Categories({name,icon}) {
  return (
    <div className='categories'>
      <img src={icon} alt=""/>
        <h3>{name}</h3>
    </div>
  )
}

export default Categories