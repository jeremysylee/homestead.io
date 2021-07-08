const initialState = { bids: [] };

const bidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BIDS':
      return { bids: action.bids };
    default:
      return state;
  }
};

export default bidsReducer;
