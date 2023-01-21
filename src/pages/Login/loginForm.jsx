import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import { loginApi } from "../../services/userService";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
   
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
  },
  texttitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  texttitle1: {
    backgroundColor: "red",
  },
  forgetDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgetPasswordtext: {
    textAlign: "left",
    font: "normal normal normal 8px/10px Roboto",
    letterSpacing: "0px",
    color: "#9D9D9D",
    opacity: "1",
  },
  loginbutton1: {
    backgroundColor: " #A03037",
    
  },  ortext :{
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      fontWeight: "bold",
     marginTop:"10px",
     marginBottom:"10px"
    },
    fbgoogle:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"

    },
    fb:{
      flex: "1"
    },
    google:{
      flex: "1"
    },
    name:{
      fontSize:"11px"
    },
    pass:{
      fontSize:"11px"
    },
    emailtext:{
      padding: "8.5px 57px"
    }

  
});

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function LoginForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [signObj, setSignobj] = useState({
    email: " ",
    password: " ",
  });

  const [regexObj, setRegexobj] = useState({
    emailBorder: false,
    emailHelper: " ",
    passwordBorder: false,
    passwordHelper: " ",
  });
  const takeEmail = (event) => {
    console.log(event.target.value);
    setSignobj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    console.log(event.target.value);

    setSignobj((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const loginSucessful = () => {
    console.log(signObj);
    let checkEmail = emailRegex.test(signObj.email);
    let checkPassword = passwordRegex.test(signObj.password);
    if (checkEmail === true) {
      setRegexobj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    } else if (checkEmail === false) {
      setRegexobj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter valid email",
      }));
    }

    if (checkPassword === true) {
      setRegexobj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    } else if (checkPassword === false) {
      setRegexobj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter valid passsword",
      }));
    }

    if (checkEmail === true && checkPassword === true) {
      loginApi(signObj)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.result.accessToken);
          navigate('/dashboard')
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Login sucessful");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <div className={classes.texttitle}>
          <span className={classes.name}>Email ID</span>

          <TextField
            className="emailtext"
            onChange={takeEmail}
            error={regexObj.emailBorder}
            helperText={regexObj.emailHelper}
            variant="outlined"
            size="small"
            sx={{ width: "280px" }}
          />
        </div>
        <div className={classes.texttitle}>
          <span className={classes.pass}>Password</span>
          <TextField
            className={classes.passwordtext}
            onChange={takePassword}
            error={regexObj.passwordBorder}
            helperText={regexObj.passwordHelper}
            variant="outlined"
            size="small"
            sx={{ width: "280px" }}
          />
        </div>

        <div className={classes.forgetDiv}>
          <Button className={classes.forgetPasswordbtn}>
            <span className={classes.forgetPasswordtext}>Forget Password</span>
          </Button>
        </div>

        <Button
          className={classes.loginbutton1}
          variant="contained" sx={{backgroundColor: "#A03037 ",font: "normal normal  12px/20px " }} 
          onClick={loginSucessful}
        >
          Login
        </Button>
        <Box className={classes.ortext}>
          <Divider sx={{ borderBottomWidth: 3, width: "40%" }} />
          OR <Divider sx={{ borderBottomWidth: 3, width: "40%" }} />
        </Box>
        <div className={classes.fbgoogle}>
          <div className={classes.fb}>
            <Button variant="contained">FaceBook</Button>
          </div>
          <div className={classes.google}>
            <Button variant="text">google</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
