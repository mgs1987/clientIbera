import React, { useEffect, useState } from "react";
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
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Alert, AlertIcon, AlertTitle, AlertDescription,
  Stack
} from "@chakra-ui/react";
import logo from "../../images/ibera.jpeg";
import Icon from "@chakra-ui/icon";
import { RiLuggageCartLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Header() {

  useEffect(() => {
    if (isAuthenticated) {
      axios.post("http://localhost:3010/users/create", { email: email })
        .then((res) => console.log("post axios", res))
        .catch((err) => console.log(err));
    }
  });

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [alert, setAlert] = useState("");

  if (isAuthenticated) {

    var status;
    var name = user.name;
    var email = user.email;

    console.log("user", user);
    console.log("name", name);
    console.log("email", email);

    if (status === "disabled") {
      logout();
      setAlert("alert");
    }

  };

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

        {alert ?

          <Stack direction='row' spacing={4} align='center'>

            <Alert
              status='success'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                User Disable
              </AlertTitle>
            </Alert>

            <Button colorScheme='teal' variant='solid'>
              X
            </Button>

          </Stack>

          :

          <div></div>

        }



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
            <Link fontSize={18} href="/destinations">
              Destinations
            </Link>
            <Link fontSize={18} ml="10px" href="/reserve">
              Reserve Now!
            </Link>
            <Link fontSize={18} href="/activities">
              Local Experiences
            </Link>

            <Link fontSize={18} href="/aboutus">
              About Us{" "}
            </Link>

            <Link href="/shoppingcart">
              <Icon href="#" as={RiLuggageCartLine} boxSize={7} />
            </Link>

            {isLoading ?
              <Button colorScheme="teal" variant="outline">
                Loading...
              </Button>
              :
              <div></div>
            }

            {isAuthenticated && user.email === "pipe.blaksley@gmail.com" ?
              <Link color="red" fontSize={18} href="/createHotel">
                Create Hotel{" "}
              </Link>
              :
              <div></div>
            }

            {isAuthenticated && user.email === "pipe.blaksley@gmail.com" ?
              <Link color="red" fontSize={18} href="/delete">
                Delete User{" "}
              </Link>
              :
              <div></div>
            }

            {isAuthenticated ?
              <Button colorScheme="teal" variant="solid"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Logout
              </Button> :

              <Button colorScheme="teal" variant="solid" onClick={() => loginWithRedirect()}>
                Login
              </Button>
            }

            {isAuthenticated ?
              <Button colorScheme="teal" variant="outline">
                {name}
              </Button>
              :
              <div></div>
            }

          </HStack>

        </Box>

      </Flex>

    </div>

  );

}

export default Header;


