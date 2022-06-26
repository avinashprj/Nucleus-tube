import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VideoGridButtons } from './sub-components/VideoGridButtons/VideoGridButtons';
import { VideoCard } from '../VideoCard/VideoCard';
import {
  useGetCategoriesQuery,
  useGetVideosQuery,
} from '../../features/api/fetchVideos/fetchVideosSlice';
import { setCategories, setVideos } from '../../features/videos/videosSlice';
import { Loader } from '../Loader/Loader';
import { getCategorizedData, shuffleArray } from '../../utils/utils';

export const VideosGrid = ({ playlistModal, setPlaylistModal }) => {
  const { videos, categories, category } = useSelector((store) => store.videos);
  const dispatch = useDispatch();
  const { authToken } = useSelector((store) => store.authentication);
  const { isLoading, data } = useGetVideosQuery();
  const { data: categoryData } = useGetCategoriesQuery();
  React.useEffect(() => {
    if (data) {
      dispatch(setVideos(data));
    }
    if (categoryData) {
      dispatch(setCategories(categoryData));
    }
  }, [categoryData, data, dispatch, videos]);

  // let newArray = [...videos];
  // newArray = shuffleArray(newArray);
  const categorizedArray = getCategorizedData(videos, category);

  return (
    <div className="flex-base flex-column container">
      <VideoGridButtons categories={categories} />
      <div className="flex-base">
        <div className="outer-grid video-outer-grid">
          {videos.length === 0 && <Loader />}
          <div className="video-grid">
            {videos &&
              categorizedArray.map((video) => (
                <VideoCard
                  singleVideo={video}
                  key={video._id}
                  playlistModal={playlistModal}
                  setPlaylistModal={setPlaylistModal}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
