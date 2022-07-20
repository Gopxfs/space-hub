import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const MissionsItem = (props) => {
  const dispatch = useDispatch();
  const missionData = props;
  const {
    name, description, id, reserved,
  } = missionData;

  return (
    <tr className="missionInfo">
      <td>
        <p>
          {name}
        </p>
      </td>
      <td>
        {description}
        <p> </p>
      </td>
      {reserved
        ? (
          <>
            <td className="memberInfo activeMember">
              <Button type="button" variant="info">
                Active Member
              </Button>
            </td>
            <td className="joinButton">
              <Button type="button" variant="outline-danger">
                Leave Mission
              </Button>
            </td>
          </>
        )
        : (
          <>
            <td className="memberInfo">
              <Button type="button" variant="secondary">
                NOT A MEMBER
              </Button>
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
