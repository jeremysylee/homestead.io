const initialState = { userId: '' };

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { userToken: action.userToken, userId: action.userId };
    default:
      return state;
  }
};

export default userIdReducer;
