export function clamp(val, min, max) {

    return Math.max(Math.min(val, max), min);

}

export function toRadians(degrees) {

    return degrees * Math.PI/180;

}

export function toDegrees(radians) {

    return radians * 180/Math.PI;

}

export function sin(degrees) {

    return Math.sin(toRadians(degrees));

}

export function cos(degrees) {

    return Math.cos(toRadians(degrees));

}