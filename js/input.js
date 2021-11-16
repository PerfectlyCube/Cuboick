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

document.getElementById("left").addEventListener("click", (e) => {

    left = true;
    left = false;

})
document.getElementById("up").addEventListener("click", (e) => {

    up = true;
    up = false;

})
document.getElementById("down").addEventListener("click", (e) => {

    down = true;
    down = false;

})
document.getElementById("right").addEventListener("click", (e) => {

    right = true;
    right = false;

})