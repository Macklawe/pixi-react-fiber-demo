import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import {color} from '../../utils/color';

const TYPE = "Actor";
export const behavior = {
    customDisplayObject: props => new PIXI.Graphics(),
    customApplyProps: function(instance, oldProps, newProps) {
        const { x, y, rotation } = newProps;

        instance.width = 20;
        instance.height = 20;
        instance.x = x;
        instance.y = y;

        instance.clear();

        instance.pivot = new PIXI.Point(0, 0);
        instance.rotation = rotation;

        instance.beginFill(color('#516dff'));
        instance.drawPolygon([
            -8, 10,
            0, 4,
            8, 10,
            10, 3,
            0, -10,
            -10, 3,
        ]);
        instance.endFill();
    }
};
export default CustomPIXIComponent(behavior, TYPE);