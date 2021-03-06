import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard.jsx';
import Gallery from './Gallery.jsx';
import Information from './Information.jsx';
import Login from './Login.jsx';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.userReducer.userToken);

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

  const setTokenAndId = ({ userToken, userId }) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('userId', JSON.stringify(userId));
    dispatch({
      type: 'SET_USER',
      userId,
      userToken,
    });
  };

  useEffect(() => {
    axios.get('/api/homes/1')
      .then((res) => {
        dispatch({
          type: 'SET_HOME',
          home: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    getTokenAndId();
  });

  if (!token) {
    return <Login setTokenAndId={setTokenAndId} />;
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Container style={{ justifyContent: 'center' }}>
              <Row style={{ justifyContent: 'center', flexWrap: 'nowrap' }}>
                {/* <Col> */}
                  <Gallery />
                {/* </Col> */}
                {/* <Col> */}
                  <Information />
                {/* </Col> */}
              </Row>
            </Container>
          </Route>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;
