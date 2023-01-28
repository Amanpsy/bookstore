import React from 'react'
import { Pagination } from '@mui/material'


  const Paginations = ({  paginate, page ,count }) => {

    const handleChange = (event, value) => {
      paginate(value);
    };



  return (
    <nav>
    
    <Pagination
    style={{display :"flex", justifyContent:"center"}}
        count={count}
        color="secondary"
        variant="outlined"
        onChange={handleChange} 
        page={page}
     />
    
    </nav>
  )
}

export default Paginations