import React, { useEffect, useState } from "react";

// src/Components/Header/Header.js
//   Line 13:3:  'PopoverBody' is defined but never used         no-unused-vars
//   Line 14:3:  'PopoverFooter' is defined but never used       no-unused-vars
//   Line 16:3:  'PopoverCloseButton' is defined but never used  no-unused-vars
//   Line 17:3:  'Alert' is defined but never used               no-unused-vars
//   Line 18:3:  'AlertIcon' is defined but never used           no-unused-vars
//   Line 19:3:  'AlertTitle' is defined but never used          no-unused-vars
//   Line 20:3:  'AlertDescription' is defined but never used    no-unused-vars
//   Line 21:3:  'Stack' is defined but never used               no-unused-vars
// import {
//   Box,
//   Button,
//   Image,
//   Link,
//   HStack,
//   Flex,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
//   Stack,
// } from "@chakra-ui/react";
import {
  Box,
  Button,
  Image,
  Link,
  HStack,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,

  PopoverArrow,
} from "@chakra-ui/react";
import logo from "../../images/ibera.jpeg";
import Icon from "@chakra-ui/icon";
import { RiLuggageCartLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Header() {
  useEffect(() => {
    if (isAuthenticated) {
      axios
        .post("http://localhost:3010/users/create", { email: email })
        .then((res) => console.log("post axios", res))
        .catch((err) => console.log(err));
    }
  });

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [admin, setAdmin] = useState("");

  if (isAuthenticated) {
    var status;
    var name = user.name;
    var email = user.email;

    console.log("user", user);
    console.log("name", name);
    console.log("email", email);

    axios
      .get("http://localhost:3010/users")
      .then((res) => {
        console.log("get axios", res.data);
        status = res.data.find((u) => {
          return u.email === user.email;
        });
        console.log("status", status);

        if (status.privilige === true) {
          setAdmin("admin");
        }

        if (status.status === "disabled") {
          logout();
          window.alert("User disable");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.9rem"
        bg="white"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Link href="/">
            <Image
              borderRadius="full"
              boxSize="80px"
              src={logo}
              alt="logo"
              ml="25px"
            />
          </Link>
        </Flex>

        <Box color="teal">
          <HStack spacing="30px">
            <Popover trigger="hover">
              <PopoverTrigger>
                <Link fontSize={18} href="/destinations">
                  Destinations
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />

                <PopoverHeader>
                  <Link href="/destinations">Reserve Now!</Link>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            {/* <Link fontSize={18} ml="10px" href="/reserve">
              Reserve Now!
            </Link> */}
            <Link fontSize={18} href="/activities">
              Local Experiences
            </Link>

            <Link fontSize={18} href="/aboutus">
              About Us{" "}
            </Link>

            <Link href="/shoppingcart">
              <Icon href="#" as={RiLuggageCartLine} boxSize={7} />
            </Link>

            {isLoading ? (
              <Button colorScheme="teal" variant="outline">
                Loading...
              </Button>
            ) : (
              <div></div>
            )}

            {isAuthenticated && admin ? (
              <Link color="red" fontSize={18} href="/createHotel">
                Create{" "}
              </Link>
            ) : (
              <div></div>
            )}

            {isAuthenticated && admin ? (
              <Link color="red" fontSize={18} href="/delete">
                Administracion{" "}
              </Link>
            ) : (
              <div></div>
            )}

            {isAuthenticated ? (
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </Button>
            ) : (
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}

            {isAuthenticated ? (
              <Button colorScheme="teal" variant="outline">
                {name}
              </Button>
            ) : (
              <div></div>
            )}
          </HStack>
        </Box>
      </Flex>
    </div>
  );
}

export default Header;


