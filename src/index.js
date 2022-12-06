import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/Main/App';
import reportWebVitals from './reportWebVitals';

import Title from './Components/Top/Title'
import LeftMenu from "./Components/Left/LeftMenu";
import Credits from "./Components/Credits";
import TopMenu from "./Components/Top/TopMenu"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopMenu />
      <App />
      <LeftMenu />
      <Credits />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
