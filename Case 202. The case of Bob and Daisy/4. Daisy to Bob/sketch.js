/*

Officer: 9405617
CaseNum: 202-3-20757987-9405617

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce yellow filled text with black outline in Melissa font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(671,537);
	textSize(32);
}

function draw()
{
	background(255);

	push();
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Melissa);
	//text("not", 389,248);
	pop();
	fill(255,255,0);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("and", 11,209);
	//text("darling", 56,32);
	fill(255,192,203);
	stroke(0,255,0);
	//text("?", 525,209);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("mes.", 287,248);
	//text("gu", 107,248);
	fill(255,192,203);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("Is", 266,209);
	fill(0,255,255);
	textFont(Diggity);
	//text("Bob,", 155,32);
	push();
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("continual", 312,96);
	pop();
	textFont(Melissa);
	//text("go", 416,169);
	fill(255,192,203);
	textFont(Diggity);
	//text("so", 73,248);
	//text("ey", 164,132);
	//text("all", 185,209);
	textFont(Melissa);
	//text("?", 200,132);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(RonsFont);
	//text("avoiding", 11,169);
	//text("much", 526,248);
	fill(0,255,255);
	stroke(255,0,0);
	//text("you", 565,96);
	stroke(0,0,0);
	textFont(Diggity);
	//text("longer", 126,96);
	//text("me", 118,169);
	push();
	stroke(0,255,0);
	//text("can", 52,96);
	pop();
	textFont(RonsFont);
	//text("you", 553,132);
	stroke(0,0,255);
	textFont(Melissa);
	//text("more", 602,248);
	stroke(255,0,0);
	textFont(Diggity);
	//text("relatio", 354,209);
	textFont(Ballpointprint);
	//text("arded", 132,248);
	//text("sort", 74,209);
	textFont(Melissa);
	//text("I", 11,288);
	fill(255,255,0);
	textFont(Diggity);
	//text("the", 308,288);
	textFont(RonsFont);
	//text("for", 499,169);
	fill(0,255,255);
	textFont(Diggity);
	//text("our", 307,209);
	fill(255,255,0);
	stroke(0,255,0);
	//text("My", 18,32);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("i", 279,248);
	push();
	textFont(Melissa);
	//text("away", 444,169);
	pop();
	textFont(Melissa);
	//text("no", 99,96);
	stroke(0,0,0);
	textFont(RonsFont);
	//text("yours,", 113,352);
	textFont(Melissa);
	text("safe", 476,209);
	text("cash", 443,132);
	text("ignore", 194,96);
	textFont(Diggity);
	//text("sure", 426,248);
	//text("?", 131,288);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("Daisy", 11,416);
	stroke(0,255,0);
	textFont(RonsFont);
	//text("we", 287,169);
	//text("short", 14,132);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("You", 547,209);
	//text("this", 127,209);
	fill(255,192,203);
	textFont(Diggity);
	//text("of", 90,132);
	push();
	stroke(255,0,0);
	textFont(RonsFont);
	//text("can", 28,288);
	pop();
	stroke(0,0,0);
	textFont(RonsFont);
	//text("I", 288,132);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("?", 160,169);
	stroke(0,0,0);
	textFont(Diggity);
	//text("Perhaps", 196,169);
	textFont(Melissa);
	text("break", 580,169);
	fill(0,255,255);
	//text("silence.", 356,288);
	push();
	fill(255,255,0);
	stroke(0,0,255);
	textFont(Diggity);
	//text("out.", 215,209);
	pop();
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("I", 13,96);
	//text("Are", 504,96);
	fill(255,165,0);
	//text("secrets,", 205,288);
	//text("somet", 219,248);
	fill(255,192,203);
	textFont(Diggity);
	//text("mon", 126,132);
	fill(255,255,0);
	stroke(255,0,255);
	textFont(RonsFont);
	//text("so,", 246,132);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Diggity);
	//text("nship", 418,209);
	push();
	fill(255,165,0);
	textFont(Melissa);
	//text("how", 484,248);
	pop();
	textFont(Melissa);
	//text("these", 253,96);
	push();
	stroke(0,0,0);
	textFont(Ballpointprint);
	//text("should", 334,169);
	pop();
	//text("take", 83,288);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("x", 97,416);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("can", 316,132);
	stroke(0,255,0);
	textFont(Melissa);
	//text("I'm", 353,248);
	stroke(0,0,0);
	textFont(Ballpointprint);
	//text("Are", 492,132);
	//text("are", 18,248);
	//text("send", 371,132);
	push();
	stroke(255,0,0);
	textFont(RonsFont);
	//text("Forever", 8,352);
	pop();
	stroke(0,255,0);
	textFont(RonsFont);
	//text("delays.", 414,96);
	push();
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Diggity);
	//text("The", 155,288);
	//text("If", 218,132);
	//text("a", 554,169);
	pop();
}
