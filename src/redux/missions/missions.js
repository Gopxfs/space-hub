import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getDataThunk = createAsyncThunk(
  'missions/getData',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json());
    return response;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
  },
  extraReducers: {
    [getDataThunk.fulfilled]: (state, { payload }) => {
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
