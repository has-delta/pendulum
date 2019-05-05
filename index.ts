import {Engine, Render, World, Bodies} from 'matter-js';

const engine = Engine.create();
const renderer = Render.create({
    element: document.body,
    engine: engine
});

const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
World.add(engine.world, [ground]);

Engine.run(engine);
Render.run(renderer);
