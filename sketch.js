function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {

  strokeWeight(2);

  translate(width/2,height/2);
  rotate(frameCount);
  stroke(lerpColor(color(231, 224, 21), color(52, 183, 19), frameCount/150));
  noFill();
  //ellipse(180,80,cos(frameCount*3)*300,sin(frameCount*3)*300);

  //stroke(lerpColor(224, 22, 22),color(245, 231, 67), frameCount/150));

ellipse(200,20,sin(frameCount*3)*400,cos(frameCount*3)*300);




if (frameCount == 450) {
  noLoop();
}
  
}

