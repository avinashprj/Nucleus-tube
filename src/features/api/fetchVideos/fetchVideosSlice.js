import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchVideosSliceApi = createApi({
  reducerPath: 'fetchVideosSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => `/videos`,
    }),
    getCategories: builder.query({
      query: () => `/categories`,
    }),
  }),
});

export const { useGetVideosQuery, useGetCategoriesQuery } = fetchVideosSliceApi;
