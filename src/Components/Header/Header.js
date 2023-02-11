import React from "react";
import { Box, Button, Image, Link, HStack, Flex } from "@chakra-ui/react";
import logo from "../../images/ibera.jpeg";
import Icon from "@chakra-ui/icon";
import { RiLuggageCartLine } from "react-icons/ri";

function Header() {
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
            <Link color="red" fontSize={18} href="/createHotel">
              Create Hotel{" "}
            </Link>

            <Link href="/aboutus">
              <Icon href="#" as={RiLuggageCartLine} boxSize={7} />
            </Link>

            <a href="/login">
              <Button colorScheme="teal" variant="solid">
                Log In
              </Button>
            </a>

            <a href="/sing-up">
              <Button colorScheme="teal" variant="outline">
                Sign Up
              </Button>
            </a>

          </HStack>

        </Box>
      </Flex>
    </div >
  );
}

export default Header;
