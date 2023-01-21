import { makeStyles } from "@mui/styles";
import React from "react";
import { Box, Button, Card, Radio, TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { addAddress } from "../services/dataService";
import { Navigate, useNavigate } from "react-router-dom";


const useStyle = makeStyles({
  containercd: {
    width: "774px",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "1px",
    border: "2px solid #DCDCDC",
  },
  maindetails: {
    border: "0px solid red",
    width: "92%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
    position:"relative",
    left:"10px"
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
    padding: "5px 64px 0px 0px"
  },
  continuebutton: {
    width: "100%",
    height: "10%",
    border: "0px solid red",
    display: "flex",
    justifyContent: "flex-end",
  },
  radiobutton1:{
    marginTop:"18px"
  }
});

function CustomerDetails(props) {
  const classes = useStyle();


  const [continuebutton, setContinueButton] = useState(false);

  const [customerDetails, setCustomerDetails] = useState({
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
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

  const openOrderDetails = () => {
    addAddress(customerDetails)
      .then((response) => {
        console.log(response, "getting cx details");
        setContinueButton(true)
        props.onContinueclick();
      })
      .catch((error) => {
        console.log(error);
      });
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
                  padding:"0px"
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
                  <TextField variant="outlined" size="small" />
                </Box>
                <Box className={classes.textcd}>
                  <span>Mobile Number</span>
                  <TextField variant="outlined" size="small" />
                </Box>
              </Box>
              <Box className={classes.addressdetail}>
                <Box className={classes.address}>
                  <span>Address</span>
                  <OutlinedInput
                    variant="outlined"
                    size="small"
                    onChange={takeAddress}
                    sx={{ width: "100%", height: "80%" }}
                  />
                </Box>
              </Box>
              <Box className={classes.inputcd}>
                <Box className={classes.textcd}>
                  <span>city/town</span>
                  <TextField
                    variant="outlined"
                    size="small"
                    onChange={takeCity}
                  />
                </Box>
                <Box className={classes.textcd}>
                  <span>State</span>
                  <TextField
                    variant="outlined"
                    size="small"
                    onChange={takeState}
                  />
                </Box>
              </Box>
              <Box
                className={classes.radiobuttons}
                
              >
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
          <Box className={classes.continuebutton}>
            {continuebutton ? null : (
              <Button
                sx={{ width: "23%", height: "80%" }}
                variant="contained"
               onClick={openOrderDetails}
              >
                Continue
              </Button>
            )}
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default CustomerDetails;
