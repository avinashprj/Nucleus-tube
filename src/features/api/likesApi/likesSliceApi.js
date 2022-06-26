import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { setLikes } from '../../likes/likesSlice';

export const likesSliceApi = createApi({
  reducerPath: 'likesSliceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  endpoints: (builder) => ({
    postLikes: builder.mutation({
      query: ({ singleVideo: video, authToken: { id } }) => {
        console.log(video, id);
        return {
          url: '/likes',
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
          const { likes } = data;
          dispatch(setLikes(likes));
          toast.success('added to likes');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect
          console.log(err);
          toast.error('something went Wrong');
        }
      },
    }),
    removeLikes: builder.mutation({
      query: ({ singleVideo, authToken: { id } }) => {
        console.log(singleVideo, id);
        return {
          url: `/likes/${singleVideo._id}`,
          method: 'DELETE',
          headers: { authorization: id },
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const {
            data: { likes },
          } = await queryFulfilled;
          dispatch(setLikes(likes));
          toast.success('Removed from likes');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect
          console.log(err);
          toast.error('something went Wrong');
        }
      },
    }),
    getLikes: builder.query({
      query: (authToken) => ({
        url: '/likes',
        method: 'GET',
        headers: { authorization: authToken.id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const data = await queryFulfilled;
          console.log('HELLO FROM GET LIKES');
          // console.log(encodedToken);
          // dispatch(setAuthToken(encodedToken));
          // toast.success('Logged In Successfully');
          // `onSuccess` side-effect
        } catch (err) {
          // `onError` side-effect
          toast.error('something went Wrong 11');
        }
      },
    }),
  }),
});

export const {
  usePostLikesMutation,
  useGetLikesQuery,
  useRemoveLikesMutation,
} = likesSliceApi;
