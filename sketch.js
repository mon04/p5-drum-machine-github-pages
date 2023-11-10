let mySound;
let mySound2;
let mySound3;
let mySound4;


let beats =[[false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false],
            [false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false]]



function preload() {
  soundFormats('wav', 'ogg');
  mySound = loadSound('Sounds/909-kick_D_minor');
  mySound2 = loadSound('Sounds/909-open-hi-hat');
  mySound3 = loadSound('Sounds/straight-909-clap_A_major');
  mySound4 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
}

function setup() {
  let cnv = createCanvas(1500, 1000);
  //cnv.mousePressed(canvasPressed);
  background(220);
  
  
  
  
  
}

function draw()
{
  let grey = color(65);
  let green = color(0, 204, 0);
  frameRate(5);
//-------------------------------------------Row 1-----------------------------------------------------------------------------------
// 0,0 -----------------
  if(beats[0][0]==true)
  {
    
    fill(green);
    
    square(80, 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80, 20, 55, 10)
  }

  if(beats[0][1]==true)
  {
    
    fill(green);
    
    square(80+(60*1), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*1), 20, 55, 10)
  }

  if(beats[0][2]==true)
  {
    
    fill(green);
    
    square(80+(60*2), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*2), 20, 55, 10)
  }
  
  if(beats[0][3]==true)
  {
    
    fill(green);
    
    square(80+(60*3), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*3), 20, 55, 10)
  }
  if(beats[0][4]==true)
  {
    
    fill(green);
    
    square(80+(60*4), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*4), 20, 55, 10)
  }

  if(beats[0][5]==true)
  {
    
    fill(green);
    
    square(80+(60*5), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*5), 20, 55, 10)
  }

  if(beats[0][6]==true)
  {
    
    fill(green);
    
    square(80+(60*6), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*6), 20, 55, 10)
  }

  if(beats[0][7]==true)
  {
    
    fill(green);
    
    square(80+(60*7), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*7), 20, 55, 10)
  }
  if(beats[0][8]==true)
  {
    
    fill(green);
    
    square(80+(60*8), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*8), 20, 55, 10)
  }

  if(beats[0][9]==true)
  {
    
    fill(green);
    
    square(80+(60*9), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*9), 20, 55, 10)
  }
  if(beats[0][10]==true)
  {
    
    fill(green);
    
    square(80+(60*10), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*10), 20, 55, 10)
  }

  if(beats[0][11]==true)
  {
    
    fill(green);
    
    square(80+(60*11), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*11), 20, 55, 10)
  }

  if(beats[0][12]==true)
  {
    
    fill(green);
    
    square(80+(60*12), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*12), 20, 55, 10)
  }

  if(beats[0][13]==true)
  {
    
    fill(green);
    
    square(80+(60*13), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*13), 20, 55, 10)
  }

  if(beats[0][14]==true)
  {
    
    fill(green);
    
    square(80+(60*14), 20, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*14), 20, 55, 10)
  }

  if(beats[0][15]==true)
  {
    
    fill(green);
    
    square(80+(60*15), 20, 55, 10)
    
  }

  else{
    fill(grey);
    
    square(80+(60*15), 20, 55, 10)
  }

  if(mouseX>=80 && mouseX<=135 && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_0();
    
  }
  if(mouseX>=80+(60*1) && mouseX<=135+(60*1) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_1();
    
  }
  if(mouseX>=80+(60*2) && mouseX<=135+(60*2) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_2();
    
  }
  if(mouseX>=80+(60*3) && mouseX<=135+(60*3) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_3();
    
  }
  if(mouseX>=80+(60*4) && mouseX<=135+(60*4) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_4();
    
  }
  if(mouseX>=80+(60*5) && mouseX<=135+(60*5) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_5();
    
  }
  if(mouseX>=80+(60*6) && mouseX<=135+(60*6) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_6();
    
  }
  if(mouseX>=80+(60*7) && mouseX<=135+(60*7) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_7();
    
  }
  if(mouseX>=80+(60*8) && mouseX<=135+(60*8) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_8();
    
  }
  if(mouseX>=80+(60*9) && mouseX<=135+(60*9) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_9();
  }
  if(mouseX>=80+(60*10) && mouseX<=135+(60*10) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_10();
    
  }
  if(mouseX>=80+(60*11) && mouseX<=135+(60*11) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_11();
    
  }
  if(mouseX>=80+(60*12) && mouseX<=135+(60*12) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_12();
    
  }
  if(mouseX>=80+(60*13) && mouseX<=135+(60*13) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_13();
    
  }
  if(mouseX>=80+(60*14) && mouseX<=135+(60*14) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_14();
    
  }
  if(mouseX>=80+(60*15) && mouseX<=135+(60*15) && mouseY>=20 && mouseY<=74 && mouseIsPressed==true)
  {
    canvasPressed0_15();
  }
  //-------------------------------------------Row 2-----------------------------------------------------------------------------------

  if(beats[1][0]==true)
  {
    
    fill(green);
    
    square(80, 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80, 80, 55, 10)
  }
  if(beats[1][1]==true)
  {
    
    fill(green);
    
    square(80+(60*1), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*1), 80, 55, 10)
  }

  if(beats[1][2]==true)
  {
    
    fill(green);
    
    square(80+(60*2), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*2), 80, 55, 10)
  }
  if(beats[1][3]==true)
  {
    
    fill(green);
    
    square(80+(60*3), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*3), 80, 55, 10)
  }
  if(beats[1][4]==true)
  {
    
    fill(green);
    
    square(80+(60*4), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*4), 80, 55, 10)
  }
  if(beats[1][5]==true)
  {
    
    fill(green);
    
    square(80+(60*5), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*5), 80, 55, 10)
  }
  if(beats[1][6]==true)
  {
    
    fill(green);
    
    square(80+(60*6), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*6), 80, 55, 10)
  }
  if(beats[1][7]==true)
  {
    
    fill(green);
    
    square(80+(60*7), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*7), 80, 55, 10)
  }
  if(beats[1][8]==true)
  {
    
    fill(green);
    
    square(80+(60*8), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*8), 80, 55, 10)
  }

  if(beats[1][9]==true)
  {
    
    fill(green);
    
    square(80+(60*9), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*9), 80, 55, 10)
  }

  if(beats[1][10]==true)
  {
    
    fill(green);
    
    square(80+(60*10), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*10), 80, 55, 10)
  }
  if(beats[1][11]==true)
  {
    
    fill(green);
    
    square(80+(60*11), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*11), 80, 55, 10)
  }

  if(beats[1][12]==true)
  {
    
    fill(green);
    
    square(80+(60*12), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*12), 80, 55, 10)
  }

  if(beats[1][13]==true)
  {
    
    fill(green);
    
    square(80+(60*13), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*13), 80, 55, 10)
  }

  if(beats[1][14]==true)
  {
    
    fill(green);
    
    square(80+(60*14), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*14), 80, 55, 10)
  }

  if(beats[1][15]==true)
  {
    
    fill(green);
    
    square(80+(60*15), 80, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*15), 80, 55, 10)
  }
  if(mouseX>=80 && mouseX<=135 && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_0();
    
  }
  if(mouseX>=80+(60*1) && mouseX<=135+(60*1) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_1();
    
  }
  if(mouseX>=80+(60*2) && mouseX<=135+(60*2) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_2();
    
  }

  if(mouseX>=80+(60*3) && mouseX<=135+(60*3) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_3();
    
  }
  if(mouseX>=80+(60*4) && mouseX<=135+(60*4) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_4();
    
  }
  if(mouseX>=80+(60*5) && mouseX<=135+(60*5) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_5();
    
  }
  if(mouseX>=80+(60*6) && mouseX<=135+(60*6) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_6();
    
  }
  if(mouseX>=80+(60*7) && mouseX<=135+(60*7) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_7();
    
  }
  if(mouseX>=80+(60*8) && mouseX<=135+(60*8) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_8();
    
  }
  if(mouseX>=80+(60*9) && mouseX<=135+(60*9) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_9();
    
  }
  if(mouseX>=80+(60*10) && mouseX<=135+(60*10) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_10();
    
  }
  if(mouseX>=80+(60*11) && mouseX<=135+(60*11) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_11();
    
  }
  if(mouseX>=80+(60*12) && mouseX<=135+(60*12) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_12();
    
  }
  if(mouseX>=80+(60*13) && mouseX<=135+(60*13) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_13();
    
  }
  if(mouseX>=80+(60*14) && mouseX<=135+(60*14) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_14();
    
  }
  if(mouseX>=80+(60*15) && mouseX<=135+(60*15) && mouseY>=80 && mouseY<=120 && mouseIsPressed==true)
  {
    canvasPressed1_15();
    
  }
  //--------------------------------------------------Row 3-----------------------------------------------------------------------------------

  if(beats[2][0]==true)
  {
    
    fill(green);
    
    square(80, 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80, 140, 55, 10)
  }

  if(beats[2][1]==true)
  {
    
    fill(green);
    
    square(80+(60*1), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*1), 140, 55, 10)
  }

  if(beats[2][2]==true)
  {
    
    fill(green);
    
    square(80+(60*2), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*2), 140, 55, 10)
  }

  if(beats[2][3]==true)
  {
    
    fill(green);
    
    square(80+(60*3), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*3), 140, 55, 10)
  }

  if(beats[2][4]==true)
  {
    
    fill(green);
    
    square(80+(60*4), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*4), 140, 55, 10)
  }

  if(beats[2][5]==true)
  {
    
    fill(green);
    
    square(80+(60*5), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*5), 140, 55, 10)
  }
  
  if(beats[2][6]==true)
  {
    
    fill(green);
    
    square(80+(60*6), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*6), 140, 55, 10)
  }

  if(beats[2][7]==true)
  {
    
    fill(green);
    
    square(80+(60*7), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*7), 140, 55, 10)
  }

  if(beats[2][8]==true)
  {
    
    fill(green);
    
    square(80+(60*8), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*8), 140, 55, 10)
  }

  if(beats[2][9]==true)
  {
    
    fill(green);
    
    square(80+(60*9), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*9), 140, 55, 10)
  }

  if(beats[2][10]==true)
  {
    
    fill(green);
    
    square(80+(60*10), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*10), 140, 55, 10)
  }

  if(beats[2][11]==true)
  {
    
    fill(green);
    
    square(80+(60*11), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*11), 140, 55, 10)
  }

  if(beats[2][12]==true)
  {
    
    fill(green);
    
    square(80+(60*12), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*12), 140, 55, 10)
  }

  if(beats[2][13]==true)
  {
    
    fill(green);
    
    square(80+(60*13), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*13), 140, 55, 10)
  }

  if(beats[2][14]==true)
  {
    
    fill(green);
    
    square(80+(60*14), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*14), 140, 55, 10)
  }

  if(beats[2][15]==true)
  {
    
    fill(green);
    
    square(80+(60*15), 140, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*15), 140, 55, 10)
  }

  if(mouseX>=80 && mouseX<=135 && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_0();
    
  }
  if(mouseX>=80+(60*1) && mouseX<=135+(60*1) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_1();
    
  }
  if(mouseX>=80+(60*2) && mouseX<=135+(60*2) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_2();
    
  }
  if(mouseX>=80+(60*3) && mouseX<=135+(60*3) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_3();
    
  }
  if(mouseX>=80+(60*4) && mouseX<=135+(60*4) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_4();
    
  }
  if(mouseX>=80+(60*5) && mouseX<=135+(60*5) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_5();
    
  }
  if(mouseX>=80+(60*6) && mouseX<=135+(60*6) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_6();
    
  }
  if(mouseX>=80+(60*7) && mouseX<=135+(60*7) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_7();
    
  }
  if(mouseX>=80+(60*8) && mouseX<=135+(60*8) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_8();
    
  }
  if(mouseX>=80+(60*9) && mouseX<=135+(60*9) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_9();
    
  }
  if(mouseX>=80+(60*10) && mouseX<=135+(60*10) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_10();
    
  }
  if(mouseX>=80+(60*11) && mouseX<=135+(60*11) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_11();
    
  }
  if(mouseX>=80+(60*12) && mouseX<=135+(60*12) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_12();
    
  }
  if(mouseX>=80+(60*13) && mouseX<=135+(60*13) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_13();
    
  }
  if(mouseX>=80+(60*14) && mouseX<=135+(60*14) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_14();
    
  }
  if(mouseX>=80+(60*15) && mouseX<=135+(60*15) && mouseY>=140 && mouseY<=185 && mouseIsPressed==true)
  {
    canvasPressed2_15();
    
  }

  //-------------------------------------------Row 4-----------------------------------------------------------------------------------

  if(beats[3][0]==true)
  {
    
    fill(green);
    
    square(80, 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80, 200, 55, 10)
  }
  
  if(beats[3][1]==true)
  {
    
    fill(green);
    
    square(80+(60*1), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*1), 200, 55, 10)
  }
  if(beats[3][2]==true)
  {
    
    fill(green);
    
    square(80+(60*2), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*2), 200, 55, 10)
  }

  if(beats[3][3]==true)
  {
    
    fill(green);
    
    square(80+(60*3), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*3), 200, 55, 10)
  }

  if(beats[3][4]==true)
  {
    
    fill(green);
    
    square(80+(60*4), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*4), 200, 55, 10)
  }

  if(beats[3][5]==true)
  {
    
    fill(green);
    
    square(80+(60*5), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*5), 200, 55, 10)
  }

  if(beats[3][6]==true)
  {
    
    fill(green);
    
    square(80+(60*6), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*6), 200, 55, 10)
  }

  if(beats[3][7]==true)
  {
    
    fill(green);
    
    square(80+(60*7), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*7), 200, 55, 10)
  }
  if(beats[3][8]==true)
  {
    
    fill(green);
    
    square(80+(60*8), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*8), 200, 55, 10)
  }
  if(beats[3][9]==true)
  {
    
    fill(green);
    
    square(80+(60*9), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*9), 200, 55, 10)
  }
  if(beats[3][10]==true)
  {
    
    fill(green);
    
    square(80+(60*10), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*10), 200, 55, 10)
  }
  if(beats[3][11]==true)
  {
    
    fill(green);
    
    square(80+(60*11), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*11), 200, 55, 10)
  }

  if(beats[3][12]==true)
  {
    
    fill(green);
    
    square(80+(60*12), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*12), 200, 55, 10)
  }

  if(beats[3][13]==true)
  {
    
    fill(green);
    
    square(80+(60*13), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*13), 200, 55, 10)
  }

  if(beats[3][14]==true)
  {
    
    fill(green);
    
    square(80+(60*14), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*14), 200, 55, 10)
  }

  if(beats[3][15]==true)
  {
    
    fill(green);
    
    square(80+(60*15), 200, 55, 10)
    
  }
  else{
    fill(grey);
    
    square(80+(60*15), 200, 55, 10)
  }
  if(mouseX>=80 && mouseX<=135 && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_0();
    
  }
  if(mouseX>=80+(60*1) && mouseX<=135+(60*1) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_1();
    
  }
  if(mouseX>=80+(60*2) && mouseX<=135+(60*2) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_2();
    
  }
  if(mouseX>=80+(60*3) && mouseX<=135+(60*3) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_3();
    
  }
  if(mouseX>=80+(60*4) && mouseX<=135+(60*4) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_4();
    
  }
  if(mouseX>=80+(60*5) && mouseX<=135+(60*5) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_5();
    
  }
  if(mouseX>=80+(60*6) && mouseX<=135+(60*6) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_6();
    
  }
  if(mouseX>=80+(60*7) && mouseX<=135+(60*7) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_7();
    
  }
  if(mouseX>=80+(60*8) && mouseX<=135+(60*8) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_8();
    
  }
  if(mouseX>=80+(60*9) && mouseX<=135+(60*9) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_9();
    
  }
  if(mouseX>=80+(60*10) && mouseX<=135+(60*10) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_10();
    
  }
  if(mouseX>=80+(60*11) && mouseX<=135+(60*11) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_11();
    
  }
  if(mouseX>=80+(60*12) && mouseX<=135+(60*12) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_12();
    
  }
  if(mouseX>=80+(60*13) && mouseX<=135+(60*13) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_13();
    
  }
  if(mouseX>=80+(60*14) && mouseX<=135+(60*14) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_14();
    
  }
  if(mouseX>=80+(60*15) && mouseX<=135+(60*15) && mouseY>=200 && mouseY<=240 && mouseIsPressed==true)
  {
    canvasPressed3_15();
    
  }
}



function canvasPressed0_0() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][0]=!beats[0][0];
}

function canvasPressed0_1() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][1]=!beats[0][1];
}

function canvasPressed0_2() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][2]=!beats[0][2];
}
function canvasPressed0_3() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][3]=!beats[0][3];
}

function canvasPressed0_4() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][4]=!beats[0][4];
}

function canvasPressed0_5() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][5]=!beats[0][5];
}

function canvasPressed0_6() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][6]=!beats[0][6];
}

function canvasPressed0_7() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][7]=!beats[0][7];
}

function canvasPressed0_8() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][8]=!beats[0][8];
}

function canvasPressed0_9() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][9]=!beats[0][9];
}

function canvasPressed0_10() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][10]=!beats[0][10];
}

function canvasPressed0_11() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][11]=!beats[0][11];
}

function canvasPressed0_12() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][12]=!beats[0][12];
}

function canvasPressed0_13() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][13]=!beats[0][13];
}

function canvasPressed0_14() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][14]=!beats[0][14];
}

function canvasPressed0_15() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

  //mySound.play();
  beats[0][15]=!beats[0][15];
}

function canvasPressed1_0() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][0]=!beats[1][0];
}
function canvasPressed1_1() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][1]=!beats[1][1];
}
function canvasPressed1_2() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][2]=!beats[1][2];
}
function canvasPressed1_3() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][3]=!beats[1][3];
}
function canvasPressed1_4() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][4]=!beats[1][4];
}
function canvasPressed1_5() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][5]=!beats[1][5];
}
function canvasPressed1_6() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][6]=!beats[1][6];
}
function canvasPressed1_7() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][7]=!beats[1][7];
}
function canvasPressed1_8() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][8]=!beats[1][8];
}
function canvasPressed1_9() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][9]=!beats[1][9];
}
function canvasPressed1_10() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound3.play();
  beats[1][10]=!beats[1][10];
}
function canvasPressed1_11() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][11]=!beats[1][11];
}
function canvasPressed1_12() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][12]=!beats[1][12];
}
function canvasPressed1_13() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][13]=!beats[1][13];
}
function canvasPressed1_14() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][14]=!beats[1][14];
}
function canvasPressed1_15() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound2.play();
  beats[1][15]=!beats[1][15];
}
function canvasPressed2_0() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][0]=!beats[2][0];
}
function canvasPressed2_1() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][1]=!beats[2][1];
}
function canvasPressed2_2() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][2]=!beats[2][2];
}
function canvasPressed2_3() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][3]=!beats[2][3];
}
function canvasPressed2_4() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][4]=!beats[2][4];
}
function canvasPressed2_5() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][5]=!beats[2][5];
}
function canvasPressed2_6() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][6]=!beats[2][6];
}
function canvasPressed2_7() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][7]=!beats[2][7];
}
function canvasPressed2_8() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][8]=!beats[2][8];
}
function canvasPressed2_9() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][9]=!beats[2][9];
}
function canvasPressed2_10() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][10]=!beats[2][10];
}
function canvasPressed2_11() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][11]=!beats[2][11];
}
function canvasPressed2_12() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][12]=!beats[2][12];
}
function canvasPressed2_13() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][13]=!beats[2][13];
}
function canvasPressed2_14() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][14]=!beats[2][14];
}
function canvasPressed2_15() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  // mySound3.play();
  beats[2][15]=!beats[2][15];
}

function canvasPressed3_0() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][0]=!beats[3][0];
}
function canvasPressed3_1() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][1]=!beats[3][1];
}
function canvasPressed3_2() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][2]=!beats[3][2];
}
function canvasPressed3_3() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][3]=!beats[3][3];
}
function canvasPressed3_4() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][4]=!beats[3][4];
}
function canvasPressed3_5() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][5]=!beats[3][5];
}
function canvasPressed3_6() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][6]=!beats[3][6];
}
function canvasPressed3_7() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][7]=!beats[3][7];
}
function canvasPressed3_8() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][8]=!beats[3][8];
}
function canvasPressed3_9() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][9]=!beats[3][9];
}
function canvasPressed3_10() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][10]=!beats[3][10];
}
function canvasPressed3_11() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][11]=!beats[3][11];
}
function canvasPressed3_12() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][12]=!beats[3][12];
}
function canvasPressed3_13() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][13]=!beats[3][13];
}
function canvasPressed3_14() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][14]=!beats[3][14];
}
function canvasPressed3_15() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  //mySound4.play();
  beats[3][15]=!beats[3][15];
}