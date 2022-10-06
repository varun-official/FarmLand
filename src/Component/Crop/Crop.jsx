import React from 'react'
import './Cropstyle.scss'
import { Icon } from '@iconify/react';
import coconut from '../../assets/image/coconut.jpg'
import {useNavigate} from 'react-router'
import { useUserAuth } from "../../context/UserAuthContext";


function Crop({id,crop,categorie}) {
  const {user} =useUserAuth({});

  const navigate  = useNavigate()
  const cropdec = () =>{
   navigate(`/cropdec/${crop.cropname}`)
  }
  if(crop.state?.includes(user?.location)==false) return null 
  return (
    <>
      {crop.category===categorie?
          (<div className='cropmain' onClick={cropdec}>
        <div className='cropleft'>
          <h1>{crop.cropname}</h1>
            <div className='cropinfo'>
              <Icon icon="carbon:soil-moisture-field" width="23" height="23" />
                <h3> {crop.soiltype}</h3>
            </div>
            <div className='cropinfo'>
                <Icon icon="entypo:drop" color="#73c1fa" width="23" height="23" />
                <h3>{crop.irrigation}</h3>
            </div>
            <div className='cropinfo'>
              <Icon icon="bx:rupee" width="23" height="23"/>
              <h3> {crop.price}/kg</h3>
            </div>
            <div className='cropinfo'>
              <Icon icon="carbon:temperature-max" color="red" width="23" height="23" />
              <h3>{crop.temperature}°C</h3>
            </div>
        </div>
        <div className='cropright'>
            <div className='cropimg'>
                <img src={crop.cropImageUrl} alt="" className='cropimg' />
            </div>
                  {/* <div className='cropmore'>
                    <div onClick={cropdec}>
                      <a href="#">view more</a>
                     </div>
    
                    </div> */}
               </div>

    </div>)
      :<div/> }
    </>
  )
}

export default Crop