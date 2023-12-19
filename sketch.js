let mySound;
let mySound2;
let mySound3;
let mySound4;

let grey;
let darkGrey;
let green;

let pauseDrawing = false;
let i = 0;
let Start = false;
let Dsequence;
let buttontext = document.getElementById("playstop");
let BPM = document.getElementById("BPM");
let BPMInt;
let SwingInt;
BPM.textContent = "" + document.getElementById("myRange").value;
let Swing = document.getElementById("Swing");
Swing.textContent = "" + document.getElementById("mySwing").value;
SwingInt = (Swing.textContent * 1);
BPMInt = (BPM.textContent * 1);
let numOfBeats = 8;
let currentBeat = 0;
let SecondsPerMinute = 60;
const initialDrumCount = 4;
const initialBarCount = 2;
const beatsPerBar = 4;
let currentRowCount = 4;
let waitTime = ((SecondsPerMinute / BPMInt) * 1000) / 4;
const maxDrumCount = 8;
const minDrumCount = 1;
const maxBarCount = 4;
const minBarCount = 1;
const maxGridWidth = 980;
const marginY = 10;
const marginX = 10;
const cellGapSize = 5;
let k = 1;
let rows = [];
let sounds = [];
const DEFAULT_SOUND_FILES = [
    'Sounds/909-kick_D_minor',
    'Sounds/909-open-hi-hat',
    'Sounds/straight-909-clap_A_major',
    'Sounds/909-drum-kit-closed-hi-hat',
    'Sounds/909-snare_G_major',
    'Sounds/909-tom_E_major',
    'Sounds/high-shaker-drum-shot',
    'Sounds/crash-cymbal-drum-sound-f-sharp-key-06-1jU',
]
const soundNames=[
    'Kick',
    'Open Hat',
    'Clap',
    'Closed Hat',
    'Snare',
    'Toms',
    'Shaker',
    'Cymbal',

]

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const Sequencer = async () => {
    while (Start == true) {
        for (i = 0; i < numOfBeats; i++) {
            currentBeat = i;
            PlaySounds(i);
            if (k % 2 == 1) {
                await sleep(waitTime + SwingInt);
            }
            else {
                await sleep(waitTime - SwingInt);
            }
            k++;
        }
    }
}

function PlaySounds(beat) {
    for(let row = 0; row < currentRowCount; row++) {
        if (rows[row][beat]) {
            sounds[row].play();
        }
    }
}

function BPMchange() {
    BPM.textContent = "" + document.getElementById("myRange").value;
    BPMInt = (BPM.textContent * 1);
    BPM.textContent = "" + document.getElementById("myRange").value;

    waitTime = ((SecondsPerMinute / BPMInt) * 1000) / 4
    if (Start == true) {
        //   clearInterval(Dsequence);
        //   Dsequence=setInterval(every5seconds, waitTime);
    }
}

function Swingchange() {
    Swing.textContent = "" + document.getElementById("mySwing").value;
    SwingInt = (Swing.textContent * 1);
    Swing.textContent = "" + document.getElementById("mySwing").value;
    console.log(SwingInt);
    SwingInt = (((100 - SwingInt) * waitTime) / 100);
    console.log("WaitTime=" + waitTime)
    console.log("SwingInt=" + SwingInt)
    SwingInt = (waitTime - SwingInt);
    console.log("Final:" + SwingInt);
}

function stopPlaying() {
    Start = false;
    buttontext.textContent = "Play";
    buttontext.style.borderColor='lime';
}

function startPlaying() {
    Sequencer();
    buttontext.textContent = "Stop";
    buttontext.style.borderColor='red';
}

function StartStop() {
    Start = !Start;
    if (Start == true) {
        startPlaying();
    }
    if (Start == false) {
        stopPlaying();
    }
}

function preload() {
    soundFormats('wav', 'ogg');
    sounds = [];
    for(let i = 0; i < currentRowCount; i++) {
        let s = loadSound(DEFAULT_SOUND_FILES[i] || DEFAULT_SOUND_FILES[0])
        sounds.push(s)
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(120);
     
    
    
    grey = color(200, 200, 200);
    green = color(0, 255, 0);
    darkGrey = color(180, 180, 180);

    
    background(220, 220, 220);
    stroke(128, 128, 128);
    rectMode(CORNERS)

    // Initialize grid
    rows = Array(initialDrumCount)
        .fill(null)
        .map(() => Array(initialBarCount * beatsPerBar).fill(false)); // 2D array of false values

       
}

function addRow() {
    if (rows.length === maxDrumCount)
        return;

    //stopPlaying()
    rows.push(Array(rows[0].length).fill(false));
    let s = loadDefaultSound(rows.length - 1)
    sounds.push(s)
    currentRowCount = currentRowCount + 1;
}

function removeRow() {
    if (rows.length === minDrumCount)
        return;

    //stopPlaying()
    rows = rows.slice(0, rows.length - 1);
    sounds = sounds.slice(0, sounds.length - 1);
    currentRowCount = currentRowCount - 1;
    
}

function addBar() {
    if ((rows[0].length + beatsPerBar) / beatsPerBar > maxBarCount)
        return;

    //stopPlaying()
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < beatsPerBar; j++) {
            rows[i].push(false);
        }
    }
    numOfBeats = numOfBeats + 4;
}

function removeBar() {
    if ((rows[0].length - beatsPerBar) / beatsPerBar < minBarCount)
        return;

    //stopPlaying()
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < beatsPerBar; j++) {
            rows[i].pop();
        }
    }
    numOfBeats = numOfBeats - 4;
}

function draw() {
    if (!pauseDrawing) {
        background(220);
        drawGrid();
    }
    if(numOfBeats==4){
        for(let i=0; i<rows.length; i++){
            fill(0);
            textSize(22);
            text(soundNames[i], 471, i*120+55);
            
        }
        
    }
    if(numOfBeats==8){
        for(let i=0; i<rows.length; i++){
            fill(0);
            textSize(22);
            text(soundNames[i], 671, i*80+55);
            
        }
        
    }
    if(numOfBeats==12){
        for(let i=0; i<rows.length; i++){
            fill(0);
            textSize(12);
            text(soundNames[i], 771, i*65+40);
            
        }
        
    }
    if(numOfBeats==16){
        for(let i=0; i<rows.length; i++){
            fill(0);
            textSize(12);
            text(soundNames[i], 851, i*50+45);
            
        }
        
    }
    
    }
    

function drawGrid() {
    const cellDiam = getCellDiam();

    const x1 = marginX + (cellDiam * currentBeat) + (cellGapSize * currentBeat)
    const x2 = x1 + cellDiam + cellGapSize;

    const y1 = marginY
    const y2 = y1 + (cellDiam * currentRowCount) + (cellGapSize * currentRowCount);

    fill(darkGrey)
    rect(x1, y1, x2, y2, cellDiam/2)

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
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
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            const cx = getXPosOfCell(j);
            const cy = getYPosOfCell(i);
            if (isPointInCell(mx, my, cx, cy, cellDiam)) {
                rows[i][j] = !rows[i][j];
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function cell(x, y, diam, active) {
    fill(active ? green : grey);
    circle(x, y, diam);
}

function getXPosOfCell(cell_index) {
    const cellDiam = getCellDiam();
    return marginX + cellGapSize / 2 + cellDiam / 2 + (cell_index * cellDiam) + (cell_index * cellGapSize);
}

function getYPosOfCell(row_index) {
    const cellDiam = getCellDiam();
    return marginY + cellGapSize / 2 + cellDiam / 2 + (row_index * cellDiam) + (row_index * cellGapSize);
}

function getCellDiam() {
    const gridWidth = min(windowWidth - marginX * 2, maxGridWidth);
    return (gridWidth) / (rows[0].length + cellGapSize);
}

function isPointInCell(px, py, cx, cy, cellDiam) {
    return dist(px, py, cx, cy) <= cellDiam / 2;
}

function getCurrentBarCount() {
    return rows.length / beatsPerBar;
}

function loadDefaultSound(rowIndex) {
    let s = loadSound(DEFAULT_SOUND_FILES[rowIndex] || DEFAULT_SOUND_FILES[0])
    return s
}

function saveFile() {
    let content = getExportFileContent()
    let filename = document.getElementById("filename").value || "my_sequence.txt";
    saveStrings(content, filename, "txt")
}

function getExportFileContent() {
    let lines = []
    for(let i = 0; i < rows.length; i++) {
        let line = ""
        for (val of rows[i]) {
            line += val == true ? '1' : '0'
        }
        lines.push(line)
    }
    return lines;
}

function showErrorText() {
    let e = document.getElementById('error-text')
    e.style.display = "block"
}

function hideErrorText() {
    let e = document.getElementById('error-text')
    e.style.display = "none"
}

function setErrorText(text) {
    let e = document.getElementById('error-text-value')
    e.innerHTML = text;
}

async function importFile() {
    pauseDrawing = true

    let f = document.getElementById('import').files[0]
    let text = await f.text();

    lines = text.trim().split('\n');
    let validation = validateFileText(lines);

    if (validation !== true) {
        setErrorText("Failed to import file: " + validation[1])
        showErrorText();
        pauseDrawing = false;
        return;
    }

    newstate = []

    for (let i = 0; i < lines.length && i < maxDrumCount; i++) {
        newstate.push([])
        for (let j = 0; j < lines[i].length && j < maxBarCount * beatsPerBar; j++) {
            newstate[i].push(lines[i][j] === '1')
        }
    }

    setGridState(newstate);

    pauseDrawing = false;
}

function validateFileText(lines) {
    try {
        if (lines.length === 0)
            return [false, "File must have one or more lines"];

        if (lines[0].length === 0)
            return [false, "File must have one or more beats"];

        for (let ln of lines) {
            for (let c of ln) {
                if (c !== '0' && c !== '1')
                    return [false, "File must only contain 1's and 0's"]
            }
        }

        for (let ln of lines) {
            if (ln.length !== lines[0].length)
            return [false, "All lines must have equal length"];
    }
    
    if (lines[0].length % beatsPerBar !== 0)
        return [false, `Number of beats must be divisible by ${beatsPerBar}`]

    } catch (error) {
        return [false, "Unknown error"]
    }

    return true
}

function clearGrid() {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            rows[i][j] = false;
        }
    }
}

function setGridState(vals) {
    pauseDrawing = true;

    rows = vals;
    currentRowCount = rows.length;
    numOfBeats = vals[0].length;

    sounds = [];
    for(let i = 0; i < currentRowCount; i++) {
        let s = loadSound(DEFAULT_SOUND_FILES[i] || DEFAULT_SOUND_FILES[0])
        sounds.push(s)
    }

    pauseDrawing = false;
}