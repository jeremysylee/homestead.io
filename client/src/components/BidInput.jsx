import React from 'react';

const BidInput = () => {
  const placeholder = () => {
    console.log('7');
  };

  placeholder();

  return (
    <form>
      <input type='text'></input>
      <button>Place bid</button>
    </form>

  );
};

export default BidInput;
