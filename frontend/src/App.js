import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './style.scss'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddWorkout from './pages/AddWorkout';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='addWorkout' element={user ? <AddWorkout /> : <Navigate to="/login" />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
