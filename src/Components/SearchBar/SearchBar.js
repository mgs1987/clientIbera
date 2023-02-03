import React from 'react'
import { Input, Button, Flex, NumberInput } from "@chakra-ui/react";




function SearchBar() {

  return (
    <div>
    <Input mt="50px"
      placeholder='Destination' 
      size='md'
      variant="outline"
      width="1000px"
     
    />
    <Flex
     align="center"
     justify="space-between"
    >
    <Input
      ml="45px"
      placeholder="Select Check-in date"
      size="md"
      type="date"
      width="280px"
      
    />
     <Input
      placeholder="Select Check-out date"
      size="md"
      type="date"
      width="280px"
    />
    <NumberInput defaultValue={2} max={20}
      placeholder="Guests"
      size="md"
      type="number"
      width="200px"
    />
    <Button colorScheme='teal' variant='solid' ml="150px" mr="150px"> Check Availability </Button>
    </Flex>

    </div>
  )
}

export default SearchBar