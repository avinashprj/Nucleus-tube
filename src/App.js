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

function App() {
  useScrollToTop();
  const [playlistModal, setPlaylistModal] = React.useState(false);
  const { authToken } = useSelector((store) => store.authentication);
  const [skip, setSkip] = React.useState(true);
  const { data } = useGetLikesQuery(authToken, { skip });

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (data) {
      dispatch(setLikes(data.likes));
    }
  }, [data, dispatch, setSkip]);
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
