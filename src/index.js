import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './Assets/fonts/FSMeridian/FSMeridian-Medium.ttf'
import './Assets/fonts/FSMeridian/FSMeridian-Medium.eot'
import './Assets/fonts/FSMeridian/FSMeridian-Medium.woff'
import './Assets/fonts/FSMeridian/FSMeridian-Medium.woff2'
import './Assets/fonts/SF UI/SFUIText-Regular.woff'


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

