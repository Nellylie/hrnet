import { createSlice } from '@reduxjs/toolkit';
import { data, formatedData } from '../datasmock/mockDatas';

// Setting initial state with formatted data
const initialState = {
    formData: formatedData(data),
};

// Create a slice for form operations
export const formSlice = createSlice({
    name: 'form', // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Reducer to handle form submission
        submitForm: (state, action) => {
            console.log('Form Data:', action.payload); // Logging submitted data
            state.formData.push(action.payload); // Updating state with new form data
        }
    }
});

// Exporting the action(s) of the slice
export const { submitForm } = formSlice.actions;

// Exporting the reducer of the slice
export default formSlice.reducer;
