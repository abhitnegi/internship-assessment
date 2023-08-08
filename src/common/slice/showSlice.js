import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows: {},
    selectedshow: {},
    setShows: 0
}

const showSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        addShows: (state, {payload}) => {
            state.shows = payload;
        },
        addShowsDetails: (state, {payload}) => {
            state.selectedshow = payload;
        },
        addCount: (state, {payload}) => {
            state.setShows = payload;
        }
    }
})

export const { addShows, addShowsDetails, addCount } = showSlice.actions;
export default showSlice.reducer;
export const getAllShows = state => state.shows.shows;
export const getShowDetails = state => state.shows.selectedshow;
export const getCount = state => state.shows.setShows