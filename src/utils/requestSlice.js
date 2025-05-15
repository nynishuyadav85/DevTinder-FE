import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'request',
    initialState: null,
    reducers: {
        recievedRequest: (state, action) => action.payload,
        rejectRequest: () => null
    }
})

export const { recievedRequest, rejectRequest } = requestSlice.actions

export default requestSlice.reducer