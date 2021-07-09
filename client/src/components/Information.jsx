import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import BidTable from './BidTable.jsx';
import BidInput from './BidInput.jsx';

const Information = () => {
  const dispatch = useDispatch();
  const home = useSelector((store) => store.homeReducer.home);
  const currentBid = useSelector((store) => store.currentBidReducer.currentBid);

  const bidChecker = () => {
    setInterval(() => {
      axios.get(`/api/homes/${home.id}/currentBid`)
        .then((response) => {
          dispatch({
            type: 'CURRENT_BID',
            currentBid: response.data,
          });
        });
    }, 1000);
  };

  useEffect(() => {
    bidChecker();
  });

  return (
    <Container>
      <div id='header'>
        <h1>Homestead</h1>
      </div>
      <p>Current Bid</p>
      <h2>${currentBid.toLocaleString()}</h2>
      <span>{home.bedrooms} bd | {home.bathrooms} ba | {home.sqft.toLocaleString()} sqft</span>
      <p>{home.street}, {home.unit} {home.city}, {home.state} {home.zip}</p>
      <BidTable />
      <BidInput />
    </Container>
  );
};

export default Information;
