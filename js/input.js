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