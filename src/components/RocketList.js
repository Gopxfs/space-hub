import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Rocket from './RocketItem';

const RocketList = () => {
  const [rockets, setRockets] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const mappedRockets = response.data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      images: rocket.flickr_images[0],
      description: rocket.description,
    }));
    console.log(mappedRockets);
    setRockets(mappedRockets);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container fluid>
      {rockets.map((roc) => (
        <Rocket
          key={roc.id}
          name={roc.name}
          thumb={roc.images}
          description={roc.description}
        />
      ))}
    </Container>
  );
};

export default RocketList;
