/*
The case of the Python Syndicate
Stage 3


Officer: 9405617
CaseNum: 301-2-11652293-9405617

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Bones karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter
*/

var photoBoard;
var cecilKarpinskiImage;
var linaLovelaceImage;
var annaKarpinskiImage;
var rockyKrayImage;
var bonesKarpinskiImage;
var pawelKarpinskiImage;

var bonesKarpinskiObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObject = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);

	image(cecilKarpinskiImage,
    bonesKarpinskiObject.x - 293,
    bonesKarpinskiObject.y - 269);
    
	image(linaLovelaceImage,
    bonesKarpinskiObject.x,
    bonesKarpinskiObject.y - 269);
    
	image(annaKarpinskiImage,
    bonesKarpinskiObject.x + 293,
    bonesKarpinskiObject.y - 269);
    
	image(rockyKrayImage,
    bonesKarpinskiObject.x - 293,
    bonesKarpinskiObject.y);
    
	image(pawelKarpinskiImage,
    bonesKarpinskiObject.x + 293,
    bonesKarpinskiObject.y);

}