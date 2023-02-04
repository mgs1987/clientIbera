import React from "react";
import { Image, Box } from "@chakra-ui/react";
import homeImage from "../../images/imageHome.jpg"


// import SearchBar from "../SearchBar/SearchBar";


function Home() {


  return (

  <div className="main">
  <Box>
     <Image src={homeImage} alt="imgHome"/>
  </Box>
   {/* <SearchBar/> */}
   <br></br>


  </div>
)}

export default Home;
