let mySound;
let mySound2;
let mySound3;
let mySound4;

let grey;
let green;

let i=0;
let Start=false;
let Dsequence;
let buttontext=document.getElementById("playstop");
let BPM=document.getElementById("BPM");
let BPMInt;
BPM.textContent=""+document.getElementById("myRange").value;
BPMInt = (BPM.textContent*1);
let numOfBeats=7;
let SecondsPerMinute = 60;



const initialDrumCount = 4;
const initialBarCount = 2;
const beatsPerBar = 4;
let currentBarCount=2;
let currentRowCount=4;
let waitTime = ((SecondsPerMinute/BPMInt)*1000)/4;
const maxDrumCount = 8;
const minDrumCount = 1;
const maxBarCount = 4;
const minBarCount = 1;

const maxGridWidth = 980;
const marginY = 10;
const marginX = 10;
const cellGapSize = 5;

let rows = [];

function every5seconds()
{
  if(i>numOfBeats){
    i=0;
  }
  else{

  }
  

  if(rows[0][i]==true){
    //mySound.pause();
    mySound.play();
   
  }

  //Mon I am sorry it is nested if statements but if the program tries too check rows[1][i] and its been removed, the program shits itself.
  //it is a fail safe
  if(currentRowCount>=2)
  {
    if(rows[1][i]==true)
    {
        //mySound2.pause();
        mySound2.play();
        

        console.log("Hat");
    }
  }
  if(currentRowCount>=3)
  {
    if(rows[2][i]==true ){
        //mySound3.pause();
        mySound3.play();
        
        console.log("Clap");
      }
  }
  
  if(currentRowCount>=4){

    if(rows[3][i]==true){
        //mySound4.pause();
        mySound4.play();
        
        console.log("ClosedHat");
      }
  }

  if(currentRowCount>=5)
  {
    if(rows[4][i]==true)
    {
        //mySound2.pause();
        mySound5.play();
        

       
    }
  }
  if(currentRowCount>=6)
  {
    if(rows[5][i]==true ){
        //mySound3.pause();
        mySound6.play();
        
        console.log("Clap");
      }
  }
  
  if(currentRowCount>=7){

    if(rows[6][i]==true){
        //mySound4.pause();
        mySound7.play();
        
        console.log("ClosedHat");
      }
  }

  if(currentRowCount>=8){

    if(rows[7][i]==true){
        //mySound4.pause();
        mySound8.play();
        
        console.log("ClosedHat");
      }
  }
  
  i++;
} 

function BPMchange(){
    BPM.textContent=""+document.getElementById("myRange").value;
    BPMInt = (BPM.textContent*1);
    BPM.textContent=""+document.getElementById("myRange").value;
    console.log(BPMInt);
    waitTime = ((SecondsPerMinute/BPMInt)*1000)/4
  
    if(Start==true){
      clearInterval(Dsequence);
      Dsequence=setInterval(every5seconds, waitTime);
    }
    
  }

function StartStop()
{
  Start=!Start;
  console.log(Start);
  if(Start==true){
    Dsequence=setInterval(every5seconds, waitTime);
    buttontext.textContent="Stop";
  } 
  if(Start==false)
  {
    clearInterval(Dsequence);
    buttontext.textContent="Play";
  }    
  
  
}

function preload() {
    soundFormats('wav', 'ogg');
    mySound = loadSound('Sounds/909-kick_D_minor');
    mySound2 = loadSound('Sounds/909-open-hi-hat');
    mySound3 = loadSound('Sounds/straight-909-clap_A_major');
    mySound4 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
    //PlaceHolder Sounds for 5, 6 7 and 8
    mySound5 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
    mySound6 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
    mySound7 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
    mySound8 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
}

function setup() {

    frameRate(60);

    grey = color(200, 200, 200);
    green = color(0, 255, 0);
    
    createCanvas(windowWidth, windowHeight);
    background(220, 220, 220);
    stroke(128, 128, 128);

    // Initialize grid
    rows = Array(initialDrumCount)
            .fill(null)
            .map(()=>Array(initialBarCount*beatsPerBar).fill(false)); // 2D array of false values
}

function addRow() {
    if(rows.length === maxDrumCount)
        return;

    rows.push(Array(rows[0].length).fill(false));
    currentRowCount=currentRowCount+1;
}

function removeRow() {
    if(rows.length === minDrumCount)
        return;

    rows = rows.slice(0, rows.length - 1);
    currentRowCount=currentRowCount-1;
}

function addBar() {
    if((rows[0].length + beatsPerBar) / beatsPerBar > maxBarCount)
        return;

    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < beatsPerBar; j++) {
            rows[i].push(false);
        }
    }
    numOfBeats=numOfBeats+4;
}

function removeBar() {
    if((rows[0].length - beatsPerBar) / beatsPerBar < minBarCount)
        return;

    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < beatsPerBar; j++) {
            rows[i].pop();
        }
    }
    numOfBeats=numOfBeats-4;
}

function draw() {
    background(220);
    drawGrid();
}

function drawGrid() {
    const cellDiam = getCellDiam();
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < rows[i].length; j++) {
            const x = getXPosOfCell(j);
            const y = getYPosOfCell(i);
            const active = rows[i][j];
            cell(x, y, cellDiam, active);
        }
    }
}

function mouseClicked() {
    const mx = mouseX;
    const my = mouseY;
    const cellDiam = getCellDiam();
    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < rows[i].length; j++) {
            const cx = getXPosOfCell(j);
            const cy = getYPosOfCell(i);
            if(isPointInCell(mx, my, cx, cy, cellDiam)) {
                rows[i][j] = !rows[i][j];
            }
        }
    }
}

function keyReleased() {
    if (keyCode === 38) { // UP_ARROW
        removeRow();
    }
    else if (keyCode === 40) { // DOWN_ARROW
        addRow();
    }
    else if (keyCode === 37) { // LEFT_ARROW
        removeBar();
    }
    else if (keyCode === 39) { // RIGHT_ARROW
        addBar();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function cell(x, y, diam, active) {
    fill(active ? green : grey);
    circle(x, y, diam);
}

function getXPosOfCell(cell_index) {
    const cellDiam = getCellDiam();
    return marginX + cellDiam / 2 + (cell_index * cellDiam) + (cell_index * cellGapSize);
}

function getYPosOfCell(row_index) {
    const cellDiam = getCellDiam();
    return marginY + cellDiam / 2 + (row_index * cellDiam) + (row_index * cellGapSize);
}

function getCellDiam() {
    const gridWidth = min(windowWidth - marginX * 2, maxGridWidth);
    return (gridWidth) / (rows[0].length + cellGapSize);
}

function isPointInCell(px, py, cx, cy, cellDiam) {
    return dist(px, py, cx, cy) <= cellDiam / 2;
}

function getCurrentBarCount() {
    return rows.length/beatsPerBar;
}