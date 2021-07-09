import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Login = ({ setTokenAndId }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const login = (credentials) => {
    const options = {
      credentials,
    };
    axios.post('/api/login', options)
      .then((response) => {
        if (response.data.userToken) {
          console.log('conditional too friendly', response.data);
          setTokenAndId(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Log in</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setTokenAndId: PropTypes.func.isRequired,
};

export default Login;
