import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './router/Routes';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
