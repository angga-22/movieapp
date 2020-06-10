import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1> kita menang </h1>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
