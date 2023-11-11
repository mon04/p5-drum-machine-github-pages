let mySound;
let mySound2;
let mySound3;
let mySound4;


let beats = [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]]



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

function draw() {
    let grey = color(65);
    let green = color(0, 204, 0);
    frameRate(5);
    //-------------------------------------------Row 1-----------------------------------------------------------------------------------
    // 0,0 -----------------
    for (let i = 0; i < beats[0].length; i++) {

        if (beats[0][i] == true) {
            fill(green);
            square(80 + (60 * i), 20, 55, 10)
        }
        else {
            fill(grey);
            square(80 + (60 * i), 20, 55, 10)
        }

    }

    for (let i = 0; i < beats[0].length; i++) {

        if (mouseX >= 80 + (60 * i) && mouseX <= 135 + (60 * i) && mouseY >= 20 && mouseY <= 74 && mouseIsPressed == true) {
            canvasPressed(0, i);

        }

    }

    //-------------------------------------------Row 2-----------------------------------------------------------------------------------

    for (let i = 0; i < beats[0].length; i++) {

        if (beats[1][i] == true) {

            fill(green);

            square(80 + (60 * i), 80, 55, 10)

        }
        else {
            fill(grey);

            square(80 + (60 * i), 80, 55, 10)
        }

    }

    for (let i = 0; i < beats[0].length; i++) {

        if (mouseX >= 80 + (60 * i) && mouseX <= 135 + (60 * i) && mouseY >= 80 && mouseY <= 120 && mouseIsPressed == true) {
            canvasPressed(1, i);

        }

    }

    //--------------------------------------------------Row 3-----------------------------------------------------------------------------------

    for (let i = 0; i < beats[0].length; i++) {

        if (beats[2][i] == true) {

            fill(green);

            square(80 + (60 * i), 140, 55, 10)

        }
        else {
            fill(grey);

            square(80 + (60 * i), 140, 55, 10)
        }

    }

    for (let i = 0; i < beats[0].length; i++) {

        if (mouseX >= 80 + (60 * i) && mouseX <= 135 + (60 * i) && mouseY >= 140 && mouseY <= 185 && mouseIsPressed == true) {
            canvasPressed(2, i);

        }

    }

    //-------------------------------------------Row 4-----------------------------------------------------------------------------------


    for (let i = 0; i < beats[0].length; i++) {

        if (beats[3][i] == true) {

            fill(green);

            square(80 + (60 * i), 200, 55, 10)

        }
        else {
            fill(grey);

            square(80 + (60 * i), 200, 55, 10)
        }

    }

    for (let i = 0; i < beats[0].length; i++) {

        if (mouseX >= 80 + (60 * i) && mouseX <= 135 + (60 * i) && mouseY >= 200 && mouseY <= 240 && mouseIsPressed == true) {
            canvasPressed(3, i);

        }

    }

}

function canvasPressed(a, b) {

    beats[a][b] = !beats[a][b]
}