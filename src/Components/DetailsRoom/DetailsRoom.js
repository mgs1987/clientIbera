import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";

function DetailsRoom({
  idRooms,
  name,
  bed_quantity,
  description,
  price,
  image,
}) {
  const [cart, setCart] = useState([]);

  function saveData() {
    let room = {
      idRooms: idRooms,
      name: name,
      bed_quantity: bed_quantity,
      price: price,
      image: image,
    };
    cart = room;
    console.log(cart);
    localStorage.setItem(idRooms, JSON.stringify(room));
    console.log(idRooms);
  }
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
          alt="hotelIbera"
          src={image[0]}
        />
        {/* {image &&
          image.map((i) => {
            return (
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                alt="hotelIbera"
                src={i}
              />
            );
          })} */}

        <Stack>
          <CardBody ml="40px">
            <Heading color="teal" size="xl">
              {name}
            </Heading>

            <Text py="12">
              Quantity of beds: {bed_quantity}
              <Text>{description}</Text>
            </Text>
            <Text color="teal"> ${price}</Text>
          </CardBody>

          <CardFooter>
            <Button
              ml="300px"
              variant="solid"
              colorScheme="teal"
              onClick={() => saveData()}
            >
              Add to cart
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default DetailsRoom;
