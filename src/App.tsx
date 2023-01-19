import { Routes, Route } from 'react-router-dom';
import DashLayout from './components/DashLayout';
import Layout from './components/Layout';
import Login from './components/Login';
import Public from './components/Public';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='dash' element={<DashLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
