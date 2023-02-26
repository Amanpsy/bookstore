import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box, IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Header from "./Header";
import { getWishList, removeWishList } from "../services/dataService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const useStyle = makeStyles({
  headerbsummary: {
    width: "90vw",
    height: "8vh",
    border: "0px solid red",
    display: "flex",
    alignItems: "center",
  },
  marginTop: "20px",
  homebook: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    left: "180px",
  },
  home: {
    color: "#9D9D9D",
    fontSize: "12px",
  },
  wishlist: {
    color: "#0A0102",
    fontSize: "12px",
    position: "relative",
    left: "4px",
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "",
    width: "75vw",
    height: "80vh",
    marginLeft: "9vw",
    marginTop: "-15px",
    border: "0px solid lightgray",
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    width: "70vw",
    height: "5vh",
    fontSize: "20px",
    marginLeft: "40px",
    marginTop: "20px",
    backgroundColor: "#F5F5F5",
    
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "40px",
    marginTop: "20px",
    border: "",
  },
  item2: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
 
  },
  row3: {
    marginTop: "10px",
    display: "flex",
    alignItems: "flex-start",
  },
  bookcost: {
    color: "#878787",
    textDecorationLine: "line-through",
    fontSize: "14px",
    marginLeft: "10px",
    marginTop: "1px",
  },
  
  trash: {
  position:"relative",
  left:"120%"
   
  },
  span: {
    marginRight: "30px",
  },
});

function Wishlist() {
  const classes = useStyle();
  const navigate = useNavigate()
  const [books, setbooks] = useState([]);

  useEffect(() => {
    getWishList()
      .then((response) => {
        console.log(response);
        setbooks(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeWishlistApi = (id) => {
    removeWishList(id)
      .then((response) => {
        console.log(response);
        getWishList()
        .then((response) => {
          console.log(response);
          setbooks(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openBook = () => {
    navigate('/dashboard')
}

  return (
    <div>
      <Header />

      <Box className={classes.headerbsummary}>
        <Box className={classes.homebook}>
          <Box className={classes.home} onClick={() => openBook()}>Home /</Box>
          <Box className={classes.wishlist}> My Wishlist </Box>
        </Box>
      </Box>
      <Box className={classes.Container}>
        <div className={classes.row1}>My Wishlist(12)</div>
        {books.map((book) => (
          <div className={classes.row2}>
            <div>
              <img src="Image 11.png" alt="book" width="100px" />
            </div>
            <div className={classes.item2}>
              <b className={classes.span}>{book?.product_id?.bookName} </b>
              <div className={classes.row3}>{book?.product_id?.author}</div>
              <div className={classes.row3}>
              {book?.product_id?.discountPrice}
                <span className={classes.bookcost}>{book?.product_id?.price}</span>
              </div>
              <div className={classes.trash}>
              <IconButton 
                onClick={() => removeWishlistApi(book?.product_id?._id)}
                
              >
                <DeleteOutlinedIcon className={classes.trash} sx={{ height: "18px" }} />
              </IconButton>
              </div>
            </div>
          </div>
        ))}
      </Box>
      
    </div>
    

  );
}

export default Wishlist;
