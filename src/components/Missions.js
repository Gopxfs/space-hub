import { useDispatch } from 'react-redux';
import { getData } from '../redux/missions/missions';

let load = false;

const Missions = () => {
  const dispatch = useDispatch();

  if (!load) {
    load = true;
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((response) => dispatch(getData(response)));
  }
};

export default Missions;
