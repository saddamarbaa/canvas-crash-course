// get the canvas 
let canvas = document.getElementById("myCanvas");

// draw 2d
let context = canvas.getContext("2d");

// just variable to used latter
let xd = 1;

// create color array
const colors = ['red', '#ACE6D3', 'blue'];

// create object
let points = {
    x: 20,
    y: 20,
    r: 10,
    color: colors[1]
};

// function to draw cirlce

const drawCirle = function(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.stroke();
};

// helper function to draw cirlce

const draw = function() {
    context.fillStyle = 'rgba(255,255,255, 0.2)';
    // clear the previous area
    //context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = points.color;
    drawCirle(points.x, points.y, points.r);
};

// function to update the points

const update = function() {
    // increment points.x location by one
    points.x = points.x + xd;
};

// function to Animat and loop 
const loop = function() {
    draw();
    update();
    requestAnimationFrame(loop);
};

// call loop function
loop();