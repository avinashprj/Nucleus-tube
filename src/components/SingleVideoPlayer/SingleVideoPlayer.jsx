import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import { usePostHistoryMutation } from '../../features/api/historyApi/historySliceApi';
import { isPresentInState } from '../../utils/utils';

export const SingleVideoPlayer = ({ singleVideo, videoID }) => {
  console.log(singleVideo, videoID);
  const { authToken } = useSelector((store) => store.authentication);
  const [addToHistory] = usePostHistoryMutation();
  const { history } = useSelector((state) => state.history);
  console.log(authToken);
  const addToHistoryHandler = () => {
    if (authToken.id && !isPresentInState(singleVideo, history))
      addToHistory({ authToken, singleVideo });
  };
  return (
    <ReactPlayer
      className="react-player"
      width="100%"
      height="100%"
      playing
      light={singleVideo?.img}
      onStart={addToHistoryHandler}
      url={`https://www.youtube.com/embed/${videoID}`}
      controls
    />
  );
};
