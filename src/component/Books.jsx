import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({

    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center"
    },
    main2: {
        width: '16vw',
        height: '36vh',
        border: '2px solid #D3D3D3',
        display: 'flex',
        flexDirection: 'column',
       
    },
    bookimage: {
        width: '100%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookimg: {
        width: '80%',
        height: '100%',
    },
    bookimage2: {
        width: '45%',
        height: '90%',
     position:"relative",
     top:"15px"

    },
    bookdetail: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"20px"
    },
    booktext: {
        width: '85%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        lineHeight: '1.5'
    },
    booktitle: {
    
        fontWeight: '500',
        fontFamily: 'normal normal normal 14px/19px Roboto',
        color: '#0A0102',
    },
    bookauthor: {
   
        color: '#878787',
        fontFamily: 'normal normal normal 10px/13px Roboto',
        lineHeight: '1.5'
    },
    bookdetail1: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        lineHeight: '1.5'
        

    },
    bookratings: {
        width: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
      
    },
    mark: {
        width: '20%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '14px',
    },
    bookprice: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        
    },
    bookdiscount: {
        fontWeight: '500',
        fontSize: '12px',
        
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '12px',
        marginRight:"30px"
    
    },
})

function Books(props) {

    const book = props.book

    const classes = useStyle()
    return (
        <div className={classes.container}>
            <Paper elevation={1} className={classes.main2}>
                <Box className={classes.bookimage}>
                    <Box className={classes.bookimage2}>
                        <img className={classes.bookimg} src="Image 11.png" /></Box>
                </Box>
                <Box className={classes.bookdetail}>
                    <Box className={classes.booktext}>
                        <Box className={classes.booktitle}>
                        <span>{book.bookName}</span>
                        </Box>
                        <Box className={classes.bookauthor}>
                        <span>{book.author}</span></Box>
                        <Box className={classes.bookdetail1}>
                            <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '12px' }}>
                                <span></span></Box>
                                <StarIcon fontSize="16px" sx={{ color: 'white' }} />
                            </Box>
                            <Box className={classes.mark}>
                            
                            </Box>
                        </Box>
                        <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}>
                            <span>{book.discountPrice}</span></Box>
                            <Box className={classes.bookcost}>
                            <span>{book.price}</span></Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </div>
    )
}

export default Books