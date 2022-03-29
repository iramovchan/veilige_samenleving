var xCnsSize = 700;
var yCnsSize = 500;

var xRobot = xCnsSize/2;
var yRobot = yCnsSize/2;

var robotWidth = 64;
var robotHeight = 64;

var blikjeWidth = 54;
var blikjeHeight = 62;

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


function setup() {
    preload();
    cns = createCanvas(xCnsSize, yCnsSize);
    centerCanvas();

}

function windowResized() {
    centerCanvas();
}

//class Can() {
//    constructor(img, xBlikje, yBlikje, blikjeWidth, blikjeHeight){
//        this.img = img;
//        this.xBlikje = xBlikje;
//        this.yBlikje = yBlikje;
//        this.blikjeWidth = blikjeWidth;
//        this.blikjeHeight = blikjeHeight;
//    }
//}
//
//can_1 = new Can(img, xBlikje, yBlikje, blikjeWidth, blikjeHeight);


function draw() {

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


//    if (colliding === true) {
//
//    }

    if (keyIsDown(UP_ARROW)) {
        yRobot -= move;
    } else if (keyIsDown(DOWN_ARROW)) {
        yRobot += move;
    } else if (keyIsDown(LEFT_ARROW)) {
        xRobot -= move;
    } else if (keyIsDown(RIGHT_ARROW)) {
        xRobot += move;
    }

//
//    if (keyIsDown(LEFT_ARROW)){
//        xRobot -= move;
//        if (colliding) {
//            xBlikje -= blikjeMove;
//            xRobot = xBlikje + blikjeWidth;
//
//        }
//    } else if (keyIsDown(RIGHT_ARROW)){
//        xRobot += move;
//        if (colliding) {
//            xBlikje += blikjeMove;
//            xRobot = xBlikje - robotWidth;
//
//        }
//    }
//
//
//    if (keyIsDown(UP_ARROW)){
//        yRobot -= move;
//        if (colliding) {
//            yBlikje -= blikjeMove;
//            yRobot = yBlikje + blikjeHeight;
//        }
//    } else if (keyIsDown(DOWN_ARROW)){
//        yRobot += move;
//        if (colliding) {
//            yBlikje += blikjeMove;
//            yRobot = yBlikje - robotHeight;
//        }
//    }


//    if (keyIsDown(UP_ARROW)){
//        yRobot -= move;
//        if (colliding) {
//            yBlikje -= blikjeMove;
////            yRobot -= 1;
//        }
//    } else if (keyIsDown(DOWN_ARROW)){
//        yRobot += move;
//        if (colliding) {
//            yBlikje += blikjeMove;
////            yRobot -= 1;
//        }
//    } else if (keyIsDown(LEFT_ARROW)){
//        xRobot -= move;
//        if (colliding) {
//            xRobot += move;
//////            if (xRobot + robotWidth > xBlikje ) {
//////                push_right = true;
//////            } else
////            if (xBlikje + blikjeWidth >= xRobot) {
////                xBlikje -= blikjeMove;
//////              xRobot += 1;
//////                push_right = false;
//            //}
//
//        }
//    } else if (keyIsDown(RIGHT_ARROW)){
//        xRobot += move;
//        if (colliding) {
//            xRobot -= move;
////            if (xRobot + robotWidth > xBlikje) {
////                xBlikje += blikjeMove;
//////              xRobot -= 1;
//////                push_right = false;
////
////            }
//
//        }
//    }
//
//    if (keyIsDown("Space")) {
//        if (colliding === true) {
//            can_collected = true;
//        }
//
//    }
//    } else if (keyIsDown(Space)) {
//
//    }

    colliding = false;



    if (xRobot < xBlikje + blikjeWidth &&
        xRobot + robotWidth> xBlikje &&
        yRobot < yBlikje + blikjeHeight
        && yRobot + robotHeight > yBlikje) {

        // colliding = true;
        can_collected = true;

    }

    background(244, 208, 111);

    fill(96, 108, 56);
    rect(539,339,150,150);




    if (can_collected === false) {
        image(img, xBlikje, yBlikje, blikjeWidth, blikjeHeight);
    }


    image(robot_img, xRobot, yRobot, robotWidth, robotHeight);

};




// blikjes class - Eline
// botsing met blikjes
// als je botst met blikje heb je een kleine blikje op jou
// groene zone toevoegen - Eline
// als je groene zone aanraakt met een blikje dan wordt het blikje daar gezets
// score - Eline
