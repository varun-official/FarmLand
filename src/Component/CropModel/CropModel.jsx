import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React,{useState} from 'react'
import "./CropModelstyle.scss"
import { useUserAuth } from "../../context/UserAuthContext";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import {v4} from "uuid";
import {storage} from "../../config/firebase"
import {useNavigate} from 'react-router'



const CropModel = ({open,onClose,type}) => {

  const[btnclick,setBtnclick] = useState(false)

  const[cropname,setCropname]=useState("")
  const[image,setImage]=useState()
  const[quantity,setQuantity]=useState("")
  const[rate,setRate]=useState("")
  const[offerrate,setOfferate]=useState("")
  const[requiredtype,setRequiredtype]=useState("")
  const[croptype,setCroptype]=useState("")

  const[fertilizername,setFertilizername]=useState("")
  const[fertilizerimage,setFertilizerImage]=useState()
  const[fertilizerquantity,setFertilizerQuantity]=useState("")
  const[fertilizerate,setFertilizerRate]=useState("")
  const[fertilizerofferrate,setFertilizerOfferate]=useState("")
  const[fertilizercat,setFertilizerCat]=useState("")
  const[fertilizertype,setFertilizertype]=useState("")




  const { addCropMarket,user,addFertilizerMarket,getCropMarket,getFertilizerMarket } =useUserAuth();
  const navigate  = useNavigate()



  const handleChangefertilizer = async() =>{
    if(fertilizerimage==null)return;
    setBtnclick(true)
    const imageRef=ref(storage,`market/${fertilizerimage.name+v4()}`);

    await uploadBytes(imageRef,fertilizerimage).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then(url =>{
        const data={
          url:url,
          name:fertilizername,
          quantity:fertilizerquantity,
          mrp:fertilizerate,
          offerPrice:fertilizerofferrate,
          categori:fertilizercat,
          fertilizertype:fertilizertype,
          owner:user.shop,
          location:user.location
        };
        addFertilizerMarket(data)
      })
    });
    await getFertilizerMarket()
    setFertilizername("")
    setFertilizerImage(null)
    setFertilizerQuantity("")
    setFertilizerRate("")
    setFertilizerOfferate("")
    setFertilizerCat("")
    setFertilizertype("")
    setBtnclick(false)

    navigate("/fertilizermarket")
    onClose()
  }


  const handleChange = async() =>{
    if(image==null)return;
    setBtnclick(true)
    const imageRef=ref(storage,`market/${image.name+v4()}`);
    await uploadBytes(imageRef,image).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then(url =>{
        const data={
          url:url,
          name:cropname,
          quantity:quantity,
          reamining:quantity,
          mrp:rate,
          offerPrice:offerrate,
          requiredtime:requiredtype,
          croptype:croptype,
          owner:user.shop,
          location:user.location

        };
        addCropMarket(data)
      })
    });
    await getCropMarket()
    setCropname("")
    setImage(null)
    setQuantity("")
    setRate("")
    setOfferate("")
    setRequiredtype("")
    setCroptype("")
    setBtnclick(false)
    onClose()
  }





    if(!open) return null
  return (
    <div onClick={onClose} className='overlaycrop'>
      {type=="fertilizer"?
      <div onClick={(e)=>{
            e.stopPropagation()
        }} className='modelcontainercrop'>
            <div className='btncover'>
            <p onClick={onClose} className="closebtn">X</p>
            </div>
            <div className='modelbody'> 
            <h2>Add Fertilizer</h2>
            <TextField 
            label="Fertilizer Name" 
            variant="outlined" 
            sx={{width:"500px",}}
            value={fertilizername}
            onChange={(e)=>{setFertilizername(e.target.value)}}
            />
            <TextField   accept="image/*"
             InputLabelProps={{ shrink: true }}
             label="Fertilizer Image"
             multiple
             type="file" 
             sx={{width:"500px", marginTop:"20px"}}
             onChange={(event)=>{setFertilizerImage(event.target.files[0])}}
             />
            <TextField  
            label="Quantity per bag" 
            variant="outlined" 
            sx={{width:"500px", marginTop:"20px"}}
            value={fertilizerquantity}
            onChange={(e)=>{setFertilizerQuantity(e.target.value)}}
            />
            <TextField  
            label="Market Rate of Fertilizer" 
            variant="outlined" 
            sx={{width:"500px", marginTop:"20px"}}
            value={fertilizerate}
            onChange={(e)=>{setFertilizerRate(e.target.value)}}
            />
            <TextField  
            label="offer Rate" 
            variant="outlined" 
            sx={{width:"500px", marginTop:"20px"}}
            value={fertilizerofferrate}
            onChange={(e)=>{setFertilizerOfferate(e.target.value)}}
            />

            <FormControl sx={{width:"500px", marginTop:"20px"}}>
            <InputLabel id="demo-simple-select-label" >Categorie</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={fertilizercat}
                onChange={(e)=>{setFertilizerCat(e.target.value)}}
                >
                <MenuItem value={"Fertilizer"}>Fertilizer</MenuItem>
                <MenuItem value={"Seeds"}>Seeds</MenuItem>
                <MenuItem value={"Pestisides"}>Pestisides</MenuItem>
                <MenuItem value={"Equipment"}>Equipment</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{width:"500px", marginTop:"20px"}}>
            <InputLabel id="demo-simple-select-label" >Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={fertilizertype}
                onChange={(e)=>{setFertilizertype(e.target.value)}}
                >
                <MenuItem value={"Organic"}>Organic</MenuItem>
                <MenuItem value={"Chemical"}>Chemical</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                <MenuItem value={"With subsidy"}>With subsidy</MenuItem>
                <MenuItem value={"Without subsidy"}>Without subsidy</MenuItem>

                </Select>
            </FormControl>

            </div>

            <div className='cropsave'>
              <div className={!btnclick?'savecrop':'savecropdisable'} onClick={handleChangefertilizer}>Save</div> 
            </div>
        </div> :
        <div onClick={(e)=>{
          e.stopPropagation()
      }} className='modelcontainercrop'>
          <div className='btncover'>
          <p onClick={onClose} className="closebtn">X</p>
          </div>
          <div className='modelbody'> 
          <h2>Add Crop</h2>

          <TextField 
          label="Crop Name" 
          variant="outlined" 
          sx={{width:"500px"}}
          value={cropname}
          onChange={(e)=>{setCropname(e.target.value)}}
          />
          <TextField   accept="image/*"
           InputLabelProps={{ shrink: true }}
           label="Crop Image"
           multiple
           type="file" 
           sx={{width:"500px", marginTop:"20px"}}
           onChange={(event)=>{setImage(event.target.files[0])}}
           />
          <TextField  
          label="Quantity" 
          variant="outlined" 
          sx={{width:"500px", marginTop:"20px"}}
          value={quantity}
          onChange={(e)=>{setQuantity(e.target.value)}}
          />
          <TextField  
          label="Market Rate" 
          variant="outlined" 
          sx={{width:"500px", marginTop:"20px"}}
          value={rate}
          onChange={(e)=>{setRate(e.target.value)}}
          />
          <TextField  
          label="Supplier Rate" 
          variant="outlined" 
          sx={{width:"500px", marginTop:"20px"}}
          value={offerrate}
          onChange={(e)=>{setOfferate(e.target.value)}}
          />

          <FormControl sx={{width:"500px", marginTop:"20px"}}>
          <InputLabel id="demo-simple-select-label" >Required Time</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={requiredtype}
              onChange={(e)=>{setRequiredtype(e.target.value)}}
              >
              <MenuItem value={"Required Instant"}>Required Instant</MenuItem>
              <MenuItem value={"Required after 2 days"}>Required after 2 days</MenuItem>
              <MenuItem value={"Required after week"}>Required after week</MenuItem>
              </Select>
          </FormControl>

          <FormControl sx={{width:"500px", marginTop:"20px"}}>
          <InputLabel id="demo-simple-select-label" >Type</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={croptype}
              onChange={(e)=>{setCroptype(e.target.value)}}
              >
              <MenuItem value={"Vegitable"}>Vegetable</MenuItem>
              <MenuItem value={"Fruits"}>Fruits</MenuItem>
              <MenuItem value={"Grain"}>Grain</MenuItem>
              <MenuItem value={"Daily Need"}>Daily Need</MenuItem>

              </Select>
          </FormControl>

          </div>

          <div className='cropsave'>
            <div className={!btnclick?'savecrop':'savecropdisable'} onClick={handleChange}>Save</div> 
          </div>
      </div>
        }
        
        
    </div>
  )
}

export default CropModel