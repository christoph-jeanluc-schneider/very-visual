var columns;
var rows;
var grid;

function setup() {
    createCanvas( windowWidth, windowHeight );

    columns = Math.floor( windowWidth * 0.1 ); // width / 10
    rows = Math.floor( windowHeight * 0.0625 ); // height / 16

    grid = new Grid( columns, rows );
}

function draw() {
    background( 255 );

    grid.draw();
}

function mouseMoved() {
    let column = floor( mouseX * 0.1 );
    let row = floor( mouseY * 0.0625 );

    grid.values[ row ][ column ] = 255;
}