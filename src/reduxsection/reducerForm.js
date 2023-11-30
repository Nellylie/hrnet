import { FORM } from "./typeForm";

const initialState = {
    formData: [{firstName: "lea", lastName: "Pierre", dateOfBirth: "20-05-1990",
    dateStart: "20-02-2023",
    department: "HR"}, {firstName: "lea", lastName: "Pierre", dateOfBirth: "20-05-1990",
    dateStart: "20-02-2023",
    department: "HR"}]
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM:
            console.log('Form Data:', action.payload);
            return { ...state, formData: [...state.formData, action.payload] };
        default:
            return state;
    }
};

export default formReducer;
