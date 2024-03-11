import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route, Navigate, redirect} from 'react-router-dom';
import {Home} from './components/dashboard/home';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.user !== null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
        </Routes>
          <Routes path="/">
            {isAuthenticated ? 
              <Route to="/home" />
             : 
              <Route to="/signin" />
            }
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
