import { Routes, Route } from 'react-router-dom';
import DashLayout from './components/DashLayout';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import Public from './components/Public';
import Welcome from './features/auth/Welcome';
import UsersList from './features/users/UsersList';
import NotesList from './features/notes/NotesList';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='dash' element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path='notes'>
            <Route index element={<NotesList />} />
          </Route>
          <Route path='users'>
            <Route index element={<UsersList />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
