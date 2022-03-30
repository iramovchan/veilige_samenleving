var xCnsSize = 700;
var yCnsSize = 500;

var xRobot = xCnsSize/2;
var yRobot = yCnsSize/2;

var robotWidth = 64;
var robotHeight = 64;

var blikjeWidth = 27;
var blikjeHeight = 31;

var xBlikje = 100;
var yBlikje = 200;

var move = 2;
var blikjeMove = 2;

var cns;

var radius = 40;

var colliding = false;

var can_collected = false;

function centerCanvas() {
    var xCns = (windowWidth - width) / 2;
    var yCns = (windowHeight - height) / 2;
    cns.position(xCns, yCns);
}

let img;
let robot_img;

function preload() {
    img = loadImage('can.png');
    robot_img = loadImage("robot.png");
}



function windowResized() {
    centerCanvas();
}

class Can {
    constructor(img){
        this.image = img;
//        this.xBlikje = random(100, xCnsSize - 100);
//        this.yBlikje = random(100, yCnsSize - 100);
        this.x = random(2, 12) * 50;
        this.y = random(2, 8) * 50;
        this.width = 27;
        this.height = 31;
    }

    display() {
        if (can_collected === false) {

            image(img, this.x, this.y, this.width, this.height);

        }
    }

}

var cans = [];

function setup() {
    preload();
    cns = createCanvas(xCnsSize, yCnsSize);
    centerCanvas();
    for (let i = 0; i < 11; i++) {
        cans[i] = new Can(img);

    }

}

var change_location = false;

function draw() {

//    for (let i = 0; i < cans.length; i++) {
//        for (let o = 0; o < cans.length; o++) {
//
//            if (cans[o].x < cans[i].x + cans[i].width &&
//            cans[o].x + cans[o].width> cans[i].x &&
//            cans[o].y < cans[i].y + cans[i].height
//            && cans[ o].y + cans[o].height > cans[i].y) {
//
//                // colliding = true;
////                can_collected = true;
//                cans[i].x = random(2, 12) * 50;
//                cans[i].y = random(2, 8) * 50;
//            }
//        }
//    }

    // left edge
    if (xRobot < 0){
        xRobot += move;
    //right edge
    } else if (xRobot + robotWidth > width){
        xRobot -= move;
    }
    //top edge
    if (yRobot < 0){
        yRobot += move;

    //bottom edge
    } else if (yRobot + robotHeight > height){
        yRobot -= move;
    }


    if (keyIsDown(UP_ARROW)) {
        yRobot -= move;
    } else if (keyIsDown(DOWN_ARROW)) {
        yRobot += move;
    } else if (keyIsDown(LEFT_ARROW)) {
        xRobot -= move;
    } else if (keyIsDown(RIGHT_ARROW)) {
        xRobot += move;
    }


    colliding = false;



    for (let i = 0; i < 11; i++) {
        if (xRobot < cans[i].x + cans[i].width &&
        xRobot + robotWidth> cans[i].x &&
        yRobot < cans[i].y + cans[i].height
        && yRobot + robotHeight > cans[i].y) {

            // colliding = true;
            can_collected = true;

        }


    }

    background(244, 208, 111);

    fill(96, 108, 56);
    rect(539,339,150,150);



//
//    if (can_collected === false) {


    for (const i in cans) {
        cans[i].display();
    }


    image(robot_img, xRobot, yRobot, robotWidth, robotHeight);

};




// blikjes class - Eline
// botsing met blikjes
// als je botst met blikje heb je een kleine blikje op jou
// groene zone toevoegen - Eline
// als je groene zone aanraakt met een blikje dan wordt het blikje daar gezets
// score - Eline
