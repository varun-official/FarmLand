import React from 'react'
import './Offerstyle.scss'

export const Offer = ({image}) => {
  return (
    <>
    <a href='https://karnatakabank.com/agri-rural' target="_blank">
    <div className='offermain' >
      <img src={image} alt="" />
    </div>
    </a>
    </>
  )
}
