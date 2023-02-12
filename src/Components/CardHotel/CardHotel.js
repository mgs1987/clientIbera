import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CardHotel({ id, name, city, img, stars }) {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={img}
          alt="hotelIbera"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{city}</Heading>

            <Text py="2">
              {name}
              <Text>{stars} stars</Text>
            </Text>
          </CardBody>

          <CardFooter>
            <Link to={`/hotels/${id}`}>
              <Button variant="solid" colorScheme="teal">
                View More
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default CardHotel;

