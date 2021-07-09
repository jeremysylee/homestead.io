import React from 'react';
import { useSelector } from 'react-redux';

const BidTable = () => {
  const bids = useSelector((store) => store.bidsReducer.bids);

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
