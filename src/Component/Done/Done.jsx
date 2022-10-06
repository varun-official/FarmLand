import React from 'react'
import done from '../../assets/image/done.gif'
import {useNavigate} from 'react-router'
import { useParams } from "react-router-dom";


const Done = ({value,open,onCancel}) => {
    const navigate = useNavigate()


    const handelclose = async() =>{
        navigate('/cropmarket')
        onCancel()
    }
    if(!open) return null
  return (
<></>
  )
}

export default Done