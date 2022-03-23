var xCnsSize = 700;
var yCnsSize = 500;

var xRobot = xCnsSize/2;
var yRobot = yCnsSize/2;
//
//var widthCan = 54;
//var heightCan = 62;

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
    centerCanvas();

}

function windowResized() {
    centerCanvas();
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

    fill(96, 108, 56);
    rect(539,339,150,150);

    strokeWeight(5);

    fill(195, 66, 63);
    ellipse(xRobot, yRobot, 2*radius, 2*radius);

    fill(0, 0, 0);
    ellipse(xRobot, yRobot, 27, 27);

    image(img, 100, 100, 54, 62);



    // oude code -
    // het werkte niet want de snelheid was gewoon nul geworden en als je pijlen gebruikt om te bewegen,
    //was het gewoon x/yRobot +/- 0 - dus het veranderde gewoon niet meer



    // xRobot en yRobot zijn eigenlijk de cordinaten van het midden van de cirkel
    // radius is de helft van de cirkel breedte/hoogte
    // en het zwarte randje rondom de cirkel is vijf pixels
    //als de robot het rand aanraakt verplaatsen we die met 2 pixels terug

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

//    if xRobot
//    if (!(x2 > x1 + lengte || x1 > x2 + lengte || y2 > y1 + breedte || y1 > y2 + breedte)){
//    //Botsing!
//    }


};




// blikjes class - Eline
// botsing met blikjes
// als je botst met blikje heb je een kleine blikje op jou
// groene zone toevoegen - Eline
// als je groene zone aanraakt met een blikje dan wordt het blikje daar gezets
// score - Eline
