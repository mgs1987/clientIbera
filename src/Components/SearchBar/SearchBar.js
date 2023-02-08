import React from 'react'
import { Input, Button,Box,Grid } from "@chakra-ui/react";




function SearchBar() {

  return (
    <div>
      <Box>
         <Input mt="50px"
        placeholder='Destination' 
        size='md'
        variant="outline"
        width="1000px" />
      </Box>

    <Grid templateColumns="1fr 1fr 1fr 1fr">
      <Box>
         <Input
         ml="45px"
         placeholder="Select Check-in date"
         size="md"
         type="date"
         width="280px"  
      />
    </Box>

    <Box>
      <Input
      placeholder="Select Check-out date"
      size="md"
      type="date"
      width="280px"
    /></Box>

     <Input 
      placeholder="Guests"
      size="md"
      type="number"
      width="200px"/>

    <Box>
     <Button colorScheme='teal' variant='solid' ml="150px" mr="150px"> Check Availability </Button>
     </Box>

    </Grid>
   </div>
  )}

export default SearchBar