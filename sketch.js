let globalIndex = 0;
let globalIndex1 = 6;
let globalIndex2 = 11;
let globalIndex3 = 17;
let globalIndex4 = 22;

let headPiece = [];
let hairStyle = [];
let shirtOption = [];
let pantOption = [];
let shoeOption = [];

let firstLeft;
let secondLeft;
let thirdLeft;
let fourthLeft;
let fifthLeft;

let firstRight;
let secondRight;
let thirdRight;
let fourthRight;
let fifthRight;

function preload() {
  headPiece[0] = loadImage("assets/Blankk.png");
  headPiece[1] = loadImage("assets/Cap2.png");
  headPiece[2] = loadImage("assets/Scrunchie2.png");
  headPiece[3] = loadImage("assets/Headband2.png");
  headPiece[4] = loadImage("assets/FloppyHat2.png");
  headPiece[5] = loadImage("assets/Beanie2.png");

  hairStyle[6] = loadImage("assets/Blankk.png");
  hairStyle[7] = loadImage("assets/LongHair2.png");
  hairStyle[8] = loadImage("assets/PigTails2.png");
  hairStyle[9] = loadImage("assets/PonyTail2.png");
  hairStyle[10] = loadImage("assets/Bun2.png");
  hairStyle[11] = loadImage("assets/ShortHair2.png");

  shirtOption[11] = loadImage("assets/Blankk.png");
  shirtOption[12] = loadImage("assets/Blouse2.png");
  shirtOption[13] = loadImage("assets/Jersey2.png");
  shirtOption[14] = loadImage("assets/Sweater2.png");
  shirtOption[15] = loadImage("assets/SportsBra2.png");
  shirtOption[16] = loadImage("assets/TankTop2.png");

  pantOption[17] = loadImage("assets/Blankk.png");
  pantOption[18] = loadImage("assets/Jeans2.png");
  pantOption[19] = loadImage("assets/Skirt2.png");
  pantOption[19] = loadImage("assets/Sweatpants2.png");
  pantOption[20] = loadImage("assets/Shorts2.png");
  pantOption[21] = loadImage("assets/Leggings2.png");

  shoeOption[22] = loadImage("assets/Blankk.png"); 
  shoeOption[23] = loadImage("assets/Boot2.png");
  shoeOption[24] = loadImage("assets/Slipper2.png");
  shoeOption[25] = loadImage("assets/Sneaker2.png");
  shoeOption[26] = loadImage("assets/Heel2.png");
  shoeOption[27] = loadImage("assets/FlipFlop2.png");
}

function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent("sketch-holder");

  var button = createButton("Save Image");
  button.parent("button-holder");
  button.mousePressed(saveImage);

  firstLeft = new arrow(30, 80, 217, 124, 117, 3);
  secondLeft = new arrow(30, 185, 235, 186, 101, 3);
  thirdLeft = new arrow(30, 290, 191, 199, 167, 3);
  fourthLeft = new arrow(30, 395, 167, 192, 199, 3);
  fifthLeft = new arrow(30, 500, 184, 167, 199, 3);

  firstRight = new arrow(370, 80, 217, 124, 117, 3);
  secondRight = new arrow(370, 185, 235, 186, 101, 3);
  thirdRight = new arrow(370, 290, 191, 199, 167, 3);
  fourthRight = new arrow(370, 395, 167, 192, 199, 3);
  fifthRight = new arrow(370, 500, 184, 167, 199, 3);
}

function draw() {
  background(245, 243, 228);

  firstLeft.display();
  secondLeft.display();
  thirdLeft.display();
  fourthLeft.display();
  fifthLeft.display();

  firstRight.display2();
  secondRight.display2();
  thirdRight.display2();
  fourthRight.display2();
  fifthRight.display2();

  highlightLeft();
  highlightRight();
  
  headDisplay();
  hairDisplay();
  shirtDisplay();
  pantDisplay();
  shoeDisplay();
}

function headDisplay(){
  noStroke();
  fill(245, 243, 228);
  rect(170, 45, 70, 70);
  image(headPiece[globalIndex], 170, 45, 70, 70);
}

function headPiecesl() {
  globalIndex--;
  if (globalIndex < 0) {
    globalIndex = headPiece.length - 1;
  }
}

function headPiecesr() {
  globalIndex++;
  if (globalIndex > headPiece.length - 1) {
    globalIndex = 0;
  }
}

function hairDisplay(){
  noStroke();
  fill(245, 243, 228);
  rect(170, 150, 70, 70);
  image(hairStyle[globalIndex1], 170, 150, 70, 70);
}

function hairStylesl() {
  globalIndex1--;
  if (globalIndex1 < 6) {
    globalIndex1 = hairStyle.length - 1;
  }
}

function hairStylesr() {
  globalIndex1++;
  if (globalIndex1 > hairStyle.length - 1) {
    globalIndex1 = 6;
  }
}

function shirtDisplay() { 
  noStroke();
  fill(245, 243, 228);
  rect(170, 260, 70, 70);
  image(shirtOption[globalIndex2], 170, 260, 70, 70);
}

function shirtOptionsl() {
  globalIndex2--;
  if (globalIndex2 < 11) {
    globalIndex2 = shirtOption.length - 1;
  }
}

function shirtOptionsr() {
  globalIndex2++;
  if (globalIndex2 > shirtOption.length - 1) {
    globalIndex2 = 11;
  }
}

function pantDisplay() {
  noStroke();
  fill(245, 243, 228);
  rect(170, 365, 70, 70);
  image(pantOption[globalIndex3], 170, 365, 70, 70);
}

function pantOptionsl() {
  globalIndex3--;
  if (globalIndex3 < 17) {
    globalIndex3 = pantOption.length - 1;
  }
}

function pantOptionsr() {
  globalIndex3++;
  if (globalIndex3 > pantOption.length - 1) {
    globalIndex3 = 17;
  }
}

function shoeDisplay() {
  noStroke();
  fill(245, 243, 228);
  rect(170, 470, 70, 70);
  image(shoeOption[globalIndex4], 170, 470, 70, 70);
}

function shoeOptionsl() {
  globalIndex4--;
  if (globalIndex4 < 22) {
    globalIndex4 = shoeOption.length - 1;
  }
}

function shoeOptionsr() {
  globalIndex4++;
  if (globalIndex4 > shoeOption.length - 1) {
    globalIndex4 = 22;
  }
}

class arrow {
  constructor(xpos, ypos, colR, colG, colB, strokeW) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.colR = colR;
    this.colG = colG;
    this.colB = colB;
    this.strokeW = strokeW;
  }
  display() {
    noStroke();
    fill("#f5f3e4");
    rect(this.xpos-5, this.ypos-30, 65, 65)
    strokeWeight(this.strokeW);
    stroke(this.colR, this.colG, this.colB);
    line(this.xpos, this.ypos, this.xpos + 55, this.ypos + 30);
    line(this.xpos, this.ypos, this.xpos + 55, this.ypos - 25);
  }
  display2() {
    noStroke();
    fill("#f5f3e4");
    rect(this.xpos-60, this.ypos-30, 65, 65)
    strokeWeight(this.strokeW);
    stroke(this.colR, this.colG, this.colB);
    line(this.xpos, this.ypos, this.xpos - 55, this.ypos + 30);
    line(this.xpos, this.ypos, this.xpos - 55, this.ypos - 25);
  }
  highlight() {
    this.strokeW = 6;
  }
  unhighlight() {
    this.strokeW = 3;
  }
}

function mousePressed() {
  if (mouseX > 30 && mouseX < 90) {
    if (mouseY > 50 && mouseY < 120) {
      headPiecesl();
    }
  }

  if (mouseX > 310 && mouseX < 370) {
    if (mouseY > 50 && mouseY < 120) {
      headPiecesr();
    }
  }

  if (mouseX > 30 && mouseX < 90) {
    if (mouseY > 150 && mouseY < 220) {
      hairStylesl();
    }
  }
  if (mouseX > 310 && mouseX < 370) {
    if (mouseY > 150 && mouseY < 220) {
      hairStylesr();
    }
  }

  if (mouseX > 30 && mouseX < 90) {
    if (mouseY > 260 && mouseY < 330) {
      shirtOptionsl();
    }
  }
  if (mouseX > 310 && mouseX < 370) {
    if (mouseY > 260 && mouseY < 330) {
      shirtOptionsr();
    }
  }

  if (mouseX > 30 && mouseX < 90) {
    if (mouseY > 360 && mouseY < 430) {
      pantOptionsl();
    }
  }
  if (mouseX > 310 && mouseX < 370) {
    if (mouseY > 360 && mouseY < 430) {
      pantOptionsr();
    }
  }

  if (mouseX > 30 && mouseX < 90) {
    if (mouseY > 460 && mouseY < 530) {
      shoeOptionsl();
    }
  }
  if (mouseX > 310 && mouseX < 370) {
    if (mouseY > 460 && mouseY < 530) {
      shoeOptionsr();
    }
  }
}

function highlightLeft() {
  if (mouseX > 30 && mouseX < 90) {
    if (mouseY > 50 && mouseY < 120) {
      firstLeft.highlight();
    } else if (mouseY > 150 && mouseY < 220) {
      secondLeft.highlight();
    } else if (mouseY > 260 && mouseY < 330) {
      thirdLeft.highlight();
    } else if (mouseY > 360 && mouseY < 430) {
      fourthLeft.highlight();
    } else if (mouseY > 460 && mouseY < 530) {
      fifthLeft.highlight();
    } else {
      firstLeft.unhighlight();
      secondLeft.unhighlight();
      thirdLeft.unhighlight();
      fourthLeft.unhighlight();
      fifthLeft.unhighlight();
    }
  } else {
    firstLeft.unhighlight();
    secondLeft.unhighlight();
    thirdLeft.unhighlight();
    fourthLeft.unhighlight();
    fifthLeft.unhighlight();
  }
}

function highlightRight(){
  if (mouseX > 310 && mouseX < 370) {
    if (mouseY > 50 && mouseY < 120) {
      firstRight.highlight();
    } else if (mouseY > 150 && mouseY < 220) {
      secondRight.highlight();
    } else if (mouseY > 260 && mouseY < 330) {
      thirdRight.highlight();
    } else if (mouseY > 360 && mouseY < 430) {
      fourthRight.highlight();
    } else if (mouseY > 460 && mouseY < 530) {
      fifthRight.highlight();
    } else {
      firstRight.unhighlight();
      secondRight.unhighlight();
      thirdRight.unhighlight();
      fourthRight.unhighlight();
      fifthRight.unhighlight();
    }
  } else {
    firstRight.unhighlight();
    secondRight.unhighlight();
    thirdRight.unhighlight();
    fourthRight.unhighlight();
    fifthRight.unhighlight();
  }
}

function saveImage() {
  saveCanvas("myCanvas.jpg");
}