import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import CardHotel from '../CardHotel/CardHotel.js';


import allActions from "../../Redux/actions";
import { Box, Flex, Select } from "@chakra-ui/react";



const { getAllHotels, filterHotelsByCity } = allActions;


function Destinations() {

    const dispatch = useDispatch()

    const hotels = useSelector((state) => state.hotels);
    const cities=useSelector((state)=>state.cities)

    useEffect(() => {
             dispatch(getAllHotels());
           }, [dispatch]);


 function handleFilterByCity(e){
    dispatch(filterHotelsByCity(e.target.value))

 }
 console.log(hotels)
 console.log(cities)
  return (
    <div>
  <Flex justifyContent="flex-start" ml="50px" mt="40px">
    <Box>
        <Select
        onChange={(e)=>handleFilterByCity(e)} 
        placeholder="All Cities">
        {cities && cities.map((city)=>
        <option value={city}>{city}</option>
        )}
      </Select>
    </Box>
  </Flex>
   
    <br></br>
    <br></br>
    {hotels &&
        hotels.map((hotel) => {
          return (
            <CardHotel
              name={hotel.name}
              city={hotel.city}
              img={hotel.img}
              stars={hotel.stars}
            />
          );
        })}
    
    </div>
  )
}

export default Destinations;