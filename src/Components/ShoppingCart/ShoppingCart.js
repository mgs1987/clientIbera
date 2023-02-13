import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardFooter,
  CardBody,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import CardServices from "../CardServices/CardServices";

const { getServices } = allActions;

function ShoppingCart() {
  const [local, setLocal] = useState("");
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(JSON.parse(cart));

    dispatch(getServices());
  }, [dispatch]);

  console.log("ACA ESTA LOCAL STATE", local);

  function handleResetCart() {}
  function handleRemoveItem() {
    // remuevo solo 1 item - aca tener en cuenta que baja cantidad- cambia precio total si hay otras cosas sino queda en 0 -
  }
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Your shopping cart</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          idProduct: {local.idRooms} Product:{local.name} Price: ${local.price}{" "}
          <Button onClick={handleRemoveItem}>X</Button>
        </Text>
        {services &&
          services.map((ser) => (
            <CardServices
              id={ser.id}
              name={ser.name}
              image={ser.image}
              price={ser.price}
            />
          ))}
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" onClick={handleResetCart}>
          Clear All
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ShoppingCart;
