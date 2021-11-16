import { up, down, left, right } from "./input.js";
import { hasTimeElasped } from "./util/clock.js";
import { drawCube, drawTile } from "./util/graphics.js";

let forward, strafe;
let x = 0, y = 0, z = 0;

const canvas = document.createElement("canvas");

const width = window.innerWidth - 800/12;
const height = window.innerHeight - 600/12;

canvas.setAttribute("id", "screen");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);

document.body.append(canvas);

const g = canvas.getContext('2d');

function loop() {

    forward = ((up || down) && hasTimeElasped(1000/75, true)? (up? -1 : (down? 1 : 0)) : 0);
    strafe = ((left || right) && hasTimeElasped(1000/75, true)? (left? -1 : (right? 1 : 0)) : 0);

    z += forward * 25;
    x += strafe * 50;

    g.fillStyle = "#dfdfdf";
    g.fillRect(0, 0, width, height);

    drawCube(x - z, y + z, "454545");
    drawTile(x - z, y + z, "909090");

}

setInterval(loop, 10);