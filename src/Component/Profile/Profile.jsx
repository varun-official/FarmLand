import React from 'react'
import Nav from '../nav/Nav'
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'

import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile_main'>
        <Nav/>

        <div className='profile_owner'>
            <div className='profile_owner_details'>
                <h1>Profile</h1>
                <div className='details'>
                <TextField 
                label="User Name" 
                variant="outlined" 
                sx={{width:"650px",}}
                />
                                <TextField 
                label="Phone Number" 
                variant="outlined" 
                sx={{width:"650px",marginLeft:"200px"}}
                />
                </div>
                <div className='details'>
                <TextField 
                label="Password" 
                variant="outlined" 
                sx={{width:"650px",}}
                />
                                <TextField 
                label="Location" 
                variant="outlined" 
                sx={{width:"650px",marginLeft:"200px"}}
                />
                </div>
            </div>




        </div>
    </div>
  )
}

export default Profile