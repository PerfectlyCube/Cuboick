import { mouseDown, mX, mY } from "../input.js"

export function createButton(x, y, width, height, colors, canvas) {

    var g = canvas.getContext('2d');
    var hovered = (mX >= x && mY >= y && mX <= x + width && mY <= y + height);

    if(hovered && mouseDown)
        g.fillStyle = "#" + colors[1];

    else
        g.fillStyle = "#" + colors[0];

    g.fillRect(x, y, width, height);

    return hovered && mouseDown;

}