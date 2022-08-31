import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import operations from 'redux/auth/authOperations';

import AppBar from './AppBar';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const LoginView = lazy(() =>
  import('../pages/LoginView/LoginView' /* webpackChunkName: "login-view" */)
);
const RegisterView = lazy(() =>
  import(
    '../pages/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  )
);
const ContactsView = lazy(() =>
  import(
    '../pages/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="/" element={<LoginView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="register" element={<RegisterView />} />
          </Route>
          <Route element={<PublicRoute restricted redirectTo="contacts" />}>
            <Route path="login" element={<LoginView />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
