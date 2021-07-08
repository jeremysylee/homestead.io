import React from 'react';
import { useSelector } from 'react-redux';

const BidTable = () => {
  const bids = useSelector((store) => store.bidsReducer.bids);

  return (
    <div>
      <p>Bid History</p>
      {bids.map((bid, i) => (
        <ul key={i}>{bid.max_bid}</ul>
      ))}
    </div>
  )
}


export default BidTable;
