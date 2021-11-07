/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 9405617
CaseNum: 201-3-12286063-9405617

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    beginShape();
    vertex(350, 439);
    vertex(320, 471);
    vertex(316, 479);
    vertex(322, 486);
    vertex(340, 482);
    vertex(354, 483);
    vertex(367, 463);
    vertex(377, 455);
    vertex(379, 446);
    vertex(388, 436);
    vertex(415, 446);
    vertex(449, 378);
    vertex(500, 308);
    endShape();
}
