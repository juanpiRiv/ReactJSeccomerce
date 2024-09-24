import React, {useState} from 'react';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from './pages/home';
import { MainRouter } from './router/MainRouter';
import MainLayout from './layout/MainLayout';



const App = () => {

  //const [count,setCount]= useState(0);
  
  return (
    <ChakraProvider>
    <NavBar />
    <Home />
    </ChakraProvider>
  )
}
export default App
