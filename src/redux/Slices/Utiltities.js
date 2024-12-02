import { createSlice } from '@reduxjs/toolkit';

export const utiltitiesSlice = createSlice({
  name: 'utiltities',
  initialState: {
    filterSheet: false,
    filterbyCategory: false,
    quickServiceSheet: false,
    loading: false
  },
  reducers: {
    openFilters: state => {
      state.filterSheet = true;
    },
    closeFilters: state => {
      state.filterSheet = false;
    },
    openFiltersByCategory: state => {
      state.filterbyCategory = true;
    },
    closeFiltersByCategory: state => {
      state.filterbyCategory = false;
    },
    openQuickServiceSheet: state => {
      state.quickServiceSheet = true;
    },
    closeQuickServiceSheet: state => {
      state.quickServiceSheet = false;
    },
    startLoading: state => {
      state.loading = true;
    },
    stopLoading: state => {
      state.loading = false;
    },
  },
});

export const {
  openFilters,
  closeFilters,
  openQuickServiceSheet,
  closeQuickServiceSheet,
  openFiltersByCategory,
  closeFiltersByCategory,
  startLoading,
  stopLoading,
} = utiltitiesSlice.actions;
export default utiltitiesSlice.reducer;
