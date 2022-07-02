import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { setHistory } from '../../history/historySlice';

export const historySliceApi = createApi({
  reducerPath: 'historySliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: (authToken) => ({
        url: '/history',
        method: 'GET',
        headers: { authorization: authToken.id },
      }),
    }),
    postHistory: builder.mutation({
      query: ({ singleVideo: video, authToken: { id } }) => ({
        url: '/history',
        method: 'POST',
        body: {
          video,
        },
        headers: { authorization: id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const { data } = await queryFulfilled;
          const { history } = data;
          dispatch(setHistory(history));
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect
          // toast.error('something went Wrong');
        }
      },
    }),
    removeHistory: builder.mutation({
      query: ({ singleVideo, authToken: { id } }) => ({
        url: `/history/${singleVideo._id}`,
        method: 'DELETE',
        headers: { authorization: id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const {
            data: { history },
          } = await queryFulfilled;
          dispatch(setHistory(history));
          toast.success('Removed from history');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect

          toast.error('something went Wrong');
        }
      },
    }),
    clearHistory: builder.mutation({
      query: (authToken) => ({
        url: '/history/all',
        method: 'DELETE',
        headers: { authorization: authToken.id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const data = await queryFulfilled;

          //
          // dispatch(setAuthToken(encodedToken));
          // toast.success('Logged In Successfully');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect

          toast.error('something went Wrong history');
        }
      },
    }),
  }),
});

export const {
  usePostHistoryMutation,
  useRemoveHistoryMutation,
  useClearHistoryMutation,
  useGetHistoryQuery,
} = historySliceApi;
