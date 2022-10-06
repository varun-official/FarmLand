import React from 'react'
import "./Marketcategoriesstyle.scss"

const Marketcategories = ({name,categori,setCategori}) => {
  return (
    <div className={name===categori?"marketvarietiesmainactive":'marketvarietiesmain'} onClick={()=>setCategori(name)}>
    <h5>{name}</h5>    
     </div>
  )
}

export default Marketcategories