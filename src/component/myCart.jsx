import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Header from "./Header";
import CustomerDetails from "./customerDetail";
import { useState } from "react";
import CounterOne from "./counterone";
import Order from "./orderSummery";
import { cartApi, getcartList, removeCart } from "../services/dataService";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { connect } from "react-redux";

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "200px",
  },
  firstBox: {
    padding: "18px 36px 18px 36px",
    border: "1px solid lightGray",
    width: "59%",
  },
  span: {
    font: "normal normal normal 18px/17px Lato",
    letterSpacing: "0px",
    color: " #0A0102",
    opacity: "1",
  },
  cartDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  address: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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

  bookauthor: {
    width: "63px",
    height: "8px",
    color: "#9D9D9D",
  },
  bookPrice: {
    display: "flex",
    flexDirection: "row",
    color: "#0A0102",
  },
  discount: {
    color: "#878787",
    fontSize: "14px",
    textDecorationLine: "line-through",
    marginLeft: "10px",
  },
  price: {
    textDecoration: " line-through",
    font: " normal normal normal 12px/15px Lato",
    letterSpacing: "0px",
    color: "#9D9D9D",
    opacity: "1",
  },
  cartcounter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },

  plus: {
    color: "gray",
  },
  remove: {
    fontSize: "12px",
    letterSpacing: "0px",
    color: " #0A0102",
    opacity: "1",

    height: "15px",
    position: "relative",
    left: "40px",
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
  },
  placeOder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    bottom: "40px",
  },

  secondBox: {
    width: "840px",
    height: "60px",
    border: "0.5px solid lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5px",
    marginTop: "10px",
  },
  thirdBox: {
  
    height: "60px",
    border: "0.5px solid lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5px",
    marginTop: "25px",
    marginBottom:"10px"
  },
  addressDetail: {
    font: "normal normal normal 15px/18px ",
    color: " #333232",
    opacity: "1",
  },
  orderBox: {
    font: "normal normal normal 15px/18px ",
    color: " #333232",
    opacity: "1",
  },
  img: {
    width: "65px",
    height: "85px",
  },
  homebook: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  home: {
    color: "#9D9D9D",
    fontSize: "12px",
  },
  book: {
    color: "#0A0102",
    fontSize: "12px",
  },
  counterDiv: {
    height: "10%",
    width: "40%",
  },
});

function Mycart() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showcustomerDetail, setShowcustomerDetail] = useState(false);

  const [showOrdersummery, setshowOrdersummery] = useState(false);

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

  const showpage = () => {
    setShowcustomerDetail(true);
  };

  const removeBook = (_id) => {
    removeCart(_id)
      .then((response) => {
        console.log(response);
        getCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const incrementQuantity = (bookId, count) => {
    let data = {
      quantityToBuy: count + 1,
    };
    cartQuantity(bookId, data);
  };

  const decreaseQuantity = (bookId, count) => {
    let data = {
      quantityToBuy: count - 1,
    };
    cartQuantity(bookId, data);
  };

  const cartQuantity = (bookId, data) => {
    cartApi(bookId, data)
      .then((response) => {
        getCart();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openBook = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <Header />
      <div className={classes.main}>
        <Box className={classes.homebook}>
          <Box className={classes.home} onClick={() => openBook()}>
            Home
          </Box>
          <Box className={classes.book}>/ My Cart</Box>
        </Box>
        <div className={classes.firstBox}>
          <div className={classes.cartDetails}>
            <div>
              <span className={classes.span}> My cart({cartList.length})</span>
            </div>
            <div className={classes.address}>
              <LocationOnIcon className={classes.icon} color="error" />
              <span className={classes.spans}>
                BridgeLabz Solutions LLP, No...
              </span>
            </div>
          </div>

          {cartList.map((book) => (
            <div className={classes.bookDetail}>
              <div className={classes.left}>
                <div className={classes.bookimg}>
                  <img className={classes.img} src="newBook.png"></img>
                </div>
              </div>
              <div className={classes.right}>
                <div className={classes.bookName}>
                  <span>{book.product_id.bookName}</span>
                </div>
                <div>
                  <span className={classes.bookauthor}>
                    {book.product_id.author}
                  </span>
                </div>
                <div className={classes.bookPrice}>
                  <div>
                    <span> Rs. {book.product_id.discountPrice} </span>
                  </div>

                  <div className={classes.discountPrice}>
                    <span className={classes.discount}>
                      {book.product_id.price}
                    </span>
                  </div>
                </div>
                <div className={classes.cartcounter}>
                  <div className={classes.counterDiv}>
                    <CounterOne
                      incrementQuantity={() =>
                        incrementQuantity(book._id, book.quantityToBuy)
                      }
                      decreaseQuantity={() =>
                        decreaseQuantity(book._id, book.quantityToBuy)
                      }
                      count={book.quantityToBuy}
                    />
                  </div>

                  <Button
                    onClick={() => removeBook(book._id)}
                    className={classes.remove}
                    size="small"
                  >
                    {" "}
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className={classes.placeOder}>
            <div>
              {showcustomerDetail ? null : (
                <Button
                  onClick={showpage}
                  className={classes.placeorderBtn}
                  variant="contained"
                >
                  Place Order
                </Button>
              )}
            </div>
          </div>
        </div>

        <div>
          {showcustomerDetail ? (
            ""
          ) : (
            <div>
              <div className={classes.secondBox}>
                <div>
                  <span className={classes.addressDetail}>Address Detail</span>
                </div>
              </div>
            </div>
          )}

          <div>
            {showcustomerDetail ? (
              <CustomerDetails
                onContinueclick={() => setshowOrdersummery(true)}
              />
            ) : null}

            {showOrdersummery ? (
              <Order />
            ) : (
              <div className={classes.thirdBox}>
                <div>
                  <span type="text" className={classes.orderBox}>
                    Order Summery
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default connect()(Mycart);
