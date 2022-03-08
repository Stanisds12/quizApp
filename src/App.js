import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Game from './components/Game';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="container">
      <Router >

        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/game' element={<Game />} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
