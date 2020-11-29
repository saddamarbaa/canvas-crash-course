// get the canvas 
let canvas = document.getElementById("myCanvas");

// draw 2d
let context = canvas.getContext("2d");

// just variable to used latter
let xd = 1;

// function to draw cirlce

const drawCirle = function(x, y, r) {

    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}

context.fillStyle = 'red';
context.strokeStyle = 'blue';
drawCirle(100, 100, 40);

context.fillStyle = 'blue';
context.strokeStyle = 'red';
context.fillWidth = 3;
drawCirle(40, 40, 30);