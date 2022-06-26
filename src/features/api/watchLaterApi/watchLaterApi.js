import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { setLikes } from '../../likes/likesSlice';
import { setWatchLater } from '../../watchLater/watchLaterSlice';

export const watchLaterSliceApi = createApi({
  reducerPath: 'watchLaterSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  endpoints: (builder) => ({
    postWatchLater: builder.mutation({
      query: ({ singleVideo: video, authToken: { id } }) => {
        console.log(video, id);
        return {
          url: '/watchlater',
          method: 'POST',
          body: {
            video,
          },
          headers: { authorization: id },
        };
      },
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
          console.log(err);
          toast.error('something went Wrong');
        }
      },
    }),
    removeWatchLater: builder.mutation({
      query: ({ singleVideo, authToken: { id } }) => {
        console.log(singleVideo, id);
        return {
          url: `/watchlater/${singleVideo._id}`,
          method: 'DELETE',
          headers: { authorization: id },
        };
      },
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
          console.log(err);
          toast.error('something went Wrong');
        }
      },
    }),
  }),
});

export const { usePostWatchLaterMutation, useRemoveWatchLaterMutation } =
  watchLaterSliceApi;
