import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const { authToken } = useSelector((state) => state.authentication);
  const location = useLocation();
  return authToken.id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
