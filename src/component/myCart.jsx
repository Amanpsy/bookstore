import React from "react";
import { makeStyles } from "@mui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Header from "./Header";
import CustomerDetails from "./customerDetail";
import { useState } from "react";
import CounterOne from "./counterone";
import Order from "./orderSummery";

const useStyles = makeStyles({
  main: {
    height: "250vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "top",
    paddingLeft:"13%",
    paddingTop:'20px'
  },
  secondMain:{
    height: "200%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: '1'
  },
  firstBox: {
    height: "12%",
    width: "774px",
    border: "1px solid lightGray",
    
  },
  span: {
    font: "normal normal normal 14px/17px Lato",
    letterSpacing: "0px",
    color: " #0A0102",
   
  },
  cartDetails: {
    display: "flex",
    justifyContent: "space-between",
  },
  span: {
    padding: "20px 0px 0px 50px",
    position: "relative",
    top: "12px"
  },
  spans: {
    position: "relative",
    top: "15px",
    right: "5px",
  },
  bookDetail: {
    height: "90%",
    width: "50%",
    position: "relative",
    top: "30px",
    left: "60px",
    display: "flex",
  },
  bookimg: {

    position: "relative",
    top: "4px",
 
  },
  bookName: {
    position: "relative",
    left: "70px",
  },
  bookauthor: {
    width: "63px",
    height: "8px",
    color: "#9D9D9D",
    position: "relative",
    left: "46px",
  },
  bookPrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#0A0102",
    position: "relative",
    left: "70px",
    top: "20px",
  },
  discount: {
    color: "#878787",
    right: "85px",
    position: "relative",
    fontSize: "8px",
    textDecorationLine: "line-through",
  },
  price: {
    textDecoration: " line-through",
    font: " normal normal normal 12px/15px Lato",
    letterSpacing: "0px",
    color: "#9D9D9D",
    opacity: "1",
    right: "30px",
    position: "relative",
  },
  cartcounter: {
    left: "100px",
    position: "relative",
    top: "30px",
    display: "flex",
  },

  plus: {
    position: "relative",

    color: "gray",
  },
  remove: {
    left: "50px",
    position: "relative",
    font: "normal normal normal 12px/15px Lato",
    letterSpacing: "0px",
    color: " #0A0102",
    opacity: "1",
    width: "42px",
    height: "15px",
  },
  cartValue: {
    font: "normal normal medium 14px/17px Lato",
    letterSpacing: "0px",
    color: " #333232",
    opacity: "1",
  },
  plusDiv: {
    width: "20px",
    height: "20px",
    border: "1px solid FFFDD0",
    left: "25px",
    position: "relative",
  },
  placeOder: {
   position:'relative',
   left: "280px",
  },
  
  secondBox: {
  marginTop:"20px",
  width: "774px",
    height: "60px",

   display:"flex",
   alignContent:"flex-start",

  },
  thirdBox: {
    
    height: "60px",

    marginTop: "5px",
    width: "774px",
    display:"flex",
   alignContent:"flex-start",
   
  },
  addressDetail: {
    font: "normal normal normal 15px/18px ",
    color: " #333232",
    opacity: "1",
    paddingLeft:"25px"
  },
  orderBox: {
    font: "normal normal normal 15px/18px ",
    color: " #333232",
    opacity: "1",
    paddingLeft:"25px"
  },
  img:{
    width: "65px",
height: "85px",
  }
});

function Mycart() {
  const classes = useStyles();

  const [showcustomerDetail, setShowcustomerDetail] = useState(false);

const [showOrdersummery,setshowOrdersummery] = useState(false);  

  const showpage = () => {
    setShowcustomerDetail(true);
  };


  

  return (
    <div>
      <Header />
      <div className={classes.main}>
      <div className={classes.secondMain}>
        <div className={classes.firstBox}>
          <div className={classes.cartDetails}>
            <div>
              <span className={classes.span}>My Cart(1)</span>
            </div>
            <div>
              <LocationOnIcon
                className={classes.icon}
                color="error"
                sx={{ position: "relative", top: "20px" }}
              />
              <span className={classes.spans}>
                BridgeLabz Solutions LLP, No...
              </span>
            </div>
          </div>

          <div className={classes.bookDetail}>
            <div className={classes.left}>
              <div className={classes.bookimg}>
                <img className={classes.img} src="newBook.png"></img>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.bookName}>
                <span>Dont make me think</span>
              </div>
              <div>
                <span className={classes.bookauthor}>by Steve Krug</span>
              </div>
              <div className={classes.bookPrice}>
                <div>
                  <span className={classes.bookactualPrice}> Rs. 1500</span>
                </div>
                <div className={classes.discountPrice}>
                  <span className={classes.price}>Rs.2000</span>
                </div>
              </div>
              <div className={classes.cartcounter}>
                <div>
                  <span className={classes.cartValue}>1</span>
                </div>
                <div className={classes.plusDiv}>
                  <span className={classes.plus}>+</span>
                </div>
                <div>
                  <span className={classes.remove}>Remove</span>
                </div>
              </div>
              <div className={classes.placeOder}>
              <div>
                <Button
                  onClick={showpage}
                  className={classes.placeorderBtn}
                  variant="contained"
                  
                >
                  Place Order
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div> {showcustomerDetail ? (
          ""
        ) : (
          <div>
            {" "}
            
            <div className={classes.secondBox}>
            <div>
              <span className={classes.addressDetail}>Address Detail</span>
              </div>
            </div>
            <div className={classes.thirdBox}>
            <div>
              <span type="text" className={classes.orderBox}>
                Order Summery
              </span>{" "}
              </div>
            </div>{" "}
          </div>
        )}
            <div>
        {showcustomerDetail ? <CustomerDetails  onContinueclick={() => setshowOrdersummery(true)}   /> : ""}

          {showOrdersummery ? <Order/> : ""}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
