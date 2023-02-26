import React from 'react'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
main:{
    height:"45px",
    border:"1px solid red",
    backgroundColor:"#2E1D1E",
  
    
},spanBox:{
   display:"flex",
   flexDirection:'row',
   

},
span:{
paddingTop:"15px",
color:"#FFFFFF",
fontSize: "12px",
paddingLeft:"251px"
}

})
function Footer() {

   
    const classes = useStyles();
  return (
    
    <div className={classes.main}>
    
    <div className={classes.spanBox}>
    <span className={classes.span}> 
    Copyright © 2020, Bookstore Private Limited. All Rights Reserved
    </span>
    </div>
    
    </div>
  )
}

export default Footer