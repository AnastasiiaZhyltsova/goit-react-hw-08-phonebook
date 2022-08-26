import { Route, Routes } from 'react-router-dom';

// import AppBar from './AppBar';
import LoginView from '../pages/LoginView/LoginView';
import RegisterView from '../pages/RegisterView/RegisterView';
import ContactsView from '../pages/ContactsView/ContactsView';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
