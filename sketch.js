function setup() {
  createCanvas(400, 400);
  background(120);
  noStroke()
}

function draw() {
  fill(200, 25, 25)
  circle(300, 40, 25);


}

function mouseDragged(){
  noStroke()
  fill(180, 180, 60)
  circle(mouseX, mouseY, 20)

}