import React from 'react';
import { useHistory } from 'react-router-dom';

const BidInput = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/dashboard');
  };

  const placeholder = () => {
    console.log('7');
  };

  placeholder();

  return (
    <form>
      <input type='text'></input>
      <button onClick={handleLogin}>Place bid</button>
    </form>

  );
};

export default BidInput;
