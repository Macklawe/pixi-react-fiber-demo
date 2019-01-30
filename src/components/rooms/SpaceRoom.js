import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApp, Container } from "react-pixi-fiber";
import Enemy from '../objects/Enemy';
import Actor from '../objects/Actor';
import {distance} from '../../utils/distance';
import Explosion from '../objects/Explosion';
import {Header} from '../ui/Header';

const MAX_ENEMIES = 10;
const ENEMY_ROTATION_SPEED = 0.02;
const HERO_ROTATION_SPEED = 0.1;
const HERO_MOVEMENT_SPEED = 5;

const keys = new Set();

class SpaceRoom extends Component {
    state = {
        kills: 0,
        enemies: [],
        explosions: [],
        hero: {
            x: 250,
            y: 250,
            rotation: 0,
        }
    };

    componentDidMount() {
        this.props.app.ticker.add(this.animate);
        document.addEventListener('keydown', this.onKeyDown);
        document.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.animate);
        document.removeEventListener('keydown', this.onKeyDown);
        document.removeEventListener('keyup', this.onKeyUp);
    }

    animate = delta => {
        let {enemies, hero, explosions, kills} = this.state;

        if (enemies.length < MAX_ENEMIES) {
            enemies.push(this.newEnemy());
        }

        enemies.forEach(enemy => {
            enemy.rotation += ENEMY_ROTATION_SPEED * enemy.speed;

            const left = 250 + (Math.sin(enemy.rotation) * enemy.x);
            const top = 250 + (Math.cos(enemy.rotation) * enemy.x);

            if (distance(hero.x, hero.y, left, top) < 10) {
                enemy.died = true;

                kills++;

                explosions.push(this.makeExplosion(enemy));
            }
        });

        explosions.forEach(explosion => {
            explosion.size++;
        });

        this.setState({
            enemies: enemies.filter(({died}) => !died),
            explosions: explosions.filter(({died}) => !died),
            kills,
        });

        if (keys.size) {
            this.processKeys(keys);
        }
    };

    makeExplosion(enemy) {
        const explosion = {
            ...enemy,
            size: 10,
            died: false,
        };

        setTimeout(() => {
            explosion.died = true;
        }, 500);

        return explosion;
    }

    processKeys(keys) {
        const {hero} = this.state;

        if (keys.has('a')) {
            hero.rotation -= HERO_ROTATION_SPEED;
        }

        if (keys.has('d')) {
            hero.rotation += HERO_ROTATION_SPEED;
        }

        if (keys.has('w')) {
            hero.x -= Math.sin(-hero.rotation) * HERO_MOVEMENT_SPEED;
            hero.y -= Math.cos(-hero.rotation) * HERO_MOVEMENT_SPEED;
        }

        if (keys.has('s')) {
            hero.x += Math.sin(-hero.rotation) * HERO_MOVEMENT_SPEED;
            hero.y += Math.cos(-hero.rotation) * HERO_MOVEMENT_SPEED;
        }

        this.setState({hero});
    }

    newEnemy() {
        const random = (min, max) => min + Math.floor(Math.random() * (max - min));
        const rotation = random(0, 360);
        const x = random(50, 200);
        const speed =random(1, 3);

        return {
            key: Math.random().toString(36).substr(2),
            x,
            speed,
            rotation,
        }
    }

    onKeyDown = e => {
        keys.add(e.key);
    };

    onKeyUp = e => {
        keys.delete(e.key);
    };

    render() {
        return (
            <Container>

                {this.state.enemies.map(enemy => (<Enemy {...enemy}/>))}

                {this.state.explosions.map(enemy => (<Explosion {...enemy}/>))}

                <Actor {...this.state.hero}/>

                <Header x={0} y={0} text={this.state.kills}/>

            </Container>
        )
    }
}

SpaceRoom.contextTypes = {
    app: PropTypes.object
};

export default withApp(SpaceRoom);
