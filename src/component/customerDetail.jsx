import { makeStyles } from "@mui/styles";
import React from "react";
import { Box, Button, Card, Radio, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { addAddress } from "../services/dataService";
import { Navigate, useNavigate } from "react-router-dom";
import Order from "./orderSummery";
import Footer from "./footer";

const useStyle = makeStyles({
  containercd: {
    width: "850px",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "80px",
    top: "20px",
    border: "1px solid #DCDCDC",
  },
  maindetails: {
    border: "0px solid red",
    width: "92%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    top: "20px",
  },
  maincd: {
    width: "100%",
    height: "8%",
    border: "0px solid red",
    display: "flex",
    justifyContent: "space-between",
  },
  customerdetails: {
    color: "#333232",
    fontSize: "20px",
    fontWeight: "500",
    position: "relative",
    left: "10px",
  },
  newadd: {
    width: "20%",
  },
  detailscontent: {
    width: "95%",
    height: "80%",
    border: "0px solid red",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
  },
  maintextfields: {
    width: "72%",
    height: "92%",
    border: "0px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputcd: {
    width: "100%",
    height: "18%",
    display: "flex",
    justifyContent: "space-between",
    border: "0px solid blue",
  },
  textcd: {
    textAlign: "left !important",
    width: "49%",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
  },
  addressdetail: {
    width: "100%",
    height: "30%",
    border: "0px solid red",
    textAlign: "left !important",
    fontSize: "12px",
  },
  address: {
    width: "100%",
    height: "100%",
  },
  radiobuttons: {
    width: "60%",
    height: "14%",
    border: "0px solid red",
    textAlign: "left",
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px 64px 0px 0px",
  },
  continuebutton: {
    width: "100%",
    height: "10%",
    border: "0px solid red",
    display: "flex",
    justifyContent: "flex-end",
  },
  radiobutton1: {
    marginTop: "18px",
  },
});

function CustomerDetails(props) {
  const classes = useStyle();

  const fnameRegex =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

  const phoneRegex = /^[6-9]{1}[0-9]{9}$/;

  const stateRegex = /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;

  const cityRegex = /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;

  const [regexObj, setRegexobj] = useState({
    fnameBorder: false,
    fnameHelper: "",
    addressBorder: false,
    addressHelper: "",
    stateBorder: false,
    stateHelper: "",
    phoneBorder: false,
    phoneHelper: "",
    cityBorder: false,
    cityHelper: "",
  });

  const [continuebutton, setContinueButton] = useState(false);

  const [customerDetails, setCustomerDetails] = useState({
    fullAddress: "",
    addressType: "",
    city: "",
    state: "",
    fullName: "",
    mobile: "",
  });

  const takeAddress = (event) => {
    setCustomerDetails((prevState) => ({
      ...prevState,
      fullAddress: event.target.value,
    }));
  };
  const takeCity = (event) => {
    setCustomerDetails((prevState) => ({
      ...prevState,
      city: event.target.value,
    }));
  };
  const takeType = (event) => {
    setCustomerDetails((prevState) => ({
      ...prevState,
      addressType: event.target.value,
    }));
  };
  const takeState = (event) => {
    setCustomerDetails((prevState) => ({
      ...prevState,
      state: event.target.value,
    }));
  };

  const takeName = (event) => {
    setCustomerDetails((prevState) => ({
      ...prevState,
      fullName: event.target.value,
    }));
  };
  const takeMobilenumber = (event) => {
    setCustomerDetails((prevState) => ({
      ...prevState,
      mobile: event.target.value,
    }));
  };

  

  const submit = () => {
    console.log(customerDetails);
    let fnameTest = fnameRegex.test(customerDetails.fullName);
    let mobilenoTest = phoneRegex.test(customerDetails.mobile);
  
    let cityTest = cityRegex.test(customerDetails.city);
    let stateTest = stateRegex.test(customerDetails.state);

    if (fnameTest === false) {
      setRegexobj((prevState) => ({
        ...prevState,
        fnameBorder: true,
        fnameHelper: "Enter valid name",
      }));
    } else if (fnameTest === true) {
      setRegexobj((prevState) => ({
        ...prevState,
        fnameBorder: false,
        fnameHelper: "",
      }));
    }

  

   

    if (mobilenoTest === false) {
      setRegexobj((previousState) => ({
        ...previousState,
        phoneBorder: true,
        phoneHelper: "Enter valid mobile number",
      }));
    } else if (mobilenoTest === true) {
      setRegexobj((previousState) => ({
        ...previousState,
        phoneBorder: false,
        phoneHelper: "",
      }));
    }

    if (stateTest === false) {
      setRegexobj((previousState) => ({
        ...previousState,
        stateBorder: true,
        stateHelper: "Enter valid State",
      }));
    } else if (stateTest === true) {
      setRegexobj((previousState) => ({
        ...previousState,
        stateBorder: false,
        stateHelper: "",
      }));
    }


    if (cityTest === false) {
      setRegexobj((previousState) => ({
        ...previousState,
        cityBorder: true,
        cityHelper: "Enter valid city",
      }));
    } else if (cityTest === true) {
      setRegexobj((previousState) => ({
        ...previousState,
        cityBorder: false,
        cityHelper: "",
      }));
    }




    if (
      fnameTest === true &&
      cityTest === true &&
      stateTest === true &&
      mobilenoTest === true
    ) {
      addAddress(customerDetails)
        .then((response) => {
          console.log(response, "Customer details added sucessfully");
          setContinueButton(true);
          props.onContinueclick();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Card className={classes.containercd}>
        <Box className={classes.maindetails}>
          <Box className={classes.maincd}>
            <Box className={classes.customerdetails}>Customer Details</Box>
            <Box className={classes.newadd}>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  color: "#A03037",
                  border: "1px solid #A03037",
                  textTransform: "capitalize",
                  padding: "0px",
                }}
              >
                Add New Address
              </Button>
            </Box>
          </Box>
          <Box className={classes.detailscontent}>
            <Box className={classes.maintextfields}>
              <Box className={classes.inputcd}>
                <Box className={classes.textcd}>
                  <span>Full Name</span>
                  <TextField
                    onChange={takeName}
                    error={regexObj.fnameBorder}
                    helpertext={regexObj.fnameHelper}
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box className={classes.textcd}>
                  <span>Mobile Number</span>
                  <TextField
                    onChange={takeMobilenumber}
                    error={regexObj.phoneBorder}
                    helpertext={regexObj.phoneBorder}
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
              <Box className={classes.addressdetail}>
                <Box className={classes.address}>
                  <span>Address</span>
                  <TextField
                    variant="outlined"
                    size="large"
                    onChange={takeAddress}
                    error={regexObj.addressBorder}
                    helpertext={regexObj.addressHelper}
                    sx={{ width: "100%", height: "80%" }}
                  />
                </Box>
              </Box>
              <Box className={classes.inputcd}>
                <Box className={classes.textcd}>
                  <span>city</span>
                  <TextField
                    variant="outlined"
                    size="small"
                    onChange={takeCity}
                 error={regexObj.cityBorder}
                 helpertext= {regexObj.cityHelper}
                  />
                </Box>
                <Box className={classes.textcd}>
                  <span>State</span>
                  <TextField
                    variant="outlined"
                    size="small"
                    onChange={takeState}
                    error={regexObj.stateBorder}
                    helpertext={regexObj.stateHelper}
                  />
                </Box>
              </Box>
              <Box className={classes.radiobuttons}>
                <span className={classes.radiobutton1}>Type</span>
                <Box className={classes.radiobuttons} onChange={takeType}>
                  <div>
                    <FormControlLabel
                      value="Home"
                      name="Type"
                      control={<Radio />}
                      label="Home"
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      value="Office"
                      name="Type"
                      control={<Radio />}
                      label="Office"
                    />
                  </div>
                  <div>
                    <FormControlLabel
                      value="other"
                      name="Type"
                      control={<Radio />}
                      label="Other"
                    />
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          {continuebutton ? (
            ""
          ) : (
            <Box className={classes.continuebutton}>
              <Button
                sx={{ width: "23%", height: "80%" }}
                variant="contained"
                onClick={submit}
              >
                Continue
              </Button>
            </Box>
          )}
        </Box>
      </Card>
    </div>
  );
}

export default CustomerDetails;
