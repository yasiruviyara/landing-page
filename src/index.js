import React from 'react';
// import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
    <Navigation/> 
    <App />
    <Footer />
  </div>
  
  
);


reportWebVitals();
