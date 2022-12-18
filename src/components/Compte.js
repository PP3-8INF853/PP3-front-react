import React, { Component } from "react";

import '../index.css';
import App from './Main/App';
import reportWebVitals from './reportWebVitals';

import Title from './Top/Title'
import LeftMenu from "./Left/LeftMenu";
import Credits from "./Credits";
import TopMenu from "./Top/TopMenu"



export default class Compte extends Component{
  render(){
    return(  
    <React.StrictMode>
      <TopMenu />
        <App />
        <LeftMenu />
        <Credits />
    </React.StrictMode>)

  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
