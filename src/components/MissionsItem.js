import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const MissionsItem = (props) => {
  const dispatch = useDispatch();
  const missionData = props;
  const {
    name, description, id, reserved,
  } = missionData;

  return (
    <tr className="missionInfo">
      <td>
        <p>{name}</p>
      </td>
      <td>
        {description}
        <p> </p>
      </td>
      {reserved
        ? (
          <>
            <td className="memberInfo activeMember">
              <Badge bg="info">
                Active Member
              </Badge>
            </td>
            <td className="joinButton">
              <Button type="button" variant="outline-danger" onClick={() => dispatch(leaveMission(id))}>
                Leave Mission
              </Button>
            </td>
          </>
        )
        : (
          <>
            <td className="memberInfo">
              <Badge bg="secondary">
                NOT A MEMBER
              </Badge>
            </td>
            <td className="joinButton">
              <Button type="button" variant="outline-secondary" onClick={() => dispatch(joinMission(id))}>
                Join Mission
              </Button>
            </td>
          </>
        )}
    </tr>
  );
};

export default MissionsItem;
