import React, { useState,useEffect } from 'react'
import Nav from '../nav/Nav'
import "./Cropdecstyle.scss"
import {useNavigate} from 'react-router'
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import coconut_banner from '../../assets/image/coconut_banner.jpg'
import Subcrop from '../Subcrop/Subcrop';
import Varieties from '../Varieties/Varieties';
import Listdisplay from '../Listdisplay/Listdisplay';
import Listwithheading from '../Listwitheading/Listwithheading';
import Video from '../Video/Video'
import { useUserAuth } from "../../context/UserAuthContext";
import Loder from '../Loder/Loder';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';


function Cropdec() {
  const[crop,setCrop]= useState(null)
  const[crops,setCrops]= useState()
  const[fatbtn,setFatbtn]=useState("organicFertilizer")
  const {cropdata} =useUserAuth();
  const params = useParams();
  const navigate  = useNavigate()

const ref=collection(db,"crops")



  const handelChange=(btnname)=>{
     setFatbtn(btnname)
  }


  useEffect(() => {

  //   const data = onSnapshot(ref, (doc) => {
  //     setCrops(doc.docs)
  //  });

    const setdata=async()=>{
     await console.log(cropdata);
    await  cropdata.map((onecrop) => {
        if (onecrop.data().cropname == params.id) {
            console.log(params.id);

          setCrop(onecrop.data())
        }
      })
    }
  setdata()
  }, [params.id])

  
  return (
    
    <div className='cropdecmain'>
        <Nav />
        {crop?<div>
        <div className="cropbanner">
        <img src={crop.bannerImageUrl[0]} alt=""></img>
        </div>

        <div className="cropcontent">
        <div className="cropheading">
          <h1>{crop.cropname}</h1>

          <div className="cropshortdec">
            <Icon icon="carbon:soil-moisture-field" width="26" height="26" />
            <h4>{crop.soiltype}</h4>
            <hr />
            <Icon icon="entypo:drop" color="#73c1fa" width="26" height="26" />
            <h4>{crop.irrigation}</h4>
            <hr />
            <Icon icon="bx:rupee" width="26" height="26"/>
            <h4> {crop.price}/kg</h4>
            <hr />
            <Icon icon="carbon:temperature-max" color="red" width="26" height="26" />
            <h4>{crop.temperature}°C</h4>
            <hr />
            <Icon icon="fluent:location-16-regular" width="26" height="26" />
            <h4>{crop.location}</h4>
          </div>


        </div>
            

          <div className="cropdecmain">
            <div className="cropdec">
              <h2>Description</h2>
              <p>{crop.description}</p>
           </div>

            <div className="usefulllink">
              <h2>Useful links</h2>
              <div className="link">
              <Icon icon="bi:link-45deg" width="23" height="23" />
              <a onClick={()=>navigate("/fertilizermarket")} style={{color:"blueviolet", textDecoration:"Underline",cursor:"pointer"}}>Buy fertilizers at lowest cost!!</a>
              </div>
              <div className="link">
              <Icon icon="bi:link-45deg" width="23" height="23" />
              <a onClick={()=>navigate("/cropmarket")} style={{color:"blueviolet", textDecoration:"Underline",cursor:"pointer"}}>Sell crops at attractive price!!</a>
              </div>
              <div className="link">
              <Icon icon="bi:link-45deg" width="23" height="23" />
              <a onClick={()=>navigate("/news")} style={{color:"blueviolet", textDecoration:"Underline",cursor:"pointer"}}>Read more about crop!!</a>
              </div>
            </div>
          </div>

          <div className="subcrop">
              <h2>Sub-Crops - Recommendation</h2>
              <div className="subcroplist">
                {crop.subcrops.map((scrop)=>(
                <Subcrop name={scrop}/>
                ))}
              </div>
          </div>

          <div className='varieties'> 
            <h2>Varieties</h2>
            <div className='varietieslist'>
              {crop.variety.map((varietie)=>(
              <Varieties name={varietie}/>

              ))}
            </div>
          </div>

          <div className='soilpreparation'>
            <h2>Soil Preparation</h2>
            <div className='soilpreparationlist'>
              {crop.soilPreparation.map((soil)=>(
              <Listdisplay  name={soil}/>
              ))}
            </div>
          </div>

          <div className='seeding'>
            <div className='seeding_heading'>
               <h2>Seeding</h2>
               <div className="link">
                <Icon icon="bi:link-45deg" width="23" height="23" />
                <a onClick={()=>navigate("/fertilizermarket")} style={{color:"blueviolet", textDecoration:"Underline",cursor:"pointer"}}>Buy Seeds at lowest cost!!</a>
              </div>
            </div>

            <div className='seedinglist'>
              {crop.seeding.map((seed)=>(
            <Listdisplay name={seed}/>
              ))}
            </div>
          </div>


          <div className='watermanagement'>
            <h2>Water management</h2>
            <div className='watermanagementlist'>
              {crop.waterManagement.map((water)=>(
              <Listdisplay name={water}/>
              ))}
            </div>
          </div>

          <div className='fertilizer'>
            <div className='fertilizer_heading'>
              <div className='heading_left'>
              <h2>Fertilizer management</h2>
              </div>
              <div className='heading_right'>
              <Icon icon="bi:link-45deg" width="23" height="23" />
              <a onClick={()=>navigate("/fertilizermarket")} style={{color:"blueviolet", textDecoration:"Underline",cursor:"pointer"}}>Buy fertilizers at lowest cost!!</a>
              </div>
            </div>

            <div className='fertilizerbtn'>
              <div className={fatbtn=='organicFertilizer'?'btnorg':'btnorgnot'} onClick={()=>handelChange("organicFertilizer")}><h4>Organic</h4> </div>
              <div className={fatbtn=='chemicalFertilizer'?'btnche':"btnchenot" }onClick={()=>handelChange("chemicalFertilizer")}><h4>Chemical</h4></div>
            </div>

            <div className='fertilizerlist'>
              {
              fatbtn=="organicFertilizer"?
              crop.organicFertilizer.map((ofer,i)=>(
              <Listwithheading  name={ofer} key={i}/>
              )):
              crop.chemicalFertilizer.map((ofer,i)=>(
                <Listwithheading  name={ofer} key={i}/>
                ))}
              </div>
          </div>

          <div className='disease'>
            <h2>Disease</h2>
            <div className='diseaseliat'>
              {crop.disease.map((d,i)=>(
            <Listwithheading name={d} key={i}/>
              ))}
            </div>
          </div>



          <div className='harvesting'>
            <h2>Harvesting</h2>
            <div className='harvestinglist'>
              {crop.harvesting.map((harvest)=>(
              <Listdisplay name={harvest}/>

              ))}
            </div>
          </div>

          <div className='video'>
            <h2>Related videos</h2>
            <div className='videolist'>
              {crop.youtubeLinks.map((id)=>(
                <Video embedId={id}/>
              ))}
               
            </div>
          </div>
        </div>
        </div>:<Loder/>}
    </div>
  )
}

export default Cropdec