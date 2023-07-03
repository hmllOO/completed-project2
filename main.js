function preload(){
}
function setup(){
canvas = createCanvas(700, 700);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();

}

function draw(){
    image(video, 200,200, 200, 200);
  circle(150,160,30,30)
  fill(150,50,70)
  circle(450,160,30,30)
  fill(150,50,120)
  circle(450,430,30,30)
  fill(150,190,120)
  circle(150,430,30,30)
  fill(70,130,190)

  rect(175,420,250,20)
  fill(70,130,90)
  
  rect(175,160,250,20)
  fill(70,130,190)

  rect(140,180,20,230)
  fill(70,130,90)

  rect(430,180,20,230)
  fill(70,130,90)
}
function take_snapshot(){
    save('student.jpeg');
}
  