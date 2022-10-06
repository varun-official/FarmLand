import React, { useState } from 'react'
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import {v4} from "uuid";
import {storage} from "../../config/firebase"
import { useUserAuth } from "../../context/UserAuthContext";


export const AddMarketplace = () => {
    const[image,setImage]=useState("")
    const[name,setName]=useState("");
    const[mrp,setMrp]=useState(0);
    const[offerPrice,setOfferPrice]=useState(0)
    const[quantity,setQuntity]=useState(0)
    const { addCropMarket} =useUserAuth();

    

const handleChange=()=>{
  if(image==null)return;
  const imageRef=ref(storage,`market/${image.name+v4()}`);
  uploadBytes(imageRef,image).then((snapshot)=>{
    getDownloadURL(snapshot.ref).then(url =>{
      const data={
        cropImageurl:url,
        name:name,
        mrp:mrp,
        offerPrice:offerPrice,
        quantity:quantity,
        requirement:"instant",
        vegOrFruit:"veg",
        ownerName:"Default",
        ownerImageUrl:""
      };
      addCropMarket(data)
    

    })
  

  });
 

    
}

  return (
    <div style={{display:"flex", flexDirection:"column", width:"200px", margin:"100px"}}>
        <input type="file" onChange={(event)=>{setImage(event.target.files[0])}}/>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} name={name} placeholder="Crop Name"/>
        <input type="text" onChange={(e)=>{setMrp(e.target.value)}} name={mrp} placeholder="Crop Acutal price"/>
        <input type="text" onChange={(e)=>{setOfferPrice(e.target.value)}} name={offerPrice} placeholder="Crop offer price"/>
        <input type="text" onChange={(e)=>{setQuntity(e.target.value)}} name={quantity} placeholder="Required quantity"/>

        <button onClick={handleChange}>Add to Market</button>

    </div>
  )
}
