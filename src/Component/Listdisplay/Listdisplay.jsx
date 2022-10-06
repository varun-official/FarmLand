import React from 'react'
import { Icon } from '@iconify/react';
import './Listdisplaystyle.scss'


function Listdisplay({name}) {
  return (
    <div className='listmain'>
        <Icon icon="ci:dot-05-xl" width="30" height="30" />
        <p>{name}</p>
    </div>
  )
}

export default Listdisplay