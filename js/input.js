export let up, down, left, right;

export let mX, mY, mouseDown;

let tSX, tSY, tEX, tEY;

function keyinput(toggle, e) {

    if(e.key === 'ArrowUp')
        up = toggle;

    if(e.key === 'ArrowDown')
        down = toggle;
    
    if(e.key === 'ArrowLeft')
        left = toggle;

    if(e.key === 'ArrowRight')
        right = toggle;

}

function mouseinput(toggle, e) {

    if(toggle) {

        tSX = e.clientX();
        tSY = e.clientY();

    } else {

        tEX = e.clientX();
        tEY = e.clientY();

    }

    var tmx = tEX - tSX, tmy = tEX - tSX;

    right = tmx > 0;
    left = tmx < 0;
    down = tmy > 0;
    up = tmy < 0;        

    mouseDown = toggle;

}

addEventListener("keydown", (e) => { keyinput(true, e) });
addEventListener("keyup", (e) => { keyinput(false, e) });

addEventListener("touchstart",(e) => { mouseinput(true, e) });
addEventListener("touchend", (e) => { mouseinput(false, e) });

document.getElementById("left").addEventListener("mousedown", (e) => {

    left = true;

});

document.getElementById("left").addEventListener("mouseup", (e) => {

    left = false;

});

document.getElementById("up").addEventListener("mousedown", (e) => {

    up = true;

});

document.getElementById("up").addEventListener("mouseup", (e) => {

    up = false;

});

document.getElementById("down").addEventListener("mousedown", (e) => {

    down = true;

});

document.getElementById("down").addEventListener("mouseup", (e) => {

    down = false;

});

document.getElementById("right").addEventListener("mousedown", (e) => {

    right = true;

});

document.getElementById("right").addEventListener("mouseup", (e) => {

    right = false;

});