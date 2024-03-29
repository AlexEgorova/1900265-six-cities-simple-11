import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';


const Setting = {
  PlacesFoundCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesFoundCount = {Setting.PlacesFoundCount}
      offers = {offers}
    />
  </React.StrictMode>,
);
