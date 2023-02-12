import React from "react";
import { Box, Card, Text, Image } from "@chakra-ui/react";

function CardAmenities({ idAmenities, name, image }) {
  return (
    <Box>
      <Card>
        <Text>{name}</Text>
        <Image boxSize="50px" src={image} />
      </Card>
    </Box>
  );
}

export default CardAmenities;
