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

export class Vec3 {

    constructor(x, y, z) {

        this.x = x;
        this.y = y;
        this.z = z;

    }

    get getX() {

        return this.x;

    }

    get getY() {

        return this.y;

    }

    get getZ() {

        return this.z;

    }

}