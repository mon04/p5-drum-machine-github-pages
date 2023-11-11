class Row {
    constructor(label, sound, xPos, yPos, cellSize, cellSpacing) {
        this.label = label;
        this.sound = sound;
        this.xPos = xPos;
        this.yPos = yPos;
        this.cellSize = cellSize;
        this.cellSpacing = cellSpacing;
        this.cells = [];
    }
}