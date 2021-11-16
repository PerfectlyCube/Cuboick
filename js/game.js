import { up, down, left, right, mouseDown, mX, mY } from "./input.js";
import { hasTimeElasped } from "./util/clock.js";
import { drawCube, drawTile } from "./util/graphics.js";
import { createButton } from "./util/button.js";

let forward, strafe;
let x = 0, y = 0, z = 0;

const canvas = document.createElement("canvas");

const width = 50 * 12;
const height = 50 * 8;

canvas.setAttribute("id", "screen");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);

document.body.append(canvas);

const g = canvas.getContext('2d');

function loop() {

    forward = ((up || down) && hasTimeElasped(1000/25, true)? (up? -1 : (down? 1 : 0)) : 0);
    strafe = ((left || right) && hasTimeElasped(1000/25, true)? (left? -1 : (right? 1 : 0)) : 0);

    z += forward * 25;
    x += strafe * 50;

    g.fillStyle = "#dfdfdf";
    g.fillRect(0, 0, width, height);

    for(let tz = 0; tz < height/50; tz++) {

        for(let tx = 0; tx < width/50; tx++) {

            drawTile(tx*50 + tz*25, tz*25, "909090", canvas);
    
        }

    }

    drawCube(x - z, y + z, "454545", canvas);

}

setInterval(loop, 10);