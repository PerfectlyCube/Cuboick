let time = 0, lastTime = 0;

export function reset() {

    lastTime = time;

}

export function hasTimeElasped(delay, reset) {

    if(time - lastTime > delay) {

        if(reset)
            reset();

        return true;

    }

    return false;

}

function updateTime() {

    time++;
    
}

setInterval(updateTime, 1);