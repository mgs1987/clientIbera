import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card';
import allActions from "../../Redux/actions";
import { Box, Button, Flex, Input } from "@chakra-ui/react";



const { getAllHotels } = allActions;


function Destinations() {
const [input, setInput]=useState("")

    const dispatch = useDispatch()
    const hotels = useSelector((state) => state.hotels);

    useEffect(() => {
             dispatch(getAllHotels());
           }, [dispatch]);

 function handleChange(e){
    e.preventDefault();
    setInput(e.target.value)

 }
  return (
    <div>
  <Flex justifyContent="flex-end" mr="50px">
    <Box>
        <Input
        placeholder="Location"
        name="location"
        size="md"
        type="text"
        variant="outline"
        onClick={(e)=>handleChange(e)}
        />
      <Button colorScheme='teal' size="md" mr="18px">Filter</Button>
    </Box>
  </Flex>
   
    <br></br>
    <br></br>
    {hotels &&
        hotels.map((hotel) => {
          return (
            <Card
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