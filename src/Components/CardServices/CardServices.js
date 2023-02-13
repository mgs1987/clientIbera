import React from "react";
import { Box, Card, Text, Image } from "@chakra-ui/react";

function CardServices({ id, name, image, price }) {
  return (
    <Box>
      <Card>
        <Text>{name}</Text>
        <Image boxSize="50px" src={image} />
        <Text>$ {price}</Text>
      </Card>
    </Box>
  );
}

export default CardServices;
