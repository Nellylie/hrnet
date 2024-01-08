import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; 
import formReducer from './formSlice';

const persistConfig = {
    key: 'form',
    storage,
};

const persistedReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({
    reducer: {
        form: persistedReducer, 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
