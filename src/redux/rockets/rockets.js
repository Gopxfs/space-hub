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
    }));
    return mappedRockets;
  } catch (err) {
    throw new Error(err);
  }
});

const rockectSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: 'idle',
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, { payload }) => ({ rockets: payload }),
  },
});

export default rockectSlice.reducer;
