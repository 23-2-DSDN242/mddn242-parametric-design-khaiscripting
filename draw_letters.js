/* these are optional special variables which will change the system */
var systemBackgroundColor = "#060505 ";
var systemLineColor = "##525252";
var systemBoxColor = "#eb1e1e";

/* internal constants */
const white  = "#ffffff";
const black  = "#010101";
const strokeColor  = "#ffffff";
let colorFill;
let lerpVal = 2000;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(2);
  angleMode(RADIANS);

  //#region  set up the color for hexegon
  colorMode (HSB)
  let red = color(3, 88, 100);
  let green = color(119, 88, 100);
  let blue = color(234, 88, 100);

  //set up for wave effect
  if(frameCount % 7 == 0 & lerpVal >= 0){
    lerpVal--;
  }
  else if (lerpVal == 0){
    lerpVal = 2000;
  }

  let speed = map(lerpVal, 0, 2000, 0, 1);
  
  //wave effect
  if(speed >= 0 && speed < 0.33){
    let speed2 = map(speed, 0, 0.33, 0, 1)
    colorFill = lerpColor(red, green, speed2)
  } 
  else if (speed > 0.33 && speed < 0.66){
    let speed2 = map(speed, 0.33, 0.66, 0, 1)
    colorFill = lerpColor(green, blue, speed2)
  } 
  else if (speed > 0.6 && speed <= 1){
    let speed2 = map(speed, 0.66, 1, 0, 1)
    colorFill = lerpColor(blue, red, speed2)
  }
  //#endregion

  //#region  determine parameters
  let size = letterData["size1"];
  let posx = 50  + letterData["offsetx1"];
  let posy = 150 + letterData["offsety1"];
  let shapeLineX = 50 + letterData["line1x"];
  let shapeLineY = 150 + letterData["line1y"];
  let shapeLine2X = 50 + letterData["line2x"];
  let shapeLine2Y = 150 + letterData["line2y"];
  let shapeLine3X = 50 + letterData["line3x"];
  let shapeLine3Y = 150 + letterData["line3y"];
  let shapeLine4X = 50 + letterData["line4x"];
  let shapeLine4Y = 150 + letterData["line4y"];
  let shapeLine5X = 50 + letterData["line5x"];
  let shapeLine5Y = 150 + letterData["line5y"];
  let shapeLine6X = 50 + letterData["line6x"];
  let shapeLine6Y = 150 + letterData["line6y"];
  let shapeLine7X = 50 + letterData["line7x"];
  let shapeLine7Y = 150 + letterData["line7y"];
  let shapeLine8X = 50 + letterData["line8x"];
  let shapeLine8Y = 150 + letterData["line8y"];
  //#endregion
  
  colorMode(RGB);
  //#region drawing sticks
  push();
  stroke(strokeColor);
  strokeWeight(4);
  strokeCap(ROUND);

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(colorFill);

  beginShape(LINES);
  //point 1
  vertex(shapeLineX, shapeLineY);
  //point 2
  vertex(shapeLine2X, shapeLine2Y);
  vertex(shapeLine2X, shapeLine2Y);
  //point 3
  vertex(shapeLine3X, shapeLine3Y);
  vertex(shapeLine3X, shapeLine3Y);
  //point 4
  vertex(shapeLine4X, shapeLine4Y);
  vertex(shapeLine4X, shapeLine4Y);
  //point 5
  vertex(shapeLine5X, shapeLine5Y);
  vertex(shapeLine5X, shapeLine5Y);
  //point 6
  vertex(shapeLine6X, shapeLine6Y);
  vertex(shapeLine6X, shapeLine6Y);
  //point 7
  vertex(shapeLine7X, shapeLine7Y);
  vertex(shapeLine7X, shapeLine7Y);
  //point 8
  vertex(shapeLine8X, shapeLine8Y);
  vertex(shapeLine8X, shapeLine8Y);
  endShape();
  pop();
  //#endregion

  //#region the hexegon
  push();
  translate(posx, posy)
  rotate(28.8);
  fill(colorFill);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color(colorFill);
  base(0, 0, size, 6);
  pop();
  //#endregion
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  if (percent <= 50){
    new_letter["size1"]    = map(percent, 0, 50, oldObj["size1"], 10);
  new_letter["offsetx1"] = map(percent, 0, 50, oldObj["offsetx1"], 0);
  new_letter["offsety1"] = map(percent, 0, 50, oldObj["offsety1"], -50);
  new_letter["line1x"] = map(percent, 0, 50, oldObj["line1x"], 0);
  new_letter["line1y"] = map(percent, 0, 50, oldObj["line1y"], -36.5);
  new_letter["line2x"] = map(percent, 0, 50, oldObj["line2x"], 0);
  new_letter["line2y"] = map(percent, 0, 50, oldObj["line2y"], -36.5);
  new_letter["line3x"] = map(percent, 0, 50, oldObj["line3x"], 0);
  new_letter["line3y"] = map(percent, 0, 50, oldObj["line3y"], -36.5);
  new_letter["line4x"] = map(percent, 0, 50, oldObj["line4x"], 0);
  new_letter["line4y"] = map(percent, 0, 50, oldObj["line4y"], -36.5);
  new_letter["line5x"] = map(percent, 0, 50, oldObj["line5x"], 0);
  new_letter["line5y"] = map(percent, 0, 50, oldObj["line5y"], -36.5);
  new_letter["line6x"] = map(percent, 0, 50, oldObj["line6x"], 0);
  new_letter["line6y"] = map(percent, 0, 50, oldObj["line6y"], -36.5);
  new_letter["line7x"] = map(percent, 0, 50, oldObj["line7x"], 0);
  new_letter["line7y"] = map(percent, 0, 50, oldObj["line7y"], -36.5);
  new_letter["line8x"] = map(percent, 0, 50, oldObj["line8x"], 0);
  new_letter["line8y"] = map(percent, 0, 50, oldObj["line8y"], -36.5);
  }
  if (percent >= 50){
    new_letter["size1"]    = map(percent, 50, 100, 10, newObj["size1"]);
  new_letter["offsetx1"] = map(percent, 50, 100, 0, newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 50, 100, -50, newObj["offsety1"]);
  new_letter["line1x"] = map(percent, 50, 100, 0, newObj["line1x"]);
  new_letter["line1y"] = map(percent, 50, 100, -36.5, newObj["line1y"]);
  new_letter["line2x"] = map(percent, 50, 100, 0, newObj["line2x"]);
  new_letter["line2y"] = map(percent, 50, 100, -36.5, newObj["line2y"]);
  new_letter["line3x"] = map(percent, 50, 100, 0, newObj["line3x"]);
  new_letter["line3y"] = map(percent, 50, 100, -36.5, newObj["line3y"]);
  new_letter["line4x"] = map(percent, 50, 100, 0, newObj["line4x"]);
  new_letter["line4y"] = map(percent, 50, 100, -36.5, newObj["line4y"]);
  new_letter["line5x"] = map(percent, 50, 100, 0, newObj["line5x"]);
  new_letter["line5y"] = map(percent, 50, 100, -36.5, newObj["line5y"]);
  new_letter["line6x"] = map(percent, 50, 100, 0, newObj["line6x"]);
  new_letter["line6y"] = map(percent, 50, 100, -36.5, newObj["line6y"]);
  new_letter["line7x"] = map(percent, 50, 100, 0, newObj["line7x"]);
  new_letter["line7y"] = map(percent, 50, 100, -36.5, newObj["line7y"]);
  new_letter["line8x"] = map(percent, 50, 100, 0, newObj["line8x"]);
  new_letter["line8y"] = map(percent, 50, 100, -36.5, newObj["line8y"]);
  }

  return new_letter;
}

function base(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
