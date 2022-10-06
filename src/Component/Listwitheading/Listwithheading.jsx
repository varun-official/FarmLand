import React, { useEffect, useState } from 'react'
import './Listwithheadingstyle.scss'

function Listwithheading({name}) {
  const[heading,setHeading]=useState("");
  const[body,setBody]=useState("");

  useEffect(()=>{
    for(var key in name)
    {
      if(name.hasOwnProperty(key))
      {
        setHeading(key);
        setBody(name[key])
      }
    }
  },[name])

  console.log("next");
  return (
    <div className='listheadingmain'>
      <div className='listbox'>
      <h3>{heading}</h3>
      <p>{body}</p>
      </div>

    </div>
  )
}

export default Listwithheading