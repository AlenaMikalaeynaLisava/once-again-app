import React from 'react';
import Calculator from './components/Calculator';
import Output from './components/Output';
import Show from "./components/Show";


import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Output />
      <Show />
    </div>
  );
}

export default App;

