import './App.css';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoutes } from './AppRoutes';
import { useScrollToTop } from './CustomHooks/CustomHooks';
import { useGetLikesQuery } from './features/api/likesApi/likesSliceApi';
import { setLikes } from './features/likes/likesSlice';
import { useThemeContext } from './context/ThemeContext/ThemeContext';
import { useGetHistoryQuery } from './features/api/historyApi/historySliceApi';
import { setHistory } from './features/history/historySlice';
import { useGetWatchLaterQuery } from './features/api/watchLaterApi/watchLaterApi';
import { setWatchLater } from './features/watchLater/watchLaterSlice';

function App() {
  useScrollToTop();
  const [playlistModal, setPlaylistModal] = React.useState(false);
  const { authToken } = useSelector((store) => store.authentication);
  const [skip, setSkip] = React.useState(true);
  const { data: likesData } = useGetLikesQuery(authToken, { skip });
  const { data: historyData } = useGetHistoryQuery(authToken, { skip });
  const { data: watchLaterData } = useGetWatchLaterQuery(authToken, { skip });

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (likesData) {
      dispatch(setLikes(likesData.likes));
    }
    if (historyData) {
      dispatch(setHistory(historyData.history));
    }
    if (watchLaterData) {
      dispatch(setWatchLater(watchLaterData.watchlater));
    }
  }, [dispatch, historyData, likesData, setSkip, watchLaterData]);
  const [colorState] = useThemeContext();
  return (
    <div className="app" data-theme={colorState}>
      <AppRoutes
        setSkip={setSkip}
        playlistModal={playlistModal}
        setPlaylistModal={setPlaylistModal}
      />
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
