import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"

const element = <h1>I am FrontEnd developer</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

//auto import
//material icon theme
//prettier