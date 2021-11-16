const g = document.getElementById("screen").getContext('2d');

export function drawCube(x, y, color) {

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

export function drawTile(x, y, color) {

    g.beginPath();
    g.moveTo(25 + x, 0 + y);
    g.lineTo(75 + x, 0 + y);
    g.lineTo(50 + x, 25 + y);
    g.lineTo(0 + x, 25 + y);
    g.lineTo(25 + x, 25 + y);
    g.fill();

}