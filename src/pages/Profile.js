import { Container, Row, Col } from 'react-bootstrap';
import ReservedRocket from '../components/ReservedRocket';

const ProfilePage = () => (
  <Container fluid className="mt-3">
    <Row>
      <Col>your misssions</Col>
      <Col>
        <ReservedRocket />
      </Col>
    </Row>
  </Container>
);
export default ProfilePage;
