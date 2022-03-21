var xCnsSize = 700;
var yCnsSize = 500;

var xRobot = xCnsSize/2;
var yRobot = yCnsSize/2;

var speed = 2;

var cns;

function centerCanvas() {
    var xCns = (windowWidth - width) / 2;
    var yCns = (windowHeight - height) / 2;
    cns.position(xCns, yCns);
}

function setup() {
    cns = createCanvas(xCnsSize, yCnsSize);
    centerCanvas()
}

function windowResized() {
    centerCanvas()
}

function draw() {
    background(244, 208, 111);

    strokeWeight(5);

    fill(219, 53, 53);
    ellipse(xRobot, yRobot, 75, 75)

    fill(0, 0, 0);
    ellipse(xRobot, yRobot, 27, 27);
    // if (xRobot > width - radius || xRobot < radius){
    //   xSpeed = 0;
    // }
    // if (yRobot > height - radius || yRobot < radius){
    //   ySpeed = 0;
    // }
    // xRobot += xSpeed;
    // yRobot += ySpeed;
    // ellipse(xRobot, yRobot, 2*radius, 2*radius);
    if (xRobot > width || xRobot < 0){
      speed = 0;
    }
    if (yRobot > height || yRobot < 0){
      speed = 0;
    }
    if (keyIsDown(UP_ARROW)){
        yRobot -= speed;
    } else if (keyIsDown(DOWN_ARROW)){
        yRobot += speed;
    } else if (keyIsDown(LEFT_ARROW)){
        xRobot -= speed;
    } else if (keyIsDown(RIGHT_ARROW)){
        xRobot += speed;
    }
};



// blikjes class - Eline
// botsing met blikjes
// als je botst met blikje heb je een kleine blikje op jou
// groene zone toevoegen - Eline
// als je groene zone aanraakt met een blikje dan wordt het blikje daar gezets
// score - Eline
