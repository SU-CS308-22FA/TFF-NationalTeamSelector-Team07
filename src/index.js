import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenuPage from './pages/MainMenuPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserSettingsPage from './pages/UserSettingsPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<MainMenuPage/>} />
      <Route exact path='/MainMenu' element={<MainMenuPage/>} />
      <Route exact path='/Contact' element={<ContactPage/>} />
      <Route exact path='/Admin' element={<AdminPage/>} />
      <Route exact path='/SignIn' element={<SignInPage/>} />
      <Route exact path='/SignUp' element={<SignUpPage/>} />
      <Route exact path='/UserSettings' element={<UserSettingsPage/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
