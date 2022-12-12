import './App.css';
import Header from './components/Header';
import Accueil from './components/ContentPage';
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';





function App() {

 
 
  return (
    <div>
      
        
         <Router>
         <Header />
            <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route  path="/signup"  element={<HelloWorld/>} />
              <Route  path="/login"  element={<Login />} />  
            </Routes>
          </Router>
      </div>
  
  );
}


export default App;

