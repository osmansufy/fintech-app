import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import activitiesData from "../../fakeData/activities.json";
const initialState = {
  totalBalance: +"",
  availableBalance: "",
  approvedActivities: [],
  pendingActivities: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const activitiesAsync = createAsyncThunk(
  "activities/fetchActivity",
  async () => {
    const response = await activitiesData;
    const approvedData = response.filter((res) => res.status == "Approved");
    const pendingData = response.filter((res) => res.status == "Pending");
    return {
      approvedData,
      pendingData,
    };
  }
);

export const activitiesSLice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(activitiesAsync.pending, (state) => {})
      .addCase(activitiesAsync.fulfilled, (state, action) => {
        state.approvedActivities = action.payload.approvedData;
        state.pendingActivities = action.payload.pendingData;
      });
  },
});

export default activitiesSLice.reducer;
