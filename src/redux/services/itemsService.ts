import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITEMS_PER_PAGE } from 'constants/main';
import { QueryProps } from 'redux/models/reduxModels';

export const itemsAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2/' }),
    endpoints: build => ({
        fetchAllItems: build.query({
            query: (queryProps: QueryProps) => ({
                url: 'coins',
                params: {
                    limit: ITEMS_PER_PAGE,
                    offset: queryProps.pageOffset,
                    orderBy: queryProps.name,
                    orderDirection: queryProps.value === 2 ? 'asc' : 'desc',
                },
            }),
        }),
    }),
});
