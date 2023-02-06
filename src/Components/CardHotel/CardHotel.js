import React from 'react'
import { Card, Image, Stack, CardBody, Text, CardFooter, Heading, Button } from "@chakra-ui/react";


function CardHotel({name,city,img,stars}) {
  return (
    <div>
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
     <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={img}
        alt='hotelIbera'
     />

  <Stack>
    <CardBody>
      <Heading size='md'>{name}</Heading>

      <Text py='2'>
        {city}
        {stars}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='teal'>
        Add to cart
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>
  )
}

export default CardHotel;



