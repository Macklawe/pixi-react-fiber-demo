import React, { Component } from 'react';
import { Stage } from "react-pixi-fiber";
import TaigaMap from './TaigaMap';
import './App.css';

const height = window.innerHeight;
const width = window.innerWidth;
const OPTIONS = {
    backgroundColor: 0x1099bb
};

class App extends Component {

    render() {
        return (
            <Stage options={OPTIONS} width={width} height={height}>
                <TaigaMap/>
            </Stage>
        );
    }
}

export default App;
