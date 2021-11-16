export let up, down, left, right;

export let mX, mY, mouseDown;

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

        mX = e.clientX();
        mY = e.clientY();

    }

    mouseDown = toggle;

}

addEventListener("keydown", (e) => { keyinput(true, e) });
addEventListener("keyup", (e) => { keyinput(false, e) });

addEventListener("mousedown",(e) => { mouseinput(true, e) });
addEventListener("mouseup", (e) => { mouseinput(false, e) });

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