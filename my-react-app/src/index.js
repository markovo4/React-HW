import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Menu, Profile, FormatDate, HeroSection} from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Menu/>
        <Menu/>
        <Menu/>
        <Menu/>
        <Profile/>
        <FormatDate/>
            <HeroSection/>
    </React.StrictMode>
);

reportWebVitals();
