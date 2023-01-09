import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numOfIceCreames: 20
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreames--;
        },
        restocked: (state, action) => {
            state.numOfIceCreames += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreames--;
        });
    }
});

export default iceCreamSlice.reducer;
export const {ordered, restocked} = iceCreamSlice.actions;