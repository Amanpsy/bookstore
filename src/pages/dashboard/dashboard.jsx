import React, { useEffect } from "react";
import Header from "../../component/Header";
import { makeStyles } from "@mui/styles";
import Books from "../../component/Books";
import { getBookList } from "../../services/dataService";
import { useState } from "react";
import { padding } from "@mui/system";
import { Box, Grid } from "@mui/material";
import BookDetails from "../../component/BookDetail";
import Paginations from "../../component/pagination";
import Footer from "../../component/footer";

const useStyle = makeStyles({
  container: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    
  },
  bookspan: {
    font: "normal normal normal 25px/33px Roboto",
    letterSpacing: "0px",
    color: "black",
    opacity: "1",
    marginLeft:"175px"
  
  },
  itemspan: {
    font: "normal normal normal 12px/16px Roboto",
    letterSpacing: "0px",
    color: "#9D9D9D",
    opacity: "1",
    padding: "5px 20px 0px 5px",
    marginLeft:"2px"
  
  },
  mainbooks: {
    display: "flex",
    flexDirection: "row",
    gap: "18px",
    justifyContent:'center',
    alignItems:'center',
    marginTop:"15px",
    flexWrap: "wrap",
  
    
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
  
  
    
  },

  
  ["@media only screen and (min-width: 320px) and (max-width: 480px)"]:{
    container : {
      
     
    }

  },

});

function Dashboard() {
  const classes = useStyle();

  const [bookList, setBookList] = useState([]);
  const [showDetails, setShowdetails] = useState(false);
  const [bookDetails, setBookdetails] = useState({});
  const [search, setsearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const selectedBookDetails = (details) => {
    setShowdetails(true);
    setBookdetails(details);
  };

  const openBookBack = () => {
    setShowdetails(false);
  };

  useEffect(() => {
    getBookList()
      .then((response) => {
        console.log(response);
        setBookList(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(currentPage, "current page");
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;


 const currentPosts = bookList.slice(indexOfFirstPost, indexOfLastPost);
  
    //currentPosts.filter((book) => book.bookName.includes(search));
  

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header searchText= {search} onSearchChange= {setsearch}  />
      </div>
      <div className={classes.contentWrapper}>
        {showDetails ? (
          ""
        ) : (
          <div className={classes.text}>
            <span className={classes.bookspan}>Books</span>

            <span className={classes.itemspan}>( {bookList.length} items)</span>
          </div>
        )}
        <Box className={classes.mainbooks}>
          {showDetails ? (
            <BookDetails
              openBookBack={openBookBack}
              bookName={bookDetails.bookName}
              author={bookDetails.author}
              quantity={bookDetails.quantity}
              discountPrice={bookDetails.discountPrice}
              price={bookDetails.price}
              bookId={bookDetails._id}
            />
          ) : (
            currentPosts.map((book) => (
              <Box onClick={() => selectedBookDetails(book)}>
                <Books key={book._id} book={book} />
              </Box>
            ))
          )}
          
        </Box>
        <Paginations 
            page={currentPage}
            paginate={paginate}
            count={bookList.length / postsPerPage}
          />
      </div>
   <Footer/>
    </div>
    
  );
}

export default Dashboard;
