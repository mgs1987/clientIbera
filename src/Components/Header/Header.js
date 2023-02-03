import React from "react";
import { Box, Button, Image, Link, HStack, Flex } from "@chakra-ui/react"
import logo from "../../images/ibera.jpeg";
import Icon from "@chakra-ui/icon";
import { RiLuggageCartLine} from "react-icons/ri"


function Header() {
  return (
    <div>
<Flex as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.9rem"
      bg="white"
      color="white">

      <Flex align="center" mr={5}>
       <Link href="/home"> 
         <Image 
         borderRadius='full'
         boxSize='80px'
         src={logo} alt="logo" 
         ml="25px"/>
         </Link>
      </Flex>
      
      <Box color="green">
    <HStack spacing="30px">
      <Link ml="5px" href="/reserve">Reserve Now!</Link>
      <Link href="/activities">Local Experiences</Link>
      <Link href="/destinations">Destinations</Link> 
      <Link href="/aboutus">About Us </Link>

      <Icon as={RiLuggageCartLine} boxSize={5}/>
     
        <Button colorScheme='teal' variant='solid'>Log In</Button>
        <Button colorScheme='teal' variant='outline'>Sign Up</Button>
    </HStack>
    </Box>
 </Flex>

    </div>
  )
}

export default Header
