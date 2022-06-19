import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
