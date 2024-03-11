function setup() {
    createCanvas(700, 700);
       background("grey");
  
  }
    
  function draw() {
    
  
  
      stroke("blue");
      fill("pink");
  
      if(mouseIsPressed){
        rect(mouseX, mouseY, 12, 12);
      }
  }