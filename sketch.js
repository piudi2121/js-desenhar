function setup() {
    createCanvas(600, 600);
    background("black");
    fill("red");
    stroke("blue");
  }
  
  function draw() {
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 35, 35);
    }
  }