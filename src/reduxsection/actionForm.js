import {FORM }from "./typeForm";


export const submitForm = (formData) => {
    return {
        type: FORM,
        payload: formData
    };
};
