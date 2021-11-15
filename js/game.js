const canvas = document.createElement("canvas");

const width = 800;
const height = 600;

canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
document.body.append(canvas);

const g = canvas.getContext('2d');

function loop() {

    g.fillStyle = "#dfdfdf";
    g.fillRect(0, 0, width, height);
    
    drawCube(100, 100, "000000");

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