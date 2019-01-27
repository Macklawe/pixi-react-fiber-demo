import React, { Component } from 'react';
import { Stage } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";
import './App.css';

const height = 450;
const width = 600;
const OPTIONS = {
    backgroundColor: 0x1099bb
};

class App extends Component {
    render() {
        return (
            <Stage options={OPTIONS} width={width} height={height}>
                <RotatingBunny x={width / 2} y={height / 2} />
            </Stage>
        );
    }
}

export default App;
