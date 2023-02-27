import React from "react";
import {
    Card,
    Image,
    Stack,
    CardBody,
    Text,
    Heading,
    Box,
    HStack,
} from "@chakra-ui/react";

function CardActivities({ name, description, price, image }) {
    return (
        <HStack display="inline-flex">
            <Box ml="20px" mb="19px">
                <Card maxW="sm">
                    <CardBody>
                        <Image
                            src={image}
                            alt="activitiesImg"
                            borderRadius="lg"
                            width="100%"
                            height="200px"
                            objectFit="cover"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading color="teal" size="md">
                                {name}
                            </Heading>
                            <Text>{description}</Text>
                            <Text fontSize="2em" color="teal">
                                {"$"}
                                {price}{" "}
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </HStack>
    );
}

export default CardActivities;