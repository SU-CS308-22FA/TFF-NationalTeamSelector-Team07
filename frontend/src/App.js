import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Edit from './pages/Edit'

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
            <Route path='/edit' element={<Edit/>} />
            
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App;