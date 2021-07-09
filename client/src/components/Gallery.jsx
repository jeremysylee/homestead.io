import React from 'react';
import { useSelector } from 'react-redux';
// import { Image, Col, Row, Container } from 'react-bootstrap';

const Gallery = () => {
  const home = useSelector((store) => store.homeReducer.home);

  return (
      <div style={{
        display: 'flex', flexDirection: 'column', width: '80%',
      }}>
        {home.photos.map((photo, i) => (
          // <ul key={i}>\
            <img src={photo.url} key={i} style={{
              marginBottom: '4px', marginLeft: '3rem',
            }} />
          // </ul>
        ))}
      </div>
  );
};

export default Gallery;
