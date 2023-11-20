let mySound;
let mySound2;
let mySound3;
let mySound4;

let grey;
let green;

const initialDrumCount = 4;
const initialBarCount = 2;
const beatsPerBar = 4;

const maxDrumCount = 8;
const minDrumCount = 1;
const maxBarCount = 4;
const minBarCount = 1;

const maxGridWidth = 980;
const marginY = 10;
const marginX = 10;
const cellGapSize = 5;

let rows = [];

function preload() {
    soundFormats('wav', 'ogg');
    mySound = loadSound('Sounds/909-kick_D_minor');
    mySound2 = loadSound('Sounds/909-open-hi-hat');
    mySound3 = loadSound('Sounds/straight-909-clap_A_major');
    mySound4 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
}

function setup() {

    rSlider = createSlider(0, 255, 100);
    rSlider.position(20, 20);

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
}

function removeRow() {
    if(rows.length === minDrumCount)
        return;

    rows = rows.slice(0, rows.length - 1);
}

function addBar() {
    if((rows[0].length + beatsPerBar) / beatsPerBar > maxBarCount)
        return;

    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < beatsPerBar; j++) {
            rows[i].push(false);
        }
    }
}

function removeBar() {
    if((rows[0].length - beatsPerBar) / beatsPerBar < minBarCount)
        return;

    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < beatsPerBar; j++) {
            rows[i].pop();
        }
    }
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