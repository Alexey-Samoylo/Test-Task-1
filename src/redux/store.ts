import { configureStore, combineReducers } from '@reduxjs/toolkit';
import itemsReducer from './reducers/DataSlice';
import { itemsAPI } from './services/itemsService';

const rootReducer = combineReducers({
    itemsReducer,
    [itemsAPI.reducerPath]: itemsAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultmiddleware =>
            getDefaultmiddleware().concat(itemsAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
