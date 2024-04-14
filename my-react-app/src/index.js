import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Menu} from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
    </React.StrictMode>
);

reportWebVitals();
