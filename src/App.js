import { ChakraProvider, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ContenedorPrincipal from './Components/ContenedorPrincipal';

function App() {

  const [titulo, setTitulo] = useState("")

  const [resultados, setResultados] = useState([])

  const [busquedaActiva, setBusquedaActiva] = useState(false)

  const [errorBusqueda, setErrorBusqueda] = useState(false)

  const realizarBusqueda = (titulo) => {
    //Vaciamos resultados y titulo.
    setResultados([])
    setTitulo("")

    //Configuramos lo que vamos a buscar y lo guardamos en resultados.
    setTitulo(titulo)
    fetch(`https://imdb-api.com/es/API/Search/k_6oi7k7fq/${titulo}`)
      .then(res => res.json())
      .then(data => respuestaBusqueda(data))
    setBusquedaActiva(true)
  }

  const respuestaBusqueda = (data) => {
    //Cargamos los datos y si la bandera de error esta marcada, la desmarcamos.
    if (data.errorMessage) {
      setErrorBusqueda(true)
    }
    setResultados(data.results)
  }

  return (
    <>
      <ChakraProvider>
        <Box
        backgroundColor="black"
        >
          <Navbar titulo={titulo} realizarBusqueda={realizarBusqueda} />
          <ContenedorPrincipal resultados={resultados} error={errorBusqueda} busquedaActiva={busquedaActiva} desactivarBusqueda={() => setBusquedaActiva(prev => !prev)}/>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
