import { Container, Row, Col } from 'react-bootstrap';
import MissionsTable from '../components/ProfileMissions';
import ReservedRocket from '../components/ReservedRocket';

const ProfilePage = () => (
  <Container fluid className="mt-3">
    <Row>
      <Col>
        <MissionsTable />
      </Col>
      <Col>
        <ReservedRocket />
      </Col>
    </Row>
  </Container>
);
export default ProfilePage;
