import React,{useEffect, useState} from 'react'
import Card from '../../Component/Card/Card'
import CarouselList from '../../Component/Carousel/Carousel'
import Nav from '../../Component/nav/Nav'
import './Fertilizermarketstyle.scss'

import Pesticides from '../../assets/image/Pesticides.jpg'
import money_1 from '../../assets/image/money_1.jpg'
import rupee from '../../assets/image/rupee.jpg'
import Fertilizercard from '../../Component/Fertilizercard/Fertilizercard'
import Varieties from '../../Component/Varieties/Varieties'
import Marketcategories from '../../Component/Marketcategories/Marketcategories'


import { useUserAuth } from "../../context/UserAuthContext";


const Fertilizermarket = () => {

  const Fertilizer=["Organic","Chemical"]
  const  seeds=["Normal","Hybrid"]
  const  Pestisides=["Organic","Chemical"]
  const  Equipment=["With subsidy","Without subsidy"]
  
  

  const[categori,setCategori] = useState("Fertilizer")
  const[categoritype,setCategoritype] = useState(["Organic","Chemical"])

  const[fertilizerMarket,setFertilizermarket]=useState()

  const {getFertilizerMarket} =useUserAuth();

  useEffect(() => {
    const getdata = async() =>{
      const data = await getFertilizerMarket()
      await setFertilizermarket(data.docs)

    }
    getdata()
 

 }, [window.location.pathname=="/fertilizermarket"])



  return (
    <div className='cropmarketmain'>
      <Nav/>
      {fertilizerMarket?
      <>
      <div className='markettop'>
        <div className='carousel'>
        <CarouselList type={""}/>
        </div>

        <div className='banner'>
          <div className='eachbanner'>
            <img style={{opacity:"0.5"}} src={Pesticides} alt="" />
            <div className='text-block'  style={{position:"absolute",top:"50px",left:"30px"}}>
              <p>Directly  From Dealer To Farmer</p>
            </div>
          </div>
          <div className='eachbanner'>
            <img src={money_1} style={{opacity:"0.5"}} alt="" />
            <div className='text-block' style={{position:"absolute",top:"50px",right:"30px"}}>
              <p>Fertillizer At Factory Rate </p>
            </div>
          </div>
          <div className='eachbanner'>
            <img src={rupee} style={{opacity:"0.5"}} alt="" />
            <div className='text-block'  style={{position:"absolute",top:"40px",left:"30px"}}>
              <p>No middle man....</p>
              <p>No processing Fee...</p>
            </div>
          </div>
        </div>
      </div>

      <div className='fertilizercat'>
        <div className='catlist'>
            <div className={categori=="Fertilizer"?"marketvarietiesmainactive1":'marketvarietiesmain1'} onClick={()=>{setCategori("Fertilizer"); setCategoritype(Fertilizer)}}>
                <h5>Fertilizer <hr/></h5> 
            </div>
            <div className={categori=="Seeds"?"marketvarietiesmainactive1":'marketvarietiesmain1'} onClick={()=>{setCategori("Seeds"); setCategoritype(seeds)}}>
                <h5>Seeds <hr/></h5>    
            </div>
            <div className={categori=="Pestisides"?"marketvarietiesmainactive1":'marketvarietiesmain1'} onClick={()=>{setCategori("Pestisides"); setCategoritype(Pestisides)}}>
                <h5>Pestisides <hr/></h5>    
            </div>
            <div className={categori=="Equipment"?"marketvarietiesmainactive1":'marketvarietiesmain1'} onClick={()=>{setCategori("Equipment"); setCategoritype(Equipment)}}>
                <h5>Equipment <hr/></h5>    
            </div>
        </div>
      </div>
 


      <div className='marketcard'>
        <div className='cardheading'>
        <h5>{categoritype[0]} {categori}</h5>
        </div>
        <div className='cardlist'>
          {fertilizerMarket.map((fertilizerdata)=>(
           <Fertilizercard id={fertilizerdata.id} data={fertilizerdata.data()} categori={categori} type={categoritype[0]}/>
          ))}
        </div>
      </div>
      <div className='marketcard'>
        <div className='cardheading'>
        <h5>{categoritype[1]} {categori} </h5>
        </div>
        <div className='cardlist'>
        {fertilizerMarket.map((fertilizerdata)=>(
           <Fertilizercard id={fertilizerdata.id} data={fertilizerdata.data()} categori={categori} type={categoritype[1]}/>
          ))}
        </div>
      </div>
      
      </>
      :<div/>}

    </div>
  )
}

export default Fertilizermarket