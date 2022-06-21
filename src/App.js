import './App.css';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './AppRoutes';

function App() {
  const [playlistModal, setPlaylistModal] = React.useState(false);
  return (
    <>
      <AppRoutes
        playlistModal={playlistModal}
        setPlaylistModal={setPlaylistModal}
      />
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
