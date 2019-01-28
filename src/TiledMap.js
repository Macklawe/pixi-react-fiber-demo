import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const TYPE = "TiledMap";
export const behavior = {
    customDisplayObject: props => new PIXI.extras.TiledMap(props.path),
    customApplyProps: function(instance, oldProps, newProps) {

        console.log('TiledMap', instance);

        instance.hasTile = (x, y) => {
            return instance.layers.foreground.tiles.hasOwnProperty((100 * y) + x);
        };

        function checkProp(name) {
            return newProps[name] !== oldProps[name]
        }

        function applyToLayers(cb) {
            [instance.layers.foreground, instance.layers.background].forEach(cb);
        }

        if (checkProp('x')) {
            applyToLayers(layer => {
                layer.x = -newProps.x * layer.scale.x;
            })
        }

        if (checkProp('scale')) {
            applyToLayers(layer => {
                layer.scale.set(newProps.scale, newProps.scale);
            })
        }
    }
};
export default CustomPIXIComponent(behavior, TYPE);