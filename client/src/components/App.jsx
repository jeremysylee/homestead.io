import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Gallery from './Gallery.jsx';


const App = () => {
  const test = () => {
    console.log('get rid of the linter');
  };

  return (
    <Container>
      <div>
        <h1>Homestead</h1>
      </div>
      <Gallery />
    </Container>
  );
};

export default App;
