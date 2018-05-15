'use strict';

const canvas = document.querySelector('canvas');
canvas.addEventListener('click', changeStar);
const ctx = canvas.getContext('2d');
changeStar();


function changeStar() {
    const width = canvas.width;
    const height = canvas.height;
    const starCount = randIntNumber(200, 400);

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, width, height);

    for (let i = 1; i <= starCount; i++) {
        ctx.beginPath();
        ctx.fillStyle = randColor();
        ctx.globalAlpha = randNumber(0.8, 1);
        const starRadius = randNumber(0, 1.1 / 2);
        const starX = randNumber(0, width);
        const starY = randNumber(0, height);
        ctx.arc(starX, starY, starRadius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


function randNumber(from, to) {
    return from + ( (to - from) * Math.random() );
}

function randIntNumber(from, to) {
    return Math.round(randNumber(from, to));
}

function randColor() {
    const rand = randNumber(0, 3);
    if (rand < 1) {
        return '#ffffff';
    } else if (rand < 2) {
        return '#ffe9c4';
    } else {
        return '#d4fbff';
    }
}
