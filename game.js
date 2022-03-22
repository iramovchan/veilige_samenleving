var xCnsSize = 700;
var yCnsSize = 500;

var xRobot = xCnsSize/2;
var yRobot = yCnsSize/2;

var move = 2;

var cns;

var radius = 40;

function centerCanvas() {
    var xCns = (windowWidth - width) / 2;
    var yCns = (windowHeight - height) / 2;
    cns.position(xCns, yCns);
}

let img;
function preload() {
    img = loadImage('can.png');
}

function setup() {
    preload();
    cns = createCanvas(xCnsSize, yCnsSize);
    centerCanvas()

}

function windowResized() {
    centerCanvas()
}


function draw() {
    if (keyIsDown(UP_ARROW)){
        yRobot -= move;
    } else if (keyIsDown(DOWN_ARROW)){
        yRobot += move;
    } else if (keyIsDown(LEFT_ARROW)){
        xRobot -= move;
    } else if (keyIsDown(RIGHT_ARROW)){
        xRobot += move;
    }
    background(244, 208, 111);

    fill("darkgreen")
    rect(539,339,150,150)

    strokeWeight(5);

    fill(219, 53, 53);
    ellipse(xRobot, yRobot, 2*radius, 2*radius)

    fill(0, 0, 0);
    ellipse(xRobot, yRobot, 27, 27);

    image(img, 100, 100, 54, 62);


    // left edge
    if (xRobot < 0 + radius + 5){
        xRobot += move;
    //right edge
    } else if (xRobot > width - radius - 5){
        xRobot -= move;
    }
    //top edge
    if (yRobot < 0 + radius + 5){
        yRobot += move;

    //bottom edge
    } else if (yRobot > height - radius - 5){
        yRobot -= move;
    }

    

};



// blikjes class - Eline
// botsing met blikjes
// als je botst met blikje heb je een kleine blikje op jou
// groene zone toevoegen - Eline
// als je groene zone aanraakt met een blikje dan wordt het blikje daar gezets
// score - Eline
