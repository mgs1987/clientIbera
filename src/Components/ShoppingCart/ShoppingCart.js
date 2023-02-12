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
import CardAmenities from "../CardAmenities/CardAmenities";

const { getAmenities } = allActions;

function ShoppingCart() {
  const [local, setLocal] = useState("");
  const dispatch = useDispatch();
  const amenities = useSelector((state) => state.amenities);

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(JSON.parse(cart));
    console.log(getAmenities);
    dispatch(getAmenities());
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
        {amenities &&
          amenities.map((am) => (
            <CardAmenities
              id={am.idAmenities}
              name={am.name}
              image={am.image}
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
