import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { makeStyles } from "@mui/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { cartApi } from "../services/dataService";
const useStyle = makeStyles({
  newBox: {
    height: "24px",
    width: "24px",
    border: "1px solid lightgray",
  },
});

function CounterOne(props) {
  const classes = useStyle;

  return (
    <Box
      className={classes.mainBox}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className={classes.minus}>
        <RemoveIcon
          fontSize="medium"
          onClick={() => props.decreaseQuantity()}
          sx={{
            borderRadius: "40%",
            border: "1px solid lightGray",
            marginRight: "2px",
          }}
        />
      </div>

      <span
        sx={{ height: "50px", width: "50px", border: "1px solid red" }}
      >
        {props.count}
      </span>

      <div className={classes.minus}>
        <AddIcon
          onClick={() => props.incrementQuantity()}
          fontSize="medium"
          sx={{
            borderRadius: "40%",
            border: "1px solid lightGray",
            marginLeft: "3px",
          }}
        />
      </div>
    </Box>
  );
}

export default CounterOne;
