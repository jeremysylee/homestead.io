const initialState = { currentBid: 0 };

const currentBidReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_BID':
      return { currentBid: action.currentBid };
    default:
      return state;
  }
};

export default currentBidReducer;
