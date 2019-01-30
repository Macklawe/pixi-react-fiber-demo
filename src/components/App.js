import React, { Component } from 'react';
import { Stage } from "react-pixi-fiber";
import SpaceRoom from './rooms/SpaceRoom';
import {color} from '../utils/color';

const height = 500;
const width = 500;
const OPTIONS = {
    backgroundColor: color('#250b23')
};

class App extends Component {

    render() {
        return (
            <Stage options={OPTIONS} width={width} height={height}>
                <SpaceRoom/>
            </Stage>
        );
    }
}

export default App;
