import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React,{useState} from 'react'
import "./EditCropCardstyle.scss"
import { useUserAuth } from "../../context/UserAuthContext";
import {useNavigate} from 'react-router'



const EditCropModel = ({open,onClose,data,id}) => {

  const[btnclick,setBtnclick] = useState(false)

  const[cropname,setCropname]=useState(data.name)
  const[image,setImage]=useState()
  const[quantity,setQuantity]=useState(data.quantity)
  const[rate,setRate]=useState(data.mrp)
  const[offerrate,setOfferate]=useState(data.offerPrice)
  const[requiredtype,setRequiredtype]=useState(data.requiredtime)
  const[croptype,setCroptype]=useState(data.croptype)





  const { addCropMarket,user,updateCropMarket,getCropMarket,updateFertilizerMarket } =useUserAuth();
  const navigate  = useNavigate()



  const handleChange = async() =>{
    setBtnclick(true)

        const data={
          name:cropname,
          quantity:quantity,
          mrp:rate,
          offerPrice:offerrate,
          requiredtime:requiredtype,
          croptype:croptype,
        };
        updateCropMarket(id,data);
        await getCropMarket();
    setCropname("")
    setImage(null)
    setQuantity("")
    setRate("")
    setOfferate("")
    setRequiredtype("")
    setCroptype("")
    setBtnclick(true)
    navigate("/cropmarket")
    onClose()
  }





    if(!open) return null
  return (
    <div onClick={onClose} className='editoverlay'>
        <div onClick={(e)=>{
            e.stopPropagation()
        }} className='editmodelcontainer'>
            <div className='btncover'>
            <p onClick={onClose} className="closebtn">X</p>
            </div>
            <div className='modelbody'> 
            <TextField 
            label="Crop Name" 
            variant="outlined" 
            sx={{width:"500px"}}
            value={cropname}
            onChange={(e)=>{setCropname(e.target.value)}}
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
                <MenuItem value={"Vegitable"}>Vegitable</MenuItem>
                <MenuItem value={"Fruits"}>Furutes</MenuItem>
                </Select>
            </FormControl>

            </div>

            <div className='cropsave'>
              <div className={!btnclick?'savecrop':'savecropdisable'} onClick={handleChange}>Update</div> 
            </div>
        </div>
        
    </div>
  )
}

export default EditCropModel