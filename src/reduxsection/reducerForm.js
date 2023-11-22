import { FORM } from "./typeForm";

const initialState = {
    formData: {}
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM:
            console.log('Form Data:', action.payload);
            return { ...state, formData: action.payload };
        default:
            return state;
    }
};

export default formReducer;
