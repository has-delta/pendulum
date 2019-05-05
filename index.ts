import {
    Bodies,
    Constraint,
    Engine,
    Mouse,
    MouseConstraint,
    Render,
    World,
} from 'matter-js';

const engine = Engine.create();
const renderer = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false
    }
});

const mouse = Mouse.create(renderer.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    constraint: {
        render: {visible: false}
    },
    mouse: mouse,
});
const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
const pendulum = Bodies.circle(400, 400, 50);
const string = Constraint.create({pointA: {x: 400, y: 0}, bodyB: pendulum});
World.add(engine.world, [ground, pendulum]);
World.add(engine.world, mouseConstraint);
World.add(engine.world, string);

Engine.run(engine);
Render.run(renderer);
