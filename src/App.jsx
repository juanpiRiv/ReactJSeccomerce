import React, {useState} from 'react';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  const [count,setCount]= useState(0);
  
  return (
    <ChakraProvider>
    <NavBar />
    <ItemListContainer greeting={"Hola Bienvenido"} />
    </ChakraProvider>
  )
}
export default App
