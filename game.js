var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;

var dx = 2;
var dy = -2;

function draw_circle() {
    ctx.beginPath();
    //first two - x and y coordinates of the arc's center
    //third - arc radius
    //start angle and end angle (what angle to start and finish drawing the circle, in radians)
    //direction of drawing (false for clockwise, the default, or true for anti-clockwise.) This last parameter is optional.
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_circle()
    x += dx;
    y += dy;
}

//drawfunction will be called every 10 milliseconds
setInterval(draw, 10)


////instructions are between beginPath and closePath
//ctx.beginPath();
////first two - coordinates of top left cornen third - width, fourth - height
//ctx.rect(20, 40, 50, 50);
////fillStyle - stores a color for later
////a color can be hexa value, word or rgba()
//ctx.fillStyle = "#FFFF00";
////fills in a shape with a color from fillStyle
//ctx.fill();
//ctx.closePath();
//

//
//
//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
////only fill in the outer stroke
//ctx.stroke();
//ctx.closePath();