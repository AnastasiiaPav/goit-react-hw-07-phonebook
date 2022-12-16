import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { storage } from 'Redux/storage';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storage}>
        <App />
    </Provider>
  </React.StrictMode>
);
