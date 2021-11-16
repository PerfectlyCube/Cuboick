let time = 0, lastTime = 0;

export function hasTimeElasped(delay, reset) {

    if(time - lastTime > delay) {

        if(reset)
            lastTime = time;

        return true;

    }

    return false;

}

function updateTime() {

    time++;
    
}

setInterval(updateTime, 1);