import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import Rocket from './RocketItem';
import { getRockets } from '../redux/rockets/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, [dispatch]);
  return (
    <Container fluid>
      {rockets.map((roc) => (
        <Rocket
          key={roc.id}
          id={roc.id}
          name={roc.name}
          thumb={roc.images}
          description={roc.description}
          reserved={roc.reserved}
        />
      ))}
    </Container>
  );
};

export default RocketList;
