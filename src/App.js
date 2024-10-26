import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MiContador from './Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiContador/>
      </header>
    </div>
  );
}

export default App;
