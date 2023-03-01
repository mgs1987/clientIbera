import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
  Box,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import "./searchbar.css";
import allActions from "../../Redux/actions";
import CardHotel from "../CardHotel/CardHotel";
const { getAllHotels, getCity, getRoomsCities } = allActions;

function SearchBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  const hotels = useSelector((state) => state.hotels);
  const nuevaCiudad = useSelector((state) => state.citycheckinout);

  console.log('esot es nuevaCiudad: ', nuevaCiudad);

  const [destination] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");
  const [city, setCity] = useState("");

  function handleImputChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  function buttonSubmit(e) {
    e.preventDefault();
    dispatch(getCity(city));
    console.log(hotels, "TUVIEJA");
    setCity("");
  }

  const today = new Date().toISOString().split("T")[0];
  const onlyLetters = /^[a-zA-ZÀ-ÿ]+$/;
  const onlyLettersCheck = (input) => {
    return onlyLetters.test(input);
  };

  function handleInputCheckIn(e) {
    setInDate(e.target.value);
  }
  function handleInputCheckOut(e) {
    setOutDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onlyLettersCheck(e.target.value)) {
    }
  }

  function handleTest(e) {
    e.preventDefault();
    dispatch(getRoomsCities(city))
    console.log("esto es setCity: ",);
  }

  const isError = destination === "";

  return (
    <div>
      <Box
        borderRadius="8px"
        bgColor="teal"
        opacity="0.9"
        paddingBottom="10px"
        paddingTop="10px"
        width="90%"
        marginLeft="70px"
      >
        <Box display="flex" mx="auto" ml="17%">
          <FormControl onSubmit={(e) => handleSubmit(e)}>
            <Input
              isInvalid={isError}
              mr="300px"
              width="500px"
              backgroundColor="white"
              placeHolder="Destination"
              type="text"
              value={city}
              id="input-filter"
              onChange={handleImputChange}
            />
            {isError ? (
              <FormHelperText mr="600px" mt="2px" color="black">
                Select a destination, please
              </FormHelperText>
            ) : (
              <FormErrorMessage mr="200px">
                Destination is required
              </FormErrorMessage>
            )}
            <Grid templateColumns="1fr 1fr 1fr 1fr">
              <Box>
                <FormLabel color="white">Check-In</FormLabel>
                <input
                  className="checkin"
                  bgColor="white"
                  type="date"
                  value={inDate}
                  min={today}
                  onChange={handleInputCheckIn}
                ></input>
              </Box>
              <Box>
                <FormLabel color="white">Check-out</FormLabel>
                <input
                  className="checkin"
                  bgColor="white"
                  type="date"
                  value={outDate}
                  min={today}
                  onChange={handleInputCheckOut}
                ></input>
              </Box>

              <Box>
                <Button
                  mr="160px"
                  mt="31px"
                  color="white"
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  onClick={(e) => buttonSubmit(e)}
                >
                  Check Availability
                </Button>
              </Box>
              <Box>
                <Button
                  mr="160px"
                  mt="31px"
                  color="white"
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  onClick={(e) => handleTest(e)}
                >
                  TestCity
                </Button>
              </Box>
            </Grid>
          </FormControl>

        </Box>

      </Box>
      {nuevaCiudad && nuevaCiudad.map((hotel) => {
        return (
          <CardHotel
            name={hotel.name}
            city={hotel.city}
            img={hotel.image}
            stars={hotel.stars}
            id={hotel.idHotels}
          />
        )
      })}
    </div>
  );
}

export default SearchBar;
