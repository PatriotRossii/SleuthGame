/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: 9405617
CaseNum: 201-2-40784500-9405617

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.


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

    // write the code to join the bullet holes below
    beginShape();
    vertex(592, 270);
    vertex(532, 204);
    vertex(618, 179);
    vertex(557, 102);
    vertex(574, 34);
    vertex(518, 46);
    endShape();
}
