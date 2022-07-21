import { useSelector } from 'react-redux';
import { Container, ListGroup, Card } from 'react-bootstrap';

const ReservedRocket = () => {
  const rockets = useSelector((state) => state.rocket);
  const reserved = rockets.filter((roc) => roc.reserved);
  return (
    <Container>
      <h3> My Rockets</h3>
      <Card>
        <ListGroup variant="flush">
          {reserved.length !== 0 ? reserved.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
            : <ListGroup.Item>There are no rockets currently reserved.</ListGroup.Item>}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default ReservedRocket;
