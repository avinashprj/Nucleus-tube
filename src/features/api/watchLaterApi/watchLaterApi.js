import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { setLikes } from '../../likes/likesSlice';
import { setWatchLater } from '../../watchLater/watchLaterSlice';

export const watchLaterSliceApi = createApi({
  reducerPath: 'watchLaterSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  endpoints: (builder) => ({
    getWatchLater: builder.query({
      query: (authToken) => ({
        url: '/watchlater',
        method: 'GET',
        headers: { authorization: authToken.id },
      }),
    }),
    postWatchLater: builder.mutation({
      query: ({ singleVideo: video, authToken: { id } }) => ({
        url: '/watchlater',
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
          const { watchlater } = data;
          dispatch(setWatchLater(watchlater));
          toast.success('Added to Watch Later ');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect

          toast.error('something went Wrong');
        }
      },
    }),
    removeWatchLater: builder.mutation({
      query: ({ singleVideo, authToken: { id } }) => ({
        url: `/watchlater/${singleVideo._id}`,
        method: 'DELETE',
        headers: { authorization: id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const {
            data: { watchlater },
          } = await queryFulfilled;
          dispatch(setWatchLater(watchlater));
          toast.success('Removed from WatchLater');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect

          toast.error('something went Wrong');
        }
      },
    }),
  }),
});

export const {
  usePostWatchLaterMutation,
  useRemoveWatchLaterMutation,
  useGetWatchLaterQuery,
} = watchLaterSliceApi;
