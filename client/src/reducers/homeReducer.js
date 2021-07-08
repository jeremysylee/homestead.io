const initialState = { home: { photos: [], id: 1, sqft: 0 } };

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HOME':
      return { home: action.home };
    default:
      return state;
  }
};

export default defaultReducer;
