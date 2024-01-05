let mySound;
let mySound2;
let mySound3;
let mySound4;

let grey;
let darkGrey;
let green;
let black;

let pauseDrawing = false;
let i = 0;
let Start = false;
let Dsequence;
let buttontext = document.getElementById("playstop");
let BPM = document.getElementById("BPM");
let currentBpm;
let currentSwing;
BPM.textContent = "" + document.getElementById("myRange").value;
let Swing = document.getElementById("Swing");
Swing.textContent = "" + document.getElementById("mySwing").value;
currentSwing = (Swing.textContent * 1);
currentBpm = (BPM.textContent * 1);
let numOfBeats = 8;
let currentBeat = 0;
let SecondsPerMinute = 60;
const initialDrumCount = 4;
const initialBarCount = 2;
const beatsPerBar = 4;
let currentRowCount = 4;
let waitTime = ((SecondsPerMinute / currentBpm) * 1000) / 4;
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


/*
    Run the drum sequencer playback
*/
const runSequencer = async () => {
    while (Start == true) {
        for (i = 0; i < numOfBeats; i++) {
            currentBeat = i;
            playSounds(i);
            if (k % 2 == 1) {
                await sleep(waitTime + currentSwing);
            }
            else {
                await sleep(waitTime - currentSwing);
            }
            k++;
        }
    }
}

/*
    Play sounds for each enabled cell
*/
function playSounds(beat) {
    for(let row = 0; row < currentRowCount; row++) {
        if (rows[row][beat]) {
            sounds[row].play();
        }
    }
}

/*
    Event-handler for when BPM slider is changed by user
*/
function handleBpmChange() {
    BPM.textContent = "" + document.getElementById("myRange").value;
    currentBpm = (BPM.textContent * 1);
    BPM.textContent = "" + document.getElementById("myRange").value;

    waitTime = ((SecondsPerMinute / currentBpm) * 1000) / 4
}

/*
    Event-handler for when Swing slider is changed by user
*/
function handleSwingChange() {
    Swing.textContent = "" + document.getElementById("mySwing").value;
    currentSwing = (Swing.textContent * 1);
    Swing.textContent = "" + document.getElementById("mySwing").value;
    console.log(currentSwing);
    currentSwing = (((100 - currentSwing) * waitTime) / 100);
    console.log("WaitTime=" + waitTime)
    console.log("SwingInt=" + currentSwing)
    currentSwing = (waitTime - currentSwing);
    console.log("Final:" + currentSwing);
}

/*
    Handles a mouse-click event and toggles state of cell if cursor is in that cell
*/
function handleMouseClicked() {
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

/*
    p5 method to handle a mouse-click (calls our custom handler)
*/
function mouseClicked() {
    handleMouseClicked();
}

function stopPlaying() {
    Start = false;
    buttontext.textContent = "Play";
    buttontext.style.borderColor='lime';
}

function startPlaying() {
    runSequencer();
    buttontext.textContent = "Stop";
    buttontext.style.borderColor='red';
}

/*
    Starts playback if not currently playing, otherwise stops playback
*/
function togglePlaying() {
    Start = !Start;
    if (Start == true) {
        startPlaying();
    }
    if (Start == false) {
        stopPlaying();
    }
}

/*
    Load the drum sounds for each row that will be played if cell is active
*/
function preload() {
    soundFormats('wav', 'ogg');
    sounds = [];
    for(let i = 0; i < currentRowCount; i++) {
        let s = loadSound(DEFAULT_SOUND_FILES[i] || DEFAULT_SOUND_FILES[0])
        sounds.push(s)
    }
}

/*
    p5 method to set up the program before running
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(120);

    // Initialise colours used in grid
    grey = color(200, 200, 200);
    green = color(0, 255, 0);
    darkGrey = color(180, 180, 180);
    black = color(0);

    background(220, 220, 220);
    stroke(128, 128, 128);
    rectMode(CORNERS)
    textAlign(LEFT, CENTER)

    // Initialize a grid of inactive cells
    rows = Array(initialDrumCount)
        .fill(null)
        .map(() => Array(initialBarCount * beatsPerBar).fill(false)); // 2D array of false values
}

/*
    Add a row (drum) to the grid
*/
function addRow() {
    if (rows.length === maxDrumCount)
        return;

    //stopPlaying()
    rows.push(Array(rows[0].length).fill(false));
    let s = loadDefaultSound(rows.length - 1)
    sounds.push(s)
    currentRowCount = currentRowCount + 1;
}

function loadDefaultSound(rowIndex) {
    let s = loadSound(DEFAULT_SOUND_FILES[rowIndex] || DEFAULT_SOUND_FILES[0])
    return s
}


/*
    Remove last row (drum) from the grid
*/
function removeRow() {
    if (rows.length === minDrumCount)
        return;

    //stopPlaying()
    rows = rows.slice(0, rows.length - 1);
    sounds = sounds.slice(0, sounds.length - 1);
    currentRowCount = currentRowCount - 1;
}

/*
    Add n columns (beats) to the grid, where n is the number of beats in a bar
*/
function addBar() {
    if ((rows[0].length + beatsPerBar) / beatsPerBar > maxBarCount)
        return;

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < beatsPerBar; j++) {
            rows[i].push(false);
        }
    }
    numOfBeats = numOfBeats + 4;
}

/*
    Remove n columns (beats) from the grid, where n is the number of beats in a bar
*/
function removeBar() {
    if ((rows[0].length - beatsPerBar) / beatsPerBar < minBarCount)
        return;

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < beatsPerBar; j++) {
            rows[i].pop();
        }
    }
    numOfBeats = numOfBeats - 4;
}

/*
    Draw the grid and drum labels
*/
function draw() {
    if (!pauseDrawing) {
        background(220);
        drawGrid();
    }

    let cellDiam = getCellDiam();
    let labelx = (cellDiam * numOfBeats) + (cellGapSize * (numOfBeats + 4));
    for(let i=0; i < rows.length; i++) {
        let labely = getYPosOfCell(i)
        fill(green);
        textSize(22);
        text(soundNames[i], labelx, labely);
    }
}

/*
    Draws grid to fit current window size
*/
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
            drawCell(x, y, cellDiam, active);
        }
    }
}

/*
    Determine if a point (px, py) is inside a circle of radius cellDiam with center (cx, cy)
    Used for determining if cursor is inside a given cell on mouse-click
*/
function isPointInCell(px, py, cx, cy, cellDiam) {
    return dist(px, py, cx, cy) <= cellDiam / 2;
}

/*
    Event-handler for a window resize (rescales the grid to fit new size)
*/
function handleWindowResize() {
    resizeCanvas(windowWidth, windowHeight);
}

/*
    Draw a single cell for the grid
*/
function drawCell(x, y, diam, active) {
    fill(active ? green : grey);
    circle(x, y, diam);
}


/*
    ==============================================================
    Methods used for determining size and layout of the grid cells
    ==============================================================
*/

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


/*
    =====================================================
    Methods used for importing/exporting sequence as file
    =====================================================
*/

/*
    Export the current sequence as a file
*/
function saveFile() {
    let content = getExportFileContent()
    let filename = document.getElementById("filename").value || "my_sequence.txt";
    saveStrings(content, filename, "txt")
}

/*
    Get the text-content of file to be exported
*/
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


/*
    Open dialog to select a local file and load the sequence from it
*/
async function importFile() {
    pauseDrawing = true

    // Open file selection dialog and read the selected file
    let f = document.getElementById('import').files[0]
    let text = await f.text();
    lines = text.trim().split('\n');

    // Check if file is a valid sequence and if not, display reason to user
    let validation = validateFileText(lines);
    if (validation !== true) {
        setErrorText("Failed to import file: " + validation[1])
        showErrorText();
        pauseDrawing = false;
        return;
    }

    // File has a valid sequence, so load the sequence to the grid
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

/*
    Determine if file is a valid sequence and if not try to return reason
*/
function validateFileText(lines) {
    try {
        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].trim()
        }
        if (lines.length === 0) {
            return [false, "File must have one or more lines"];
        }
        if (lines[0].length === 0) {
            return [false, "File must have one or more beats"];
        }
    
        for (let ln of lines) {
            console.log("line", ln)
            if (ln.length !== lines[0].length) {
                return [false, "All lines must have equal length"];
            }
        }
        for (let ln of lines) {
            for (let c of ln) {
                if (c !== '0' && c !== '1') {
                    return [false, "File must only contain 1's and 0's"]
                }
            }
        }
        if (lines[0].length % beatsPerBar !== 0) {
            return [false, `Number of beats must be divisible by ${beatsPerBar}`]
        }
    } catch (error) {
        return [false, "Unknown error"]
    }
    return true
}

/*
    Reset all cells to inactive
*/
function clearGrid() {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            rows[i][j] = false;
        }
    }
}

/*
    Set cells active/inactive based on data
*/
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


/*
    =========================================================
    Methods used for displaying error information to the user
    =========================================================
*/

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