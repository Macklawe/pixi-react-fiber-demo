import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {color} from '../../utils/color';

const TYPE = "Explosion";
export const behavior = {
    customDisplayObject: props => new PIXI.Graphics(),
    customApplyProps: function(instance, oldProps, newProps) {
        const { x, rotation, size } = newProps;

        const left = 250 + (Math.sin(rotation) * x);
        const top = 250 + (Math.cos(rotation) * x);

        instance.clear();
        instance.beginFill(color('#ff9c4c'));
        instance.drawCircle(left, top, size);
        instance.endFill();

        instance.alpha = (30 - size) / 30;
    }
};
export default CustomPIXIComponent(behavior, TYPE);