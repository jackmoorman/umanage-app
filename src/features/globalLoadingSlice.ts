import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const globalLoadingSlice = createSlice({
  name: 'globalLoading',
  initialState,
  reducers: {
    globalLoadingState: (state) => !state,
  },
});

export const { globalLoadingState } = globalLoadingSlice.actions;
export default globalLoadingSlice.reducer;
