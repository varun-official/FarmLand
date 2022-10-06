import React, { useEffect, useState } from 'react'
import Crop from '../../Component/Crop/Crop'
import './CropInfostyle.scss'
import Nav from '../../Component/nav/Nav';
import { useUserAuth } from "../../context/UserAuthContext";
import CarouselList from "../../Component/Carousel/Carousel"
import Categories from '../../Component/Categories/Categories';
import fertilizer from '../../assets/image/fertilizer.png'
import harvest from '../../assets/image/harvest.png'
import corn_ from '../../assets/image/corn_.png'
import hydroponics from '../../assets/image/hydroponics.png'
import cotton from '../../assets/image/cotton.png'
import shrotterm from '../../assets/image/shrotterm.png'
import longterm from '../../assets/image/longterm.png'
import paddy_cat from '../../assets/image/paddy_cat.jpg'
import { Offer } from '../../Component/Offer/Offer';
import Card from '../../Component/Card/Card';
import AdminCropcard from '../../Component/AdminCropcard/AdminCropcard';
import SBI from '../../assets/image/SBI.jpg'
import karnataka from '../../assets/image/karnataka.jpg'
import bob from '../../assets/image/bob.jpg'
import indusindbank from '../../assets/image/indusind-bank.png'
import icicibank from '../../assets/image/icici-bank.png'
import axis from '../../assets/image/axis.jpg'
import Loder from '../../Component/Loder/Loder';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';
import {useNavigate} from 'react-router'
import Weather from '../../Component/Weather/Weather';





function CropInfo() {
const[categorie,setCategorie]=useState("Short Term Crop")
const[cropdata,setCropdata]=useState()
const ref=collection(db,"crops")
const navigate  = useNavigate()



useEffect(() => {
  const data = onSnapshot(ref, (doc) => {
    setCropdata(doc.docs)
  });

}, [window.location.pathname=="/cropinfo"])



const changecat = (cat) =>{
  setCategorie(cat);
}

  return (
    <div className='croinfomain'>
      <Nav/>
      <div className='carousel'>
      <CarouselList type={"main"}/>
      </div>


      {cropdata?
      <>

       <div className='cropshort'>
            {/* <h2>/{categorie}</h2> */}
            <h2>Recommended {categorie}</h2>
            <div className='cropdiv'>
              {
                cropdata?.map((crop) => (
                  <Crop id={crop.id} crop={crop.data()} categorie={categorie}/>
                )
                )
              }
            </div>
        </div>

        <div className='croplong'>
           <h2>Featured Categories</h2>
            <div className='cropdiv'>
              <div onClick={()=>changecat("Short Term Crop")}>
              <Categories name="Short Term Crops" icon={shrotterm} />
              </div>
              <div onClick={()=>changecat("Long Term Crop")}>
              <Categories name="Long term Crops" icon={longterm}/>
              </div>
              <div onClick={()=>changecat("Horticulture")}>
              <Categories name="Horticulture" icon={hydroponics}/>
              </div>
              <div onClick={()=>changecat("Long Term Crop")}> 
              <Categories name="Cash Crops" icon={cotton}/>
              </div>
              <div onClick={()=>changecat("Short Term Crop")}>
              <Categories name="Food Crops " icon={corn_}/>
              </div>
              <div onClick={()=>navigate("/cropmarket")}>
              <Categories name="Crop Market" icon={harvest}/>
              </div>
              <div onClick={()=>navigate("/fertilizermarket")}>
              <Categories name="Fertilizer Market" icon={fertilizer}/>
              </div>
            </div>
        </div>

        <div className='cropdemand'>
            {/* <h2>/{categorie}</h2> */}

            <div className='weatherforecast'>
            <h2>Weather Forecast</h2>
            <Weather/>
            </div>

            <h2>Crop on Demand</h2>
            <div className='cropdivdemand'>
              {
                cropdata?.map((crop) => (
                  <Crop id={crop.id} crop={crop.data()} categorie="Long Term Crop"/>
                )
                )
              }
            </div>


        </div>

        <div className='offer'>
          <h2>Bank Offers</h2>

          <div className='offerlist'>

            <Offer image ={indusindbank}/>
            <Offer image={karnataka}/>
            <Offer image={icicibank}/>
            <Offer image={axis}/>
          </div>

        </div>
      </>
      :<Loder/>}

       





    </div>

  )
}

export default CropInfo