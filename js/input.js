export let up, down, left, right;

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

addEventListener("keydown", keyinput(true, e));
addEventListener("keyup", keyinput(false, e));