import { FORM } from "./typeForm";
import { data } from "../datasmock/mockDatas"
const initialState = {
    formData: data
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
