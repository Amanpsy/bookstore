import React from 'react'
import { Pagination } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
page:{
  display:"flex",
  justifyContent:"center",
alignItems:"center",
marginTop:"10px",
marginBottom:"10px"
}
})

  const Paginations = ({  paginate, page ,count }) => {

    
    const handleChange = (event, value) => {
      paginate(value);
    };

const classes = useStyle();

  return (
    <nav className={classes.page}>
    
    <Pagination
   
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