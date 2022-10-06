import React, { useState } from 'react'
import './MakeaDeal.scss'
import { Icon } from '@iconify/react';
import coconut from '../../assets/image/coconut.jpg'
import { InputAdornment, TextField } from '@mui/material';
import { useUserAuth } from "../../context/UserAuthContext";
import {useNavigate} from 'react-router'
import done from '../../assets/image/done.gif'



const MakeaDeal = ({id,open,onClose,data}) => {
    const[kg, setKg] = useState(0)
    const {user,makeDeal,getCropMarket } =useUserAuth();
    const [succ,setSucc]=useState(false) 

    const handelsell = async() =>{
        const senddata = {
            quantity:kg,
            farmerName:user.user_name,
            owner:data.owner
        }
        setSucc(true)
        makeDeal(id,senddata)
    }

    const handelclose = async() =>{
        onClose()
    }

    if(!open) return null
  return (
      <>
      {!succ?
    <div className='overlay'>
              <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modelcontainer'>
            <div className='modal_left'>
                <img src={data.url} alt="" />
            </div>
            <div className='modal_right'>
                <div className='modal_close'>
                    <p onClick={()=>handelclose()}>X</p>
                </div>

                <div className='modal_body'>
                    <h1>{data.name}</h1>
                    <div className='seller'>
                        <Icon icon="icon-park-solid:avatar" width="30" height="30" />
                        <h2>{data.owner}</h2>
                    </div>

                    <div className='location'>
                    <Icon icon="ep:location-filled" width="30" height="30" />
                    <h2>{data.location}</h2>
                    </div>
                    <div className='price'>
                    <Icon icon="heroicons-solid:currency-rupee" width="30" height="30" />
                    <h2 style={{color:"green"}}>{data.offerPrice}/Kg</h2>
                    <h2 style={{textDecoration:' line-through'}}>({data.mrp})</h2>
                    </div>

                    <div className='need'>
                    <Icon icon="ic:baseline-production-quantity-limits" width="30" height="30" />
                    <h2>{data.reamining} Kg</h2>
                    </div>
                    <div className="sell">
                        <TextField
                        label="Selling quantity"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch', color:"#ffffff"}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start" sx={{color:"black"}}>kg</InputAdornment>,
                        }}
                        value={kg}
                        onChange={(e)=>setKg(e.target.value)}
                        type='number'
                        />
                    </div>

                    <div className='modalbtn'>
                        <div className='btnclose' onClick={()=>handelclose()}>
                            <Icon icon="eva:close-outline" color="white" width="24" height="24" />
                            <h2>close</h2>
                        </div>
                        <div className="btnsell" onClick={()=>handelsell()}>
                        <Icon icon="ep:sell" color="white" width="24" height="24" />
                            <h2>Sell</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        :    <div className='overlaydone'>
        <div onClick={(e)=>{
      e.stopPropagation()
  }} className='modelcontainerdone'>         
  <div className='modal_leftdone'>
          <img src={done} alt="" />
      </div>
      <div className='modal_rightdone'>
          <div className='modal_closedone'>
              <p onClick={()=>{setSucc(false); handelclose() }}>X</p>
          </div>

          <div className='modal_bodydone'>
              <h1>Thank you for selling crop worth ₹{(kg*data.offerPrice)} with us your order will be initiated soon </h1>
          </div>
      </div>
      </div>
</div>}
    </>
  )
}

export default MakeaDeal