import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { signupApi } from "../../services/userService";

const fnameRegex =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
const useremailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const userpasswordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^[6-9]{1}[0-9]{9}$/;

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "5px",
  },

  forms: {
    display: "flex",
    flexDirection: "column",
  },
  nametexts: {
    width: "100%",
  },
  emailtexts: {
    width: "100%",
  },
  passwordtexts: {
    width: "100%",
  },
  numbertexts: {
    width: "100%",
  },
  texttitles: {
    textAlign: "left !important",
    fontSize: "10px",
  },
  signuptexts: {
    width: "100%",
    position: "relative",
    top: "5px",
    backgroundColor: "#A03037 !important",
  },
});

function SignupForm() {
  const [signupObj, setSignupObj] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [regexObj, setRegexobj] = useState({
    fullnameBorder: false,
    fullnameHelper: "",
    usernameBorder: false,
    usernameHelper: "",
    passwordBorder: false,
    passwordHelper: "",
    phoneBorder: false,
    phoneHelper: "",
  });

  const takeFullname = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      fullName: event.target.value,
    }));
    console.log(signupObj);
  };
  const takeUsername = (event) => {
    console.log({email: event.target.value });
    setSignupObj((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  
  };

  const takePassword = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
    console.log(signupObj);
  };

  const takeMobilenumber = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      phone: event.target.value,
    }));
    console.log(signupObj);
  };

    const submit = () => {
    console.log(signupObj);
    let fullnameTest = fnameRegex.test(signupObj.fullName);
    let usernameTest = useremailRegex.test(signupObj.email);
    let passwordTest = userpasswordRegex.test(signupObj.password);
    let mobilenoTest = phoneRegex.test(signupObj.phone);
    if (fullnameTest === false) {
      setRegexobj((prevState) => ({
        ...prevState,
        fullnameBorder: true,
        fullnameHelper: "Enter valid name",
      }));
    } else if (fullnameTest === true) {
      setRegexobj((prevState) => ({
        ...prevState,
        fullnameBorder: false,
        fullnameHelper: "",
      }));
    }

    if (usernameTest === false) {
      setRegexobj((previousState) => ({
        ...previousState,
        usernameBorder: true,
        usernameHelper: "Enter valid email",
      }));
    } else if (usernameTest === true) {
      setRegexobj((previousState) => ({
        ...previousState,
        usernameBorder: false,
        usernameHelper: "",
      }));
    }

    if (passwordTest === false) {
      setRegexobj((previousState) => ({
        ...previousState,
        passwordBorder: true,
        passwordHelper: "Enter valid password",
      }));
    } else if (passwordTest === true) {
      setRegexobj((previousState) => ({
        ...previousState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if (mobilenoTest === false) {
      setRegexobj((previousState) => ({
        ...previousState,
        phoneBorder: true,
        phoneHelper: "Enter valid number",
      }));
    } else if (mobilenoTest === true) {
      setRegexobj((previousState) => ({
        ...previousState,
        phoneBorder: false,
        phoneHelper: "",
      }));
    }
    

    if (
      fullnameTest === true &&
      usernameTest === true &&
      passwordTest === true &&
      mobilenoTest === true
    ) {
      signupApi(signupObj)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("created");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.forms}>
        <Box className={classes.texttitles}>
          <span>Full Name</span>
          <TextField
            className={classes.nametexts}
            variant="outlined"
            size="small"
            onChange={takeFullname}
            error={regexObj.fullnameBorder}
            helperText={regexObj.fullnameHelper}
          />
        </Box>
        <Box className={classes.texttitles}>
          <span>Email Id</span>
          <TextField
            className={classes.emailtexts}
            variant="outlined"
            size="small"
            onChange={takeUsername}
            error={regexObj.usernameBorder} helperText={regexObj.usernameHelper}
          />
        </Box>
        <Box className={classes.texttitles}>
          <span>Password</span>
          <TextField
            className={classes.passwordtexts}
            variant="outlined"
            size="small"
            onChange={takePassword}
            error={regexObj.passwordBorder}
            helperText={regexObj.passwordHelper}
          />
        </Box>
        <Box className={classes.texttitles}>
          <span>Mobile Number</span>
          <TextField
            className={classes.numbertexts}
            variant="outlined"
            size="small"
            onChange={takeMobilenumber}
            error={regexObj.phoneBorder}
            helperText={regexObj.phoneHelper}
          />
        </Box>
        <Box className={classes.texttitles}>
          <Button
            className={classes.signuptexts}
            variant="contained"
            onClick={submit}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default SignupForm;
