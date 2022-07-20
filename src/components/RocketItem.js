import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import { bookRocket, cancelReservation } from '../redux/rockets/rockets';
import './Rocket.css';

const RocketItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, thumb, description, reserved,
  } = props;
  return (
    <>
      <Card className="mb-2">
        <Row>
          <Col lg={4} md={4}>
            <Card.Img src={thumb} className="thumbnail" />
          </Col>

          <Col lg={8} md={8}>
            <Card.Body>
              <Card.Title>
                {' '}
                {name}
              </Card.Title>
              <Card.Text>
                {' '}
                {description}
                {' '}
              </Card.Text>
              {reserved ? (
                <Button
                  variant="secondary"
                  onClick={() => dispatch(cancelReservation(id))}
                >
                  Cancel Reservation
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => dispatch(bookRocket(id))}
                >
                  Reserve Rocket
                </Button>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketItem;
