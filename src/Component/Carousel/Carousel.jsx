import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import main_banner_1 from '../../assets/image/main_banner_1.jpg'
import main_banner_2 from '../../assets/image/main_banner_2.jpg'
import main_banner_3 from '../../assets/image/main_banner_3.jpg'
import main_banner_4 from '../../assets/image/main_banner_4.jpg'
import main_banner_5 from '../../assets/image/main_banner_5.jpg'
import main_banner_6 from '../../assets/image/main_banner_6.jpg'
import crop_banner_1 from '../../assets/image/crop_banner_1.jpg'
import crop_banner_2 from '../../assets/image/crop_banner_2.jpg'
import crop_banner_3 from '../../assets/image/crop_banner_3.jpg'
import fertilizer4 from '../../assets/image/fertilizer4.jpg'
import crop_banner_5 from '../../assets/image/crop_banner_5.jpg'






import paddy from '../../assets/image/paddy.jpg'
import "./Carousel.scss"


const CarouselList = ({type}) => {
  return (
    <Carousel showArrows={false} autoPlay showStatus={false}  showThumbs={false} infiniteLoop>
        {type=="main"?         <div>
            <img src={main_banner_1} alt="" />
            <div className="insidediv">
            <h1 style={{marginTop:"80px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat',fontStyle:"normal"}}>Crops</h1>
            <h2 style={{marginTop:"10px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat',fontStyle:"normal"}}>of the </h2>
            <h1 style={{marginTop:"10px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat',fontStyle:"normal"}}>Year</h1>
            <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat',fontStyle:"normal"}}>2021</h1>
            </div>

        </div>:
                <div>
                <img src={crop_banner_1} alt="" />
                <div className="insidedivcrop">
                <h1 style={{marginTop:"50px",color:"white", fontSize:"48px",fontWeight:"700",fontStyle:"normal",fontFamily:'Montserrat'}}>Badam Puri</h1>
                <h1 style={{marginTop:"20px",color:"white", fontSize:"48px",fontWeight:"800",fontStyle:"normal",fontFamily:'Montserrat'}}>₹ <span style={{color:"#F9D923"}}>89</span>/ Kg</h1>

                </div>
    
            </div>
        }
       {type=="main"?
               <div>
               <img src={main_banner_2} alt="" />
               <div className="insidediv">
               <h1 style={{marginTop:"80px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat'}}>Crops</h1>
               <h2 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat'}}>that grown more </h2>
               <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat'}}>in Year</h1>
               <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat'}}>2021</h1>
               </div>
   
           </div>
       : <div>
       <img src={crop_banner_2} alt="" />
       <div className="insidedivcrop" style={{width:"450px"}}>
       <h1 style={{marginTop:"50px",color:"white", fontSize:"48px",fontWeight:"700",fontStyle:"normal",fontFamily:'Montserrat',marginLeft:"25px"}}>​Honeycrisp Apple</h1>
       <h1 style={{marginTop:"20px",color:"white", fontSize:"48px",fontWeight:"800",fontStyle:"normal",fontFamily:'Montserrat'}}>₹ <span style={{color:"#F9D923"}}>129</span>/ Kg</h1>

       </div>

   </div>}
{type=='main'?
        <div>
        <img src={main_banner_3} alt="" />

        <div className="insidediv">
        <h1 style={{marginTop:"80px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat'}}>Crops</h1>
        <h2 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat'}}>of the </h2>
        <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat'}}>Year</h1>
        <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat'}}>2021</h1>
        </div>

    </div>
:

    <div>
       <img src={crop_banner_3} alt="" />
       <div className="insidedivcrop" style={{width:"450px"}}>
        <h1 style={{marginTop:"50px",color:"white", fontSize:"48px",fontWeight:"700",fontStyle:"normal",fontFamily:'Montserrat',marginLeft:"25px"}}>​Tender Coconut</h1>
        <h1 style={{marginTop:"20px",color:"white", fontSize:"48px",fontWeight:"800",fontStyle:"normal",fontFamily:'Montserrat'}}>₹ <span style={{color:"#F9D923"}}>40</span>/ pc</h1>
       </div>

   </div>
}
{type=="main"?
    <div>
        <img src={main_banner_5} alt="" />
        <div className="insidediv">
        <h1 style={{marginTop:"80px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat'}}>Price Drop</h1>
        <h2 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat'}}>Maha</h2>
        <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"36px",fontWeight:"500",fontFamily:'Montserrat'}}>Sale</h1>
        <h1 style={{marginTop:"20px",color:"rgba(20, 74, 5, 1)", fontSize:"48px",fontWeight:"700",fontFamily:'Montserrat'}}>of the Year</h1>
        </div>
    </div>
:
<div>
<img src={crop_banner_5} alt="" />
<div className="insidedivcrop" style={{width:"400px"}}>
 <h1 style={{marginTop:"50px",color:"white", fontSize:"48px",fontWeight:"700",fontStyle:"normal",fontFamily:'Montserrat',marginLeft:"25px"}}>​Pomegranate</h1>
 <h1 style={{marginTop:"20px",color:"white", fontSize:"48px",fontWeight:"800",fontStyle:"normal",fontFamily:'Montserrat'}}>₹ <span style={{color:"#F9D923"}}>149</span>/ Kg</h1>
</div>

</div>

}

    
    </Carousel>
  )
}

export default CarouselList