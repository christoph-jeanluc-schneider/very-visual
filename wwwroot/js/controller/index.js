var columns;
var rows;
var grid;

function setup() {
    createCanvas( windowWidth, windowHeight );

    columns = Math.floor( windowWidth / 20 );
    rows = Math.floor( windowHeight / 32 );

    grid = new Grid( columns, rows );
}

function draw() {
    background( 255 );

    grid.draw();
}

function mouseMoved() {
    let column = floor( mouseX / 20 );
    let row = floor( mouseY / 32 );

    grid.values[ row ][ column ] = 255;
}