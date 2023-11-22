import { configureStore } from '@reduxjs/toolkit';

import formReducer from './reducerForm';

const store = configureStore({
    reducer: {
        form: formReducer,
    }
});


export default store;
