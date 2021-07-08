import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Gallery from './Gallery.jsx';
import Information from './Information.jsx';

const App = () => {
  const dispatch = useDispatch();

  const getBidTable = () => {
    axios.get('/api/homes/1/bids')
      .then((res) => {
        dispatch({
          type: 'SET_BIDS',
          bids: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get('/api/homes/1')
      .then((res) => {
        console.log(res.data);
        getBidTable();
        dispatch({
          type: 'SET_HOME',
          home: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Gallery />
          </Col>
          <Col>
            <Information />
          </Col>
        </Row>
      </Container>
      <div> space
      </div>
    </div>
  );
};

export default App;
