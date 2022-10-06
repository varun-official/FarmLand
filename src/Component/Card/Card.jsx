import React, { useEffect, useState } from 'react'
import "./Cardstyle.scss"
import { Icon } from '@iconify/react';
import corn from '../../assets/image/corn.png'
import Avatar from '@mui/material/Avatar';
import MakeaDeal from '../MakeaDeal/MakeaDeal'
import { useUserAuth } from "../../context/UserAuthContext";


function Card(prop) {
  const data = prop.data
  const Id = prop.Id
  const type  = prop.type
  const type2 = prop.type2
  const cropcat = prop.cat
  const {deleteCropMarket,user } =useUserAuth();


  const mrp=data.mrp
  const offer = data.offerPrice
  const[selldata,setSelldata]=useState()
  const[open,setOpen]=useState(false)
  const[cropid1,setCropId1]=useState(Id)

  if(cropcat!="All")
  {
    if(user.location!=data.location)
    return null
  }

  if(data.reamining<=0) 
  {
    deleteCropMarket(Id)
    return null

  }

  if(type2.length>1)
  {
    if(data.requiredtime!=type && data.requiredtime!=type2 ) return null
    
  }
  
  else if(data.requiredtime!=type) return null


  return (
    <>
    <div className='cardmaincrop'>
        <div className='cardimgcrop'>
           <img src={data.url} alt="" />
        </div>

        <div className='cardheadding'>
          <h1>{data.name}</h1>
        </div>

        <div className='price'>
        <Icon icon="bx:rupee" width="20" height="20" color='#0CA136' />
        <h3 style={{color:"#0CA136", marginLeft:"4px"}}>{data.offerPrice}</h3>
        <h3>/Kg</h3>
        <h3 style={{textDecoration:"line-through", marginLeft:"8px",color:'rgba(0, 0, 0, 0.6)'}}>({data.mrp})</h3>
        <Icon icon="bi:arrow-up" width="18" height="18" color='#0CA136' style={{marginLeft:"16px"}}/>
        <h3 style={{color:"#0CA136", marginLeft:"4px"}}>+{Math.round(((offer/mrp)*100)-100).toFixed(2)}%</h3>
        </div>

        <div className='buyer'>
        <Avatar
        alt="Remy Sharp"
        src=""
        sx={{ width: 40, height: 40 }}
      />
        <h5>{data.owner}</h5>
        </div>
        <div className='cardbutton'>
          <div className='btnleftcard'>
           <h4>Needed {data.reamining} Kg</h4>
          </div>
          <div className='btnright' onClick={()=>setOpen(true)}> 
          <Icon icon="ep:sell" width="24" height="24" color='#ffffff'/>
          <h4>Make Deal</h4>

          </div>
        </div>

    </div>
    <MakeaDeal id={Id} open={open} onClose={()=>setOpen(false)} data={data} setSelldata={setSelldata}/>
    </>
  )
}

export default Card