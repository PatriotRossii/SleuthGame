/*
The case of the Python Syndicate
Stage 4

Officer: 9405617
CaseNum: 301-3-47850093-9405617

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var countess_hamilton_image;
var cecil_karpinski_image;
var rocky_kray_image;
var robbie_kray_image;
var lina_lovelace_image;
var bones_karpinski_image;

var lina_lovelace_object;

//declare your new objects below
var countess_hamilton_object;
var cecil_karpinski_object;
var rocky_kray_object;
var robbie_kray_object;
var bones_karpinski_object;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	lina_lovelace_image = loadImage("lina.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	lina_lovelace_object = {
		x: 408,
		y: 309,
		image: lina_lovelace_image
	};
	//define your new objects below
    countess_hamilton_object = {
        x: 115,
        y: 40,
        image: countess_hamilton_image
    };
    cecil_karpinski_object = {
        x: 408,
        y: 40,
        image: cecil_karpinski_image
    };
    rocky_kray_object = {
        x: 701,
        y: 40,
        image: rocky_kray_image
    };
    robbie_kray_object = {
        x: 115,
        y: 309,
        image: robbie_kray_image
    };
    bones_karpinski_object = {
        x: 701,
        y: 309,
        image: bones_karpinski_image
    };
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_object.image,
          countess_hamilton_object.x,
          countess_hamilton_object.y);
    
	image(cecil_karpinski_object.image,
          cecil_karpinski_object.x,
          cecil_karpinski_object.y);
    
	image(rocky_kray_object.image,
          rocky_kray_object.x,
          rocky_kray_object.y);
    
	image(robbie_kray_object.image,
         robbie_kray_object.x,
         robbie_kray_object.y);
    
	image(lina_lovelace_object.image,
          lina_lovelace_object.x,
          lina_lovelace_object.y);
    
	image(bones_karpinski_object.image,
          bones_karpinski_object.x, bones_karpinski_object.y);
}