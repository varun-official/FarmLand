import React,{useState,useEffect} from 'react'
import "./AdminCropmarketstyle.scss"
import wheat from '../../assets/image/wheat.jpg'
import money from '../../assets/image/money.jpg'
import rupee from '../../assets/image/rupee.jpg'
import CarouselList from '../Carousel/Carousel'
import Nav from '../nav/Nav'
import { Icon } from '@iconify/react'
import AdminCropcard from '../AdminCropcard/AdminCropcard'
import CropModel from '../CropModel/CropModel'
import { useUserAuth } from "../../context/UserAuthContext";
import {collection,onSnapshot} from "firebase/firestore"
import {db} from "../../config/firebase"
import Loder from '../Loder/Loder'

const AdminCropmarket = () => {
    const[open,setOpen]=useState(false)
    const[cropmarket,setCropmarket]=useState(null)
    const {getCropMarket,cropdata } =useUserAuth();
    const ref=collection(db,"crop market")
    useEffect(() => {
      const getdata=async()=>{
        const data = onSnapshot(ref, (doc) => {
          setCropmarket(doc.docs)
        });
      }
     getdata()
    }, [])  //window.location.pathname==="/cropmarket", open
    
    
  return (
    <>
    <div className='admincropmarketmain'>
      <Nav/>
     {cropmarket
     ?<>
     
     <div className='markettop'>
        <div className='carousel'>
        <CarouselList type={""}/>
        </div>

        <div className='banner'>
          <div className='eachbanner'>
            <img style={{opacity:"0.7"}} src={wheat} alt="" />
            <div className='text-block'  style={{position:"absolute",top:"50px",left:"30px"}}>
              <p>Sell Crop Directly To Supplier</p>
            </div>
          </div>
          <div className='eachbanner'>
            <img src={money} alt="" />
            <div className='text-block' style={{position:"absolute",top:"50px",right:"30px"}}>
              <p>Honest Pricing </p>
            </div>
          </div>
          <div className='eachbanner'>
            <img src={rupee} alt="" />
            <div className='text-block'  style={{position:"absolute",top:"40px",left:"30px"}}>
              <p>No middle man....</p>
              <p>No processing Fee...</p>
            </div>
          </div>
        </div>
      </div>
      <div className='adminmarketcard'>
        <div className='admincardheading'>
            <h5>Your Crop MarketPlace </h5>
             <div className='addbtn' onClick={()=>setOpen(true)}>
             <Icon icon="carbon:add-alt" color="white" width="24" height="24" />
             <h5>Add</h5>
             </div>
            <div>
            </div>
        </div>

        <div className='cardlist'>
          {
            cropmarket.map((cropone)=>(
              <AdminCropcard id={cropone.id} data={cropone.data()}/>
            ))
          }
        </div>
      </div>
     </>:<Loder/>}      
    <CropModel open={open} onClose={()=>{setOpen(false)}} type="crop"/>

    </div>
    </>
  )
}

export default AdminCropmarket