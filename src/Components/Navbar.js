import React, { useState } from "react"
import { Box, Flex, Input, Link, useMediaQuery, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import logo from "../Images/netflix-logo.png"
import bell from "../Images/bell.png"
import avatar from "../Images/netflix-avatar.png"

export default function Navbar(props) {

    //Usamos la MediaQuery para ajustar anchos, margenes y ocultas botones de la barra de navegacion.
    const [screenwidth950] = useMediaQuery('(max-width: 950px)')

    const linkMobileProps = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "16.5%"
    }

    //El valor busqueda va a ser el que cargue el titulo para enviar a App y usarse en la funcion fetch.
    const [busqueda, setBusqueda] = useState("")

    const enviarBusqueda = (event, busqueda) => {
        event.preventDefault()
        props.realizarBusqueda(busqueda)
    }

    //La const menuMobile controla si abrimos o no el menu en dispositivos moviles.
    const [menuMobile, setMenuMobile] = useState(false)

    return (
        <Flex
            width={screenwidth950 ? "100%" : "95%"}
            backgroundColor="black"
            height="80px"
            margin="0 auto"
            color="white"
            alignItems="center"
            justifyContent="space-between"
        >
            <Flex
                width="50%"
                height="100%"
                justifyContent={screenwidth950 ? "flex-start" : "space-evenly"}
                alignItems="center"
            >
                <Flex
                    alignItems="center"
                    justifyContent="flex-start"
                    width={screenwidth950 ? "80%" : "15%"}
                >
                    <Link>
                        <Image
                            src={logo}
                            alt="netflix-logo"
                            height="50px"
                            width="92.5px"
                        />
                    </Link>
                    <Link
                        display={screenwidth950 ? "Flex" : "none"}
                        onClick={() => setMenuMobile(prev => !prev)}
                    >Explore</Link>
                </Flex>
                <Box
                    justifyContent="space-around"
                    width="80%"
                    display={screenwidth950 ? "none" : "Flex"}
                    css={menuMobile ? {
                        backgroundColor: "black",
                        border: "1px solid #787778",
                        fontSize: ".8em",
                        width: "260px",
                        height: "250px",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        top: "100px",
                        left: "10px",
                        zIndex: "2"
                    } : ""}
                >
                    <Link
                        css={menuMobile ? linkMobileProps : ""}
                    >Home</Link>
                    <Link
                        css={menuMobile ? linkMobileProps : ""}>TV Shows</Link>
                    <Link
                        css={menuMobile ? linkMobileProps : ""}>Movies</Link>
                    <Link
                        css={menuMobile ? linkMobileProps : ""}>New & Popular</Link>
                    <Link
                        css={menuMobile ? linkMobileProps : ""}>My List</Link>
                    <Link
                        css={menuMobile ? linkMobileProps : ""}>Watch Again</Link>
                </Box>
            </Flex>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={screenwidth950 ? "50%" : "30%"}
                height="100%"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid white"
                    backgroundColor="black"
                    width={screenwidth950 ? "65%" : "60%"}
                    height="40px"
                >
                    <Flex
                        width="100%"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            cursor="pointer"
                            onClick={() => props.realizarBusqueda(busqueda)}
                        />
                        <form onSubmit={(event) => enviarBusqueda(event, busqueda)}>
                            <Input
                                width="100%"
                                border="none"
                                focusBorderColor="transparent"
                                value={busqueda}
                                onChange={(event) => setBusqueda(event.target.value)}
                            />
                        </form>
                        <FontAwesomeIcon
                            icon={faX}
                            cursor="pointer"
                            onClick={() => setBusqueda("")}
                            margin={screenwidth950 ? "2px 0 " : "0"}
                        />
                    </Flex>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-around"
                    width="20%"
                >
                    <Link>
                        <Image
                            src={bell}
                            alt="campana-notificaciones"
                            width="32px"
                        />
                    </Link>
                    <Link>
                        <Image
                            src={avatar}
                            alt="avatar-usuario"
                            width="32px"
                        />
                    </Link>
                </Box>
            </Box>
        </Flex>
    )
}