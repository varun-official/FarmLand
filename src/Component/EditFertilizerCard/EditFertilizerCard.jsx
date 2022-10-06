import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React,{useState} from 'react'
import "./EditFertilizerCard.scss"
import { useUserAuth } from "../../context/UserAuthContext";
import {useNavigate} from 'react-router'



const EditFertilizerModel = ({open,onClose,data,id}) => {
    const[fertilizername,setFertilizername]=useState(data.name)
    const[fertilizerquantity,setFertilizerQuantity]=useState(data.quantity)
    const[fertilizerate,setFertilizerRate]=useState(data.mrp)
    const[fertilizerofferrate,setFertilizerOfferate]=useState(data.offerPrice)
    const[fertilizercat,setFertilizerCat]=useState(data.categori)
    const[fertilizertype,setFertilizertype]=useState(data.fertilizertype)
  const { addCropMarket,user,updateCropMarket,getCropMarket,updateFertilizerMarket,getFertilizerMarket } =useUserAuth();
  const navigate  = useNavigate()



  const handleChange = async() =>{

        const data={
            name:fertilizername,
            quantity:fertilizerquantity,
            mrp:fertilizerate,
            offerPrice:fertilizerofferrate,
            categori:fertilizercat,
            fertilizertype:fertilizertype,
        };
        updateFertilizerMarket(id,data);
        await getFertilizerMarket();
        setFertilizername("")
        setFertilizerQuantity("")
        setFertilizerRate("")
        setFertilizerOfferate("")
        setFertilizerCat("")
        setFertilizertype("")
        navigate("/fertilizermarket")
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
            <h2>Edit Fertilizer</h2>
            <TextField 
            label="Fertilizer Name" 
            variant="outlined" 
            sx={{width:"500px",}}
            value={fertilizername}
            onChange={(e)=>{setFertilizername(e.target.value)}}
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
                <MenuItem value={"Fertilizer"}>Fertilizere</MenuItem>
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
              <div className='savecrop' onClick={handleChange}>Update</div> 
            </div>
        </div>
        
    </div>
  )
}

export default EditFertilizerModel