import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rocketSlice from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rocket: rocketSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
