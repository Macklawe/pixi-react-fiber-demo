import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as PIXI from 'pixi.js';
import 'pixi-tiledmap';

window.fs = {
    readFile: () => {
        console.log('caught');
    }
}

const renderer = PIXI.autoDetectRenderer(442, 286);
document.body.appendChild(renderer.view);

PIXI.loader
    .add('/map/taiga.tmx')
    .load(() => {
        const tileMap = new PIXI.extras.TiledMap('/map/taiga.tmx');

        renderer.render(tileMap);
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
