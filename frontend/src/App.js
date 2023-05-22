import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Login2Page from './pages/Login2Page';
import SignupPage from './pages/SignupPage';
import DemoPage from './pages/DemoPage';
import SplashPage from './pages/SplashPage';
import TryforfreePage from './pages/TryforfreePage';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const {uuser} = useAuthContext()
  const {user} = useAuthContext()
  return ( 
    <div className="App">
      <BrowserRouter>
       <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<LandingPage/>}
            />
            <Route
              path='/login'
              element={<LoginPage/>}
            />
            <Route
              path='/login2'
              element={<Login2Page/>}
            />
            <Route
              path='/signup'
              element={<SignupPage/>}
            />
            <Route
              path='/demo'
              element={<DemoPage/>}
            />
            <Route
              path='/tryforfree'
              element={<TryforfreePage/>}
            />
            <Route
              path='/splashpage'
              element={< SplashPage />}
            />
            
          </Routes>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
