import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApp, Container } from "react-pixi-fiber";
import TiledMap from "./TiledMap";
import Bunny from "./Bunny";

let isHeroFalling = true;

class TaigaMap extends Component {
    state = {
        heroX: 2,
        heroY: 2
    };

    componentDidMount() {
        this.props.app.ticker.add(this.animate);
        document.addEventListener('keydown', this.onKeyPress);
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.animate);
        document.removeEventListener('keydown', this.onKeyPress);
    }

    animate = delta => {
        if (isHeroFalling) {
            console.log('this.state.heroY', this.state.heroY);
            if (!this.tiledMap.hasTile(this.state.heroX, this.state.heroY + 1)) {
                this.setState({heroY: this.state.heroY + 1});
            } else {
                isHeroFalling = false;
            }
        }
    };

    onKeyPress = e => {
        switch (e.key) {
            case 'd':
                this.setState({heroX: this.state.heroX + 1});
                break;
            case 'a':
                this.setState({heroX: this.state.heroX - 1});
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <Container>
                <TiledMap
                    ref={tiledMap => this.tiledMap = tiledMap}
                    path={'/map/taiga.tmx'}
                    x={0}
                    scale={3}
                />
                <Bunny x={this.state.heroX * 16 * 3} y={this.state.heroY * 16 * 3} scale={3}/>
            </Container>
        )
    }
}

TaigaMap.contextTypes = {
    app: PropTypes.object
};

export default withApp(TaigaMap);
