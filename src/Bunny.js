import React from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

const bunny = "https://i.imgur.com/IaUrttj.png";
const centerAnchor = new PIXI.Point(0, 0);

function Bunny(props) {
    return (
        <Sprite
            anchor={centerAnchor}
            texture={PIXI.Texture.fromImage(bunny)}
            {...props}
        />
    );
}

export default Bunny;
