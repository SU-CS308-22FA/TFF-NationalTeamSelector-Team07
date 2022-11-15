
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTeam from './pages/NewTeam'
import PrivateRoute from './components/PrivateRoute'
import Teams from './pages/Teams'
import Team from './pages/Team'
import ProfileSettings from './pages/ProfileSettings'
import LoginAdmin from './pages/LoginAdmin'
import AdminProfilePage from './pages/AdminMainPage'
import NewPlayer from './pages/NewPlayer'

function App() {
  return(
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/loginAdmin' element={<LoginAdmin/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/adminprofilepage' element={<AdminProfilePage/>} />
            <Route path='/profilesettings' element={<ProfileSettings/>} />
            <Route path='/new-team' element={<PrivateRoute />}>
              <Route path='/new-team' element={<NewTeam />}/>
            </Route>
            <Route path='/new-player' element={<PrivateRoute />}>
              <Route path='/new-player' element={<NewPlayer />}/>
            </Route>
            <Route path='/teams' element={<PrivateRoute />}>
              <Route path='/teams' element={<Teams />}/>
            </Route>
            <Route path='/team/:teamId' element={<PrivateRoute />}>
              <Route path='/team/:teamId' element={<Team />}/>
            </Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App;
