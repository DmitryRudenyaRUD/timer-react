import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './State';

function renderFunc() {
    ReactDOM.render(<App
        render={renderFunc}
        store={store} />, document.getElementById('root'));
}

renderFunc();

