import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardFooter,
  CardBody,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import CardServices from "../CardServices/CardServices";

const { getServices } = allActions;

function ShoppingCart() {
  const [local, setLocal] = useState("");
  const [service, setService] = useState({});
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(cart ? JSON.parse(cart) : {});
    const serv = window.localStorage.getItem("servicecart");
    setService(serv ? JSON.parse(serv) : {});
    dispatch(getServices());
  }, [dispatch]);

  function handleResetCart() {
    window.localStorage.setItem("servicecart", JSON.stringify({}));
    setService({});
  }

  function handleRemoveRoom() {
    window.localStorage.setItem("roomcart", JSON.stringify({}));
    setLocal({});
    console.log("quitar");
  }
  function handleAddToCart(id) {
    const filterService = services.filter((e) => e.id === id);
    console.log("aca filter", filterService);
    let qty = service[`${id}`]?.quantity ? (service[`${id}`].quantity += 1) : 1;

    service[id] = {
      id: filterService[0].id,
      name: filterService[0].name,
      price: filterService[0].price,
      quantity: qty,
    };

    setService({ ...service });
    window.localStorage.setItem("servicecart", JSON.stringify(service));
  }

  function handleRemoveItem(id) {}

  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Your shopping cart</Heading>
      </CardHeader>
      <CardBody>
        <Button ml="100%" colorScheme="teal" onClick={handleResetCart}>
          Remove all services
        </Button>
        <Text>
          {local.name} Total ${local.price}{" "}
          <Button ml="140px" onClick={handleRemoveRoom}>
            Remove Room
          </Button>
          <Text>
            {service &&
              Object.keys(service).map((e) => {
                return (
                  <Box key={"key"}>
                    <Text>
                      ({service[e].quantity} item ) - {service[e].name} ${" "}
                      {service[e].price} TOTAL: $
                      {service[e].quantity * service[e].price}
                    </Text>
                    <Text> </Text>
                  </Box>
                );
              })}
          </Text>
        </Text>
        {services &&
          services.map((ser) => (
            <CardServices
              id={ser.id}
              name={ser.name}
              image={ser.image}
              price={ser.price}
              handleAddToCart={handleAddToCart}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default ShoppingCart;
