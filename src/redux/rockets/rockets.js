import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/rockets');

    const mappedRockets = res.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      images: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    }));
    return mappedRockets;
  } catch (err) {
    throw new Error(err);
  }
});

const rockectSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    bookRocket: (state, action) => {
      const rockets = state.map((roc) => {
        if (roc.id === action.payload) return { ...roc, reserved: true };

        return roc;
      });
      return rockets;
    },
    cancelReservation: (state, { payload }) => {
      const rockets = state.map((roc) => {
        if (roc.id === payload) return { ...roc, reserved: false };

        return roc;
      });
      return rockets;
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, { payload }) => payload,
  },
});
export const { bookRocket, cancelReservation } = rockectSlice.actions;
export default rockectSlice.reducer;
