import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useToken = () => {
  const dispatch = useDispatch();

  // set initial token and userId
  const getTokenAndId = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const userIdString = sessionStorage.getItem('userId');
    const userId = JSON.parse(userIdString);
    dispatch({
      type: 'SET_USER',
      userId,
      userToken,
    });
  };

  // Save token and userId to session storage and in client hook states
  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const setTokenAndId = (userToken, userId) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('userId', JSON.stringify(userId));
    dispatch({
      type: 'SET_USER',
      userId,
      userToken,
    });
  };

  return {
    setToken: saveToken,
    setUserId: saveUserId,
    token,
    id,
  };
};

export default useToken;
