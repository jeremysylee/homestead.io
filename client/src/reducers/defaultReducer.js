const initialState = {};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return { state: action.state };
    default:
      return state;
  }
};

export default defaultReducer;
