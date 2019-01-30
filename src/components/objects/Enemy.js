import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {color} from '../../utils/color';

const TYPE = "Enemy";
export const behavior = {
    customDisplayObject: props => new PIXI.Graphics(),
    customApplyProps: function(instance, oldProps, newProps) {
        const { x, rotation } = newProps;

        const left = 250 + (Math.sin(rotation) * x);
        const top = 250 + (Math.cos(rotation) * x);

        instance.clear();
        instance.beginFill(color('#ff4c80'));
        instance.drawStar(left, top, 5, 20, 10, -rotation);
        instance.endFill();
    }
};
export default CustomPIXIComponent(behavior, TYPE);