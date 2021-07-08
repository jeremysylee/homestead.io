import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import BidTable from './BidTable.jsx';

const Information = () => {
  const home = useSelector((store) => store.homeReducer.home);

  return (
    <Container>
      <div id='header'>
        <h1>Homestead</h1>
      </div>
      <p>Current Bid</p>
      <h2>$4,250,000</h2> <span>{home.bedrooms} bd | {home.bathrooms} ba | {home.sqft} sqft</span>
      <p>{home.street} {home.unit} {home.city}, {home.state} {home.zip}</p>
      <BidTable />
    </Container>
  );
};

export default Information;
