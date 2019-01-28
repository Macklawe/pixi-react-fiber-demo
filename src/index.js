import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as PIXI from 'pixi.js';
import 'pixi-tiledmap';


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
    .add('/map/taiga.tmx')
    .load(() => {

        ReactDOM.render(<App />, document.querySelector('#root'));

    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
