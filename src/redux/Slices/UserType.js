import { createSlice } from "@reduxjs/toolkit";

export const userTypeSlice = createSlice( {
  name: "userType",
  initialState: { role: "notary", },
  reducers: {
    setUserType: ( state, action ) => {
      state.role = action.payload;
    },
  },
} );

export const { setUserType } = userTypeSlice.actions;
export default userTypeSlice.reducer;
