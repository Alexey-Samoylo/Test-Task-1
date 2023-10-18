import { CoinsData, } from '../models/reduxModels';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ReducerData {
    items: CoinsData;
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: ReducerData = {
    items: {
        data: [{
            coins: [{
                '24hVolume': '',
                btcPrice: '',
                change: '',
                coinrankingUrl: '',
                color: '',
                iconUrl: '',
                listedAt: 0,
                lowVolume: false,
                marketCap: '',
                name: '',
                price: '',
                rank: 0,
                sparkline: [''],
                symbol: '',
                tier: 0,
                uuid: ''
            }],
            stats: [],
        }],
        status: ''
    },
    isLoading: true,
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
        itemsFetchingSuccess(state, action: PayloadAction<CoinsData>) {
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
