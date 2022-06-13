import React from "react";
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import Filas from "./Filas";
import Loader from "./Loader";

export default function ContenedorPrincipal(props) {

    console.log(props)

    //Usamos la MediaQuery para ajustar el tamaño de los contenedores.
    const [screenwidth950] = useMediaQuery('(max-width: 950px)')

    //La API de imdb devuelve un maximo de 10 elementos por pedido.
    //Estos elementos los dividimos en dos filas con dos contenedores distintos para que, al hacerlo responsive, se puedan scrollear independientemente uno del otro.
    let filaUno = props.resultados.slice(0, 5)
    let filaDos = props.resultados.slice(5, 11)

    const imprimirFila = (fila) => {
        
        //Si los arrays estan cargados con elementos los mostramos.
        if (props.resultados.length > 0) {
            let listaPeliculas = fila.map(e => {
                return <Filas
                    image={e.image}
                    title={e.title}
                    description={e.description}
                    key={e.id}
                />
            })
            return listaPeliculas

        } else {
        //Si todavia no estan cargados y se esta procesando la busqueda mostramos este loader.
            if (props.busquedaActiva) {
                return <Loader />
            } else return
        }
    }

    const titulosRelacionadosProps = {
        margin: "0 8px 0 0",
        cursor: "pointer"
    }

    return (
        <Box
            backgroundColor="black"
            width={screenwidth950 ? "98%" : "95%"}
            margin="100px auto 0 auto"
            color="white"
        >
            <Flex
                margin="20px 0"
            >
                <Text
                    color="#787778"
                    css={titulosRelacionadosProps}
                >
                    Explore titles {props.resultados.length > 0 ? `related to:` : ""}
                </Text>

                <Text
                    css={titulosRelacionadosProps}
                >
                    {props.resultados.length > 0 ? `${props.resultados[0].title}` : ""}
                </Text>

                <Text
                    css={titulosRelacionadosProps}
                >
                    {props.resultados.length > 0 ? `${props.resultados[1].title}` : ""}
                </Text>

                <Text
                    css={titulosRelacionadosProps}
                >
                    {props.resultados.length > 0 ? `${props.resultados[2].title}` : ""}
                </Text>

                <Text
                    css={titulosRelacionadosProps}
                >
                    {props.resultados.length > 0 ? `${props.resultados[3].title}` : ""}
                </Text>

                <Text>
                    {props.error ? "Ocurrio un error en la busqueda." : ""}
                </Text>

            </Flex>
            <Flex
                justifyContent="space-between"
                width="100%"
                height="270px"
                margin="0 auto 100px auto"
                overflowX="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        display: "none",
                    }
                }}
            >
                {imprimirFila(filaUno)}
            </Flex>
            <Flex
                justifyContent="space-between"
                width="100%"
                height="270px"
                margin="0 auto 100px auto"
                overflow="scroll"
                css={{
                    '&::-webkit-scrollbar': {
                        display: "none",
                    }
                }}
            >
                {imprimirFila(filaDos)}
            </Flex>
        </Box>
    )
}