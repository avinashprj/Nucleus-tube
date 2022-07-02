import React from 'react';
import { useSelector } from 'react-redux';
import { SideBarDesktop, SideBarMobile, VideoCard } from '../../components';
import { useClearHistoryMutation } from '../../features/api/historyApi/historySliceApi';
import { NoVideosFound } from '../../components/NoVideosFound/noVideosFound';

export const HistoryPage = ({ playlistModal, setPlaylistModal }) => {
  const { history } = useSelector((store) => store.history);
  const { authToken } = useSelector((store) => store.authentication);

  const [clearHistory, { isLoading: isClearingHistory }] =
    useClearHistoryMutation();
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <div className="flex-base flex-column container">
        <div
          className="outer-grid flex-nav"
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
          <div className="page-heading">
            History
            <span className="page-number">
              ( {(history && history.length) || 0} )
            </span>
          </div>
          <div className="">
            {history?.length > 0 && (
              <button
                disabled={isClearingHistory}
                onClick={() => clearHistory({ authToken })}
                className="btn-clear-history border-none"
                type="button"
              >
                {isClearingHistory ? 'Clearing...' : 'Clear History'}
              </button>
            )}
          </div>
        </div>
        <div className="flex-base">
          <div className="outer-grid video-outer-grid">
            {history && history.length === 0 ? (
              <NoVideosFound>Watch Videos</NoVideosFound>
            ) : null}
            <div className="video-grid">
              {history &&
                history.length > 0 &&
                history?.map((likedVideo) => (
                  <VideoCard
                    key={likedVideo._id}
                    singleVideo={likedVideo}
                    playlistModal={playlistModal}
                    setPlaylistModal={setPlaylistModal}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
