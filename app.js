var n = 0;
var phi;
var r;
var c = 8;
// r = c*root(n)
//phi = n*137.5

function setup(){
	createCanvas(600,480);
	background(0);
	colorMode(HSB);
	angleMode(DEGREES);
}

function draw(){
	phi = n * 137.5;
	r= c*sqrt(n);

	var x= r*cos(phi)+width/2;
	var y= r*sin(phi)+height/2;
	fill(n%255,255,255);
	ellipse(x,y,8,8);
	n++;
}