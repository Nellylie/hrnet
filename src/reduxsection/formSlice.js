import { createSlice } from '@reduxjs/toolkit';
import {data, formatedData } from '../datasmock/mockDatas';

const initialState = {
    formData: formatedData(data),
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitForm: (state, action) => {
            console.log('Form Data:', action.payload);
            state.formData.push(action.payload);
        }
    }
});

export const { submitForm } = formSlice.actions;

export default formSlice.reducer;
