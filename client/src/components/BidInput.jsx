import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const BidInput = () => {
  // const history = useHistory();
  const currentBid = useSelector((store) => store.currentBidReducer.currentBid);
  const userId = useSelector((store) => store.userReducer.userId);
  const [bid, setBid] = useState();

  // const handleLogin = () => {
  //   history.push('/dashboard');
  // };

  const handleBid = (e) => {
    e.preventDefault();
    if (bid >= (currentBid + 10000)) {
      axios.put('/api/homes/1/bid', null, { params: { bid, userId } })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log(bid);

  return (
    <form>
      <input type='text' onChange={(e) => setBid(e.target.value)}></input>
      <button onClick={handleBid}>Place bid</button>
    </form>

  );
};

export default BidInput;
