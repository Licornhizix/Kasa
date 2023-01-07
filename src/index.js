import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './pages/Home/index.jsx';
import Apropos from './pages/Apropos';
import Home from './pages/Home';
import Logements from './pages/Logements';
import Error from './pages/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path = "/" element ={<Home />} />
      <Route path = "/apropos" element ={<Apropos />} />
      <Route path = "logement/:id" element ={<Logements />} />
      <Route path = "*" element ={<Error />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

