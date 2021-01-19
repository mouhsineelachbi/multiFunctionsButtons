import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var name = "WORLD";
ReactDOM.render(<App name={name} />,
     document.getElementById('root'));