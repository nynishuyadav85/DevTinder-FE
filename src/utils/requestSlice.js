import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'request',
    initialState: [],
    reducers: {
        recievedRequest: (state, action) => action.payload,
        removeRequest: (state, action) => {
            const newArray = state.filter((r) => r._id !== action.payload)
            return newArray
        }
    }
})

export const { recievedRequest, removeRequest } = requestSlice.actions

export default requestSlice.reducer