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
  Input
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import CardServices from "../CardServices/CardServices";
import { FaBed } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import emailjs from "emailjs-com";


const { REACT_APP_PAYMENT_CREATE, REACT_APP_MERCADOPAGO_CHECKOUT, REACT_APP_FRONT } = process.env;

const { getServices } = allActions;

function ShoppingCart() {
  const [local, setLocal] = useState("");
  const [service, setService] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    const cart = window.localStorage.getItem("roomcart");
    setLocal(cart ? JSON.parse(cart) : {});
    const serv = window.localStorage.getItem("servicecart");
    setService(serv ? JSON.parse(serv) : {});
    const priceTotal = window.localStorage.getItem("totalprice");
    setTotalPrice(priceTotal ? parseInt(JSON.parse(priceTotal)) : 0);

    dispatch(getServices());
  }, [dispatch]);


  if (!document.cookie) {
    alert("you must login to reserve")
    window.location.href = REACT_APP_FRONT
  };

  if (isAuthenticated) {

    const email = user.email;

    console.log("aca esta el estado price", totalPrice);
    function handleResetCart() {
      window.localStorage.setItem("servicecart", JSON.stringify({}));
      setService({});
      window.localStorage.setItem("roomcart", JSON.stringify({}));
      setLocal({});
      window.localStorage.setItem("totalprice", JSON.stringify(0));
      setTotalPrice(0);
    }

    function handleRemoveItem(id) {
      if (service[id].quantity > 1) {
        const filterService = services.filter((e) => e.id === id);
        let serv = service[`${id}`]?.quantity
          ? (service[`${id}`].quantity -= 1)
          : 1;
        service[id] = {
          id: filterService[0].id,
          name: filterService[0].name,
          price: filterService[0].price,
          quantity: serv,
        };

        setService({ ...service });
        window.localStorage.setItem("servicecart", JSON.stringify(service));
        setTotalPrice((total) => (total -= parseInt(filterService[0].price)));
        console.log(serv);
      } else {
        const filterService = services.filter((e) => e.id === id);
        setTotalPrice((total) => (total -= parseInt(filterService[0].price)));
        delete service[id];
      }

    }
    function handleAddToCart(id) {
      const filterService = services.filter((e) => e.id === id);
      setTotalPrice((total) => (total += parseInt(filterService[0].price)));

      let qty = service[`${id}`]?.quantity ? (service[`${id}`].quantity += 1) : 1;

      service[id] = {
        id: filterService[0].id,
        item: filterService[0].name,
        price: filterService[0].price,
        quantity: qty,
      };

      window.localStorage.setItem("totalprice", JSON.stringify(totalPrice));
      console.log("este es total price", totalPrice);
      window.localStorage.setItem("servicecart", JSON.stringify(service));

      setService({ ...service });
    }
    console.log("aca esta service", service);



    async function handlePayment(e) {

      e.preventDefault();

      emailjs.sendForm("service_1998yor", "template_w9kk7lt", e.target, "PvHbawws_-6fNNwSb").then(res => {
        console.log("se ha enviado correctamente")
        console.log(res)
      })

      const paymentBasic = await axios
        .post(REACT_APP_PAYMENT_CREATE, {
          id: 1,
          item: "monto total",
          quantity: 1,
          price: totalPrice,
        })
        .then((res) => (window.location.href = res.data));
      console.log(paymentBasic);

      const script = document.createElement("script");
      const attr_data_preference = document.createAttribute("data-preference-id");
      attr_data_preference.value = paymentBasic.data.id;
      script.src = REACT_APP_MERCADOPAGO_CHECKOUT;
      script.setAttributeNode(attr_data_preference);
      document.getElementById("pay").appendChild(script);
    }

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
              {local.quantity} days - Room amount per day ${local.price}
              <Text>
                Total price for {local.quantity} days - ${" "}
                {local.price * local.quantity}
              </Text>
            </Text>
            <Divider color="teal" border="solid" borderWidth="1px" mt="10px" />
          </Box>
          <Box>
            <Text> Add Special Services </Text>

            <Button color="teal " onClick={handleResetCart}>
              Remove all
            </Button>
            {services &&
              services.map((ser) => (
                <CardServices
                  id={ser.id}
                  name={ser.name}
                  price={ser.price}
                  handleAddToCart={handleAddToCart}
                  handleRemoveItem={handleRemoveItem}
                />
              ))}
          </Box>
          <Flex>
            <Box mr="60px">
              <Heading>Your order details</Heading>
              <Flex display="initial">
                <Text mt="30px">Room for {local.quantity} days </Text>

                <Text ml="150px">$ {local.price * local.quantity}</Text>

                <Text mt="20px"></Text>
              </Flex>
              {service &&
                Object.keys(service).map((e) => {
                  return (
                    <Box>
                      {" "}
                      ({service[e].quantity} item) - {service[e].name} $
                      {service[e].quantity * service[e].price}
                    </Box>
                  );
                })}{" "}
              <Divider color="teal" border="solid" borderWidth="1px" mt="20px" />
              <Text mt="20px">Total amount ${totalPrice}</Text>
              <div>

                <form onSubmit={handlePayment}>

                  <div>

                    <Button type="submit" mt="40px" color="teal">
                      Continue to payment <Icon ml="10px" as={FiArrowRight}></Icon>
                    </Button>

                    <Input value={email} id="email" name="email" />
                    <Input value={totalPrice} id="price" name="price" />

                  </div>

                </form>

              </div>
            </Box>
          </Flex>
        </Grid>
      </Box>
    );

  } else {

    <div>Loading...</div>

  }

};

export default ShoppingCart;


