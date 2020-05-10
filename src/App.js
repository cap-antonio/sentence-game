import React from 'react';
import './App.css';
import SentenceGame from './components/container/';
import { Provider } from 'react-redux';
import store from './components/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <SentenceGame />
      </div>
    </Provider>
  );
}

export default App;
