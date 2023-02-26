import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Rating from "@mui/material/Rating";
import InputBase from "@mui/material/InputBase";
import CounterOne from "./counterone";
import {
  addTocart,
  addToWishlist,
  cartApi,
  getcartList,
} from "../services/dataService";
import Header from "./Header";
import Footer from "./footer";

const useStyle = makeStyles({
  headerbsummary: {
    width: "90vw",
    height: "8vh",
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
    right: "10%",
    top: "10px",
  },
  homebook: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    left: "15px",
    top: "30px",
  },
  home: {
    color: "#9D9D9D",
    fontSize: "12px",
  },
  book: {
    color: "#0A0102",
    fontSize: "12px",
    position: "relative",
    left: "10px",
  },
  container3: {
    width: "70vw",
    height: "80vh",
    border: "0px solid red",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    position: "relative",
    right: "6%",
    marginTop: "60px",
  },
  container4: {
    width: "96%",
    height: "100%",
    border: "0px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  buttons: {
    width: "36%",
    height: "68%",
    border: "1px solid #D1D1D1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bookdetails: {
    width: "65%",
    height: "100%",
    border: "0px solid purple",
    display: "flex",
    justifyContent: "flex-end",
  },
  bookimg: {
    width: "78%",
    height: "88%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookbtn: {
    width: "100%",
    height: "10%",
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    top: "3px",
  },
  bookbtns: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addbag: {
    width: "45%",
    backgroundColor: "#A03037 !important",
    borderRadius: "0px",
  },
  addfav: {
    width: "45%",
    backgroundColor: "#333333 !important",
  },
  bookdetails1: {
    width: "93%",
    height: "95%",
    border: "0px solid orange",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  booktitle1: {
    fontSize: "25px",
    fontWeight: "500",
  },
  bookauthor1: {
    fontSize: "18px",
    color: "#878787",
  },
  bookpoints1: {
    width: "12%",
    height: "4%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookratings1: {
    width: "60%",
    height: "60%",
    backgroundColor: "#388E3C",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
  },
  bookquantity1: {
    width: "30%",
    color: "#878787",
    fontFamily: "normal normal normal Roboto",
    fontSize: "15px",
  },
  bookprice1: {
    width: "26%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookdiscount1: {
    fontWeight: "500",
    fontSize: "20px",
  },
  bookcost1: {
    position: "relative",
    right: "70px",
    color: "#878787",
    textDecorationLine: "line-through",
    fontSize: "14px",
  },
  bookparagraph: {
    width: "80%",
    height: "23%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  para1: {
    width: "100%",
    height: "55%",
    border: "0px solid blue",
    overflow: "hidden",
    textAlign: "justify",
  },
  paratext: {
    opacity: "0.7",
  },
  customerfeedback: {
    height: "5%",
    border: "0px solid blue",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    color: "#0A0102",
  },
  feedbackrating: {
    width: "80%",
    height: "25%",
    border: "0px solid red",
    backgroundColor: "#F5F5F5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  feedbackrate: {
    width: "95%",
    height: "86%",
    border: "0px solid pink",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  stars: {
    width: "10%",
    height: "22%",
  },
  inputbase: {
    width: "100%",
    height: "37%",
    backgroundColor: "white",
    textAlign: "left",
  },
  feedbackbutton: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
  },
  detail: {
    position: "relative",
    left: "2px",
  },
  round: {
    position: "relative",
    right: "2px",
  },
  new: {
    marginLeft: "40px",
  },
  overall: {
    fontSize: "14px",
    height: "18%",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]: {
    container3: {
      position: "relative",
      right: "80px",
      width: "100%",
    },
    container4: {
      position: "relative",

      width: "100%",
    },
    feedbackbutton: {
      display: "none",
    },
    buttons: {
      width: "80%",
    },
    bookcost1: {
      position: "relative",
      left: "15px",
    },
    bookratings1: {
      width: "250%",
      position: "relative",
      left: "6px",
    },
    bookquantity1: {
      position: "relative",
      left: "10px",
    },
    para1: {},
    paratext: {
      display: "none",
    },
    customerfeedback: {
      width: "90%",
      position: "relative",
      top: "30px",
    },
    feedbackrate: {
      width: "100%",
      position: "relative",
      right: "8px",
    },
    stars: {
      width: "90%",
    },
    overall: {
      position: "relative",
      left: "15px",
    },
    bookimg: {
      width: "120%",
    },
  },
});

function BookDetails(props) {
  const classes = useStyle();
  const [cartList, setCartlist] = useState([]);
  const[cartToggle,setCartToggle] = useState(false)

  const [cartObj, setcartObj] = useState(null);

  const incrementQuantity = () => {
    let data = {
      quantityToBuy: cartObj?.quantityToBuy + 1,
    };
    cartQuantity(data);
  };

  const decreaseQuantity = () => {
    let data = {
      quantityToBuy: cartObj?.quantityToBuy - 1,
    };
    cartQuantity(data);
  };

  const cartQuantity = (data) => {
    console.log(props.bookId);
    cartApi(cartObj._id, data)
      .then((response) => {
        console.log(response);
        getCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const openBook = () => {
    props.openBookBack();
  };

  const myCartDetails = () => {
    addToWishlist(props.bookId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToBag = () => {
    addTocart(props.bookId)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          getCart();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    if (cartList.length > 0) {
      const cart = cartList.filter(
        (item) => item.product_id._id === props.bookId
      );

      if (cart.length > 0) {
        setcartObj(cart[0]);
        setCartToggle(true)
      }
    }
  }, [cartList]);

  return (
    <Box>
      <Box className={classes.homebook}>
        <Box className={classes.home} onClick={() => openBook()}>
          Home
        </Box>
        <Box className={classes.book}>/ Book (01)</Box>
      </Box>

      <Box className={classes.container3}>
        <Box className={classes.container4}>
          <div className={classes.smallImg}>
            <img src="Image 46.png"></img>
            <img src="Image 1.png"></img>
          </div>
          <Box className={classes.buttons}>
            <Box className={classes.bookimg}>
              <img src="newBook.png" width="65%" height="65%" />
            </Box>
            <Box className={classes.bookbtn}>
              <Box className={classes.bookbtns}>
                {cartToggle ? (
                  <div className={classes.new}>
                  <CounterOne  

                    count={cartObj?.quantityToBuy}
                    incrementQuantity={incrementQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                </div>
                  
                ) : 
                  <Button
                    variant="contained"
                    className={classes.addbag}
                    sx={{ backgroundColor: "#A03037" }}
                    onClick={addToBag}
                  >
                    Add to Bag
                  </Button>
                }
               <Button
                  sx={{ minWidth: "99px" }}
                  onClick={myCartDetails}
                  variant="contained"
                  className={classes.addfav}
                >
                  Wishlist
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className={classes.bookdetails}>
            <Box className={classes.bookdetails1}>
              <Box className={classes.booktitle1}>
                <span>{props.bookName}</span>
              </Box>
              <Box sx={{ height: "1%" }}></Box>
              <Box className={classes.bookauthor1}>
                <span>{props.author}</span>
              </Box>
              <Box sx={{ height: "0.6%" }}></Box>
              <Box className={classes.bookpoints1}>
                <Box className={classes.bookratings1}>
                  <Box sx={{ fontSize: "12px" }}>4.5</Box>
                  <StarIcon fontSize="10px" sx={{ color: "white" }} />
                </Box>
                <Box className={classes.bookquantity1}>({props.quantity})</Box>
              </Box>
              <Box className={classes.bookprice1}>
                <Box className={classes.bookdiscount1}>
                  {props.discountPrice}
                </Box>
                <Box className={classes.bookcost1}>{props.price}</Box>
              </Box>

              <Box sx={{ width: "80%", position: "relative", top: "15px" }}>
                <Divider sx={{ borderBottomWidth: 1, width: "100%" }} />
              </Box>

              <Box className={classes.bookparagraph}>
                <Box className={classes.para1}>
                  <span
                    className={classes.detail}
                    style={{
                      color: "#878787",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      className={classes.round}
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#878787",
                      }}
                    ></Box>
                    Book Detail
                  </span>
                  <Box
                    className={classes.paratext}
                    sx={{
                      marginLeft: "1px",
                      fontSize: "12px",
                      opacity: "0.8",
                      marginTop: "8px",
                    }}
                  >
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labor irure dolor in
                    reprere Excepteur sint occaecat cupidatat"
                  </Box>
                </Box>
              </Box>

              <Box sx={{ width: "80%" }}>
                <Divider sx={{ borderBottomWidth: 1, width: "100%" }} />
              </Box>
              <Box className={classes.customerfeedback}>
                <span style={{ fontWeight: "500" }}>Customer Feedback</span>
              </Box>

              <Box className={classes.feedbackrating}>
                <Box className={classes.feedbackrate}>
                  <Box className={classes.overall}>Overall rating</Box>
                  <Box className={classes.stars}>
                    <Rating
                      sx={{ position: "relative", right: "4px", top: "3px" }}
                      defaultValue={0}
                      size="medium"
                      style={{ color: "black !important" }}
                      readOnly
                    />
                  </Box>

                  <Box className={classes.feedbackbutton}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "13%",
                        height: "82%",
                        textTransform: "capitalize",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BookDetails;
