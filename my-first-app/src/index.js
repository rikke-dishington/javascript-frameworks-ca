import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot (document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </Router>
  </React.StrictMode>
);
