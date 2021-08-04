import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css"

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide', 'bar--hide');

const hideLoader = () => loader.classList.add('loader--hide', 'bar--hide');


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App
      hideLoader={hideLoader} 
      showLoader={showLoader}
      />
    </AuthProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
