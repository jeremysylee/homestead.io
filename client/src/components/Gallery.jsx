import React from 'react';
import { useSelector } from 'react-redux';
// import { Image, Col, Row, Container } from 'react-bootstrap';

const Gallery = () => {
  const home = useSelector((store) => store.homeReducer.home);

  return (
      <div>
        {home.photos.map((photo, i) => (
          <ul key={i}>
            <img src={photo.url} style={{ marginBottom: '-12px', maxWidth: '100%' }} />
          </ul>
        ))}
      </div>
  );
};

export default Gallery;
