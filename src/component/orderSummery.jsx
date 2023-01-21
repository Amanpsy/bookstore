import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, IconButton } from '@mui/material';
import Header from './Header';
import Button from "@mui/material/Button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const useStyle = makeStyles({
  
    Container: {
        height:"100vh",
        width:"100vw",
       
    },
    row2: {
        display: 'flex',
        flexDirection: 'row',
        height: "237px",
        border:"1px solid lightGray",
        width: "774px",
        marginTop:"1px",
        position:"relative",
    
    },
    item2: {
        display: 'flex',
        flexDirection: 'column',
        position:"relative",
        left:"20px",
        top:"47px",
        
        
    },
    row3: {
        marginTop: '10px',
        display: 'flex',
        alignItems: 'flex-start'
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
        marginLeft: '10px',
        marginTop: '1px'
    },
    row4: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '45vw',
        marginTop: '10px',
        height: '30px'
    },
  
    imgBox:{
        position:"relative",
        top:"50px"
    },orderSummery:{
        position:"relative",
        left:"42px",
        top:"10px"
    },
   
   passTime:{
    display:"flex",
    justifyContent:"space-around",
    
   },
   Checkout:{
    position:"relative",
        top:"150px",
        left:"84%",
        
   },
   box:{
    display:"flex",
   position:"relative", 
   right:"50px",
   top:'20px'
   }

})


function Order() {
    const classes = useStyle()

    const navigate =useNavigate();
 const openOrderSucess = () =>{
    navigate('/orderSucessful')
 }
 
   
    return (
        <Box>
            
            
            <Box className={classes.Container}>
              
                        <div className={classes.row2}  sx={{position:"relative", right:'50px'}}>
                         
                        <div>
                        <span className={classes.orderSummery}><b>Order Summery</b></span>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.imgBox}>
                                <img src="Image 11.png" alt='book' width="100px" />
                            </div>
                            <div className={classes.passTime}>
                            <div className={classes.item2}>
                                <b>Game of thrones</b>
                                <div className={classes.row3}>
                                    by stephan king
                                </div>
                                <div className={classes.row3}>
                                    Rs. 1500
                                    <span className={classes.bookcost}>Rs.2000</span>

                                </div>
                              
                            </div>
                           
                            </div>
                            <div className={classes.Checkout}>
                            <Button  
                            className={classes.checkoutBtn} onClick={openOrderSucess}
                            variant="contained" sx={{backgroundColor: "#3371B5 ",borderRadius:"2px",font: "normal normal  12px/20px "  , width:"140%"}} 
                            
                          >
                            Checkout
                          </Button>
                            </div>
                           
                        </div>
                        </div>
            </Box>
        </Box>
    )
}

export default Order