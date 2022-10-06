import { Icon } from '@iconify/react'
import { Avatar } from '@mui/material'
import corn from '../../assets/image/corn.png'
import "./Fertilizercardstyle.scss"
import React, { useState } from 'react'
import BuyFertilizer from '../BuyFertilizer/BuyFertilizer'

const Fertilizercard = ({id,data,categori,type}) => {
  const[open,setOpen]=useState(false)

  if(data.categori!=categori || data.fertilizertype!=type) return null

  const mrp = data.mrp
  const offer = data.offerPrice


  return (
    <>
    <div className='cardmain'>
    <div className='cardimg'>
       <img src={data.url} alt="" />
    </div>

    <div className='cardheadding'>
      <h1>{data.name} - </h1>
      <h1>{data.quantity}</h1>
    </div>

    <div className='price'>
    <Icon icon="bx:rupee" width="20" height="20" color='#0CA136' />
    <h3 style={{color:"#0CA136", marginLeft:"4px"}}>{data.offerPrice}</h3>
    <h3>/Item</h3>
    <h3 style={{textDecoration:"line-through", marginLeft:"8px",color:'rgba(0, 0, 0, 0.6)'}}>({data.mrp})</h3>
    <Icon icon="bi:arrow-down" width="18" height="18" color='red' style={{marginLeft:"16px"}}/>
    <h3 style={{color:"red", marginLeft:"4px"}}>-{Math.round(((mrp/offer)*100)-100).toFixed(2)}%</h3>
    </div>

    <div className='cardbutton' style={{marginTop:"30px"}}>
      <div className='btnrightfertilizer' onClick={()=>setOpen(true)}> 
      <h4>Buy</h4>
      </div>
    </div>
</div>
<BuyFertilizer id={id} open={open} onClose={()=>setOpen(false) } data={data} />
</>
  )
}

export default Fertilizercard