import React from "react";
import { Flex, Text, useMediaQuery, Image } from '@chakra-ui/react';

export default function Filas(props) {

    //Usamos la MediaQuery para ajustar los margenes entre cada cartel de pelicula.
    const [screenwidth950] = useMediaQuery('(max-width: 950px)')

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            margin={screenwidth950 ? "0 5px" : "0 auto"}
            cursor="pointer"
            color="white"
            position="relative"
            width="175px"
            height="260px"
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                minWidth="175px"
            >
                <Image
                    src={props.image}
                    alt="cartel-pelicula"
                    screenwidth950="100%"
                    height="100%"
                />
                <Flex
                    backgroundColor="black"
                    position="absolute"
                    top="0"
                    left="0"
                    opacity="0"
                    height="100%"
                    width="100%"
                    margin="0 auto"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    _hover={{
                        opacity: ".8",
                        transition: "all .7s"
                    }}
                >
                    <Text>
                        {props.title}
                        {props.description}
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    )
}