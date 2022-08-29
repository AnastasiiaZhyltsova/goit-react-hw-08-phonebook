import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';

function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;
  return shoudRedirect ? <Navigate to="/contacts" /> : <Outlet />;
}
export default PublicRoute;
