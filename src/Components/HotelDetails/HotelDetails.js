import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import {
  Card,
  Image,
  CardBody,
  Heading,
  CardFooter,
  Link,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import DetailsRoom from "../DetailsRoom/DetailsRoom";

const { getHotelById } = allActions;

function HotelDetails(props) {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelById(id));
  }, [dispatch, id]);

  const dtHotel = useSelector((state) => state.hotelDetails);

  console.log("ACA ESTA DETAIL", dtHotel);

  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={dtHotel.image}
          alt="hotelIbera"
        />

        <Stack>
          <CardBody ml="40px">
            <Heading color="teal" size="xl">
              {dtHotel.name}
            </Heading>

            <Text py="12">
              City : {dtHotel.city}
              <Text>Quality: {dtHotel.stars} stars</Text>
            </Text>
            <Text color="teal" size="4xl">
              Types of Rooms available:{" "}
            </Text>
            {/* {dtHotel &&
              dtHotel.rooms.length > 0 &&
              dtHotel.rooms.map((r) => {
                return <Text>{r.name}</Text>;
              })} */}
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}

export default HotelDetails;
