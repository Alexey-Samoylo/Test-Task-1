import { IDataItems, IItems } from "../models/IItems"
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchItems } from "./ActionCreator"

interface DataItems {
    items: IDataItems,
    isLoading: boolean,
    error: string,
    count: number
}

const initialState: DataItems = {
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
    count: 0
}

export const dataSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        // itemsFetching(state) {
        //     state.isLoading = true;
        // },
        // itemsFetchingSuccess(state, action: PayloadAction<IItems[]>) {
        //     state.isLoading = false;
        //     state.error = '';
        //     state.items = action.payload;
        // },
        // itemsFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        [fetchItems.fulfilled.type]: (state, action: PayloadAction<IDataItems>) => {
            state.isLoading = false;
            state.error = '';
            state.items = action.payload;
        },
        [fetchItems.pending.type]: (state, action: PayloadAction<IItems[]>) => {
            state.isLoading = true;
        },
        [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default dataSlice.reducer;