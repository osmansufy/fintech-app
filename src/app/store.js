import { configureStore } from "@reduxjs/toolkit";

import activitiesReducer from "../features/fintechActivities/activitiesSlice";

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
  },
});
