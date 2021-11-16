import { up, down, left, right, mouseDown, mX, mY } from "./input.js";
import { hasTimeElasped } from "./util/clock.js";
import { drawCube, drawTile } from "./util/graphics.js";
import { createButton } from "./util/button.js";
import { Vec3 } from "./util/mathutil.js";

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

    forward = ((up || down) && hasTimeElasped(1000/50, true)? (up? -1 : (down? 1 : 0)) : 0);
    strafe = ((left || right) && hasTimeElasped(1000/50, true)? (left? -1 : (right? 1 : 0)) : 0);

    z += forward * 25;
    x += strafe * 50;

    g.fillStyle = "#dfdfdf";
    g.fillRect(0, 0, width, height);

    for(let ty = 0; ty < height/50; ty++) {

        for(let tx = 0; tx < width/50; tx++)

            drawTile(tx*50, ty*50, "909090", canvas);
    
        }

    }

    drawCube(x - z, y + z, "454545", canvas);

    createButton(10, height - 20, 10, 10, ["454545", "9090af"], canvas, mouseDown, mX, mY);

}

setInterval(loop, 10);