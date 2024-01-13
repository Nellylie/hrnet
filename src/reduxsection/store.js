import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // Session storage for persistence
import formReducer from './formSlice';

// Configuration for redux-persist
const persistConfig = {
    key: 'form', // Key for persisting store data
    storage,     // Define the storage type (session storage)
};

// Wrapping the form reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, formReducer);

// Configuring the Redux store
const store = configureStore({
    reducer: {
        form: persistedReducer, // Use the persisted reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        // Configuration to ignore serialization check for persist action
        serializableCheck: {
            ignoredActions: [PERSIST],
        },
    }),
});

// Creating a persistor for the store
const persistor = persistStore(store);

// Exporting the store and persistor
export { store, persistor };
