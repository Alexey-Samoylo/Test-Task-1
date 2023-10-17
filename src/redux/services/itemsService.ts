import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const itemsAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: build => ({
        fetchAllItems: build.query({
            query: () => ({
                url: `https://cloud.feedly.com/v3/streams/contents?streamId=feed/https://www.fca.org.uk/news/rss.xml&unreadOnly=False`,
            }),
        }),
    }),
});
