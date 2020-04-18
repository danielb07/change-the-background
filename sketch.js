
var r = 0;
var b=0;
var g=0;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
  
}


function draw(){
  // Red
  r=map(mouseX,0,400,0,255);

  b=map(mouseX,800,1200,255, 0);

  if(mouseX>400&&mouseX<800){
    g=map(mouseX,400,800,0,255);
   
  }
  else{
    g=0
  }

  background(r,g,b)
  
  
  fill(255,255,255);
  ellipse(mouseX,200,64,64);
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}