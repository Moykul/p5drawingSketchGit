let sldr;
function setup() {
  createCanvas(400, 400);
  background(120);
  noStroke();
  sldr = createSlider(10, 80, 30);
  sldr.position(width/2, height + 80);
}

function draw() {
  fill(200, 25, 25);
  circle(300, 40, 25);


}

function mouseDragged(){
  noStroke();
  let br = sldr.value();
  fill(180, 180, 60);
  circle(mouseX, mouseY, br);

}