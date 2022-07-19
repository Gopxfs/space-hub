import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    mission_id: [],
    mission_name: [],
    description: [],
  },
  reducers: {
    getData(state, { payload }) {
      const ids = [];
      const names = [];
      const descriptions = [];
      payload.forEach((mission) => {
        ids.push(mission.mission_id);
        names.push(mission.mission_name);
        descriptions.push(mission.description);
      });
      return {
        mission_id: ids,
        mission_name: names,
        description: descriptions,
      };
    },
  },
});

export const { getData } = missionSlice.actions;

export default missionSlice.reducer;
