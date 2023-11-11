let mySound;
let mySound2;
let mySound3;
let mySound4;

let grey;
let green;

let rows = [];

function preload() {
    soundFormats('wav', 'ogg');
    mySound = loadSound('Sounds/909-kick_D_minor');
    mySound2 = loadSound('Sounds/909-open-hi-hat');
    mySound3 = loadSound('Sounds/straight-909-clap_A_major');
    mySound4 = loadSound('Sounds/909-drum-kit-closed-hi-hat');
}

function setup() {
    frameRate(60);

    grey = color(200, 200, 200);
    green = color(0, 255, 0);
    
    createCanvas(windowWidth, windowHeight);
    background(220, 220, 220);
    stroke(128, 128, 128)

    let drumCount = 4;
    let barCount = 2;
    let beatsPerBar = 4;

    let cellSize = 50;
    let cellGapH = 5;
    let cellGapV = 5;

    let controlsXPos = 10 + cellSize / 2;
    let controlsYPos = 10 + cellSize / 2;

    // Initialize grid
    for(let i = 0; i < drumCount; i++) {
        let cells = [];
        for(let j = 0; j < barCount*beatsPerBar; j++) {
            let cellY = controlsYPos + (i * cellSize) + (i * cellGapV);
            let cellX = controlsXPos + (j * cellSize) + (j * cellGapH);
            cells.push(new Cell(cellX, cellY, cellSize, false, mySound));
        }
        rows.push(cells);
    }
    print(rows)
}

function draw() {
    background(220);

    for(let i = 0; i < rows.length; i ++) {
        for(let j = 0; j < rows[i].length; j++) {
            rows[i][j].draw();
        }
    }
}

function mouseClicked() {
    for(let row of rows) {
        for(let cell of row) {
            if(cell.isPointInMe(mouseX, mouseY)) {
                cell.toggle();
            }
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


// Classes

class Cell {
    constructor(xPos, yPos, diam, active, sound) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.diam = diam;
        this.active = active;
        this.sound = sound;
    }

    radius() { 
        return this.diam / 2;
    }

    isPointInMe(x, y) {
        return dist(x, y, this.xPos, this.yPos) <= this.radius();
    }

    toggle() {
        this.active = !this.active;
    }

    draw() {
        fill(this.active ? green : grey);
        circle(this.xPos, this.yPos, this.diam);
    }
}