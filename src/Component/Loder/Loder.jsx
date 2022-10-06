import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loder = () => {
  return (
    <div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress size={60}  sx={{color:"#F9D923"}} />
      </Backdrop>
    </div>
  )
}

export default Loder