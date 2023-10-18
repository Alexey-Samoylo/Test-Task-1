import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITEMS_PER_PAGE } from 'constants/main';

export const itemsAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2/' }),
    endpoints: build => ({
        fetchAllItems: build.query({
            query: (pageOffset: number) => ({
                url: 'coins',
                params: {
                    limit: ITEMS_PER_PAGE,
                    offset: pageOffset,
                }
            }),
        }),
    }),
});
