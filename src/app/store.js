import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import activitiesReducer from "../features/fintechActivities/activitiesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    activities: activitiesReducer,
  },
});
