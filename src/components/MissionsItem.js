import Button from 'react-bootstrap/Button';

const MissionsItem = (props) => {
  const missionData = props;
  const { name, description } = missionData;
  return (
    <tr>
      <td>
        <p style={{ 'font-weight': 'bold' }}>
          {name}
        </p>
      </td>
      <td>
        {description}
        <p> </p>
      </td>
      <td style={{ 'vertical-align': 'middle' }}><Button type="button" variant="secondary" style={{ padding: '0 3px', display: 'block', margin: 'auto' }}>NOT A MEMBER</Button></td>
      <td style={{ 'vertical-align': 'middle' }}><Button type="button" variant="outline-secondary" style={{ display: 'block', margin: 'auto' }}>Join Mission</Button></td>
    </tr>
  );
};

export default MissionsItem;
