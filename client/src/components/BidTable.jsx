import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const BidTable = () => {
  const dispatch = useDispatch();
  const bids = useSelector((store) => store.bidsReducer.bids);
  const currentBid = useSelector((store) => store.currentBidReducer.currentBid);

  useEffect(() => {
    const getBidTable = () => {
      axios.get('/api/homes/1/bids')
        .then((res) => {
          dispatch({
            type: 'SET_BIDS',
            bids: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBidTable();
  }, [currentBid, dispatch]);

  return (
    <div style={{ fontWeight: 'lighter', fontSize: '14px', marginBottom: '24px' }}>
      <p style={{ marginBottom: '4px' }}>Bid History</p>
      {bids.map((bid, i) => (
        <ul key={i} style={{ marginBottom: '0.5px', marginLeft: '-14px' }}>${bid.max_bid.toLocaleString()}</ul>
      ))}
    </div>
  );
};

export default BidTable;
