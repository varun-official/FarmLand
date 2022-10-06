import React from 'react'
import './BuyDone.scss'
import done from '../../assets/image/done.gif'
import {useNavigate} from 'react-router'
import { useParams } from "react-router-dom";


const BuyDone = () => {
    const navigate = useNavigate()
  const params = useParams();


    const handelclose = async() =>{
        navigate('/fertilizermarket')
    }
  return (
    <div className='overlaydone'>
              <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modelcontainerdone'>         
        <div className='modal_leftdone'>
                <img src={done} alt="" />
            </div>
            <div className='modal_rightdone'>
                <div className='modal_closedone'>
                    <p onClick={()=>handelclose()}>X</p>
                </div>

                <div className='modal_bodydone'>
                    <h1>Your payment worth ₹{params.id} successful</h1>
                    <h1>Your Order initiated soon</h1>
                    <h1>Thank you for chooseing Us</h1>
                </div>
            </div>
            </div>
    </div>
  )
}

export default BuyDone

