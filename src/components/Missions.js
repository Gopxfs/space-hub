import { useDispatch } from 'react-redux';
import { getDataThunk } from '../redux/missions/missions';

let load = false;

const Missions = () => {
  const dispatch = useDispatch();

  if (!load) {
    load = true;
    dispatch(getDataThunk());
  }
};

export default Missions;
