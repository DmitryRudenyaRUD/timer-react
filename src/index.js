import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function renderFunc() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderFunc();

