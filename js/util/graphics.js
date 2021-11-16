//Draws a cube.
export function drawCube(x, y, color, canvas) {

    var g = canvas.getContext('2d');

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

//Draws a top of a cube, as a tile.
export function drawTile(x, y, color, canvas) {

    var g = canvas.getContext('2d');

    g.beginPath();
    g.moveTo(25 + x, 0 + y);
    g.lineTo(75 + x, 0 + y);
    g.lineTo(50 + x, 25 + y);
    g.lineTo(0 + x, 25 + y);
    g.lineTo(25 + x, 25 + y);
    g.fill();

}