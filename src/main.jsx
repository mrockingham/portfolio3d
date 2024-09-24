import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme';
import './index.css';

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);