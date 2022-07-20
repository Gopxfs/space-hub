import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const MissionsTable = () => {
  const missionsData = useSelector((state) => state.missions.missions);
  const reservedMissions = missionsData.filter((mission) => {
    if (mission.reserved === true) return true;
    return false;
  });

  const missionsNames = [];
  reservedMissions.forEach((mission) => {
    missionsNames.push((<tr><td>{mission.name}</td></tr>));
  });

  return (
    <div className="missionsProfile">
      <h3>My Missions</h3>
      <Table bordered>
        <tbody>
          {missionsNames}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsTable;
