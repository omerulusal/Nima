import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    anahtar: ""
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        getAnahtar: (state, action) => {
            state.anahtar = action.payload;
        },
    },
});

export const { getAnahtar } = generalSlice.actions;
export default generalSlice.reducer;