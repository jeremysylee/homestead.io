import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Alert } from 'react-bootstrap';
import axios from 'axios';

import BidTable from './BidTable.jsx';
import BidInput from './BidInput.jsx';

const Information = () => {
  const dispatch = useDispatch();
  const home = useSelector((store) => store.homeReducer.home);
  const currentBid = useSelector((store) => store.currentBidReducer.currentBid);
  const userId = useSelector((store) => store.userReducer.userId);
  const winning = useSelector((store) => store.winningReducer.winning);

  const bidChecker = () => {
    setInterval(() => {
      axios.get(`/api/homes/${home.id}/currentBid?userId=${userId}`)
        .then((response) => {
          dispatch({
            type: 'CURRENT_BID',
            currentBid: response.data,
          });
        });
    }, 1000);
  };

  const winningChecker = () => {
    setInterval(() => {
      axios.get(`/api/homes/${home.id}/winner?userId=${userId}`)
        .then((response) => {
          dispatch({
            type: 'SET_WINNING',
            winning: response.data,
          });
        });
    }, 1000);
  };

  useEffect(() => {
    bidChecker();
    winningChecker();
  });

  return (
    <Container>
      <div id='header' style={{ marginTop: '20px' }}>
        <h4 style={{ fontWeight: 'bolder', color: '#D65454' }}>Homestead</h4>
      </div>
      <hr></hr>
      {winning === true && <Alert variant={'success'}>
        <p>You&apos;re the highest bidder!</p>
      </Alert>}
      {!winning && <Alert variant={'danger'}>
        <p>You&apos;ve been outbid.</p>
      </Alert>}
      <span style={{ fontWeight: 'lighter', fontSize: '14px' }}>Current Bid</span>
      <div style={{ alignItems: 'baseline' }}>
        <span style={{ fontWeight: 'bold', fontSize: '32px' }}>${currentBid.toLocaleString()}</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ fontSize: '14px' }}>
          <b>{home.bedrooms}</b><span style={{ fontWeight: 'lighter' }}> bd | </span>
          <b>{home.bathrooms}</b><span style={{ fontWeight: 'lighter' }}> ba | </span>
          <b>{home.sqft.toLocaleString()}</b><span style={{ fontWeight: 'lighter' }}> sqft  </span>
        </span>
      </div>
      <p style={{
        fontWeight: 'lighter', letterSpacing: '1.5px', marginTop: '3px', marginBottom: '24px',
      }}>{home.street}, {home.unit} {home.city}, {home.state} {home.zip}</p>
      <BidTable />
      <div style={{ fontSize: '14px', marginBottom: '5px' }}>
        <b>Time Left:&nbsp;&nbsp;</b>
        <span>
          <b>2</b><span style={{ fontWeight: 'lighter' }}> days &nbsp;</span>
          <b>14</b><span style={{ fontWeight: 'lighter' }}> hours &nbsp;</span>
          <b>3</b> <span style={{ fontWeight: 'lighter' }}> mins &nbsp;</span>
        </span>
      </div>
      <BidInput />
      <span style={{
        fontWeight: 'lighter', fontSize: '13px', marginTop: '3px',
      }}>Enter US ${(currentBid + 10000).toLocaleString()} or more</span>
      <div style={{ height: '40px' }}></div>
      <hr></hr>
    </Container>
  );
};

export default Information;
