import React from 'react';
import { render } from 'react-dom';
import { PlannerProvider } from './context/PlannerContext';
import App from './App';

render(
  <React.StrictMode>
    <PlannerProvider>
      <App />
    </PlannerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
