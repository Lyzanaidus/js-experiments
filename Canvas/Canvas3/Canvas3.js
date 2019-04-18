// Initialize canvas and cONtExT variables
var canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');

//  Initialize constant PI = Math.PI
const PI =Math.PI;
console.log(PI);


//  Set canvas properties
canvas.style.border = '1px solid black';

const minCanvasWidth = 0;
const minCanvasHeight = 0;
const maxCanvasWidth = window.innerWidth;
const maxCanvasHeight = window.innerHeight;
console.log('windowWidth : ',window.innerWidth,'windowHeight : ',window.innerHeight);
console.log('maxCanvasWidth : ',maxCanvasWidth,'maxCanvasHeight : ',maxCanvasHeight);

canvas.width = maxCanvasWidth - 6;
canvas.height = maxCanvasHeight - 6;

//	Circle default variable declaration
var center_x_pos = 0;
var center_y_pos = 0;
var minRadius = 10;
const maxRadius = 50;
const arc_start = 0;
const arc_end = 2*PI;	
var colorArr = ['red' , 'blue' , 'yellow' , 'purple' , 'green' , 'orange' , 'pink' , 'silver' , 'black'  ]	
var color = colorArr[3];	
var dx = 10;
var dy = 10;		

//	Function to display a circle
function displayCircle(center_x_pos,center_y_pos,radius,arc_start,arc_end,color) 
{
	ctx.beginPath();     
	ctx.fillStyle = color;
	ctx.arc(center_x_pos, center_y_pos, radius, arc_start, arc_end, false);      
	ctx.fill();
	ctx.closePath();  	
}



function randomInitialize() 
{
	center_x_pos = (Math.random() * maxCanvasWidth) ;
	center_y_pos = (Math.random() * maxCanvasHeight) ;
  	radius = ((Math.random() * (maxRadius - minRadius)) + minRadius);
	color = colorArr[Math.round(Math.random() * 8)];
	dx = (Math.random()-.5)*(2*dx);			//	-.5 to change value to +ve or -ve 	&	*(2*dx) to speed it up
	dy = (Math.random()-.5)*(2*dy);			//	-.5 to change value to +ve or -ve 	&	*(2*dx) to speed it up
}

function borderCollision(/*center_x_pos,center_y_pos,radius*/) 
{
	if (center_x_pos + radius >= maxCanvasWidth) 
	{
		dx = dx * -1;
	}
	if (center_y_pos + radius >= maxCanvasHeight) 
	{
		dy = dy * -1;
	}
	if (center_x_pos - radius <= minCanvasWidth) 
	{
		dx = dx * -1;
	}
	if (center_y_pos - radius <= minCanvasHeight) 
	{
		dy = dy * -1;
	}
}

function animate() 
{
	console.log('Function : animate');

	ctx.clearRect(minCanvasWidth,minCanvasHeight,maxCanvasWidth,maxCanvasHeight);			/*	Clears a rectangle of size
																		(minCanvasWidth,minCanvasHeight,maxCanvasWidth,maxCanvasHeight)*/
	borderCollision();	
	center_x_pos = center_x_pos + dx;
	center_y_pos = center_y_pos + dy;
	displayCircle(center_x_pos,center_y_pos,radius,arc_start,arc_end,color);
	
	requestAnimationFrame(animate);			//	Animates the function 'animate' -recursively 
}

randomInitialize();
animate();
