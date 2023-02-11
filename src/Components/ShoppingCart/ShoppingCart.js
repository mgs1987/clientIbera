import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

function ShoppingCart() {
  const [local, setLocal] = useState("");

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(JSON.parse(cart));
  }, []);

  console.log(local);

  return (
    <Box>
      <Text>{local.name}</Text>
      <Text>{local.price}</Text>
    </Box>
  );
}

export default ShoppingCart;
