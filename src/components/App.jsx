import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import operations from '../redux/auth/authOperations';

import AppBar from './AppBar/AppBar';
import LoginView from '../pages/LoginView/LoginView';
import RegisterView from '../pages/RegisterView/RegisterView';
import ContactsView from '../pages/ContactsView/ContactsView';
// import Layout from './Layout/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="contacts" element={<ContactsView />} />
      </Routes>
    </div>
  );
}

export default App;
