import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Box from './pages/Box';
import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Container className='container'>
        <Box />
      </Container>
    </BrowserRouter>
  );
}

export default App;
