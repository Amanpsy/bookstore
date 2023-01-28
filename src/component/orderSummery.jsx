import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, IconButton } from "@mui/material";
import Header from "./Header";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder, getcartList } from "../services/dataService";
import { useEffect } from "react";
import { positions } from "@mui/system";

const useStyle = makeStyles({
  Container: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightGray",
    width: "778px",
    justifyContent:'center',
    alignItems:"flex-start",
    padding:"18px 36px 18px 36px",
    marginTop:"40px"
  },
  bookDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "10px 0px ",
    
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "25px",

  },
  item2: {
    display: "flex",
    flexDirection: "column",
    
  },
  row3: {
    marginTop: "10px",
    display: "flex",
    alignItems: "flex-start",
    marginLeft: "0px",
    position:"relative",
    left:"15px"
  },
  bookcost: {
    color: "#878787",
    textDecorationLine: "line-through",
    fontSize: "14px",
    marginLeft: "10px",
    marginTop: "1px",
  },
  row4: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "45vw",
    marginTop: "10px",
    
  },

  imgBox: {
  
  },
  orderSummery: {

    position:"relative",
    right:"30px"
  },

  
  Checkout: {
   display:"flex",
   flexDirection:"row",
   justifyContent:'flex-end',
   alignItems:"center",
   position:"relative",
   left: "83%",
   bottom: "20px"
  },
  box: {
    display: "flex",
   
  },
  authorbook: {
    marginRight: "5px",
  },
  
});

function Order() {
  const classes = useStyle();

  const navigate = useNavigate();

  const [cartList, setCartlist] = useState([]);

  const getCart = () => {
    getcartList()
      .then((response) => {
        console.log(response);
        setCartlist(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  const orderSucess = () => {
    const data = {
      orders: cartList.map((product) => ({
        product_id: product._id,
        product_name: product.product_id.bookName,
        product_quantity: product.product_id.quantity,
        product_price: product.product_id.discountPrice,
      })),
    };
    console.log("order sucessful", data);
    addOrder(data)
      .then((response) => {
        console.log(response);
        navigate("/orderSucessful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
      <Box className={classes.Container}>
        <div  className={classes.newDIv}>
          <div>
            <span className={classes.orderSummery}>
              <b>Order Summery</b>
            </span>
          </div>

          {cartList.map((order) => (
            <div className={classes.bookDetail}>
              <div className={classes.imgBox}>
                <img src="Image 11.png" alt="book" width="100px" />
              </div>
              <div className={classes.right}>
                <div className={classes.item2}>
                  <b className={classes.authorbook}>
                    {order.product_id.bookName}
                  </b>
                  <div className={classes.authorbook}>{order.product_id.author}</div>
                  <div className={classes.row3}>
                    Rs.{order.product_id.discountPrice}
                    <span className={classes.bookcost}>
                      {order.product_id.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className={classes.Checkout}>
            <Button
              className={classes.checkoutBtn}
              onClick={orderSucess}
              variant="contained"
              sx={{
                backgroundColor: "#3371B5 ",
                borderRadius: "2px",
                font: "normal normal  12px/20px ",
               
              }}
            >
              Checkout
            </Button>
          </div>
       
      </Box>
   
  );
}

export default Order;
