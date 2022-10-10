import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Papa from "papaparse";




export const fetchShows= createAsyncThunk(
   'shows,fetchShows', 
  async() => {
    const response = Papa.parse("https://docs.google.com/spreadsheets/d/1kJMYOqRwKhN2c0wJQyp03lduto7ECAVDLhhGTtEAz9o/pub?output=csv", {
      header: true,
      complete: (response) => {
        const data = response.json();
        return data;
      },
      error: (err) => {
        return Promise.reject('Unable to fetch, status: ' + response.status);
      },
    });
  });
 

const showsSlice = createSlice({
  name: "shows",
  initialState: { isLoading: true, errMess: null, showsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchShows.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchShows.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.showsArray = action.payload;
    },
    [fetchShows.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const showsReducer = showsSlice.reducer;

export const selectAllShows = (state) => {
  return state.shows.showsArray;
};
