import React from 'react';
import { AiFillHeart, AiFillClockCircle } from 'react-icons/ai';
import { RiPlayListAddLine } from 'react-icons/ri';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import {
  PlaylistModal,
  SideBarDesktop,
  SideBarMobile,
  SingleVideoPlayer,
} from '../../components';
import {
  usePostLikesMutation,
  useRemoveLikesMutation,
} from '../../features/api/likesApi/likesSliceApi';
import { isPresentInState } from '../../utils/utils';
import {
  usePostWatchLaterMutation,
  useRemoveWatchLaterMutation,
} from '../../features/api/watchLaterApi/watchLaterApi';

export const SingleVideoPage = () => {
  const [playlistModal, setPlaylistModal] = React.useState(false);

  const { videoID } = useParams();
  const { videos } = useSelector((state) => state.videos);
  const { likes } = useSelector((state) => state.likes);
  const { watchLater } = useSelector((state) => state.watchLater);
  const singleVideo = videos.find((video) => video._id === videoID);
  const { authToken } = useSelector((state) => state.authentication);

  const [setLikes, { isLoading: isPostingLikes }] = usePostLikesMutation();
  const [removeLikes, { isLoading: isDeletingLikes }] =
    useRemoveLikesMutation();
  const [addWatchLater, { isLoading: addingWatchLater }] =
    usePostWatchLaterMutation();
  const [removeWatchLater, { isLoading: isDeletingWatchLater }] =
    useRemoveWatchLaterMutation();

  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div style={{ height: '100vh' }} className="flex-base container">
        <div className="outer-grid single-video ">
          <SingleVideoPlayer singleVideo={singleVideo} videoID={videoID} />
          <div className="flex-base flex-column single-video-main">
            <div className="single-video-heading">{singleVideo?.title}</div>
            <div className="single-video-channel flex-al-center m-top-smaller">
              <div className="single-video-channel-img m-right-smallest">
                <img src={singleVideo?.logo} alt="" />
              </div>
              {singleVideo?.creator}
            </div>
            <div className="flex-wrap single-video-buttons">
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
              {/* note:Watch LATER */}
              {authToken.id ? (
                isPresentInState(singleVideo, watchLater) ? (
                  <button
                    onClick={() => removeWatchLater({ authToken, singleVideo })}
                    className=" flex-al-center single-video-button active-watchLater"
                    type="button"
                    disabled={isDeletingWatchLater && isDeletingWatchLater}
                  >
                    <AiFillClockCircle />
                    <div style={{ marginLeft: '0.5em' }} className="">
                      {(isDeletingWatchLater && 'Removing...') || 'Watch Later'}
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => addWatchLater({ authToken, singleVideo })}
                    className="flex-al-center single-video-button"
                    type="button"
                    disabled={addingWatchLater && addingWatchLater}
                  >
                    <AiFillClockCircle />
                    <div style={{ marginLeft: '0.5em' }} className="">
                      {(addingWatchLater && 'Adding...') || 'Watch Later'}
                    </div>
                  </button>
                )
              ) : (
                <Link
                  to="/login"
                  className="flex-al-center single-video-button"
                  type="button"
                >
                  <AiFillClockCircle />
                  <div style={{ marginLeft: '0.5em' }} className="">
                    Watch Later
                  </div>
                </Link>
              )}

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
        {playlistModal && (
          <PlaylistModal
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
            singleVideo={singleVideo}
          />
        )}
      </div>
    </>
  );
};
