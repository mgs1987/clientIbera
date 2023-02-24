import React from 'react'
import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
  FormHelperText,
  HStack,
  FormControl,
} from '@chakra-ui/react';
import { postAmenities } from "../../Redux/actions/amenities";
import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



export default function CreateAmenities() {
   const  breakpoint1 = useBreakpointValue({ base: 'md', md: 'lg' });
   const  breakpoint2 = useBreakpointValue({ base: '44px', md: '60px' });

  const dispatch = useDispatch()
  const allAmenities = useSelector((state) => state.amenities)
  // const navigate = useNavigate()

  const [input, setInput] = useState({
    name: "",
    image: "", 
  })
  const [errors, setErrors] = useState({})
  const validateName = /^[a-zA-Z\s]+$/


  // const [image, setImage] = useState(null)
  const [image] = useState(null)

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  // };

  function validate(input) {
    const errors = {}
    if (!input.name) {
      errors.name = 'Debe ingresar un nombre'
    } else if (input.name.length > 30) {
      errors.name = 'Debe tener menos de 30 caracteres'
    } else if (!validateName.test(input.name)) {
      errors.name = 'Los caracteres especiales no estan permitidos'
    }
    if (!input.image) {
      errors.image = 'Debes indicar la ciudad'
    } else if (input.image.length < 15) {
      errors.image = 'Debe tener menos de 20 caracteres'
    } 
    return errors
  }
  
  function handleChange(e) {
    
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value
      })
    )
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!input.name || !input.image ) {
      
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Completa los campos obligatorios',
        confirmButtonColor: '#F27474'
      })
    } else {
      
      if (image !== null) {
        input.image = image.url
      }
      setErrors(validate(input))
      dispatch(postAmenities(input))
      Swal.fire({
        icon: 'success',
        title: 'Operación exitosa!',
        text: 'Creaste el Hotel',
        confirmButtonColor: '#98D035'
     })
      setInput({
        name: "",
        image: "",      
      })
      
    }
  }
  return (
    <Box position={'relative'} >
      <Container display="flex" justifyContent="center" alignItems="center"
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Create Amenities
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            We're looking for amazing hotels with fabulous destinations!
            Add a new hotel and increase the Ibera experience!
            </Text>
          </Stack>
          <FormControl>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                name= "name"
                placeholder="Hotel name"
                onChange={(e) => handleChange(e)}
                value={input.name}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              {errors.name && (
                    <FormHelperText color='red.400'>{errors.name}</FormHelperText>
              )}
                <Input
                name= "image"
                onChange={(e) => handleChange(e)}
                value={input.image}
                placeholder="Upload Image"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
             
            </Stack>
            <HStack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              _active={{
                color: '#98D035',
                transition: 'all .5s ease',
                backgroundColor: '#E3FFB2'
              }}
              onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
            <Link to='/home'>
                <Button
                  marginLeft='1rem'>                  
                    Return
                </Button>
            </Link>
            </HStack>
          </Box>
          </FormControl>
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  )
}

export const Blur = (IconProps) => {
  const  breakpoint3 = useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' });
  const  breakpoint4 = useBreakpointValue({ base: -1, md: -1, lg: 0 });

  return (
    <Icon
      width={breakpoint3}
      zIndex={breakpoint4}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...IconProps}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};