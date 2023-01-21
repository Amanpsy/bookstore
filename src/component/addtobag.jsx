
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { addTocart } from '../services/dataService'
const useStyles = makeStyles({
    main:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },
    addbag:{
        width: "45%",
        
        borderRadius: "0px",
    }
})



function Addtobag() {


  

  const addToBag = (_id) =>{
    addTocart(_id).then((response) => {
        console.log(response)
         
    }).catch((error) => {
        console.log(error)
    })
}



    const classes = useStyles

    return (
      <div>
        <div className={classes.main}>
          <Button
          onClick={addToBag}
          

            variant="contained"
            className={classes.addbag} sx={{ backgroundColor: "#A03037" }}
          >
            Add to Bag
          </Button>
        </div>
      </div>
    )
  }

export default Addtobag