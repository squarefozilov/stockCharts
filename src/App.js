import React from 'react';
import Stock from './Stock';
import Navbar from './components/view';
 
import ReactDOM from 'react-dom';
 
 
 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stock />
    </div>
  );
}

export default App;
