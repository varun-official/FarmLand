import React,{useState} from 'react'
import "./Addcrop.scss"
import TextField from '@mui/material/TextField';
import Nav from '../nav/Nav';
import { useUserAuth } from "../../context/UserAuthContext";

const Addcrop = () => {
  const { addCrop} =useUserAuth();
    const[cropname,setCropname]=useState("")

    const[cropweather,setCropweather]=useState("")
    const[cropirr,setCropirr]=useState("")
    const[croptemp,setCroptemp]=useState("")
    const[croploc,setCroploc]=useState("")

    const[cropdec,setCropdec]=useState("")

    const[cropsub1,setCropsub1]=useState("")
    const[cropsub2,setCropsub2]=useState("")
    const[cropsub3,setCropsub3]=useState("")
    const[cropsub4,setCropsub4]=useState("")

    const[cropvar1,setCropvar1]=useState("")
    const[cropvar2,setCropvar2]=useState("")
    const[cropvar3,setCropvar3]=useState("")
    const[cropvar4,setCropvar4]=useState("")
    const[Imageurl,setimage]=useState("")
   
    const handelchange = async() =>{

      const data={
        cropname:cropname,
        soiltype:cropweather,
        irrigation:cropirr,
        temperature:croptemp,
        cropImageUrl:Imageurl,
        subcrops:[cropsub1,cropsub2,cropsub3,cropsub4],
        description:cropdec,
        location:croploc,
        variety:[cropvar1,cropvar2,cropvar3,cropvar4]
      }
      await addCrop(data);
    }

  return (
    <div className='addcontanier'>
        <Nav/>
        <h1>CrowdSourcing</h1>
        <div className='textinput'>
        <input type="text" placeholder='CropName' style={{width: "700px"}} value={cropname} onChange={(e)=>setCropname(e.target.value)} />
        </div>
        <div className='multiinput'>
        <input type="text" placeholder='Weather Type' style={{width: "300px"}} value={cropweather} onChange={(e)=>setCropweather(e.target.value)} />
        <input type="text" placeholder='Irrigation Type' style={{width: "300px", marginLeft:"100px"}} value={cropirr} onChange={(e)=>setCropirr(e.target.value)} />
        </div>
        <div className='multiinput'>
        <input type="text" placeholder='Temprature Required' style={{width: "300px"}} value={croptemp} onChange={(e)=>setCroptemp(e.target.value)}/>
        <input type="text" placeholder='Location' style={{width: "300px", marginLeft:"100px"}} value={croploc} onChange={(e)=>setCroploc(e.target.value)}/>
        </div>
        <div className='textinput'>
        <textarea type="text" placeholder='Crop Description' style={{width: "700px",fontSize:"16px", padding:"20px"}} rows="10" value={cropdec} onChange={(e)=>setCropdec(e.target.value)} />
        </div>
        <div className='multiinput'>
        <input type="text" placeholder='SubCrops Recommendation 1'  style={{width: "300px"}} value={cropsub1} onChange={(e)=>setCropsub1(e.target.value)} />
        <input type="text" placeholder='SubCrops Recommendation 2' style={{width: "300px", marginLeft:"100px"}} value={cropsub2} onChange={(e)=>setCropsub2(e.target.value)}/>
        </div>
        <div className='multiinput'>
        <input type="text" placeholder='SubCrops Recommendation 3' style={{width: "300px"}} value={cropsub3} onChange={(e)=>setCropsub3(e.target.value)} />
        <input type="text" placeholder='SubCrops Recommendation 4' style={{width: "300px", marginLeft:"100px"}} value={cropsub4} onChange={(e)=>setCropsub4(e.target.value)}/>
        </div>
        
        <div className='multiinput'>
        <input type="text" placeholder='Varieties 1'  style={{width: "300px"}} value={cropvar1} onChange={(e)=>setCropvar1(e.target.value)}/>
        <input type="text" placeholder='Varieties 2' style={{width: "300px", marginLeft:"100px"}} value={cropvar2} onChange={(e)=>setCropvar2(e.target.value)}/>
        </div>
        <div className='multiinput'>
        <input type="text" placeholder='Varieties 3' style={{width: "300px"}} value={cropvar3} onChange={(e)=>setCropvar3(e.target.value)}/>
        <input type="text" placeholder='Varieties 4' style={{width: "300px", marginLeft:"100px"}} value={cropvar4} onChange={(e)=>setCropvar4(e.target.value)}/>
        </div>
        <div className='textinput'>
        <input type="text" placeholder='ImageUrl' style={{width: "700px"}} value={Imageurl} onChange={(e)=>setimage(e.target.value)} />
        </div>

        <div className='submitbtn' onClick={()=>handelchange()}>
            <h4>Submit</h4>

        </div>

    </div>
  )
}

export default Addcrop