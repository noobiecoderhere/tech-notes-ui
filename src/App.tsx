import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
      </Route>
    </Routes>
  );
}

export default App;
