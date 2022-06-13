import React from "react"
import { Flex, Box, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';

export default function Loader() {

    const spin = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
        `

    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
        ? undefined
        : `${spin} infinite 1s linear`

    return (
        <Flex 
        width="100vw"
        height="200px"
        margin="200px auto 0 auto"
        justifyContent="center"
        >
            <Box
                border="4px solid rgba(0, 0, 0, 0.1)"
                width="36px"
                height="36px"
                borderRadius="50%"
                borderLeftColor="white"
                animation={animation}
            ></Box>
        </Flex>
    )
}