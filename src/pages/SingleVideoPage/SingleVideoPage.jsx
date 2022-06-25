import React from 'react';
import { AiFillHeart, AiFillClockCircle } from 'react-icons/ai';
import { RiPlayListAddLine } from 'react-icons/ri';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import { SideBarDesktop, SideBarMobile } from '../../components';
import {
  usePostLikesMutation,
  useRemoveLikesMutation,
} from '../../features/api/likesApi/likesSliceApi';
import { isPresentInState } from '../../utils/utils';

export const SingleVideoPage = ({ setPlaylistModal }) => {
  const { videoID } = useParams();
  const { videos } = useSelector((state) => state.videos);
  const { likes } = useSelector((state) => state.likes);
  const singleVideo = videos.find((video) => video._id === videoID);
  const { authToken } = useSelector((state) => state.authentication);

  const [setLikes, { isLoading: isPostingLikes }] = usePostLikesMutation();
  const [removeLikes, { isLoading: isDeletingLikes }] =
    useRemoveLikesMutation();
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base container">
        <div className="outer-grid single-video ">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            playing
            light={singleVideo?.img}
            // onStart={singleVideo}
            url={`https://www.youtube.com/embed/${videoID}`}
            controls
          />
          <div style={{ margin: '1em' }} className="flex-base flex-column">
            <div className="single-video-heading">{singleVideo?.title}</div>
            <div className="single-video-channel flex-al-center m-top-smaller">
              <div className="single-video-channel-img m-right-smallest">
                <img src={singleVideo?.logo} alt="" />
              </div>
              {singleVideo?.creator}
            </div>
            <div className="flex-al-center-wrap single-video-buttons">
              {authToken.id ? (
                isPresentInState(singleVideo, likes) ? (
                  <button
                    onClick={() => removeLikes({ authToken, singleVideo })}
                    className=" flex-al-center single-video-button active-like"
                    type="button"
                    disabled={isDeletingLikes && isDeletingLikes}
                  >
                    <AiFillHeart />
                    <div style={{ marginLeft: '0.5em' }} className="">
                      {(isDeletingLikes && 'Removing...') || 'Liked'}
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => setLikes({ authToken, singleVideo })}
                    className="flex-al-center single-video-button"
                    type="button"
                    disabled={isPostingLikes && isPostingLikes}
                  >
                    <AiFillHeart />
                    <div style={{ marginLeft: '0.5em' }} className="">
                      {(isPostingLikes && 'liking...') || 'Like'}
                    </div>
                  </button>
                )
              ) : (
                <Link
                  to="/login"
                  className="flex-al-center single-video-button"
                  type="button"
                >
                  <AiFillHeart />
                  <div style={{ marginLeft: '0.5em' }} className="">
                    Like
                  </div>
                </Link>
              )}
              <button
                className="flex-al-center single-video-button"
                type="button"
              >
                <AiFillClockCircle />
                <div style={{ marginLeft: '0.5em' }} className="">
                  Watch Later
                </div>
              </button>
              <button
                className="flex-al-center single-video-button"
                type="button"
                onClick={() => setPlaylistModal((prev) => !prev)}
              >
                <RiPlayListAddLine />
                <div style={{ marginLeft: '0.5em' }} className="">
                  Save
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
