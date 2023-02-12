import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

function ShoppingCart() {
  const [local, setLocal] = useState("");

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    if (cart) {
      setLocal(JSON.parse(cart));
    }
  }, []);

  console.log(local);

  return (
    <div>
      {local &&
        local.map((e) => (
          <div>
            {e.name} - {e.price}
          </div>
        ))}
    </div>
  );
}

export default ShoppingCart;
