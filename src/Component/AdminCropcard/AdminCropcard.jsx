import { Icon } from '@iconify/react'
import React,{useState} from 'react'
import "./AdminCropcardstyle.scss"
import corn from '../../assets/image/corn.png'
import { useUserAuth } from "../../context/UserAuthContext";
import EditCropModel from '../EditCropCard/EditCropCard';
import CropModel from '../CropModel/CropModel';
import {useNavigate} from 'react-router'




const AdminCropcard = ({id,data}) => {
  const mrp = data.mrp
  const offer = data.offerPrice

  const[open,setOpen]=useState(false)
  const[iddata,setidData]=useState()
  const[show,setShow] = useState(false)
  const navigate  = useNavigate()


const {deleteCropMarket,user,getCropMarket} =useUserAuth();

const handeldelete = async(id) =>{
   await deleteCropMarket(id)
   setidData(id)
   navigate('/cropmarket')
   await getCropMarket()
}

if(id && id==iddata) return null;
if(data.owner!=user.shop) return null
  return (<>
  
    <div className='admincardmain'>
             

        <div className='admincardimg'>
           <img src={data.url} alt="" />
        </div>

        <div className='admincardheadding'>
          <h1>{data.name}</h1>
          <div className='btns' onClick={()=>setShow(!show)}>
          <Icon icon="carbon:overflow-menu-vertical" width="24" height="24" />
          </div>
        </div>

        <div className='adminprice'>
        <Icon icon="bx:rupee" width="20" height="20" color='#0CA136' />
        <h3 style={{color:"#0CA136", marginLeft:"4px"}}>{data.offerPrice}</h3>
        <h3>/Kg</h3>
        <h3 style={{textDecoration:"line-through", marginLeft:"8px",color:'rgba(0, 0, 0, 0.6)'}}>({data.mrp})</h3>
        <Icon icon="bi:arrow-up" width="18" height="18" color='#0CA136' style={{marginLeft:"16px"}}/>
        <h3 style={{color:"#0CA136", marginLeft:"4px"}}>+{Math.round(((offer/mrp)*100)-100).toFixed(2)}%</h3>
        </div>

        <div className='adminbuyer'>
        <h4 style={{marginLeft:"-30px"}}>Needed {data.quantity}Kg</h4>
        <h4>{data.requiredtime}</h4>
        </div>
        <div className='admincardbutton'>
          <div className='adminbtnleft' onClick={()=>handeldelete(id)}>
          <Icon icon="ant-design:delete-outlined" width="24" height="24" color='#ffffff' />
           <h4>Delete</h4>
          </div>
          <div className='adminbtnright' onClick={()=>{setOpen(true);console.log(data);}}> 
          <Icon icon="akar-icons:edit" width="24" height="24" color='#ffffff'/>
          <h4>Edit</h4>
          </div>
        </div>
    </div>
    <EditCropModel open={open} onClose={()=>{setOpen(false)}} data={data} id={id}/>
    </>
  )

}

export default AdminCropcard