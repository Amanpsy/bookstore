import React, { useEffect } from "react";
import Header from "../../component/Header";
import { makeStyles } from "@mui/styles";
import Books from "../../component/Books";
import { getBookList } from "../../services/dataService";
import { useState } from "react";
import { padding } from "@mui/system";

const useStyle = makeStyles({
  container: {
   flex :"1",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  text: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    width:"100%",
    padding:" 15px 0px 15px 0px ",
    
  },
  bookspan: {
   
    font: "normal normal normal 25px/33px Roboto",
    letterSpacing: "0px",
    color: "black",
    opacity: "1",
   

  },
  itemspan: {
  
    font: "normal normal normal 12px/16px Roboto",
    letterSpacing: "0px",
    color: "#9D9D9D",
    opacity: "1",
  },
  mainbooks: {
    display:'flex',flexDirection:'row',flexWrap:'wrap'
  },
  contentWrapper:{
    display:"flex",
    flexDirection:"column",
    alignItem:"center",
    justifyContent:"center",
  padding:"0px 180px 0px 280px"
  }
});

function Dashboard() {
  const classes = useStyle();

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBookList()
      .then((response) => {
        console.log(response);
        setBookList(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [] );


  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
        <div className={classes.contentWrapper}>
          <div className={classes.text}>
       
             <span className={classes.bookspan}>Books</span>
        
       
            <span className={classes.itemspan}>{bookList.length} items</span>
       
         </div>
         <div className={classes.mainbooks}>
          {bookList.map((book) => (
            <Books key={book._id} book={book} />
          ))}
          </div>
          </div>
    </div>
  );
}

export default Dashboard;
