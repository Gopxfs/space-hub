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
  reducers: {
    joinMission(state, { payload }) {
      const reservedMission = state.missions.map((mission) => {
        if (mission.id === payload) return { ...mission, reserved: true };
        return { ...mission };
      });
      return { missions: reservedMission };
    },
    leaveMission(state, { payload }) {
      const leaveMission = state.missions.map((mission) => {
        if (mission.id === payload) return { ...mission, reserved: false };
        return { ...mission };
      });
      return { missions: leaveMission };
    },
  },
  extraReducers: {
    [getDataThunk.fulfilled]: (state, { payload }) => {
      const missions = [];
      payload.forEach((mission) => {
        const newMission = {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          reserved: false,
        };
        missions.push(newMission);
      });
      return {
        missions,
      };
    },
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;

export default missionSlice.reducer;
