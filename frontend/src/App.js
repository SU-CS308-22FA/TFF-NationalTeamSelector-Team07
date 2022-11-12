
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

function App() {
  return(
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/new-team' element={<PrivateRoute />}>
              <Route path='/new-team' element={<NewTeam />}/>
            </Route>
            <Route path='/teams' element={<PrivateRoute />}>
              <Route path='/teams' element={<Teams />}/>
            </Route>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App;
