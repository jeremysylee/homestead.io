const initialState = { winning: 'nobid' };

const winningReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WINNING':
      return { status: action.status, bid: action.bid };
    default:
      return state;
  }
};

export default winningReducer;
