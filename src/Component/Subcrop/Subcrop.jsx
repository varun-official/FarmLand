import React from 'react'
import {useNavigate} from 'react-router'

import './Subcropstyle.scss'

function Subcrop({name}) {
  const navigate  = useNavigate()

  return (
    <div className='subcropmain' onClick={()=> navigate(`/cropdec/${name}`)}> 
        {name}
    </div>
  )
}

export default Subcrop