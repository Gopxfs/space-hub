import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import './Rocket.css';

const RocketItem = (props) => {
  const { name, thumb, description } = props;
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
              <Button variant="primary">Reserve Rocket</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

RocketItem.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
export default RocketItem;
