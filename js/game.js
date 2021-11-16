import { up, down, left, right } from "./input.js";

let forward, strafe;
let x = 100, y = 0, z = 100;

const canvas = document.createElement("canvas");

const width = window.innerWidth - 800/4;
const height = window.innerHeight - 600/4;

canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
document.body.append(canvas);

const g = canvas.getContext('2d');

function loop() {

    forward = (up || down? (up? -1 : (down? 1 : 0)) : 0);
    strafe = (left || right? (left? -1 : (right? 1 : 0)) : 0);

    z += forward;
    x += strafe;

    g.fillStyle = "#dfdfdf";
    g.fillRect(0, 0, width, height);

    drawCube(x + z, y + z, "454545");

}

function drawCube(x, y, color) {

	g.fillStyle = "#" + color;
  
	g.beginPath();
  g.moveTo(25 + x, 25 - 25 + y);
  g.lineTo(75 + x, 25 - 25 + y);
  g.lineTo(75 + x, 75 - 25 + y);
  g.lineTo(50 + x, 100 - 25 + y);
  g.lineTo(0 + x, 100 - 25 + y);
  g.lineTo(0 + x, 50 - 25 + y);
  g.lineTo(25 + x, 25 - 25 + y);
  g.fill();

}

setInterval(loop, 10);