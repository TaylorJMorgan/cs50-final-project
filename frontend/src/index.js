import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import LoggedIn from './pages/LoggedIn';
import LoggedOut from './pages/LoggedOut';
import LogOut from './pages/LogOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className='d-flex flex-column vh-100'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='loggedin' element={<LoggedIn />} />
          <Route path='logout' element={<LogOut />} />
          <Route path='loggedout' element={<LoggedOut />} />
        </Routes>
        <Footer />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
