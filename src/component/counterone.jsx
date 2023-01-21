import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { makeStyles } from "@mui/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartApi } from "../services/dataService";
const useStyle = makeStyles({
  

  displayBox: {
    borderRadius: "2px",
    opacity: "1",
  },
  mainBox:{
  display:'flex',
  justifyContent:"center",
  alignItems:"center"
  }
});

function CounterOne(props) {
  const classes = useStyle;
 




const cartQuantity = () =>{
cartApi(props.bookId) .then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});


}


  return (
   <div>
    <Box className={classes.mainBox} sx={{
    
  display:"flex", alignItems:"center", justifyContent:"center", width:"70%", position:'relative', bottom:"5px" }}>
        <div onClick={props.decrement} className={classes.minus}>
          <RemoveIcon 
            sx={{
              width: "40%",
              height: "50%",
              borderRadius: "40%",
            
              border:'1px solid lightGray'
            }}
          />
        </div>

        <div className={classes.displayBox}>
          <span>{props.count}</span>
        </div>

        <div  onClick={props.increment} className={classes.minus}>
          <AddIcon 
            fontSize="small"
            sx={{
              width: "40%",
              height: "50%",
              borderRadius: "40%",
              border:'1px solid lightGray'
           
            }}
          />
        </div>
        </Box>
        </div>
  );
}

export default CounterOne;
