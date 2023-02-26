import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { loginApi } from "../../services/userService";
import { makeStyles } from "@mui/styles";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

const useStyles = makeStyles({
  mainDiv: {
    width: "100vw",
    height: "100vh",
    border: "1px solid red",
    background: "grey 0% 0% no-repeat padding-box",
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-evenly"
    
  },
  Left: {
    marginTop:"140px",
    width: "40%",
    height: "53%",
    background: " #F5F5F5 ",
    borderRadius: "21px",
    zIndex: "1",
    position:"relative",
    left:"180px"
  },
  Right: {
    marginTop:"120px",
    width: "389px",
    height: "425px",
    background: "#FFFFFF ",
    position:"relative",
    right:"280px",
    border: " 1px solid #E4E4E4",
    zIndex: "2",
  },
  img: {
    position: "relative",
    width: "19vw",
    height: "37vh",
    marginLeft: "-20%",
    marginTop: "-10px",
  },
  imgDiv: {
    position: "relative",
    width: "40%",
    height: "60%",
    marginLeft: " 9%",
    marginTop: "55px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    padding:"0px 42px 0px 22px"
  },
  loginbutton: {
    fontSize: "20px !important",
    fontWeight: " eight bold",
    color: "grey !important",
    width: "40%",
  },
  signupbutton: {
    fontSize: "20px !important",
    fontWeight: "eight bold",
    color: "black !important",
    width: "40%",
    position: "relative",
    left: "15px",
  },
  form: {
    width: "99%",
    height: "86%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    position: "relative",
    right: "-18px",
    bottom: "20px",
    font: " normal normal normal 10px/13px Roboto",
    letterSpacing: "0px",
    color: "#0A0102",
    textTransform: "capitalize",
    opacity: "1",
  },

  emailtext: {
    marginTop: "20px",
    width: "100%",
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E2E2E2",
    borderRadius: "2px",
    marginRight: "20px",
  },
  texttitle: {
    fontSize: "10px",
    marginTop: "28px",
  },

  passwordtext: {
    width: "58%",
    position: "relative",
    bottom: "120px",
    background: " #FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "2px",
  },
  pass: {
    position: "relative",
    right: "-18px",
    bottom: "135px",
    font: " normal normal normal 10px/13px Roboto",
    letterSpacing: "0px",

    textTransform: "capitalize",
    opacity: "1",
    borderRadius: "2px",
  },
  texttitle1: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    color: "gray !important",
    fontSize: "8px !important",
    position: "relative",
    left: "85px",
    bottom: "70px",
  },
  loginbutton1: {
    width: "100%",
    backgroundColor: " #A03037 !important",
    position: "relative",
    bottom: "115px",
  },
  ortext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontWeight: "bold",
    position: "relative",
    bottom: "88px",
  },
  fbgoogle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fb: {
    position: "relative",
    bottom: "25px",
  },
  google: {
    position: "relative",
    bottom: "25px",
  },
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]:{
    mainDiv:{
      width:"100%",
      position:"relative",
      
    },
    Left:{
      width:"40%",
      position:"relative",
      right:"20px"
    },
    Right:{
      width:"40%",
      position:"relative",
      right:"20px"
    }
  }
});



function Login()
 {
  const [showForm, setShowForm] = useState("login");

  const onLoginclick = () => {
    setShowForm("login");
    
  };
  const onSignupClick = () => {
    setShowForm("signup");
  };

  

  const classes = useStyles();
  


  return (
    <div className={classes.mainDiv}>
      <div className={classes.Left}>
        <div className={classes.imgDiv}>
          <img className={classes.img} src="download.png" alt="error"></img>
        </div>
      </div>
      <div className={classes.Right}>
        <div className={classes.buttons}>
          <Button onClick={onLoginclick}  variant="text" className={classes.loginbutton}>
            LOGIN
          </Button>
          <Button
            variant="text"
            className={classes.signupbutton}
            onClick={onSignupClick}
          >
            SIGNUP
          </Button>
        </div>
        {showForm === "login" ? <LoginForm /> : <SignupForm />}

      </div>
    </div>
  );
}

export default Login;
