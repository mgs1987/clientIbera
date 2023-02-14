import React from "react";
import {
  Box,
  Card,
  Text,
  Image,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";

function CardServices({
  id,
  name,
  image,
  price,
  handleAddToCart,
  handleRemoveItem,
}) {
  return (
    <Box>
      <Card border="solid" borderColor="teal" mt="10px">
        <Flex display="inline-grid">
          <Image boxSize="50px" src={image} />
          <Text>{name}</Text>
          <Text>$ {price}</Text>
        </Flex>

        <ButtonGroup color="teal" ml="70%">
          <Button onClick={() => handleRemoveItem(id)}>-</Button>
          <Button onClick={() => handleAddToCart(id)}>+</Button>
        </ButtonGroup>
      </Card>
    </Box>
  );
}

export default CardServices;
