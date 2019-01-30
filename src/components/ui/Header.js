import React from "react";
import {Container, Text} from 'react-pixi-fiber';
import {color} from '../../utils/color';

export const Header = (props) => (
    <Container {...props}>
        <Text
            x={20}
            y={20}
            style={{fill: color('#FFFFFF')}}
            text={props.text}
        />
    </Container>
);