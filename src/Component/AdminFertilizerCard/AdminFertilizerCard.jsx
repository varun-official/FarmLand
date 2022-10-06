import { Icon } from '@iconify/react'
import React,{useState} from 'react'
import "./AdminFertilizerCardstyle.scss"
import corn from '../../assets/image/corn.png'
import { useUserAuth } from "../../context/UserAuthContext";
import EditCropModel from '../EditCropCard/EditCropCard';
import CropModel from '../CropModel/CropModel';
import {useNavigate} from 'react-router'
import EditFertilizerModel from '../EditFertilizerCard/EditFertilizerCard';



const AdminFertilizerCard = ({id,data}) => {
  const mrp = data.mrp
  const offer = data.offerPrice

  const[open,setOpen]=useState(false)
  const[iddata,setIdData]=useState()

const {deleteCropMarket,user,getCropMarket,deleteFertilizerMarket} =useUserAuth();

const handeldelete = async(id) =>{
   await deleteFertilizerMarket(id)
   setIdData(id)
   await getCropMarket()
}
if(iddata && id==iddata) return null
if(data.owner!=user.shop) return null
  return (
    <>
    <div className='admincardmainfertilizer'>
        <div className='admincardimgfer'>
           <img src={data.url} alt="" />
        </div>

        <div className='admincardheaddingfer'>
          <h1>{data.name} - </h1>
          <h1>{data.quantity}</h1>
        </div>

        <div className='adminpricefer'>
        <Icon icon="bx:rupee" width="20" height="20" color='#0CA136' />
        <h3 style={{color:"#0CA136", marginLeft:"4px"}}>{data.offerPrice}</h3>
        <h3>/Item</h3>
        <h3 style={{textDecoration:"line-through", marginLeft:"8px",color:'rgba(0, 0, 0, 0.6)'}}>({data.mrp})</h3>
        <Icon icon="bi:arrow-down" width="18" height="18" color='red' style={{marginLeft:"16px"}}/>
        <h3 style={{color:"red", marginLeft:"4px"}}>{Math.round(((offer/mrp)*100)-100).toFixed(2)}%</h3>
        </div>
        <div className='admincardbuttonfer'>
          <div className='adminbtnleftfer' onClick={()=>handeldelete(id)}>
          <Icon icon="ant-design:delete-outlined" width="24" height="24" color='#ffffff' />
           <h4>Delete</h4>
          </div>
          <div className='adminbtnrightfer' onClick={()=>{setOpen(true);console.log(data);}}> 
          <Icon icon="akar-icons:edit" width="24" height="24" color='#ffffff'/>
          <h4>Edit</h4>
          </div>
        </div>

    </div>
    <EditFertilizerModel open={open} onClose={()=>{setOpen(false)}} data={data} id={id}/>
</>
  )
}

export default AdminFertilizerCard