import React, { useState } from 'react'
import './BuyFertilizer.scss'
import { Icon } from '@iconify/react';
import { InputAdornment, TextField } from '@mui/material';
import { useUserAuth } from "../../context/UserAuthContext";
import {useNavigate} from 'react-router'
import Backdrop from '@mui/material/Backdrop';



const BuyFertilizer = ({id,open,onClose,data}) => {
    console.log(new Date().getDate());
    const[kg, setKg] = useState(0)
    const {user,makeDeal,getCropMarket,buyFertilizer } =useUserAuth();

    const navigate = useNavigate()

    const handelsell = async() =>{
        const senddata = {
            quantity:kg,
            farmerName:user.user_name,
            owner:data.owner
        }
        navigate(`/buysucess/${(kg*data.offerPrice)}`)
        buyFertilizer(id,senddata)
    }

    const handelclose = async() =>{
        onClose()
    }

    if(!open) return null
  return (
    <div className='overlayfer'>
              <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modelcontainerfer'>
            <div className='modal_leftfer'>
                <img src={data.url} alt="" />
            </div>


            <div className='modal_rightfer'>
                <div className='modal_closefer'>
                    <p onClick={()=>handelclose()}>X</p>
                </div>

                <div className='modal_bodyfer'>
                    <h1>{data.name}</h1>
                    <div className='sellerfer'>
                        <Icon icon="icon-park-solid:avatar" width="30" height="30" />
                        <h2>{data.owner}</h2>
                    </div>

                    <div className='locationfer'>
                    <Icon icon="ep:location-filled" width="30" height="30" />
                    <h2>{data.location}</h2>
                    </div>
                    <div className='pricefer'>
                    <Icon icon="heroicons-solid:currency-rupee" width="30" height="30" />
                    <h2 style={{color:"green"}}>{data.offerPrice}/Bag</h2>
                    <h2 style={{textDecoration:' line-through'}}>({data.mrp})</h2>
                    </div>

                    <div className="sellfer">
                        <TextField
                        label="No of Bags"
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

                    <div className='modalbtnfer'>
                        <div className='btnclosefer' onClick={()=>handelclose()}>
                            <Icon icon="eva:close-outline" color="white" width="24" height="24" />
                            <h2>close</h2>
                        </div>
                        <div className="btnsellfer" onClick={()=>handelsell()}>
                        <Icon icon="icons8:buy" color="white" width="24" height="24" />
                            <h2>Buy</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyFertilizer