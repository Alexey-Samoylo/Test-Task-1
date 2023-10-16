import { DataItems } from '../models/reduxModels';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ReducerData {
    items: DataItems;
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: ReducerData = {
    items: {
        alternate: {},
        direction: 'string',
        id: 'string',
        items: [],
        title: 'string',
        updated: 0,
    },
    isLoading: false,
    error: '',
    count: 0,
};

export const dataSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemsFetching(state) {
            state.isLoading = true;
        },
        itemsFetchingSuccess(state, action: PayloadAction<DataItems>) {
            state.isLoading = false;
            state.error = '';
            state.items = action.payload;
        },
        itemsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default dataSlice.reducer;
