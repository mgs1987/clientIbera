import React from "react";
import { useEffect, useState } from 'react';
import { Image, Box } from "@chakra-ui/react";
import homeImage from "../../images/imageHome.jpg";
import Loader from '../Loader/Loader.js'
import Card from '../CardHotel/CardHotel.js'


// import SearchBar from "../SearchBar/SearchBar";


function Home() {

    const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false);
    }, 3000)
  }, [])

  if(loading) return <Loader />


  return (

  <div className="main">
   <Card />
  <Box>
     <Image src={homeImage} alt="imgHome"/>
  </Box>
   {/* <SearchBar/> */}
   <br></br>


  </div>
)}

export default Home;
