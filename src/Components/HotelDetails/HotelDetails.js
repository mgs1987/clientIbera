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
  console.log(dtHotel);
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
              {dtHotel.city}
            </Heading>
            <Text py="12">
              {dtHotel.name}
              <Text>Quality: {dtHotel.stars} stars</Text>
            </Text>
            <Text color="teal" size="4xl">
              Types of Rooms available:{" "}
            </Text>
            {dtHotel.rooms &&
              dtHotel.rooms.map((r) => {
                return (
                  <DetailsRoom
                    idRooms={r.idRooms}
                    name={r.name}
                    bed_quantity={r.bed_quantity}
                    description={r.description}
                    price={r.price}
                    image={r.image}
                  />
                );
              })}
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}

export default HotelDetails;
