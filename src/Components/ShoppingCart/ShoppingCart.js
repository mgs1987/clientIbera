import React, { useEffect, useState } from "react";
import {
  Heading,
  Text,
  Button,
  Box,
  Grid,
  Divider,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import CardServices from "../CardServices/CardServices";
import { FaBed } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const { getServices } = allActions;

function ShoppingCart() {
  const [local, setLocal] = useState("");
  const [service, setService] = useState({});

  const [totalAmount, setTotalAmount] = useState(0);

 

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(cart ? JSON.parse(cart) : {});
    const serv = window.localStorage.getItem("servicecart");
    setService(serv ? JSON.parse(serv) : {});
    const amount = window.localStorage.getItem("amount");
    setTotalAmount(amount ? JSON.parse(amount) : 0);
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

    let qty = service[`${id}`]?.quantity ? (service[`${id}`].quantity += 1) : 1;

    service[id] = {
      id: filterService[0].id,
      name: filterService[0].name,
      price: filterService[0].price,
      quantity: qty,
    };

    setService({ ...service });
    window.localStorage.setItem("servicecart", JSON.stringify(service));
    setTotalAmount({ ...service[id].price });
    window.localStorage.setItem("amount", JSON.stringify(totalAmount));
  }
  const total = Object.values(service).reduce((accumulator, currentValue) => {
    const price = parseInt(currentValue.price);
    const quantity = currentValue.quantity;
    return accumulator + local.price + price * quantity;
  }, 0);

  function handlePayment() {}

  function handleRemoveItem(id) {}

  return (

    <Box>
      <Box align="center" backgroundColor="teal">
        <Heading size="md" mt="30px" mb="30px" color="white">
          {" "}
          Your shopping cart
        </Heading>
      </Box>

      <Grid templateColumns="1fr 1fr 1fr">
        <Box
          maxW="sm"
          borderColor="white"
          borderWidth="1px"
          borderRadius="lg"
          ml="20px"
        >
          <Text mt="30px" color="teal" fontSize="2xl" mb="30px">
            <Text>
              <Icon ml="5px" mr="40px" as={FaBed} boxSize={5}></Icon>
              {local.name}
            </Text>
          </Text>
          <Text ml="45%" as="i" fontSize="xl" color="black">
            {" "}
            Room amount ${local.price}{" "}
          </Text>
          <Divider color="teal" border="solid" borderWidth="1px" mt="10px" />
          <Button mt="40px" color="teal" onClick={handleRemoveRoom}>
            Remove Room
          </Button>
        </Box>
        <Box>
          <Text> Add Special Services </Text>

          <Button color="teal " onClick={handleResetCart}>
            Remove all services

   
          </Button>
          {services &&
            services.map((ser) => (
              <CardServices
                id={ser.id}
                name={ser.name}
                image={ser.image}
                price={ser.price}
                handleAddToCart={handleAddToCart}
              />
            ))}
        </Box>
        <Flex>
          <Box mr="60px">
            <Heading>Your order details</Heading>
            <Flex display="initial">
              <Text mt="30px">Room</Text>

              <Text ml="150px">$ {local.price}</Text>

              <Text mt="20px"></Text>
            </Flex>
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
              })}{" "}
            <Divider color="teal" border="solid" borderWidth="1px" mt="20px" />
            <Text mt="20px">Total amount ${total}</Text>
            <Button mt="40px" color="teal" onClick={handlePayment}>
              Continue to payment <Icon ml="10px" as={FiArrowRight}></Icon>
            </Button>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
}

export default ShoppingCart;
