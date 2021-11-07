/*
The case of the Python Syndicate
Stage 2


Officer: 9405617
CaseNum: 301-1-28116095-9405617

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna karpinski

- The variables for Anna karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Anna karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var cecil_karpinski_img;
var countess_hamilton_img;
var anna_karpinski_img;
var rocky_kray_img;
var lina_lovelace_img;
var bones_karpinski_img;


var anna_karpinski_coordinate_x = 701;
var anna_karpinski_coordinate_y = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	lina_lovelace_img = loadImage("lina.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_img, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y);
    
	image(cecil_karpinski_img, anna_karpinski_coordinate_x - 586, anna_karpinski_coordinate_y);
	image(countess_hamilton_img, anna_karpinski_coordinate_x - 293, anna_karpinski_coordinate_y);
	image(rocky_kray_img, anna_karpinski_coordinate_x - 586, anna_karpinski_coordinate_y + 269);
	image(lina_lovelace_img, anna_karpinski_coordinate_x - 293, anna_karpinski_coordinate_y + 269);
	image(bones_karpinski_img, anna_karpinski_coordinate_x, anna_karpinski_coordinate_y + 269);
}