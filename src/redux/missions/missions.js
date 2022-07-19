import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  reducers: {
    getData(state, { payload }) {
      const missions = [];
      payload.forEach((mission) => {
        const newMission = {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        };
        missions.push(newMission);
      });
      return {
        missions,
      };
    },
  },
});

export const { getData } = missionSlice.actions;

export default missionSlice.reducer;
