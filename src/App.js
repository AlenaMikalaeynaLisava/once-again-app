import React from 'react';
import Calculator from './components/Calculator';
import Output from './components/Output';
//import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Output />
      {/* <Counter
      // value={store.getState()}
      // onIncrement={() => action('INCREMENT')}
      // onDecrement={() => action('DECREMENT')}
      // onIncrementAsync={() => action('INCREMENT_ASYNC')} 
      />, */}
    </div>
  );
}

export default App;

