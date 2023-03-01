import React from "react";
import { Box, Button } from "@chakra-ui/react";

import { useSelector } from "react-redux";
function Pages({
  currentHotels,
  page,
  setHotelsPerPage,
  hotelsPerPage,
  currentPage,
  setCurrentPage,
  
}) {
  const hotels = useSelector((state) => state.hotels);
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(hotels.length / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {

    if(pageNumbers[pageNumbers.length -1] !== currentPage){
      
      page(prevPage => prevPage +1)
    }

    // setCurrentPage((x) => x + 1);
    

    pageNumbers.length - 1 === currentPage ? page(1) : page((x) => x + 1);//!

  }

  function handlePrev() {

    if (currentPage !== 1) {
              page(currentPage - 1);
           }
    //setCurrentPage((x) => x - 1);
    // if (currentPage === 1) {
    //   setHotelsPerPage(10);
    //   setCurrentPage(1);
    //   return;
    // }

    currentPage === 1 ? page(pageNumbers.length - 1) : page((x) => x - 1);

  }

  return (
    <Box mt="20px">
      <Button
       
        mr="5px"
        colorScheme="teal"
        backgroundColor="teal"
        size="md"
        onClick={() => handlePrev()}
        >
        {" "}
        Prev
      </Button>
      {pageNumbers && pageNumbers.map((number) => {
        return (
          
          <Button  
          color={number === currentPage ? "white" : "teal"}        
          border="solid"
          borderColor="teal"
          backgroundColor={number === currentPage ? "teal" : "white"}
          size="md"
          onClick={() => page(number)}
          >
           {number}
          </Button>
            
        );
      })}
        
      <Button
        
        ml="5px"
        colorScheme="teal"
        backgroundColor="teal"
        size="md"
        onClick={() => handleNext()}
      >
        {" "}
        Next
      </Button>
    </Box>
  );
}
export default Pages;
