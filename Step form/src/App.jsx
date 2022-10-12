import './App.css'
import Form from "./Component/Form"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (  
    <ChakraProvider>
     <Form />
    </ChakraProvider> 
  )
}

export default App
