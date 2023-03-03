import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardHotel from "../CardHotel/CardHotel.js";
import Pages from "../../Pages";
import allActions from "../../Redux/actions";
import { Box, Flex, Button, Select } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar.js";

const { getAllHotels, filterHotelsByCity, filterHotelByStars, cleanFilter } =
  allActions;

function Destinations() {
  const dispatch = useDispatch();

  const hotels = useSelector((state) => state.hotels);
  const cities = useSelector((state) => state.cities);
  const uniqueCity = cities.filter((str, index) => {
    return cities.indexOf(str) === index;
  });

  const [currentPage, setCurrentPage] = useState(1);
  // #13 30.54 src/Components/Destinations/Destinations.js
  // ﻿#13 30.54   Line 23:25:  'setHotelsPerPage' is assigned a value but never used  no-unused-vars
  // const [hotelsPerPage, setHotelsPerPage] = useState(6);
  const [hotelsPerPage] = useState(6);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;

  const currentHotels = hotels?.slice(indexOfFirstHotel, indexOfLastHotel);

  const page = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  function handleFilterByCity(e) {
    e.preventDefault();
    dispatch(filterHotelsByCity(e.target.value));
  }
  function handleFilterByStars(e) {
    e.preventDefault();
    dispatch(filterHotelByStars(e.target.value));
  }
  function handleCleanFilter(e) {
    e.preventDefault();
    dispatch(cleanFilter(e.target.value));
  }

  return (
    <div>
      <Box mt="30px">
        <SearchBar setCurrentPage={setCurrentPage} />
      </Box>

      <Flex justifyContent="flex-start" ml="50px" mt="40px">
        <Box>
          <Button
            onClick={(e) => handleCleanFilter(e)}
            variant="solid"
            colorScheme="teal"
          >
            Limpiar Filtros
          </Button>
        </Box>
        <Box>
          <Select
            onChange={(e) => handleFilterByCity(e)}
            placeholder="All Cities"
          >
            {uniqueCity &&
              uniqueCity
                .sort()
                .map((city) => <option value={city}>{city}</option>)}
          </Select>
        </Box>

        <Box ml="20px">
          <Select
            onChange={(e) => handleFilterByStars(e)}
            placeholder="Filter by Stars"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Select>
        </Box>
      </Flex>

      <br></br>
      <br></br>
      {currentHotels &&
        currentHotels.map((hotel) => {
          return (
            <CardHotel
              name={hotel.name}
              city={hotel.city}
              img={hotel.image}
              stars={hotel.stars}
              id={hotel.idHotels}
              checkIn={hotel.checkIn}
              checkOut={hotel.checkOut}
            />
          );
        })}
      <Pages
        page={page}
        hotelsPerPage={hotelsPerPage}
        hotels={hotels}
        currentPage={currentHotels}
      />
    </div>
  );
}

export default Destinations;
